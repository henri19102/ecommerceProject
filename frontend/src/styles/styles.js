import { makeStyles } from "@material-ui/core";
import AntonFont from './fonts/Anton/Anton-Regular.ttf'

export const antonFont = {
  fontFamily: 'Anton',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Anton'),
    local('Anton-Regular'),
    url(${AntonFont}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const useStyles = makeStyles((theme) => ({
  font1: {
    fontFamily: 'Hanalei'
  },
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