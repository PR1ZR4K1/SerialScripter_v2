// import color mode that we created
import { ColorModeContext, useMode, tokens } from "./theme";
// reset css to default
import { CssBaseline, ThemeProvider } from "@mui/material";

// import routes
import Dashboard from "./scenes/dashboard";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
