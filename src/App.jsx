import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import "./App.css";
import CardListTailWindCSS from "./Components/cardTailWindCSS/CardListTailWindCSS";
const theme = {
  colors: {
    blue: "#2979ff",
  },
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="w-full h-[100vh]">
        <CardListTailWindCSS />
      </div>
    </ThemeProvider>
  );
};

export default App;
