import {
    makeStyles,
    Box,
    Button,
    Paper,
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

// import uclalogo from '../assets/blockchainatuclalogo.png';
import uclalogo from '../assets/dogeatuni.png';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
        width: '100%',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '960px',
        margin: 'auto',
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
            <Paper square className={classes.paper} elevation={10}>
                <Box className={classes.box}>
                    <div className={classes.titleAndLogo}>
                        <Link to="/">
                            <img src={uclalogo} className={classes.logo} alt="bc@LA logo"/>
                        </Link>

                        <Typography className={classes.title} variant='h6'>
                            governance
                        </Typography>
                    </div>

                    <Button className={classes.connectButton} onClick={props.connectButtonOnClick}>
                        connect
                    </Button>
                </Box>
            </Paper>
      </div>
    );
}

export default Header;
