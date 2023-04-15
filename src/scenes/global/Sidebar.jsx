import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import SidebarItem from "../../components/SidebarItem";

// icon import
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { PropaneSharp } from "@mui/icons-material";

const Sidebar = ({ menuItems }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");
    const handleToggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.blueAccent[900]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20 px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active":{
                    color: "#6870fa !important"
                },
                "& .pro-sidebar":{
                    height: "100vh !important",
                    position: "fixed !important",
                    top: "0 !important",
                    bottom: "0 !important"
                },
                paddingRight: isCollapsed ? "80px" : "270px",
                transition: 'padding-right 0.3s',
                display: "flex",
            }}
        >
        <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* MENU ICON */}
          <MenuItem
            // when collapsed 
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "5px 0 0 0",
              color: colors.blueAccent[300],
            }}
          >
            {/* when not collapsed */}
            {!isCollapsed && (
              <Box
                display="flex"
                alignItems="center"
                ml="15px"
              >
                <IconButton style={{color: colors.blueAccent[300]}} onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/logo.png`}
                  style={{ cursor: "pointer" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography 
                  variant="h3" 
                  color={colors.blueAccent[300]} 
                  m="10px 0 0 0"
                  >
                  Serial Scripter
                </Typography>

                <Typography
                  variant="h4"
                  color={colors.greenAccent[300]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Keyboard Cowboys
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <SidebarItem
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                color={colors.blueAccent[300]}
              />
              <Box>
              {/* Generate menu items dynamically if menuItems are passed*/}
              {menuItems ? menuItems.map((item) => (
                <SidebarItem
                  key={item.title}
                  title={item.title}
                  to={item.to}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                  color={colors.blueAccent[300]}
                />
              )) : null}
              </Box>
          </Box>
        </Menu>
        </ProSidebar>
        </Box>
    );
};

export default Sidebar;