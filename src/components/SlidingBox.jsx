import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

const SlidingBox = ({ className }) => {
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => setIsSliding(false), 500);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      className={className}
      sx={{
        transition: 'transform 0.5s ease-in-out',
        transform: isSliding ? 'translateY(-100%)' : 'none'
      }}
      overflow="hidden"
    />
  );
};

export default SlidingBox;
