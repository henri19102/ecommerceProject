import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: "25ch",
        marginBottom: "10%",
      },
    },
    root2: {
        minWidth: 200,
        margin: "4%",
      },
      bullet: {
        display: "inline-block",
        margin: "5px 2px",
        transform: "scale(0.8)",
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  }));