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
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

function PaperBg(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            {props.children}
        </Paper>
    );
}

export default PaperBg;
