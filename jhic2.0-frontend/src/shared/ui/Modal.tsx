"use client";

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: string;
}

export function Modal({ isOpen, onClose, children, title, maxWidth = 'max-w-2xl' }: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Panel */}
      <div 
        className={`relative w-full ${maxWidth} bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200`}
        role="dialog"
        aria-modal="true"
      >
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-border-light bg-surface">
            <h2 className="text-xl font-bold text-text-main">{title}</h2>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-text-main transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        
        {!title && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-sm text-gray-700 hover:bg-white transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="max-h-[80vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
