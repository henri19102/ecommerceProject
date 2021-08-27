import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "wheat",
    paddingTop: "1%",
    paddingBottom: "2%"
  },
  footer: {
    padding: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f51b5",
    paddingTop: "1%"
  },
  productSearch: {
    backgroundColor: "white"
  },
  toolbar: {
    display: "flex",
    justifyContent: "center"
  },
  logIn: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "2%"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    margin: "5%"
  },
  header: {
    marginLeft: "2%",
    marginRight: "2%"
  },
  white: {
    color: "white"
  },
  grey: {
    backgroundColor: "grey",
    marginTop: "0"
  },
  subscribe: {
    padding: "2%",
    color: "white",
    flexWrap: "wrap",
    background:
      "linear-gradient(180deg, rgba(5,5,5,1) 88%, rgba(63,81,181,1) 100%)",
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
    marginBottom: "2%"
  },
  productsPage: {
    display: "flex",
    flexDirection: "column"
  },
  productCard: {
    marginBottom: "2%",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 4px 10px 0 #3f51b5"
    }
  },
  green: {
    border: "solid",
    borderRadius: "5px",
    padding: "2px"
  },
  message: {
    display: "flex",
    justifyContent: "center"
  },
  blue: {
    backgroundColor: "#3f51b5"
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "2%"
  },
  text1: {
    textAlign: "center"
  },
  link:{
    fontWeight: "bold",
    color: "gray",
    "&:hover": {
      color: "#989CFF"
    }
  },
  sum: {
    border: "solid",
    borderWidth: "thin",
    borderRadius: "5px",
    padding: "2px",
    backgroundColor: "white",
    textAlign: "center",
    marginBottom: "2%"
  },
  cardContent2: {
    display: "flex",
    justifyContent: "center"
  },
  card1: {
    marginTop: "2%",
    marginBottom: "2%"
  },
  cardContent3: {
    width: "50%",
    marginBottom: "2%"
  },
  cardContent4: {
    width: "90%",
    marginBottom: "2%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#white",
    color: theme.palette.text.primary
  },
  mostSelled: {
    padding: theme.spacing(3),
    textAlign: "center",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontWeight: "bold",
    backgroundColor: "#D3D3D3",
    color: theme.palette.text.primary,
    transition: "0.2s",
    "&:hover": {
      backgroundColor: "#989CFF",
      transform: "scale(1.1)",
      boxShadow: "0 10px 30px 0 #B5B7FF"
    }
  },
  highlightHeader: {
    fontSize: "1.5vw",
    padding: theme.spacing(1),
    textAlign: "center"
  },
  reviewItem: {
    "&:hover": {
      transform: "translate(0%,-5%)",
    }
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: "5%"
  },
  higlightedImages: {
    zIndex: "-2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "0.8s",
    "&:hover": {
      transform: "scale(1.3)",

    }
  }
}));
