import { Box, Typography } from "@mui/material";


const Metrics = ({ number, text, color, size, customId }) => {
    return (
        <Box
          data-id={customId}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          width={size} 
          height={size}
          backgroundColor={color}
          borderRadius="5%"
        >
          <Box>
            <Typography 
              variant="h1"
            >
              {number}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
            >
              {text}
            </Typography>
          </Box>
        </Box>
    );
  };

export default Metrics;


