import { Box, Typography } from "@mui/material";
import { PieChart } from 'react-minimal-pie-chart';


const Piechart = ({data, headerText, color, size, customId, startAngle}) => 
{
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            backgroundColor={color}
            data-id={customId}
            width={size} 
            height={size}
            borderRadius="5%"
        >
            <Box mb={1}>
                <Typography sx={{color: 'black'}} variant="h4">{headerText}</Typography>
            </Box>
            <Box
            width={100}
            height={80}
            >
                <PieChart
                    data={data}
                    lineWidth={40}
                    startAngle={startAngle}
                    animate
                    animationDuration={500}
                    animationEasing="ease-out"
                />
            </Box>
            <Box mt={1}>

                <Box display="flex" alignItems="center">
                    <Box sx={{ width: 10, height: 10, backgroundColor: data[0].color, mr: 1 }} />

                    <Typography sx={{color: "black"}}> {data[0].title}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Box sx={{ width: 10, height: 10, backgroundColor: data[1].color, mr: 1 }} />

                    <Typography sx={{color: "black"}}> {data[1].title}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Piechart;