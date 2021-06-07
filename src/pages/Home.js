import {
    makeStyles,
    Box,
    Paper,
    Typography,
} from '@material-ui/core';

import GovNav from '../components/GovNav';
import DelegationStats from '../components/DelegationStats';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '480px',
        margin: 'auto',
    },
    portalbox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(1),
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0.5),
    }
}));

function Home(props) {
    const classes = useStyles();

    return (
            <Box className={classes.root}>
                <Box className={classes.portalbox}>
                    <Typography>
                        choose a portal
                    </Typography>
                    <GovNav />
                </Box>

                <Paper square className={classes.paper}>
                    <DelegationStats provider={props.provider}/>
                </Paper>

            </Box>
    );
}

export default Home;
