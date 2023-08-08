import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {
    // This allows topbar to use different color modes
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const StyledLink = styled(Link)`
      text-decoration: none;
    `;

    return (
            <Box 
                display="flex" 
                justifyContent="space-between" 
                p={2}
                backgroundColor={colors.blueAccent[800]} 
                position="fixed"
                width="-webkit-fill-available"
                >
                {/* this box will b for page links for now it is a search bar*/}
                {/* <Box 
                    display="flex" 
                    backgroundColor={colors.primary[400]} 
                    borderRadius="3px"
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box> */}

                {/* Serial Image */}

                <Box display="flex">
                    <Box display="flex" paddingLeft="10px" alignItems="center">
                      <StyledLink to="/keyManagement">
                        <Typography variant="h5" fontWeight="bold">
                          Key-Management
                        </Typography>
                      </StyledLink>
                    </Box>
                    <Box display="flex" paddingLeft="10px" alignItems="center">
                      <StyledLink to="/scriptingHub">
                        <Typography variant="h5" fontWeight="bold">
                          Scripting-Hub
                        </Typography>
                      </StyledLink>
                    </Box>
                    <Box display="flex" paddingLeft="10px" alignItems="center">
                        <Typography variant="h5" fontWeight="bold">
                            Incidents
                        </Typography>
                    </Box>
                    <Box display="flex" paddingLeft="10px" alignItems="center">
                        <Typography variant="h5" fontWeight="bold">
                            Serial-Logs
                        </Typography>
                    </Box>
                    <Box display="flex" paddingLeft="10px" alignItems="center">
                        <Typography variant="h5" fontWeight="bold">
                            Remote-Logs
                        </Typography>
                    </Box>
                    <Box display="flex" paddingLeft="10px" alignItems="center">
                        <Typography variant="h5" fontWeight="bold">
                            Reports
                        </Typography>
                    </Box>
                </Box>

                {/* this box is for icons */}
                <Box 
                    display="flex"
                    color={colors.blueAccent[900]}
                    >
                    <IconButton>
                        <NotificationsOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <PersonOutlinedIcon />
                    </IconButton>    
                </Box>
            </Box>
    );
};

export default Topbar;