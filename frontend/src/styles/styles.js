import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "wheat",
    paddingTop: "1%",
    paddingBottom: "2%"
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
    marginBottom: "2%"
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
  paypalBtn:{

  }
}));
