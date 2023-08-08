import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

// parameters for item object
const SidebarItem = ({ title, to, icon, selected, color }) => {
  
    return (
      <MenuItem
        active={selected.currentPage === title}
        style={{
          color: {color},
        }}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

export default SidebarItem;