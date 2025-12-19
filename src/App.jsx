import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import InfoModal from './components/InfoModal'
import { privacyTitle, privacyText } from './components/PrivacyContent'
import { termsTitle, termsText } from './components/TermsContent'
import './App.css'

function App() {
  const [hasConsent, setHasConsent] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'privacy', 'terms', or null

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      setHasConsent(true);
    }
  }, []);

  const handleConsentAccept = () => {
    setHasConsent(true);
  };

  const getModalContent = () => {
    if (activeModal === 'privacy') return { title: privacyTitle, content: privacyText };
    if (activeModal === 'terms') return { title: termsTitle, content: termsText };
    return { title: '', content: '' };
  };

  const { title, content } = getModalContent();

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <FAQ />
        <Contact hasConsent={hasConsent} />
      </main>
      <Footer
        onOpenPrivacy={() => setActiveModal('privacy')}
        onOpenTerms={() => setActiveModal('terms')}
      />
      <CookieConsent
        onAccept={handleConsentAccept}
        onOpenPrivacy={() => setActiveModal('privacy')}
      />
      <InfoModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={title}
        content={content}
      />
    </div>
  )
}

export default App
