import { Box, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockScriptsLinux } from '../../../data/mockScriptsLinux';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

// import components/css
import Topbar from "../../../components/global/Topbar";
import Sidebar from "../../../components/global/Sidebar";
import '../../../styles/index.css'
import { useMode, tokens } from "../../../theme";

// icon imports
import { CgNotes } from 'react-icons/cg';
import { SlScreenDesktop } from 'react-icons/sl';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { VscTerminalLinux } from 'react-icons/vsc'


const LinuxScripts = () => {
    const [theme, colorMode] = useMode();
    const colors = tokens(theme.palette.mode);

    const menuItems =  [
    {
        title: "Linux",
        to: "/scriptingHub/linux-scripts",
        icon: <VscTerminalLinux size={18}/>
    },
    {
        title: "Scripts",
        to: "/scriptingHub/linux-scripts",
        icon: <CgNotes />
    },
    {
        title: "Hosts",
        to: "/scriptingHub/linux-hosts",
        icon: <SlScreenDesktop />
    },
    {
        title: "Back",
        to: "/scriptingHub/",
        icon: <RiArrowGoBackFill/>
    },]

    const CssTextField = styled(TextField)({
        '& .MuiInputBase-input': {
            color: 'black',
          },
        '& label.Mui': {
            color: 'black',
            "& focused": { color: 'black',}
        },
        '& .MuiInputLabel-root': {
            borderBottomColor: 'black',
            color: 'black'
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: 'black',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'red',
          },
          '&:hover fieldset': {
            borderColor: 'red',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'black',
          },
        },
      });

    // columns to be used by table
    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "script_name",
          headerName: "Script Name",
          flex: 1,
          cellClassName: "script-column--cell",
        },
        {
            field: "parameters",
            headerName: "Parameters",
            headerAlign: "left",
            align: "left",
            cellClassName: "parameters-class",
            flex: 1,
            renderCell: () => 
            {
                return (
                    <CssTextField
                        id="outlined-textarea"
                        label="Insert Parameter"
                        multiline
                        variant="standard"
                    />
                )
            }
        },]

    return (
        <>
            <Sidebar menuItems={menuItems} currentPage={"Linux"}/>
            <motion.main 
                className='content'
                initial={{ width: 0 }}
                animate={{ width: "100%", transition: {duration: 0.2} }}
                // exit={{ x: window.innerWidth, transition: {duration: 0.8} }}
                style={{ position: "relative" }}
                >
                <Grid container spacing={8} justifyContent="center">
                    <Grid item xs={12}>
                        <Box marginBottom="7.8vh">
                          <Topbar/>
                        </Box>
                    </Grid>
                    <Grid item xs={11}>
                        {/* table css */}
                        <Box
                          height="75vh"
                          mb="25px"
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
                            <DataGrid checkboxSelection rows={mockScriptsLinux} columns={columns} />
                        </Box>
                    </Grid>
                </Grid>
            </motion.main>

        </>
    )
}

export default LinuxScripts;