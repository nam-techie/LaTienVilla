import { useState } from 'react';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Location from './components/sections/Location';
import FamilySuite from './components/sections/FamilySuite';
import MasterPlan from './components/sections/MasterPlan';
import Progress from './components/sections/Progress';
import Interior from './components/sections/Interior';
import Offers from './components/sections/Offers';
import Contact from './components/sections/Contact';
import Amenities from './components/sections/Amenities';
import LayoutVilla from './components/sections/LayoutVilla';

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
        {/* <Features /> */}

        {/* Amenities Section */}
        <Amenities />



        {/* Family Suite Section */}
        <FamilySuite />

        {/* Master Plan Section */}
        <MasterPlan />
        {/* Layout Villa Section */}
        <LayoutVilla />

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
