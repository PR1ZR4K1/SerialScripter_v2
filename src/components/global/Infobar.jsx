import { Box } from "@mui/material";
import React from 'react';

// import SlidingBox from "../../components/Slidingbox";


const Infobar = ({ boxes, color, size }) => {
    return (
      // Main Box that holds boxes/components
      <Box
        display="flex" 
        justifyContent="space-evenly" 
        borderRadius="10px"
        backgroundColor={color}
      >
        {boxes.map((BoxComponent) => (
          <Box key={BoxComponent.props['data-id']} p={2}>
            {React.cloneElement(BoxComponent, { size: size })}
          </Box>
        ))}
      </Box>
    );
  };

export default Infobar;


