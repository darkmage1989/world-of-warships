import { ThemeProvider } from "styled-components";
import "./App.css";
import AppRoutes from "./Rourtes";
import { theme } from "./theme";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
