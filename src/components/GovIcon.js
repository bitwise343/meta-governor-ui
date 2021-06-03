import {
    makeStyles,
    Paper,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        textAlign: 'center',
    },
    logo: {
        maxHeight: '50px',
        width: 'auto',
        borderRadius: '50%',
    }
}));

function GovIcon(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <img src={props.logo} alt={props.alt} className={classes.logo} />
        </Paper>
    );
}

export default GovIcon;
