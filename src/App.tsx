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

// Test Components
import DesignSystemTest from './components/test/DesignSystemTest';

function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Show design system test if URL contains ?test=design
  const isDesignTest = window.location.search.includes('test=design');

  return (
    <div className="min-h-screen relative">
      {/* Full Page Parallax Background */}
      <ParallaxBackground />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <Header />

        {/* Design System Test */}
        {isDesignTest && <DesignSystemTest />}

        {/* Hero Section */}
        {!isDesignTest && <Hero onVideoModalOpen={() => setShowVideoModal(true)} />}

        {/* About Section */}
        {!isDesignTest && <About />}

        {/* Location Section */}
        {!isDesignTest && <Location />}

        {/* Amenities Section */}
        {!isDesignTest && <Amenities />}

        {/* Family Suite Section */}
        {/* {!isDesignTest && <FamilySuite />} */}

        {/* Master Plan Section */}
        {!isDesignTest && <MasterPlan />}

        {/* Layout Villa Section */}
        {!isDesignTest && <LayoutVilla />}

        {/* Progress Section */}
        {!isDesignTest && <Progress />}

        {/* Interior Section */}
        {!isDesignTest && <Interior />}

        {/* Offers Section */}
        {!isDesignTest && <Offers />}

        {/* Contact Section */}
        {!isDesignTest && <Contact />}

        {/* Footer */}
        {!isDesignTest && <Footer />}
      </div>

      {/* Sticky Contact Buttons */}
      {!isDesignTest && <StickyContact />}

      {/* Video Modal */}
      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />
    </div>
  );
}

export default App;
