import {
    useState,
} from 'react';

import {
    makeStyles,
    Button,
    Paper,
    TextField,
} from '@material-ui/core';

import {
    aaveGovernanceV2,
} from '../scripts/utils';


const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        maxWidth: '960px',
        marginBottom: theme.spacing(1),
        width: '100%',
    },
    text: {
        marginRight: theme.spacing(1),
    },
    textField: {
        width: '100%',
        margin: theme.spacing(0.5),
    },
    button: {
        margin: theme.spacing(1)
    }
}));

function AaveProposalInterface(props) {
    const classes = useStyles();

    const [executor, setExecutor] = useState();
    const [targets, setTargets] = useState();
    const [values, setValues] = useState();
    const [signatures, setSignatures] = useState();
    const [calldatas, setCalldatas] = useState();
    const [withDelegatecalls, setWithDelegatecalls] = useState();
    const [ipfsHash, setIpfsHash] = useState();

    const proposeOnClick = async () => {
        try {
            const aave = aaveGovernanceV2(props.provider);
            await aave.connect(props.signer).create(
                executor,
                targets,
                values,
                signatures,
                calldatas,
                withDelegatecalls,
                ipfsHash
            );
        } catch(err) {
            alert(err.message);
        }
    };

    return (
        <Paper className={classes.paper}>
            <TextField
                className={classes.textField}
                label='executor'
                variant='outlined'
                onChange={e => setExecutor(e.target.value)}
            />
            <TextField
                className={classes.textField}
                label='targets'
                variant='outlined'
                onChange={e => setTargets(e.target.value)}
            />
            <TextField
                className={classes.textField}
                label='values'
                variant='outlined'
                onChange={e => setValues(e.target.value)}
            />
            <TextField
                className={classes.textField}
                label='signatures'
                variant='outlined'
                onChange={e => setSignatures(e.target.value)}
            />
            <TextField
                className={classes.textField}
                label='calldatas'
                variant='outlined'
                onChange={e => setCalldatas(e.target.value)}
            />
            <TextField
                className={classes.textField}
                label='withDelegatecalls'
                variant='outlined'
                onChange={e => setWithDelegatecalls(e.target.value)}
            />
            <TextField
                className={classes.textField}
                label='ipfsHash'
                variant='outlined'
                onChange={e => setIpfsHash(e.target.value)}
            />

            <Button
                className={classes.button}
                variant='outlined'
                onClick={proposeOnClick}
            >
                propose
            </Button>
        </Paper>
    );
}

export default AaveProposalInterface;
