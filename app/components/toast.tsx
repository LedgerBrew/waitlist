import React, { useState, useEffect, useRef } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'default';
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000 }) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (show) {
      const timer = setInterval(() => {
        if (!isHovered) {
          setProgress((prevProgress) => prevProgress + (100 / duration) * 10);
        }
      }, 10);
      intervalRef.current = timer;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [show, duration, isHovered]);

  useEffect(() => {
    if (progress >= 100) {
      setShow(false);
    }
  }, [progress]);

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-200 border-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'success':
        return 'text-green-900';
      case 'error':
        return 'text-red-900';
      default:
        return 'text-blue-900';
    }
  };

  return (
    <>
      {show && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center px-4 py-3 rounded-md shadow-md ${getBackgroundColor()} ${getTextColor()}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full">
            <span>{message}</span>
            <div
              className="absolute bottom-0 left-0 h-1 bg-gray-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;