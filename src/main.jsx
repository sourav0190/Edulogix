import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'

// Import MUI's ThemeProvider and createTheme for custom theming
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Create a theme (optional)
const theme = createTheme({
  palette: {
    mode: "light", // You can switch this to 'dark' for dark mode
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes the CSS across browsers */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
