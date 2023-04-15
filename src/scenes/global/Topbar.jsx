import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Routes, Route } from "react-router-dom";


// import SearchIcon from "@mui/icons-material/Search";

// import Reports from "./scenes/reports";
// import SerialLogs from "./scenes/serialLogs";
// import RemoteLogs from "./scenes/remoteLogs";
// import Manage from "./scenes/manage";
// import Incidents from "./scenes/incidents";
// import KeyManagement from "./scenes/keyManagement";
// import Login from "./scenes/login";
// import ScriptingHub from "./scenes/scriptingHub";

const Topbar = () => {
    // This allows topbar to use different color modes
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return (
    <Box 
        display="flex" 
        justifyContent="space-between" 
        p={2}
        backgroundColor={colors.blueAccent[800]} 

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
                <Typography variant="h6" fontWeight="bold">
                    Key-Management
                </Typography>
            </Box>
            <Box display="flex" paddingLeft="10px" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                    Scripting-Hub
                </Typography>
            </Box>
            <Box display="flex" paddingLeft="10px" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                    Incidents
                </Typography>
            </Box>
            <Box display="flex" paddingLeft="10px" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                    Serial-Logs
                </Typography>
            </Box>
            <Box display="flex" paddingLeft="10px" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                    Remote-Logs
                </Typography>
            </Box>
            <Box display="flex" paddingLeft="10px" alignItems="center">
                <Typography variant="h6" fontWeight="bold">
                    Reports
                </Typography>
            </Box>
            {/* <Routes> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              {/* <Route path="/reports" element={<Reports />} /> */}
              {/* <Route path="/serialLogs" element={<SerialLogs />} /> */}
              {/* <Route path="/remoteLogs" element={<RemoteLogs />} /> */}
              {/* <Route path="/manage" element={<Manage />} /> */}
              {/* <Route path="/incidents" element={<Incidents />} /> */}
              {/* <Route path="/keyManagement" element={<KeyManagement />} /> */}
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/scriptingHub" element={<ScriptingHub />} /> */}
            {/* </Routes> */}
        </Box>

        {/* this box is for icons */}
        <Box 
            display="flex"
            color={colors.blueAccent[300]}
            >
            <IconButton type="button" onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon /> 
                ) : (
                    <LightModeOutlinedIcon />
                )}
            </IconButton>

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