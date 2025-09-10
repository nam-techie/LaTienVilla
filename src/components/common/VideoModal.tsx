import React from 'react';
import Modal from '../ui/Modal';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
        <div className="absolute inset-0 bg-black rounded-lg overflow-hidden">
          {/* Placeholder for video - replace with actual video URL */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Video giới thiệu La Tiên Villa</h3>
              <p className="text-blue-200">Khám phá vẻ đẹp thiên đường nghỉ dưỡng</p>
            </div>
          </div>
          
          {/* Uncomment and replace with actual video when available */}
          {/* 
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="La Tiên Villa Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          */}
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
