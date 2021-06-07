import {
    makeStyles,
    Box,
    Button,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        maxWidth: '960px',
        margin: 'auto',
        marginBottom: theme.spacing(1),
    },
    text: {
        marginRight: theme.spacing(1),
    },
    textField: {
        width: '100%',
        margin: theme.spacing(0.5),
    },
    navigator: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        margin: theme.spacing(1)
    }
}));

function UniInterface(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>

            <Paper square className={classes.paper}>
                <TextField label='proposalId' className={classes.textField} variant='outlined' />
                <TextField label='support' className={classes.textField} variant='outlined' />
                <Button className={classes.button} variant='outlined'>vote</Button>
            </Paper>

            <Paper square className={classes.paper}>
                <TextField label='targets' className={classes.textField} variant='outlined' />
                <TextField label='values' className={classes.textField} variant='outlined' />
                <TextField label='signatures' className={classes.textField} variant='outlined' />
                <TextField label='calldatas' className={classes.textField} variant='outlined' />
                <TextField label='description' className={classes.textField} variant='outlined' />
                <Button className={classes.button} variant='outlined'>propose</Button>
            </Paper>

        </Box>
    );
}

export default UniInterface;

// address executor,
// address[] memory targets,
// uint256[] memory values,
// string[] memory signatures,
// bytes[] memory calldatas,
// bool[] memory withDelegatecalls,
// bytes32 ipfsHash

// <Box className={classes.navigator}>
//     <Button>
//         Vote
//     </Button>
//     <Button>
//         Commit
//     </Button>
//     <Button>
//         Propose
//     </Button>
// </Box>
