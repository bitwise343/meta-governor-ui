import {
    makeStyles,
    Button,
    Paper,
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import uclalogo from '../components/blockchainatuclalogo.png';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    titleAndLogo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        ...theme.typography.button,
    },
    logo: {
        maxHeight: '69px',
        width: 'auto',
        marginLeft: theme.spacing(0.5),
    },
    connectButton: {
        marginRight: theme.spacing(0.5),
    }
}));

function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper square className={classes.paper}>
                <div className={classes.titleAndLogo}>
                    <Link to="/">
                        <img src={uclalogo} className={classes.logo} alt="bc@LA logo"/>
                    </Link>

                    <Typography className={classes.title} variant='h6'>
                        governance portal
                    </Typography>
                </div>

                <Button className={classes.connectButton}>
                    connect
                </Button>
            </Paper>
      </div>
    );
}

export default Header;
