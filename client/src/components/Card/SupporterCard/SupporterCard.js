/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {
  CardActionArea, Dialog, DialogContent, DialogTitle,
  DialogContentText, Button, DialogActions, Paper,
} from '@material-ui/core';

import useStyles from './styles';

function SupporterCard({ supporterFormData }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  //   useEffect(() => {
  //     buttonRef.current.click();
  //   }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen} className={classes.rootCard} ref={buttonRef}>
          <CardMedia>
            <img className={classes.cover} alt="f" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
          </CardMedia>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="subtitle1">
                {supporterFormData.address}
              </Typography>
              {/* <Typography variant="subtitle2" color="textSecondary">
                {supporterFormData.name}
              </Typography> */}
              <Typography variant="body2" color="textSecondary">
                {supporterFormData.vegetables !== 0 ? `Rau củ quả: ${supporterFormData.vegetables} Kg. ` : ''}
                {supporterFormData.noodles !== 0 ? `Mì gói: ${supporterFormData.noodles} thùng. ` : ''}
                {supporterFormData.rice !== 0 ? `Gạo: ${supporterFormData.rice} Kg. ` : ''}
                {supporterFormData.eggs !== 0 ? `Trứng: ${supporterFormData.eggs} hộp. ` : ''}
                {supporterFormData.milk !== 0 ? `Sữa: ${supporterFormData.milk} hộp. ` : ''}
                {supporterFormData.mask !== 0 ? `Khẩu trang: ${supporterFormData.mask} hộp. ` : ''}
                {supporterFormData.protectCloth !== 0 ? `Đồ bảo hộ: ${supporterFormData.protectCloth} bộ. ` : ''}
                {supporterFormData.gloves !== 0 ? `Găng tay: ${supporterFormData.gloves} đôi. ` : ''}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {supporterFormData.vehicle !== '' ? `Phương tiện: ${supporterFormData.vehicle}. ` : ''}
                {supporterFormData.weight !== 0 ? `Chở được: ${supporterFormData.weight} Kg. ` : ''}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{ cursor: 'move' }}>
          {supporterFormData.address}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Nhu yếu phẩm
          </Typography>
          <DialogContentText>
            {supporterFormData.vegetables !== 0 ? `Rau củ quả: ${supporterFormData.vegetables} Kg. ` : ''}
            {supporterFormData.noodles !== 0 ? `Mì gói: ${supporterFormData.noodles} thùng. ` : ''}
            {supporterFormData.rice !== 0 ? `Gạo: ${supporterFormData.rice} Kg. ` : ''}
            {supporterFormData.eggs !== 0 ? `Trứng: ${supporterFormData.eggs} hộp. ` : ''}
            {supporterFormData.milk !== 0 ? `Sữa: ${supporterFormData.milk} hộp. ` : ''}
            {supporterFormData.mask !== 0 ? `Khẩu trang: ${supporterFormData.mask} hộp. ` : ''}
            {supporterFormData.protectCloth !== 0 ? `Đồ bảo hộ: ${supporterFormData.protectCloth} bộ. ` : ''}
            {supporterFormData.gloves !== 0 ? `Găng tay: ${supporterFormData.gloves} đôi. ` : ''}
          </DialogContentText>
          <Typography variant="body1">
            Phương tiện chuyên chở
          </Typography>
          <DialogContentText>
            {supporterFormData.vehicle !== '' ? `Phương tiện: ${supporterFormData.vehicle}. ` : ''}
            {supporterFormData.weight !== 0 ? `Chở được: ${supporterFormData.weight} Kg. ` : ''}
          </DialogContentText>
          <Typography variant="body1">
            Liên lạc
          </Typography>
          <DialogContentText>
            Số điện thoại:
            {' '}
            {supporterFormData.phone}
            <span>
              <br />
            </span>
            Họ tên:
            {' '}
            {supporterFormData.name}
            <span>
              <br />
            </span>
            Ghi chú:
            {' '}
            {supporterFormData.note}
          </DialogContentText>
          <img className={classes.image} alt="f" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SupporterCard;
