// import routes
import { Routes, Route, useLocation } from "react-router-dom";

import Dashboard from "../scenes/dashboard/Dashboard";
import ScriptingHub from "../scenes/scriptingHub/ScriptingHub";
import WindowsScripts from "../scenes/scriptingHub/Subscenes/WindowsScripts"
import KeyManagement from "../scenes/keyManagement/KeyManagement";
import LinuxScripts from "../scenes/scriptingHub/Subscenes/LinuxScripts";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => 
{
    const location = useLocation();

    return (
        <AnimatePresence >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/scriptingHub" element={<ScriptingHub />} />
                <Route path="/scriptingHub/windows-scripts" element={<WindowsScripts />} />
                <Route path="/scriptingHub/linux-scripts" element={<LinuxScripts />} />
                <Route path="/keyManagement" element={<KeyManagement />} />
        
                {/* <Route path="/reports" element={<Reports />} />
                <Route path="/serialLogs" element={<SerialLogs />} />
                <Route path="/remoteLogs" element={<RemoteLogs />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/incidents" element={<Incidents />} />
                <Route path="/login" element={<Login />} /> */}
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;