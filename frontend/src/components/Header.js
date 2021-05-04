import React from "react";
import { ThemeProvider, createMuiTheme, Typography } from "@material-ui/core";

const Header = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily:  ["Helvetica"],
      marginBottom: 0,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h2">HaMaZon</Typography>
    </ThemeProvider>
  );
};

export default Header;
