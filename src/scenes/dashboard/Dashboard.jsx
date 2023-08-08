import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import Metrics from "../../components/Metrics";
import Piechart from "../../components/Piechart";
import Sidebar from "../../components/global/Sidebar";
import Infobar from "../../components/global/Infobar";
import Topbar from "../../components/global/Topbar";
import { useMode, tokens } from "../../theme";
import { Grid } from "@mui/material";
import { motion } from 'framer-motion';


// icon import
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import RemoveModeratorOutlinedIcon from '@mui/icons-material/RemoveModeratorOutlined';

const Dashboard = () => {
    const [theme, colorMode] = useMode();
    const colors = tokens(theme.palette.mode);
  
    // data for charts
    const chart1=[
      { title: 'Resolved', value: 30, color: colors.greenAccent[500] },
      { title: 'Unresolved', value: 15, color: colors.redAccent[500] },
    ];
    const chart2=[
      { title: 'Connected', value: 15, color: colors.greenAccent[500] },
      { title: 'Disconnected', value: 30, color: colors.redAccent[500] },
    ];
    
    // array of boxes to be passed to info bar
    const boxes = 
    [
      <Metrics                 
      number="34"
      text="Unresolved Incidents"
      color="#F8F0E3"
      data-id="metric1"
      >
      </Metrics>,
      <Piechart
      headerText="Incidents"
      data={chart1}
      color="#F8F0E3"
      startAngle={30}
      data-id="chart1"
      />,
      <Piechart
      headerText="EDR Status"
      data={chart2}
      color="#F8F0E3"
      startAngle={90}
      data-id="chart2"
      />,
      <Metrics                 
      number="10"
      text="Monitors"
      color="#F8F0E3"
      data-id="metric2"
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
        cellClassName: "Connection-column--cell",
        renderCell: ({ row: { connected } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                connected ? colors.greenAccent[500]
                  : colors.redAccent[500]
              }
              borderRadius="4px"
            >
              {connected ? <SecurityOutlinedIcon /> : <RemoveModeratorOutlinedIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {connected}
              </Typography>
            </Box>
          );
        },
      },
    ];

    return (
      <>
        <Sidebar menuItems={menuItems} currentPage={"Dashboard"}/>

        <motion.div
          style={{ position: "relative" }}
          initial={{ opacity: 0, transition: {duration: 2} }}
          animate={{ opacity: 1 }}
          // exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
        >

          <main className="content">
            
            <Grid container spacing={6} justifyContent="center">
              <Grid item xs={12}>
                <Box marginBottom="68px">
                  <Topbar/>
                </Box>
              </Grid>
              <Grid item xs={10} >
                <Infobar boxes={boxes} color="#4E37A9" size={160} />
              </Grid>
              <Grid item xs={11}>
                  {/* table css */}
                  <Box
                    height="75vh"
                    mb="50px"
                    sx={{
                      "& .MuiDataGrid-root": {
                        border: "ActiveBorder",
                      },
                      "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                      },
                      "& .Hostname-column--cell": {
                        // color: colors.greenAccent[300],
                      },
                      "& .Connection-column--cell": {
                        display: "flex",
                        textAlign: "center"
                      },
                      // table header column attributes
                      "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "#4E37A9",
                        borderBottom: "none",
                        fontSize: "16px",
                        borderRadius: "5px"
                        // color: colors.primary[100]
                      },
                      // table content attributes
                      "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "#F8F0E3",
                        fontSize: "15px",
                        color: "black",
                        borderRadius: "5px"
                      },
                      // table footer attributes
                      "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: "#4E37A9 ",
                        borderRadius: "5px"
                      },
                      // checkbox color
                      "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[500]} !important`,
                      },
                    }}
                  >
                  <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
                  </Box>
              </Grid>
            </Grid>
          </main>
        </motion.div>
      </>
    );
};

export default Dashboard;