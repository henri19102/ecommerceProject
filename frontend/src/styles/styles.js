import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "wheat",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  productSearch: {
    backgroundColor: "white"
  },
  appBar: {
    
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  logIn: {
    backgroundColor: "white",
    padding: "2%",
    width: "50%",
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    margin: "2%"
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
    backgroundColor: "green"
  }


}));
