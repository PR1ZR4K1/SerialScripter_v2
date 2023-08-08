import { Link } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';

import { motion } from 'framer-motion';

// import components/css
import Topbar from "../../components/global/Topbar";
import Sidebar from "../../components/global/Sidebar";
import '../../styles/index.css'

// icon imports
import { ImWindows } from 'react-icons/im'
import { VscTerminalLinux } from 'react-icons/vsc'
import { GiScythe } from 'react-icons/gi'


const ScriptingHub = () => {


    const menuItems =  [
    {
        title: "Scripting Hub",
        to: "/scriptingHub",
        icon: <GiScythe size={20}/>
    },
    {
        title: "Windows",
        to: "/scriptingHub/windows-scripts",
        icon: <ImWindows size={15}/>
    },
    {
        title: "Linux",
        to: "/scriptingHub/linux-scripts",
        icon: <VscTerminalLinux size={18}/>
    },
    
]

    return (
        <>
            <Sidebar menuItems={menuItems} currentPage={"Scripting Hub"}/>
            <motion.main 
                className='content'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {duration: 0.8} }}
                // exit={{ x: window.innerWidth, transition: {duration: 0.8} }}
                style={{ position: "relative" }}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ x: window.innerWidth, transition: {duration: 0.8} }}
            >
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <Box marginBottom="7.8vh">
                          <Topbar/>
                        </Box>
                    </Grid>
                    <Grid container style={{ overflow: "hidden", height: "100%"}} >
                        <Grid item xs={6} style={{ flexGrow: 1 }}>
                            <Link to="/scriptingHub/windows-scripts">
                                <div className="left-half">
                                    <img
                                        className="windows-logo"
                                        src="../../assets/windows.png"
                                        alt="windows"
                                    ></img>
                                </div>
                            </Link>
                        </Grid>    
                        <Grid item xs={6} style={{ flexGrow: 1 }}>
                            <Link to="/scriptingHub/linux-scripts">
                                <div className="right-half">
                                    <img
                                        className="linux-logo"
                                        src="../../assets/linux.png"
                                        alt="linux"
                                    ></img>
                                </div>
                            </Link>
                        </Grid>
                    </Grid>    
                </Grid>
            </motion.main>

        </>
    )
}

export default ScriptingHub;