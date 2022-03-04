import Header from "./elements/Header";
import Main from "./pages/Main";
import Footer from "./elements/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#39796b',
        main: '#004d40',
        dark: '#00251a',
        contrastText: '#fff',
      },
      secondary: {
        light: '#dd3333',
        main: '#d50000',
        dark: '#950000',
        contrastText: '#fff',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </ThemeProvider>
  );
}

export default App;
