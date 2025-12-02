import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DevToolsBlocker from './components/DevToolsBlocker';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Training from './pages/Training';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

// Service Pages
import CustomWebDevelopment from './pages/services/CustomWebDevelopment';
import EcommerceDevelopment from './pages/services/EcommerceDevelopment';
import CMSDevelopment from './pages/services/CMSDevelopment';
import ResponsiveWebDesign from './pages/services/ResponsiveWebDesign';
import LandingPageDesign from './pages/services/LandingPageDesign';
import WebsiteRedesign from './pages/services/WebsiteRedesign';
import WebMaintenance from './pages/services/WebMaintenance';
import SEOServices from './pages/services/SEOServices';
import SocialMediaMarketing from './pages/services/SocialMediaMarketing';
import PPCAdvertising from './pages/services/PPCAdvertising';
import ContentMarketing from './pages/services/ContentMarketing';
import EmailMarketing from './pages/services/EmailMarketing';
import InfluencerMarketing from './pages/services/InfluencerMarketing';
import OnlineReputationManagement from './pages/services/OnlineReputationManagement';
import MarketingAnalytics from './pages/services/MarketingAnalytics';
import LogoDesign from './pages/services/LogoDesign';
import BrandIdentity from './pages/services/BrandIdentity';
import GraphicDesign from './pages/services/GraphicDesign';
import UIUXDesign from './pages/services/UIUXDesign';
import VideoProduction from './pages/services/VideoProduction';
import AnimationServices from './pages/services/AnimationServices';
import PrintDesign from './pages/services/PrintDesign';
import BusinessConsulting from './pages/services/BusinessConsulting';
import ITConsulting from './pages/services/ITConsulting';
import CRMSolutions from './pages/services/CRMSolutions';
import ERPSolutions from './pages/services/ERPSolutions';
import CloudServices from './pages/services/CloudServices';
import Cybersecurity from './pages/services/Cybersecurity';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';

const App = () => {
  return (
    <Router>
      <DevToolsBlocker />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            
            {/* Service Routes */}
            <Route path="/services/custom-web-development" element={<CustomWebDevelopment />} />
            <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
            <Route path="/services/cms-development" element={<CMSDevelopment />} />
            <Route path="/services/responsive-web-design" element={<ResponsiveWebDesign />} />
            <Route path="/services/landing-page-design" element={<LandingPageDesign />} />
            <Route path="/services/website-redesign" element={<WebsiteRedesign />} />
            <Route path="/services/web-maintenance" element={<WebMaintenance />} />
            <Route path="/services/seo-services" element={<SEOServices />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/ppc-advertising" element={<PPCAdvertising />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
            <Route path="/services/online-reputation-management" element={<OnlineReputationManagement />} />
            <Route path="/services/marketing-analytics" element={<MarketingAnalytics />} />
            <Route path="/services/logo-design" element={<LogoDesign />} />
            <Route path="/services/brand-identity" element={<BrandIdentity />} />
            <Route path="/services/graphic-design" element={<GraphicDesign />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/video-production" element={<VideoProduction />} />
            <Route path="/services/animation-services" element={<AnimationServices />} />
            <Route path="/services/print-design" element={<PrintDesign />} />
            <Route path="/services/business-consulting" element={<BusinessConsulting />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/services/crm-solutions" element={<CRMSolutions />} />
            <Route path="/services/erp-solutions" element={<ERPSolutions />} />
            <Route path="/services/cloud-services" element={<CloudServices />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
