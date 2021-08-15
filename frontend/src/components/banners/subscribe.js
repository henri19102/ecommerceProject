import React, { useRef } from "react";
import {
  Box,
  InputAdornment,
  FormControl,
  Input,
  IconButton,
} from "@material-ui/core";
import { useStyles } from "../../styles/styles";
import SendIcon from "@material-ui/icons/Send";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

const Subscribe = () => {
  let textInput = useRef(null);
  const classes = useStyles();

  const fakeSub = () => {
    textInput.current.value = "Thank you!";
  };

  return (
    <Box className={classes.subscribe}>
      <h2>Dont miss out! Join our mailing list.</h2>

      <FormControl className={classes.subscribeForm}>
        <Input
          inputRef={textInput}
          className={classes.white}
          autoComplete="off"
          startAdornment={
            <InputAdornment className={classes.white} position="start">
              <EmailRoundedIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment className={classes.white} position="end">
              <IconButton className={classes.white} onClick={() => fakeSub()}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default Subscribe;
