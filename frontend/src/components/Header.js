import React from "react";
import {
  ThemeProvider,
  createMuiTheme,
  Typography,
} from "@material-ui/core";

const Header = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Bungee", "cursive"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2" gutterBottom>
        HaMaZon
      </Typography>
    </ThemeProvider>
  );
};

export default Header;
