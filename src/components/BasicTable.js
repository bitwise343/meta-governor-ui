import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    table: {
        maxWidth: '960px',
    },
});

function createData(delegation, value) {
    return { delegation, value };
}

const rows = [
    createData('8,252 AAVE', '3,157,050'),
    createData('50,000 COMP', '21,693,500'),
    createData('5,000,000 UNI', '137,000,000'),
];

function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.root} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell># Tokens</TableCell>
                        <TableCell align="right">$ Value</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.delegation}>
                        <TableCell>{row.delegation}</TableCell>
                        <TableCell align="right">{row.value}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;
