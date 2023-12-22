import Layout from "../components/Layout";
import "../app/globals.css";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    ash: {
      main: "#F0EDEE", // Ваш основной цвет
      contrastText: "#fff", // Текстовый цвет, который будет контрастным к основному цвету
    },
    jet: {
      main: "#2E2F2F", // Ваш вторичный цвет
      contrastText: "#fff",
    },
    // Добавьте свои кастомные цвета здесь
    customColor: {
      main: "#2196f3",
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: "Philosopher, sans-serif",
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: "20px",
          fontSize: "22px",
          borderColor: "#2E2F2F",
          boxShadow: "0px 0px 6px 6px rgba(46, 54, 60, 0.2)",
          "&:hover": {
            color: "#2E2F2F",
            background: "#F0EDEE",
            fontWeight: "700",
            boxShadow: "0px 0px 6px 6px rgba(255, 255, 255, 0.2)",
          },
        },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  );
}
