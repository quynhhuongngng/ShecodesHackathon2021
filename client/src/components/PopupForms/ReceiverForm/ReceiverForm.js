/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import {
  CardMedia, Card, FormControl, InputLabel, Menu, MenuItem, Select,
} from '@material-ui/core';
import axios from 'axios';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   geocodeByPlaceId,
//   getLatLng,
// } from 'react-places-autocomplete';

import useStyles from './styles';

export default function ReceiverForm({ receiver, setReceiver, handleCloseReceive }) {
  const classes = useStyles();

  const [receiverFormData, setReceiverFormData] = useState({
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
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [addressData, setAddressData] = useState({
    province: '', district: '', ward: '', number: '',
  });
  const [level1, setLevel1] = useState([]);
  const [level2, setLevel2] = useState([]);
  const [level3, setLevel3] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get('https://raw.githubusercontent.com/daohoangson/dvhcvn/master/data/dvhcvn.json');
    // setAddressData(data);
    // const province = data.data.map((item) => item.name);
    setLevel1(data.data);
  }, []);

  const [imageReview, setImageReview] = useState(null);

  const handleUploadClick = (e) => {
    const file = e.target.files[0];
    setImageReview(URL.createObjectURL(file));
    // console.log('file', file);
    // console.log(URL.createObjectURL(file));

    setReceiverFormData({ ...receiverFormData, image: `/image/${file.name}` });
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setReceiverFormData({ ...receiverFormData, [name]: value });
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

    if (receiverFormData.name.length === 0) {
      valid = false;
      err.name = 'Không được để trống họ tên';
    }
    if (receiverFormData.phone.length !== 10) {
      valid = false;
      err.phone = 'Phải điền đúng số điện thoại';
    }
    // if (receiverFormData.address.length === 0) {
    //   valid = false;
    //   err.address = 'Không để trống địa chỉ';
    // }

    setErrors({ ...err });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm(errors)) {
      try {
        const data = axios.post('/api/recipient', receiverFormData);
        const recei = receiver;
        recei.push(receiverFormData);
        setReceiver(recei);
        handleCloseReceive();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChangeProvince = (e) => {
    // console.log('ad', addressData);
    const tmp = level1.find((item) => item.name === e.target.value);
    setAddressData({ ...addressData, province: e.target.value });
    setLevel2(tmp.level2s);
  };

  const handleChangeDistrict = (e) => {
    const tmp = level2.find((item) => item.name === e.target.value);
    setAddressData({ ...addressData, district: e.target.value });
    setLevel3(tmp.level3s);
  };

  const handleChangeWard = (e) => {
    setAddressData({ ...addressData, ward: e.target.value });
  };

  const onInputChangeNumber = (e) => {
    setAddressData({ ...addressData, number: e.target.value });
    setReceiverFormData({ ...receiverFormData, address: `${addressData.number},  ${addressData.ward}, ${addressData.district}, ${addressData.province}` });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Bạn muốn nhận gì?
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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
                label="Găng tay (Đôi)"
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
              <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel>Tỉnh thành</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  // value={age}
                  onChange={handleChangeProvince}
                  fullWidth
                  label="Tỉnh thành"
                >
                  {level1?.length
                    ? level1.map((item) => <MenuItem value={item.name}>{item.name}</MenuItem>)
                    : null}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel>Quận huyện</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  // value={age}
                  onChange={handleChangeDistrict}
                  fullWidth
                  label="Quận huyện"
                >
                  {level2?.length
                    ? level2.map((item) => <MenuItem value={item.name}>{item.name}</MenuItem>)
                    : null}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel>Phường xã</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  // value={age}
                  onChange={handleChangeWard}
                  fullWidth
                  label="Phường xã"
                >
                  {level3?.length
                    ? level3.map((item) => <MenuItem value={item.name}>{item.name}</MenuItem>)
                    : null}
                </Select>
              </FormControl>
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
                onChange={onInputChangeNumber}
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
            Gửi yêu cầu
          </Button>
        </form>
      </div>
    </Container>
  );
}
