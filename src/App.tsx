import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/globalStyles";
import { darkTheme } from "./styles/theme";
import { RoutesComponent } from "./modules/app/components/routes/Route";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <RoutesComponent />
    </ThemeProvider>
  );
}

export default App;
