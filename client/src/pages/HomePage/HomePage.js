/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CallIcon from '@material-ui/icons/Call';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import SupporterCard from '../../components/Card/SupporterCard/SupporterCard';
import ReceiverCard from '../../components/Card/ReceiverCard/ReceiverCard';

import useStyles from './styles';

export default function Pricing() {
  const classes = useStyles();
  const supporterForm = {
    vegetables: 0,
    noodles: 0,
    rice: 0,
    eggs: 0,
    milk: 0,
    mask: 0,
    protectCloth: 0,
    gloves: 0,
    name: 'Nguyen Van A',
    phone: '0123456789',
    address: '227 Nguyen Van Cu, phuong 5, quan 5, HCMC',
    note: '',
    image: null,
    vehicle: '',
    weight: 0,
  };

  const receiverForm = {
    vegetables: 0,
    noodles: 0,
    rice: 0,
    eggs: 0,
    milk: 0,
    mask: 0,
    protectCloth: 0,
    gloves: 0,
    name: 'Nguyen Van A',
    phone: '0123456789',
    address: '227 Nguyen Van Cu, phuong 5, quan 5, HCMC',
    note: '',
    image: null,
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Project name
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <nav className={classes.navbar}>
            <div className={classes.callIcon}>
              <CallIcon />
              <Typography styles={{ marginLeft: '40px' }}>Hotline: 0123 4567</Typography>
            </div>
            <Button>
              Muốn cho
            </Button>
            <Button>
              Muốn nhận
            </Button>
            <Button href="#" color="primary" variant="outlined" className={classes.volunteer}>
              Tình nguyện viên
            </Button>
          </nav>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" component="main">
        <Grid container>
          <Grid item xs={5}>
            <p>Người cho</p>
            <SupporterCard supporterFormData={supporterForm} />
          </Grid>
          <Grid item xs={7}>
            <p>Người nhận</p>
            <ReceiverCard receiverFormData={receiverForm} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
