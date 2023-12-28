import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const CustomTable = (props) => {
  const {bodyData} = props;

  const headData = Object.keys(bodyData[0]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          {headData.map((header) => (
            <TableCell key={header}>
              {header}
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {bodyData.map((row) => {
            console.log("Ths is row",row)
            return (
            <TableRow key={row.name}>
              {headData.map((header) => (
                <TableCell key={header} component="th" scope="row">
                  {row[header]}
                </TableCell>
              ))}
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
