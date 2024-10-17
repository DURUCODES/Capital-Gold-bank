import React from "react";

const VideoModal = ({ videoId, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-2xl z-10"
      >
        ✖
      </button>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0" // Ensure the iframe fills the modal
      ></iframe>
    </div>
  );
};

export default VideoModal;
