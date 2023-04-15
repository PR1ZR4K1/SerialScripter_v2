import { Box, Typography } from "@mui//material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import Metrics from "../../components/Metrics";
import Piechart from "../../components/Piechart";
import Sidebar from "../global/Sidebar";
import Infobar from "../global/Infobar";
import Topbar from "../global/Topbar";
import { ColorModeContext, useMode, tokens } from "../../theme";
import React, { useState } from 'react';

// icon import
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';




// reset css to default
import { CssBaseline, ThemeProvider } from "@mui/material";


const Dashboard = () => {
    const [theme, colorMode] = useMode();
    const colors = tokens(theme.palette.mode);
  
    // data for charts
    const chart1=[
      { title: 'Resolved', value: 30, color: colors.greenAccent[600] },
      { title: 'Unresolved', value: 15, color: colors.redAccent[600] },
    ];
    const chart2=[
      { title: 'Connected', value: 15, color: colors.greenAccent[600] },
      { title: 'Disconnected', value: 30, color: colors.redAccent[600] },
    ];
    
    // array of boxes to be passed to info bar
    const boxes = 
    [
      <Metrics                 
      number="34"
      text="Unresolved Incidents"
      color={colors.blueAccent[400]}
      id="metric1"
      >
      </Metrics>,
      <Piechart
      headerText="Incidents"
      data={chart1}
      color={colors.blueAccent[400]}
      startAngle={30}
      />,
      <Piechart
      headerText="EDR Status"
      data={chart2}
      color={colors.blueAccent[400]}
      startAngle={90}
      />,
      <Metrics                 
      number="10"
      text="Monitors"
      color={colors.blueAccent[400]}
      id="metric2"
      >
      </Metrics>,
    ];

    // array of menu items to be passed to sidebar
    const menuItems = [
      {
        title: "Analytics",
        to: "/analytics",
        icon: <AnalyticsOutlinedIcon />,
      },
    ];

    // columns to be used by table
    const columns = [
      { field: "id", headerName: "ID" },
      {
        field: "hostname",
        headerName: "Hostname",
        flex: 1,
        cellClassName: "Hostname-column--cell",
      },
      {
        field: "ip",
        headerName: "Ip",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
      },
      {
        field: "OS",
        headerName: "Operating System",
        flex: 1,
      },
      {
        field: "incidents",
        headerName: "Incidents",
        flex: 1,
      },
      {
        field: "connected",
        headerName: "Connection Status",
        flex: 1,
        textAlign: "center",
        renderCell: ({ row: { connected } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                connected ? colors.greenAccent[600]
                  : colors.redAccent[600]
              }
              borderRadius="4px"
            >
              {connected ? <AdminPanelSettingsOutlinedIcon /> : <SecurityOutlinedIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {connected}
              </Typography>
            </Box>
          );
        },
      },
    ];

    return (
        <div className="app" style={{display: "flex", justifyContent: "space-between"}}>
          <Sidebar menuItems={menuItems}/>

          <main className="content">
            <Topbar/>
            <Infobar boxes={boxes} color={colors.blueAccent[600]} size={160} />
            <Box m="20px">
              <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                  "& .MuiDataGrid-root": {
                    border: "ActiveBorder",
                  },
                  "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                  },
                  "& .Hostname-column--cell": {
                    color: colors.greenAccent[300],
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.grey[800],
                    borderBottom: "none",
                    color: colors.primary[100]
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.blueAccent[800],
                  },
                  "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.grey[800],
                  },
                  "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                  },
                }}
              >
                <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
              </Box>
            </Box>
          </main>
        </div>
    );
};

export default Dashboard;