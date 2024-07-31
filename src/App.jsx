import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import { NewsArticles } from "./news-articles/news-article";
import { AppProvider } from "./news-articles/context/app-context";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <NewsArticles />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
