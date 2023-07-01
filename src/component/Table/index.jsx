import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TableData(props) {
  const { setIsEdit, FormData, setFormData, setOpen, setInputData } = props;

  function deleteHandler(Candiate_contact) {
    const data = FormData.filter((e, i) => {
      console.log("3444444", i);
      return e.Candiate_contact !== Candiate_contact; //index !== i;
    });
    console.log("data after deletion", data);
    setFormData(data);
    const dat = JSON.stringify(data);
    console.log("38maodal", data);
    localStorage.setItem("candidate", dat);
  }
  function updateHandler(row, index) {
    console.log("45", row);
    setIsEdit(true);
    setOpen(true);
    setInputData(row);
  }

  function notify() {
    toast.success("deleted successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Contact</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {FormData.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Candiate_name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.Candiate_email}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.Candiate_contact}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.Candiate_age}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.Candiate_gender}
              </StyledTableCell>
              <StyledTableCell align="right">
                <button
                  className="items"
                  onClick={() => {
                    updateHandler(row);
                  }}
                >
                  update
                </button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <button
                  className="items"
                  onClick={() => {
                    deleteHandler(row.Candiate_contact);
                    notify();
                  }}
                >
                  delete
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
