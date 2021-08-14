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

function ReceiverCard({ receiverFormData }) {
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
                {receiverFormData.address}
              </Typography>
              {/* <Typography variant="subtitle2" color="textSecondary">
                {receiverFormData.name}
              </Typography> */}
              <Typography variant="body2" color="textSecondary">
                {receiverFormData.vegetables !== 0 ? `Rau củ quả: ${receiverFormData.vegetables} Kg. ` : ''}
                {receiverFormData.noodles !== 0 ? `Mì gói: ${receiverFormData.noodles} thùng. ` : ''}
                {receiverFormData.rice !== 0 ? `Gạo: ${receiverFormData.rice} Kg. ` : ''}
                {receiverFormData.eggs !== 0 ? `Trứng: ${receiverFormData.eggs} hộp. ` : ''}
                {receiverFormData.milk !== 0 ? `Sữa: ${receiverFormData.milk} hộp. ` : ''}
                {receiverFormData.mask !== 0 ? `Khẩu trang: ${receiverFormData.mask} hộp. ` : ''}
                {receiverFormData.protectCloth !== 0 ? `Đồ bảo hộ: ${receiverFormData.protectCloth} bộ. ` : ''}
                {receiverFormData.gloves !== 0 ? `Găng tay: ${receiverFormData.gloves} đôi. ` : ''}
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
          {receiverFormData.address}
        </DialogTitle>
        <DialogContent>
          {receiverFormData.status === 1
            ? (
              <Typography variant="h6" color="primary">
                Đã hỗ trợ
              </Typography>
            )
            : (
              <Typography variant="h6" color="error">
                Chờ hỗ trợ
              </Typography>
            )}
          <Typography variant="body1">
            Nhu yếu phẩm
          </Typography>
          <DialogContentText>
            {receiverFormData.vegetables !== 0 ? `Rau củ quả: ${receiverFormData.vegetables} Kg. ` : ''}
            {receiverFormData.noodles !== 0 ? `Mì gói: ${receiverFormData.noodles} thùng. ` : ''}
            {receiverFormData.rice !== 0 ? `Gạo: ${receiverFormData.rice} Kg. ` : ''}
            {receiverFormData.eggs !== 0 ? `Trứng: ${receiverFormData.eggs} hộp. ` : ''}
            {receiverFormData.milk !== 0 ? `Sữa: ${receiverFormData.milk} hộp. ` : ''}
            {receiverFormData.mask !== 0 ? `Khẩu trang: ${receiverFormData.mask} hộp. ` : ''}
            {receiverFormData.protectCloth !== 0 ? `Đồ bảo hộ: ${receiverFormData.protectCloth} bộ. ` : ''}
            {receiverFormData.gloves !== 0 ? `Găng tay: ${receiverFormData.gloves} đôi. ` : ''}
          </DialogContentText>
          <Typography variant="body1">
            Liên lạc
          </Typography>
          <DialogContentText>
            Số điện thoại:
            {' '}
            {receiverFormData.phone}
            <span>
              <br />
            </span>
            Họ tên:
            {' '}
            {receiverFormData.name}
            <span>
              <br />
            </span>
            Ghi chú:
            {' '}
            {receiverFormData.note}
          </DialogContentText>
          <img className={classes.image} alt="f" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Thoát
          </Button>
          <Button onClick={handleClose} color="primary">
            Đã hỗ trợ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ReceiverCard;
