import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: "25ch",
        marginBottom: "10%",
      },
    },
  }));