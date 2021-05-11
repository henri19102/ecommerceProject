import React from 'react'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { IconButton, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const AdminTab = ({pathTo}) => {
    const history = useHistory();
    return (
        <>
        <IconButton
          color="primary"
          aria-label="admin"
        >
          <Typography color="secondary" >
            <SupervisorAccountIcon fontSize="large" onClick={() => history.push("/admin")} />
            Admin
          </Typography>
        </IconButton>
      </>
    )
}

export default AdminTab
