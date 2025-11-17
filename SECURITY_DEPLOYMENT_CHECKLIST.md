# Firebase Security Deployment Checklist

## ✅ Pre-Deployment (Already Done)

- [x] Environment variables created in `.env.local`
- [x] `.env.example` template created
- [x] Firebase config updated to use environment variables
- [x] Firestore security rules created
- [x] Configuration validation added
- [x] No errors in code

---

## 📋 Deployment Steps

### Step 1: Deploy Security Rules to Firebase

**Option A: Using Firebase CLI (Recommended)**

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase (select Firestore only)
firebase init firestore

# When prompted:
# - Select "Use an existing project"
# - Choose "click-nova"
# - Accept default firestore.rules location
# - Accept default firestore.indexes.json location

# Deploy the security rules
firebase deploy --only firestore:rules
```

**Option B: Manual Deployment**

1. Go to: https://console.firebase.google.com/project/click-nova/firestore/rules
2. Copy all content from `firestore.rules` file
3. Paste into the Firebase Console Rules editor
4. Click "Publish"

---

### Step 2: Set Environment Variables in Production

**For Vercel:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Link to your project
vercel link

# Add environment variables
vercel env add VITE_FIREBASE_API_KEY
# Enter: AIzaSyBH_-6__oMOteZCBcpWFuz7COtQcBzEML4

vercel env add VITE_FIREBASE_AUTH_DOMAIN
# Enter: click-nova.firebaseapp.com

vercel env add VITE_FIREBASE_PROJECT_ID
# Enter: click-nova

vercel env add VITE_FIREBASE_STORAGE_BUCKET
# Enter: click-nova.firebasestorage.app

vercel env add VITE_FIREBASE_MESSAGING_SENDER_ID
# Enter: 448169825710

vercel env add VITE_FIREBASE_APP_ID
# Enter: 1:448169825710:web:9d848eaf58f5fbfca6643f

vercel env add VITE_FIREBASE_MEASUREMENT_ID
# Enter: G-K4RQS9CKHW

# Or use Vercel Dashboard:
# 1. Go to https://vercel.com/dashboard
# 2. Select your project
# 3. Settings > Environment Variables
# 4. Add each variable for Production, Preview, and Development
```

**For Other Hosting:**
Add the same environment variables in your hosting platform's dashboard.

---

### Step 3: Test Security Rules

1. **Deploy your application**
2. **Try to read data (should fail):**
   ```javascript
   // Open browser console on your website
   // This should fail with "Missing or insufficient permissions"
   const snapshot = await getDocs(collection(db, 'contactsfromwebsite'));
   ```

3. **Submit a form (should succeed):**
   - Fill out contact form
   - Submit
   - Should show success message

4. **Verify in Firebase Console:**
   - Go to Firestore Database
   - Check that new document was created
   - Verify all fields are present

5. **Test invalid data (should fail):**
   ```javascript
   // This should fail due to invalid mobile number
   await addDoc(collection(db, 'contactsfromwebsite'), {
     name: 'Test',
     mobile: '123', // Invalid - not 10 digits
     city: 'Test',
     service: 'Test',
     submittedAt: serverTimestamp(),
     status: 'new'
   });
   ```

---

### Step 4: Enable Firestore Database (If Not Already)

1. Go to: https://console.firebase.google.com/project/click-nova/firestore
2. Click "Create Database"
3. Select "Start in production mode"
4. Choose location: `asia-south1` (Mumbai) - closest to India
5. Click "Enable"

---

### Step 5: Verify Environment Variables

**Local Development:**
```bash
# Check if env vars are loaded
npm run dev

# Open http://localhost:5173
# Open browser console
# Check for Firebase config error
# Should load without errors if env vars are correct
```

**Production:**
```bash
# Build the project
npm run build

# Preview production build locally
npm run preview

# Should work without errors
```

---

## 🧪 Security Testing

### Test 1: Public Cannot Read Data ✅
```javascript
// In browser console (should fail)
import { collection, getDocs } from 'firebase/firestore';
const snapshot = await getDocs(collection(db, 'contactsfromwebsite'));
// Expected: Error - Missing or insufficient permissions
```

### Test 2: Public Can Write Valid Data ✅
```javascript
// Fill and submit contact form
// Expected: Success message
// Verify: Check Firebase Console for new document
```

### Test 3: Invalid Data Rejected ✅
```javascript
// Try submitting form with:
// - Mobile: "abc" (not 10 digits)
// - Email: "notanemail" (invalid email format)
// Expected: Validation error or Firebase permission denied
```

### Test 4: Server Timestamp Required ✅
```javascript
// Try creating document without server timestamp
await addDoc(collection(db, 'contactsfromwebsite'), {
  name: 'Test',
  mobile: '9876543210',
  city: 'Test',
  service: 'Test',
  submittedAt: new Date(), // Not server timestamp
  status: 'new'
});
// Expected: Permission denied
```

---

## 🔒 Additional Security (Optional)

### Enable App Check

1. Go to: https://console.firebase.google.com/project/click-nova/appcheck
2. Click "Get Started"
3. Select "reCAPTCHA v3"
4. Register your domain: `www.clicknova.in`
5. Copy the site key
6. Add to your app:

```javascript
// Add to src/firebase/config.js
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

if (typeof window !== 'undefined' && import.meta.env.PROD) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('YOUR_RECAPTCHA_SITE_KEY'),
    isTokenAutoRefreshEnabled: true
  });
}
```

---

## 📊 Monitoring

### Set Up Billing Alerts

1. Go to: https://console.firebase.google.com/project/click-nova/usage
2. Click "Set budget alert"
3. Set alert at: ₹500, ₹1000, ₹2000
4. Add your email for notifications

### Monitor Usage

Regular checks:
- **Daily:** Check for unusual spike in reads/writes
- **Weekly:** Review total documents and storage
- **Monthly:** Analyze usage patterns

**Firebase Console Monitoring:**
- Usage: https://console.firebase.google.com/project/click-nova/usage
- Firestore: https://console.firebase.google.com/project/click-nova/firestore
- Rules: https://console.firebase.google.com/project/click-nova/firestore/rules

---

## 🚨 Troubleshooting

### Error: "Firebase configuration is missing"
- **Cause:** Environment variables not loaded
- **Fix:** Check `.env.local` file exists and has correct format
- **Verify:** All variables start with `VITE_`

### Error: "Missing or insufficient permissions"
- **Cause:** Security rules not deployed or too restrictive
- **Fix:** Deploy firestore.rules to Firebase Console
- **Verify:** Check rules in Firebase Console

### Forms Not Submitting
- **Check:** Browser console for errors
- **Verify:** Firebase config is loaded correctly
- **Test:** Try with test data in Firebase Console

### Environment Variables Not Working in Production
- **Vercel:** Check Environment Variables in project settings
- **Other Hosting:** Ensure variables are set correctly
- **Rebuild:** Redeploy after adding environment variables

---

## ✅ Final Checklist

Before going live:

- [ ] Firestore database created in Firebase Console
- [ ] Security rules deployed and published
- [ ] Environment variables set in production hosting
- [ ] Application builds without errors (`npm run build`)
- [ ] All forms tested and submitting successfully
- [ ] Data appearing in Firebase Console
- [ ] Public cannot read data (tested)
- [ ] Invalid data rejected (tested)
- [ ] Billing alerts configured
- [ ] Usage monitoring set up
- [ ] App Check enabled (optional)

---

## 📞 Quick Links

- **Firebase Console:** https://console.firebase.google.com/project/click-nova
- **Firestore Database:** https://console.firebase.google.com/project/click-nova/firestore
- **Security Rules:** https://console.firebase.google.com/project/click-nova/firestore/rules
- **Usage & Billing:** https://console.firebase.google.com/project/click-nova/usage
- **App Check:** https://console.firebase.google.com/project/click-nova/appcheck

---

**Status:** 🔒 Ready for Secure Deployment

**Next Action:** Deploy security rules to Firebase Console
