import React, { useState } from 'react';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Location from './components/sections/Location';
import Features from './components/sections/Features';
import FamilySuite from './components/sections/FamilySuite';
import MasterPlan from './components/sections/MasterPlan';
import Progress from './components/sections/Progress';
import Interior from './components/sections/Interior';
import Offers from './components/sections/Offers';
import Contact from './components/sections/Contact';

// Common Components
import ParallaxBackground from './components/common/ParallaxBackground';
import VideoModal from './components/common/VideoModal';
import StickyContact from './components/common/StickyContact';

function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Full Page Parallax Background */}
      <ParallaxBackground />
      
      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <Hero onVideoModalOpen={() => setShowVideoModal(true)} />

        {/* About Section */}
        <About />

        {/* Location Section */}
        <Location />

        {/* Features Section - Accommodations */}
        <Features />

        {/* Family Suite Section */}
        <FamilySuite />

        {/* Master Plan Section */}
        <MasterPlan />

        {/* Progress Section */}
        <Progress />

        {/* Interior Section */}
        <Interior />

        {/* Offers Section */}
        <Offers />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

      {/* Sticky Contact Buttons */}
      <StickyContact />

      {/* Video Modal */}
      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />
    </div>
  );
}

export default App;
