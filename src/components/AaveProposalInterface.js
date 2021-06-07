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
    aaveContract,
} from '../scripts/utils';


const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        maxWidth: '960px',
        margin: 'auto',
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

    const [executor, setExecutor] = useState(0);
    const [targets, setTargets] = useState(0);
    const [values, setValues] = useState(0);
    const [signatures, setSignatures] = useState(0);
    const [calldatas, setCalldatas] = useState(0);
    const [withDelegatecalls, setWithDelegatecalls] = useState(0);
    const [ipfsHash, setIpfsHash] = useState(0);

    const executorOnChange = e => {
        setExecutor(e.target.value);
    };

    const targetsOnChange = e => {
        setTargets(e.target.value);
    };

    const valuesOnChange = e => {
        setValues(e.target.value);
    };

    const signaturesOnChange = e => {
        setSignatures(e.target.value);
    };

    const calldatasOnChange = e => {
        setCalldatas(e.target.value);
    };

    const withDelegatecallsOnChange = e => {
        setWithDelegatecalls(e.target.value);
    };

    const ipfsHashOnChange = e => {
        setIpfsHash(e.target.value);
    };

    const proposeOnClick = async (
            provider,
            signer,
            executor,
            targets,
            values,
            signatures,
            calldatas,
            withDelegatecalls,
            ipfsHash
        ) => {
        const aave = aaveContract(provider);
        try {
            await aave.connect(signer).create(
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
        <Paper square className={classes.paper}>
            <TextField
                className={classes.textField}
                label='executor'
                variant='outlined'
                onChange={executorOnChange}
            />
            <TextField
                className={classes.textField}
                label='targets'
                variant='outlined'
                onChange={targetsOnChange}
            />
            <TextField
                className={classes.textField}
                label='values'
                variant='outlined'
                onChange={valuesOnChange}
            />
            <TextField
                className={classes.textField}
                label='signatures'
                variant='outlined'
                onChange={signaturesOnChange}
            />
            <TextField
                className={classes.textField}
                label='calldatas'
                variant='outlined'
                onChange={calldatasOnChange}
            />
            <TextField
                className={classes.textField}
                label='withDelegatecalls'
                variant='outlined'
                onChange={withDelegatecallsOnChange}
            />
            <TextField
                className={classes.textField}
                label='ipfsHash'
                variant='outlined'
                onChange={ipfsHashOnChange}
            />

            <Button
                className={classes.button}
                variant='outlined'
                onClick={
                    () => proposeOnClick(
                        props.provider,
                        props.signer,
                        executor,
                        targets,
                        values,
                        signatures,
                        calldatas,
                        withDelegatecalls,
                        ipfsHash
                    )
                }
            >
                propose
            </Button>
        </Paper>
    );
}

export default AaveProposalInterface;
