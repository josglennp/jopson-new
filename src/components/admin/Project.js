import React, { useState } from 'react'
import { Table,TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, styled, Typography } from '@mui/material'
import EditSharpIcon from '@mui/icons-material/EditSharp';

const columns = [
    { id: 'name', label: 'Purchase Order No.', minWidth: 40 },
    { id: 'code', label: 'Description', minWidth: 100 },
    {
      id: 'population',
      label: 'Project Type',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'size',
      label: 'Project Progression',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'density',
      label: 'Status',
      minWidth: 60,
      align: 'right',
    },
    {
        id: 'edit',
        label: 'Action',
        minWidth:30,
        align: 'center',
      },
  ];
  
  function createData(name, code, population, size, density, edit) {
    return { name, code, population, size, density,edit };
  }
  
  const rows = [
    createData('001223', 'Safety-Repair of RTG Turning Pad at CY01', "Progress Project", '20%', 'ACTIVE', <EditSharpIcon />),
    createData('001224', 'Preventive Maintenance of Grease Trap', 'Preventive Maintenance', '20%', 'ACTIVE',<EditSharpIcon /> ),
    createData('001225', 'Reefer', 'Preventive Maintenance', '20%', 'ACTIVE', <EditSharpIcon />),
    createData('001226', 'E-valve', 'Preventive Maintenance', '90%', 'ACTIVE', <EditSharpIcon />),
    createData('001227', 'Repair Damaged Deck at Pier 9', "Progress Project", '30%', 'ACTIVE',<EditSharpIcon />),
    createData('001228', 'Rehabilitation of Third Floor at AWU BAHAY MARINO', "Progress Project", "5%", 'ACTIVE',<EditSharpIcon />),
    createData('001229', 'CCTV Expansion', "Progress Project", '100%', 'ACTIVE',<EditSharpIcon />),
    createData('001230', 'Rehabilitaion of Switch gear room at Substation 1', "Progress Project", "30%", 'ACTIVE',<EditSharpIcon />),
    createData('001231', 'Provision of ASTEU shower Room', "Progress Project", "50%", 'ACTIVE',<EditSharpIcon />),
    createData('001232', 'Additional Lighting in Pier 15', "Progress Project", "40%", 'ACTIVE',<EditSharpIcon />),
  ];
  
 
const Project = () => {
    const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage)=> {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <div style={{height: '100vh',minHeight: '100vh'}}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, border: '1px solid #888', color:'white', backgroundColor:'#112952' }}
                >
                  <Typography>{column.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{border:'.02em solid #888'}}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
    )
}

export default Project