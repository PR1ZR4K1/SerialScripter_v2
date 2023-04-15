import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

// parameters for item object
const SidebarItem = ({ title, to, icon, selected, setSelected, color }) => {
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: {color},
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

export default SidebarItem;