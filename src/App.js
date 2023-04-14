// import color mode that we created
import { ColorModeContext, useMode, tokens } from "./theme";
// reset css to default
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";

// import routes
import { Routes, Route } from "react-router-dom";
// import Dashboard from "./scenes/dashboard";
// import Reports from "./scenes/reports";
// import SerialLogs from "./scenes/serialLogs";
// import RemoteLogs from "./scenes/remoteLogs";
// import Manage from "./scenes/manage";
// import Incidents from "./scenes/incidents";
// import KeyManagement from "./scenes/keyManagement";
// import Login from "./scenes/login";
// import ScriptingHub from "./scenes/scriptingHub";

// import Global
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Infobar from "./scenes/global/Infobar";

// import Components

import Metrics from "./components/Metrics";
import Piechart from "./components/Piechart";
import { PieChart } from 'react-minimal-pie-chart';




function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const data=[
    { title: 'Resolved', value: 30, color: colors.greenAccent[600] },
    { title: 'Unresolved', value: 15, color: colors.redAccent[600] },
  ];
  
  const boxes = 
  [
    <Metrics                 
    number="100"
    text="Unresolved Incidents"
    color={colors.blueAccent[400]}
    id="metric1"
    >
    </Metrics>,
    <Metrics                 
    number="10"
    text="Monitors"
    color={colors.blueAccent[400]}
    id="metric2"
    >
    </Metrics>,
    <Piechart
    headerText="Incidents"
    data={data}
    color={colors.blueAccent[400]}
    />,
  ];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" >
          <Sidebar />
          <main className="content">
            <Topbar />
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
            <Infobar boxes={boxes} color={colors.blueAccent[600]} size={168} />
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
