import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images statically to ensure proper bundling
import layout1 from '../../assets/pictures/layout/layout1.jpg';
import layout2 from '../../assets/pictures/layout/layout2.jpg';
import layout3 from '../../assets/pictures/layout/layout3.jpg';
import layout4 from '../../assets/pictures/layout/layout4.jpg';
import layout5 from '../../assets/pictures/layout/layout5.jpg';
import layout6 from '../../assets/pictures/layout/layout6.jpg';
import layout7 from '../../assets/pictures/layout/layout7.jpg';

const layouts = [
    { id: 'mau1a', label: 'MẪU 1A', image: layout1 },
    { id: 'mau1b', label: 'MẪU 1B', image: layout2 },
    { id: 'mau2', label: 'MẪU 2', image: layout3 },
    { id: 'mau3b', label: 'MẪU 3B', image: layout5 },
    { id: 'mau3c', label: 'MẪU 3C', image: layout6 },
    { id: 'mau3a3d', label: 'MẪU 3A 3D', image: layout4 },
    { id: 'mau4', label: 'MẪU 4', image: layout7 },
];

const tabVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
};

const LayoutVilla: React.FC = () => {
    const [selectedLayout, setSelectedLayout] = useState(layouts[0].id);
    const [showFullImage, setShowFullImage] = useState(false);

    const currentLayout = layouts.find((l) => l.id === selectedLayout);

    return (
        <section className="container mx-auto px-4 py-12">
            {/* Tabs */}
            <div className="flex justify-center space-x-4 mb-8 border-b border-gray-300">
                {layouts.map((layout) => (
                    <button
                        key={layout.id}
                        className={`px-4 py-2 font-semibold uppercase tracking-wide transition-colors duration-300 ${selectedLayout === layout.id
                            ? 'border-b-4 border-primary-800 text-primary-800'
                            : 'text-gray-600 hover:text-primary-700'
                            }`}
                        onClick={() => setSelectedLayout(layout.id)}
                    >
                        {layout.label}
                    </button>
                ))}
            </div>

            {/* Selected Layout Image */}
            <div className="flex justify-center">
                <motion.img
                    key={currentLayout?.id}
                    src={currentLayout?.image}
                    alt={currentLayout?.label}
                    className="max-w-full max-h-[600px] cursor-pointer rounded-lg shadow-lg"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={() => setShowFullImage(true)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                />
            </div>

            {/* Full Image Modal */}
            <AnimatePresence>
                {showFullImage && currentLayout && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowFullImage(false)}
                    >
                        <motion.img
                            src={currentLayout.image}
                            alt={currentLayout.label}
                            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default LayoutVilla;
