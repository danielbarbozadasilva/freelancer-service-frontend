import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import { Hidden } from '@mui/material';
import { Button } from '@material-ui/core';
import { Menu as MenuIcon, MenuOpen as MenuOpenIcon, AccountCircle as AccountCircleIcon, ChevronLeft as ChevronLeftIcon, PowerSettingsNew } from '@mui/icons-material';
import ListMenu from './item-panel';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { logoutAction } from '../../../store/auth/auth.action';
import { useNavigate } from "react-router-dom";
import { logoutUser } from '../../../store/auth/auth.reducer';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24,
      backgroundColor: '#4E6062',
      color: '#fff',
    },
    toolbarText: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.down('xs')]: {
        width: 0,
      },
      overflow: 'hidden',
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    details: {
      paddingTop: theme.spacing(1),
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    depositContext: {
      flex: 1,
    },
    user: {
      padding: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
    },
    userIcon: {
      marginLeft: `calc(100% - 30%)`,
      margin: theme.spacing(2),
      color: '#fff',
      '@media (max-width: 1900px)': {
        marginLeft: `calc(100% - 35%)`,
      },
      '@media (max-width: 1600px)': {
        marginLeft: `calc(100% - 50%)`,
      },
      '@media (max-width: 1330px)': {
        marginLeft: `calc(100% - 60%)`,
      },
      '@media (max-width: 1090px)': {
        marginLeft: '0%',
      },
    },
  })
);

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const { username, email } = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleLogout() {
    logoutAction()
    dispatch(logoutUser())
    navigate('/')
    navigate(0)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={classes.menuButton}
          >
            {!open ? <MenuIcon /> : <MenuOpenIcon />}
          </IconButton>

          <AccountCircleIcon className={classes.userIcon} />
          <div className={classes.details}>
            <h6> Username: {username}</h6>
            <h6> E-mail: {email}</h6>
          </div>
          <Button onClick={handleLogout}>
            <PowerSettingsNew className={classes.userIcon} />
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <Divider />
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarText}>Menu Principal</div>
          <div className={classes.toolbarIcon} />
          <Hidden smUp>
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
          </Hidden>
        </Toolbar>
        <Divider />
        <List>
          <ListMenu />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <>{props.children}</>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;