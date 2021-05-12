import React from 'react'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { IconButton, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useStyles} from "../../styles/styles"


const AdminTab = ({pathTo}) => {
  const classes = useStyles();
    const history = useHistory();
    return (
        <>
        <IconButton
        className={classes.white}
          aria-label="admin"
        >
          <Typography  >
            <SupervisorAccountIcon fontSize="large" onClick={() => history.push(pathTo)} />
            Admin
          </Typography>
        </IconButton>
      </>
    )
}

export default AdminTab
