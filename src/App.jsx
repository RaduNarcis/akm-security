import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import './App.css'

function App() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      setHasConsent(true);
    }
  }, []);

  const handleConsentAccept = () => {
    setHasConsent(true);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact hasConsent={hasConsent} />
      </main>
      <Footer />
      <CookieConsent onAccept={handleConsentAccept} />
    </div>
  )
}

export default App
