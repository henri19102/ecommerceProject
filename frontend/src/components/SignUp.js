import React from "react";
import { TextField, makeStyles, Button} from "@material-ui/core";

const SignUp = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  
  const classes = useStyles();

  return (
    <div className="pageStyle">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="username" variant="outlined" />
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField id="outlined-basic" label="password" variant="outlined" />
        <Button variant="contained" style={{backgroundColor: 'green'}} >Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
