/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CallIcon from '@material-ui/icons/Call';
import SearchIcon from '@material-ui/icons/Search';
import { Dialog, InputBase } from '@material-ui/core';
import SupporterCard from '../../components/Card/SupporterCard/SupporterCard';
import ReceiverCard from '../../components/Card/ReceiverCard/ReceiverCard';
import SupporterForm from '../../components/PopupForms/SupporterForm/SupporterForm';
import ReceiverForm from '../../components/PopupForms/ReceiverForm/ReceiverForm';

import useStyles from './styles';

export default function HomePage() {
  const classes = useStyles();

  const [openSupport, setOpenSupport] = useState(false);
  const [openReceive, setOpenReceive] = useState(false);

  const [receiver, setReceiver] = useState([]);
  const [supporter, setSupporter] = useState([]);

  useEffect(() => {
    const getReceive = async () => {
      const { data } = await axios.get('/api/recipient');
      setReceiver(data);
      console.log('rec', receiver);
    };

    const getSupport = async () => {
      const { data } = await axios.get('/api/supporter');
      setSupporter(data);
      console.log('rec', supporter);
    };

    getReceive();
    getSupport();
  }, []);

  const handleClickOpenSupport = () => {
    setOpenSupport(true);
  };

  const handleCloseSupport = () => {
    setOpenSupport(false);
  };

  const handleClickOpenReceive = () => {
    setOpenReceive(true);
  };

  const handleCloseReceive = () => {
    setOpenReceive(false);
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            ConnectMe
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
            <Button onClick={handleClickOpenSupport} color="primary" variant="contained">
              Muốn cho
            </Button>
            <Button onClick={handleClickOpenReceive} color="secondary" variant="contained">
              Muốn nhận
            </Button>
            <Button href="/volunteers" color="primary" variant="outlined" className={classes.volunteer}>
              Tình nguyện viên
            </Button>
          </nav>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" component="main">
        <Grid container>
          <Grid item md={12} lg={7}>
            <p>Người cho</p>
            {
              supporter.length !== 0
                ? supporter.map((item, index) => <SupporterCard supporterFormData={item} key={index} />)
                : null
            }
          </Grid>
          <Grid item md={12} lg={5}>
            <p>Người nhận</p>
            {
              receiver.length !== 0
                ? receiver.map((item, index) => <ReceiverCard receiverFormData={item} key={index} />)
                : null
            }
          </Grid>
        </Grid>
      </Container>

      <Dialog open={openSupport} onClose={handleCloseSupport}>
        <SupporterForm supporter={supporter} setSupporter={setSupporter} handleCloseSupport={handleCloseSupport} />
      </Dialog>
      <Dialog open={openReceive} onClose={handleCloseReceive}>
        <ReceiverForm receiver={receiver} setReceiver={setReceiver} handleCloseReceive={handleCloseReceive} />
      </Dialog>
    </>
  );
}
