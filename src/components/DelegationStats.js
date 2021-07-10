import {
    useEffect,
    useState
} from 'react';
import {
    makeStyles,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core';

import {
    getTableData
}  from '../scripts/utils';


async function onClick(provider, setter) {
    const rows = await getTableData(provider);
    setter(rows);
}

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    }
}));


function DelegationStats(props) {
    const classes = useStyles();

    const [rows, setRows] = useState([
        { delegation: '0 AAVE', value: '$ 0' },
        { delegation: '0 COMP', value: '$ 0' },
        { delegation: '0 UNI', value: '$ 0' }
    ]);

    useEffect(() => {
        const checkProvider = async() => {
          const chainId = await (await props.provider.getNetwork()).chainId;
          if (chainId === 1) {
            onClick(props.provider, setRows);
          }
          else {
            alert('Invalid chainId. Please connect to ETH mainnet then refresh the page.')
          }
        };
        checkProvider();
    }, [props.provider]);

    return (
        <TableContainer component={Box} className={classes.root}>
        <Typography variant='h6'>
            Blockchain at UCLA Delegation
        </Typography>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Token</TableCell>
                        <TableCell align="right">Vote Weight</TableCell>
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

export default DelegationStats;
