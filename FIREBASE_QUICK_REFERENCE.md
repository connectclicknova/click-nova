# Firebase Collections - Quick Reference

## 📋 Collection Names

| Collection Name | Purpose | Form Location |
|----------------|---------|---------------|
| `contactsfromwebsite` | Contact form submissions | Contact Page |
| `careersfromwebsite` | Job applications | Careers Page |
| `freequotefromwebsite` | Free quotes + Training enrollments | Services/Training Pages |

---

## 📊 Data Structure

### contactsfromwebsite
```javascript
{
  name: "John Doe",
  mobile: "9876543210",
  city: "Nellore",
  service: "Social Media Marketing",
  submittedAt: Timestamp,
  status: "new"
}
```

### careersfromwebsite
```javascript
{
  name: "Jane Smith",
  mobile: "9876543210",
  email: "jane@example.com",
  qualification: "B.Tech in Computer Science",
  applyingFor: "App Developer",
  city: "Hyderabad",
  submittedAt: Timestamp,
  status: "new"
}
```

### freequotefromwebsite (Free Quote)
```javascript
{
  name: "Alex Kumar",
  mobile: "9876543210",
  city: "Bangalore",
  submittedAt: Timestamp,
  status: "new"
}
```

### freequotefromwebsite (Training)
```javascript
{
  fullName: "Priya Sharma",
  mobile: "9876543210",
  city: "Chennai",
  course: "Full Stack Development",
  duration: "6",
  type: "training",
  submittedAt: Timestamp,
  status: "new"
}
```

---

## 🔐 Access Firebase Console

**URL:** https://console.firebase.google.com/project/click-nova/firestore

**Steps:**
1. Open Firebase Console
2. Select "click-nova" project
3. Click "Firestore Database" from sidebar
4. View collections and documents

---

## 📱 How to Filter Data

### View All Contact Forms
- Go to `contactsfromwebsite` collection
- All entries are contact form submissions

### View All Career Applications
- Go to `careersfromwebsite` collection
- Filter by `applyingFor` field to see specific job applications

### View Training Enrollments Only
- Go to `freequotefromwebsite` collection
- Filter where `type` == `training`

### View Free Quote Requests Only
- Go to `freequotefromwebsite` collection
- Filter where `type` field does not exist (or is null)

---

## ✅ Status Values

Update `status` field to track progress:

- **new** - Just submitted (default)
- **in-progress** - Being reviewed
- **contacted** - User has been contacted
- **completed** - Request fulfilled
- **closed** - Request closed/cancelled

---

## 🚀 Quick Actions

### Export Data
1. Select collection in Firebase Console
2. Use Firebase Admin SDK or export tools
3. Export to CSV/JSON format

### Delete Old Entries
1. Select documents in Firebase Console
2. Click delete icon
3. Or use Firebase Admin SDK for bulk deletion

### Update Status
1. Click on document ID
2. Edit `status` field
3. Save changes

---

## 📧 Email Notifications (Future)

Consider setting up Cloud Functions to send emails:
- Admin notification on new submission
- User confirmation email
- Weekly summary of submissions

---

## 🔒 Security Checklist

✅ Security rules configured (write-only for public)
✅ Only authenticated admins can read data
✅ Server-side timestamps used (can't be faked)
✅ Required fields validated
✅ Data sanitized before submission

---

## 📞 Support

If you need help accessing or managing the data:
- Check FIREBASE_INTEGRATION.md for detailed documentation
- Visit Firebase Console for direct database access
- Use Firebase Admin SDK for programmatic access

---

**Project:** click-nova  
**Database:** Cloud Firestore  
**Region:** Check Firebase Console for configured region
