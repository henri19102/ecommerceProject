import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "wheat",
    paddingTop: "1%",
    paddingBottom: "2%",
  },
  footer: {
    padding: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f51b5",
    paddingTop: "1%",
  },
  productSearch: {
    backgroundColor: "white",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  logIn: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "2%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "5%",
  },
  header: {
    marginLeft: "2%",
    marginRight: "2%",
  },
  white: {
    color: "white",
  },
  grey: {
    backgroundColor: "grey",
    marginTop: "0",
  },
  subscribe: {
    padding: "2%",
    color: "white",
    flexWrap: "wrap",
    background: "linear-gradient(180deg, rgba(5,5,5,1) 88%, rgba(63,81,181,1) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  subscribeForm: {
    padding: "1%",
    color: "white",
    flexWrap: "wrap",
    background: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  products: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: "2%",
  },
  productsPage: {
    display: "flex",
    flexDirection: "column",
  },
  productCard: {
    marginBottom: "2%",
  },
  green: {
    border: "solid",
    borderRadius: "5px",
    padding: "2px",
  },
  message: {
    display: "flex",
    justifyContent: "center",
  },
  blue: {
    backgroundColor: "#3f51b5",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "2%",
  },
  text1: {
    textAlign: "center",
  },
  sum: {
    border: "solid",
    borderWidth: "thin",
    borderRadius: "5px",
    padding: "2px",
    backgroundColor: "white",
    textAlign: "center",
    marginBottom: "2%",
  },
  cardContent2: {
    display: "flex",
    justifyContent: "center",
  },
  card1: {
    marginTop: "2%",
    marginBottom: "2%",
  },
  cardContent3: {
    width: "50%",
    marginBottom: "2%",
  },
  cardContent4: {
    width: "90%",
    marginBottom: "2%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#white",
    color: theme.palette.text.primary,
  },
  mostSelled: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#D3D3D3",
    color: theme.palette.text.primary,
    "&:hover": {
      transform: "translate(0%,-5%)",
      backgroundColor: "#99f",
    },
  },
  highlightHeader: {
    fontSize: "1.5vw",
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));
