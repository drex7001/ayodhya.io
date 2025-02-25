// Modal.js
import React from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full pt-20 motion-preset-fade-lg backdrop-blur-xs">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 bg-gray-800 rounded-lg shadow-xl scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar hover:scrollbar-thumb-slate-700 scrollbar-track-slate-300 no-scrollbar">
        <button
          onClick={onClose}
          className="absolute text-2xl leading-none text-white top-3 right-3 hover:text-gray-400"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
