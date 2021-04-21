import React from "react";
import { TextField, makeStyles, Button} from "@material-ui/core";

const LogIn = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        backgroundColor: "white"
      },
    },
  }));

  
  const classes = useStyles();

  return (
    <div className="pageStyle">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField id="outlined-basic" label="password" variant="outlined" />
        <Button variant="contained" style={{backgroundColor: 'green'}} >Log In</Button>
      </form>
    </div>
  );
};

export default LogIn;
