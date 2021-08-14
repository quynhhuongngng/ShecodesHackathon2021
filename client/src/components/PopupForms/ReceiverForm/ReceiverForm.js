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
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   geocodeByPlaceId,
//   getLatLng,
// } from 'react-places-autocomplete';

import useStyles from './styles';

export default function ReceiverForm() {
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

  const [imageReview, setImageReview] = useState(null);

  const handleUploadClick = (e) => {
    const file = e.target.files[0];
    setImageReview(URL.createObjectURL(file));

    setReceiverFormData({ ...receiverFormData, image: file });
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
    if (receiverFormData.address.length === 0) {
      valid = false;
      err.address = 'Không để trống địa chỉ';
    }

    setErrors({ ...err });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm(errors)) {
      console.log('form', receiverFormData);
    }
  };

  // const [address, setAddress] = React.useState('');
  // const [coordinates, setCoordinates] = React.useState({
  //   lat: null,
  //   lng: null,
  // });

  // const handleSelect = async (value) => {
  //   const results = await geocodeByAddress(value);
  //   const latLng = await getLatLng(results[0]);
  //   setAddress(value);
  //   setCoordinates(latLng);
  // };

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
                label="Rau củ quả"
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
                label="Mì gói"
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
                label="Gạo"
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
                label="Trứng"
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
                label="Sữa"
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
                label="Khẩu trang"
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
                label="Đồ bảo hộ"
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
            {/* <Grid item xs={12}>
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
              >
                {({
                  getInputProps, suggestions, getSuggestionItemProps, loading,
                }) => (
                  <div>
                    <p>
                      Latitude:
                      {coordinates.lat}
                    </p>
                    <p>
                      Longitude:
                      {coordinates.lng}
                    </p>

                    <input {...getInputProps({ placeholder: 'Type address' })} />

                    <div>
                      {loading ? <div>...loading</div> : null}

                      {suggestions.map((suggestion) => {
                        const style = {
                          backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                        };

                        return (
                          <div {...getSuggestionItemProps(suggestion, { style })}>
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </Grid> */}
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
