import CardList from "./Components/card/CardList";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import "./App.css";
const theme = {
  colors: {
    blue: "#2979ff",
  },
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CardList />
    </ThemeProvider>
  );
};

export default App;
