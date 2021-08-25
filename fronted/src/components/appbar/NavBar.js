import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} button to="/" component={Link} color="inherit" aria-label="menu">
            <p>Home</p>
          </IconButton>
          <ListItem button to="/AddForm" component={Link}>
            <ListItemText className={classes.barOptions} primary="Add Restaurant" />
          </ListItem>
          <ListItem button to="/EditForm" component={Link}>
            <ListItemText className={classes.barOptions} primary="Edit-Delete Restaurant" />
          </ListItem>
          <ListItem button to="/Reserve" component={Link}>
            <ListItemText className={classes.barOptions} primary="Reserves" />
          </ListItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}
