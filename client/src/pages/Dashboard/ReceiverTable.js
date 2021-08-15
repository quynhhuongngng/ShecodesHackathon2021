/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, TablePagination } from '@material-ui/core';
import axios from 'axios';

// Generate Order Data
function createData(index, name, address, phone, stt, id) {
  const status = (stt !== 0) ? 'Chờ hỗ trợ' : 'Đã hỗ trợ';
  return {
    index, name, address, phone, status, id,
  };
}

const receiverForm = [{
  id: 1,
  vegetables: 1,
  noodles: 1,
  rice: 1,
  eggs: 1,
  milk: 1,
  mask: 1,
  protectCloth: 1,
  gloves: 1,
  name: 'Nguyen Van A',
  phone: '0123456789',
  address: '227 Nguyen Van Cu, phuong 5, quan 5, HCMC',
  note: '',
  image: null,
  status: 1,
},
];

const rows1 = receiverForm.map(
  (item, index) => createData(index, item.name, item.address, item.phone, item.status, item.id),
);

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ReceiverTable() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [rowsData, setRowsData] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get('/api/recipient');
    const res = data.length !== 0 ? data.map(
      (item, index) => createData(index, item.name, item.address, item.phone, item.status, item.id),
    ) : null;
    setRowsData(res);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onComplete = (e, id) => {
    console.log('e', e); // e == id
  };

  return (
    <>
      <p>Quản lý người nhận</p>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tên</TableCell>
            <TableCell>Địa chỉ</TableCell>
            <TableCell>Số điện thoại</TableCell>
            <TableCell>Tình trạng</TableCell>
            <TableCell align="right">Xác nhận thành công</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          rowsData.length !== 0
            ? (
              rowsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            // : rows
            ).map((row) => (
              <TableRow key={row.index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.status}</TableCell>
                {/* <TableCell align="right">{row.amount}</TableCell> */}
                {
                  row.status === 'Chờ hỗ trợ'
                    ? (
                      <TableCell align="right">
                        <Button color="primary" variant="contained" onClick={(e) => onComplete(row.id)}>
                          xác nhận
                        </Button>
                      </TableCell>
                    )
                    : (
                      <TableCell align="right">
                        <Button variant="contained" disabled>
                          đã xác nhận
                        </Button>
                      </TableCell>
                    )
              }

              </TableRow>
            ))
            : ''
}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rowsData?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
