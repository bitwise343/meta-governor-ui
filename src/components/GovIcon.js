import {
    Link
} from 'react-router-dom';
import {
    makeStyles,
    Box,
    Typography,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(1),
        alignItems: 'center',
    },
    logo: {
        maxHeight: '64px',
        borderRadius: '50%',
    },
    text: {
        ...theme.typography.button,
    }
}));

function GovIcon(props) {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Link to={props.linkTo}>
                <img src={props.logo} alt={props.alt} className={classes.logo} />
            </Link>
            <Typography className={classes.text}>{props.name}</Typography>
        </Box>
    );
}

export default GovIcon;
