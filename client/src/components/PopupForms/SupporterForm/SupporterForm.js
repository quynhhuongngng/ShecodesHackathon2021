/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { CardMedia, Card } from '@material-ui/core';
import axios from 'axios';

import useStyles from './styles';

export default function SupporterForm() {
  const classes = useStyles();

  const [supporterFormData, setsupporterFormData] = useState({
    vegetables: 0,
    noodles: 0,
    rice: 0,
    eggs: 0,
    milk: 0,
    mask: 0,
    protectCloth: 0,
    gloves: 0,
    name: '',
    phone: '',
    address: '',
    note: '',
    image: null,
    vehicle: '',
    weight: 0,
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [imageReview, setImageReview] = useState(null);

  const handleUploadClick = (e) => {
    const file = e.target.files[0];
    setImageReview(URL.createObjectURL(file));

    setsupporterFormData({ ...supporterFormData, image: file });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setsupporterFormData({ ...supporterFormData, [name]: value });
    switch (name) {
      case 'name':
        errors.name = value.length === 0 ? 'Không được để trống họ tên' : '';
        break;
      case 'phone':
        errors.phone = value.length !== 10 ? 'Phải điền đúng số điện thoại' : '';
        break;
      case 'address':
        errors.address = value.length === 0 ? 'Không để trống địa chỉ' : '';
        break;
      default:
        break;
    }
  };

  const validateForm = (err) => {
    let valid = true;
    Object.values(errors).forEach(
      // eslint-disable-next-line no-return-assign
      (val) => val.length > 0 && (valid = false),
    );

    if (supporterFormData.name.length === 0) {
      valid = false;
      err.name = 'Không được để trống họ tên';
    }
    if (supporterFormData.phone.length !== 10) {
      valid = false;
      err.phone = 'Phải điền đúng số điện thoại';
    }
    if (supporterFormData.address.length === 0) {
      valid = false;
      err.address = 'Không để trống địa chỉ';
    }

    setErrors({ ...err });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm(errors)) {
      console.log('form', supporterFormData);
      try {
        const data = axios.post('/api/supporter', supporterFormData);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Bạn muốn cho gì?
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Nhu yếu phẩm</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="veges"
                name="vegetables"
                variant="outlined"
                fullWidth
                id="vegetables"
                label="Rau củ quả (KG)"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="0"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="noodles"
                label="Mì gói (thùng)"
                name="noodles"
                autoComplete="noodles"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="0"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                type="number"
                fullWidth
                id="rice"
                label="Gạo (KG)"
                name="rice"
                autoComplete="rice"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="0"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                type="number"
                fullWidth
                name="eggs"
                label="Trứng (Quả)"
                id="eggs"
                autoComplete="eggs"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="0"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                type="number"
                fullWidth
                name="milk"
                label="Sữa (Hộp)"
                id="milk"
                autoComplete="milk"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="0"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                type="number"
                fullWidth
                name="mask"
                label="Khẩu trang (Hộp)"
                id="mask"
                autoComplete="mask"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="0"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                type="number"
                fullWidth
                name="protectCloth"
                label="Đồ bảo hộ (Bộ)"
                id="protectCloth"
                autoComplete="protectCloth"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="0"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                type="number"
                fullWidth
                name="gloves"
                label="Găng tay"
                id="gloves"
                autoComplete="gloves"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="0"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Phương tiện vận chuyển</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                type="text"
                fullWidth
                name="vehicle"
                label="Phương tiện"
                id="vehicle"
                autoComplete="vehicle"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                type="number"
                fullWidth
                name="weight"
                label="Khối lượng (KG)"
                id="weight"
                autoComplete="weight"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue="0"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Thông tin liên lạc</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                required
                name="name"
                label="Họ tên"
                id="name"
                autoComplete="name"
                onChange={onInputChange}
                error={!!errors.name}
                helperText={errors.name ? errors.name : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="phone"
                label="Số điện thoại"
                id="phone"
                autoComplete="phone"
                required
                onChange={onInputChange}
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="address"
                label="Địa chỉ"
                id="address"
                autoComplete="address"
                required
                onChange={onInputChange}
                error={!!errors.address}
                helperText={errors.address ? errors.address : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="note"
                label="Ghi chú"
                id="note"
                autoComplete="note"
                multiline
                rows="4"
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Hình ảnh</Typography>
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleUploadClick}
                style={{ display: 'none' }}
              />
              <label htmlFor="contained-button-file">
                <Fab component="span">
                  <AddPhotoAlternateIcon />
                </Fab>
              </label>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardMedia component="img" image={imageReview !== null ? imageReview : ''} />
              </Card>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Gửi hỗ trợ
          </Button>
        </form>
      </div>
    </Container>
  );
}
