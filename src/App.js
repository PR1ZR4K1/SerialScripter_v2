// import color mode that we created
import { ColorModeContext, useMode } from "./theme";
// reset css to default
import { CssBaseline, ThemeProvider } from "@mui/material";
// import routes
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar";
// import Form from "./scenes/form"

import Dashboard from "./scenes/dashboard";
// import Reports from "./scenes/reports";
// import SerialLogs from "./scenes/serialLogs";
// import RemoteLogs from "./scenes/remoteLogs";
// import Manage from "./scenes/manage";
// import Incidents from "./scenes/incidents";
// import KeyManagement from "./scenes/keyManagement";
// import Login from "./scenes/login";
// import ScriptingHub from "./scenes/scriptingHub";



function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/form" element={<Form />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/reports" element={<Reports />} /> */}
              {/* <Route path="/serialLogs" element={<SerialLogs />} /> */}
              {/* <Route path="/remoteLogs" element={<RemoteLogs />} /> */}
              {/* <Route path="/manage" element={<Manage />} /> */}
              {/* <Route path="/incidents" element={<Incidents />} /> */}
              {/* <Route path="/keyManagement" element={<KeyManagement />} /> */}
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/scriptingHub" element={<ScriptingHub />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
