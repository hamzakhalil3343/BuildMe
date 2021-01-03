
import React, { useState, useEffect } from 'react';
import {TextField,Button} from '@material-ui/core';

import PropTypes from 'prop-types';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));
function GetLabourComponent(props) {
    function TablePaginationActions(props) {
        const classes = useStyles1();
        const theme = useTheme();
        const { count, page, rowsPerPage, onChangePage } = props;

        const handleFirstPageButtonClick = (event) => {
            onChangePage(event, 0);
        };

        const handleBackButtonClick = (event) => {
            onChangePage(event, page - 1);
        };

        const handleNextButtonClick = (event) => {
            onChangePage(event, page + 1);
        };

        const handleLastPageButtonClick = (event) => {
            onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="first page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
    }

    TablePaginationActions.propTypes = {
        count: PropTypes.number.isRequired,
        onChangePage: PropTypes.func.isRequired,
        page: PropTypes.number.isRequired,
        rowsPerPage: PropTypes.number.isRequired,
    };

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);





    const useStyles = makeStyles((theme) => ({
        table: {
            minWidth: 700



        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: '100%',
            maxWidth: '200',
            PaddingTop: '5px',
            textAlign: 'centre'

        },
        paper: {
            backgroundColor: theme.palette.background.paper,

            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),

        }
    }));
    const classes = useStyles();
    const [data, setData] = useState([]);
    // const [, setOpen] = React.useState(false);
    const [] = useState('');
    const [loading] = useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const id = localStorage.getItem('id');
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    useEffect(() => {


        const fetchData = async () => {
            const result = await axios(
                `http://localhost:3000/labours`,
            );

            setData(result.data);
        };

        fetchData();


    }, []);


    const [open, setOpen] = React.useState(false);
    const [credentials, setCredentials] = useState({ TeamPart: '', TeamDetails: '' });
    const [lab_id,setLabID]=useState('');
    const handleSubmit=(event)=>{
        alert('name and pass is'+JSON.stringify(credentials)+lab_id);
        event.preventDefault();
        axios.put(`http://localhost:3000/labours/${lab_id}`, credentials)
        .then(res => {
           // window.location.reload(false);
            alert('successFully saved');
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
         
       }
    const handleOpen = (id) => {
        setLabID(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    return (
        <div style={{ margin: 10 }}>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">ADD to Team</h2>
                        <form className={classes.root} onSubmit={handleSubmit} >
                            <TextField id="standard-basic" name="username" label="Project Name"
                                value={credentials.TeamPart}  fullWidth
                                onChange={e => setCredentials({ ...credentials, TeamPart: e.target.value })} />
 

                            <TextField id="standard-basic" label="ADD Details" multiline
                                value={credentials.TeamDetails}
                                onChange={e => setCredentials({ ...credentials, TeamDetails: e.target.value })}
                                fullWidth
                            />
                            <br />
                            <Button variant="contained" type="submit" color="primary" fullWidth style={{marginTop:'10px'}} >
                                ADD
                            </Button>
                            

                        </form>
                    </div>
                </Fade>
            </Modal>


            {loading ? <LinearProgress />
                :
                <TableContainer component={Paper}>


                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Profile Name</StyledTableCell>
                                <StyledTableCell align="center">Labour Type</StyledTableCell>
                                <StyledTableCell align="center">Hours Worked</StyledTableCell>

                                <StyledTableCell align="center">Rate</StyledTableCell>
                                <StyledTableCell align="center"> </StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {(rowsPerPage > 0
                                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : data
                            ).map((row) => (



                                <TableRow key={row.name}>


                                    <TableCell component="th" scope="row" style={{ width: 160 }} align="center">
                                        {row.profile_name}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {row.labour_Type}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {row.hrs_worked}
                                    </TableCell>

                                    <TableCell style={{ width: 160 }} align="center">
                                        {row.labour_rate}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            startIcon={<QueuePlayNextIcon />}
                                            onClick={()=>handleOpen(row.labour_id)}
                                        >
                                            ADD to Team
                                     </Button>
                                    </TableCell>

                                </TableRow>


                            )

                            )}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}



                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={3}
                                    count={data.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: { 'aria-label': 'rows per page' },
                                        native: true,
                                    }}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            }



        </div>

    );
}

export default GetLabourComponent;