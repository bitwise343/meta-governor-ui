import {
    makeStyles,
    Paper,
    Typography,
} from '@material-ui/core';

import GovNav from '../components/GovNav';
import BasicTable from '../components/BasicTable';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '960px',
        margin: 'auto',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
    }
}));

function Home() {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Paper className={classes.paper} >
                    <Typography variant='h6'>
                        about
                    </Typography>
                    <Typography variant='body'>
                        blockchain@UCLA helps govern multiple defi protocols via vote delegation. It is our honor and privilege to be delegates for Aave, Compound, and Uniswap!
                    </Typography>
                    <Typography variant='body'>
                        choose your portal:
                    </Typography>
                    <GovNav />

                </Paper>

                <BasicTable />
            </div>
    );
}

export default Home;
