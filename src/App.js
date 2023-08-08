// import color mode that we created
import { ColorModeContext, useMode, tokens } from "./theme";
// reset css to default
import { CssBaseline, ThemeProvider } from "@mui/material";

import { BrowserRouter } from "react-router-dom"


// import routes
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
      
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{display: "flex", justifyContent: "space-between"}}>
            <AnimatedRoutes/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </BrowserRouter>
  )
}

export default App;
