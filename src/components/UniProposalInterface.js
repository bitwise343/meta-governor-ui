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
    uniContract,
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

function UniProposalInterface(props) {
    const classes = useStyles();

    const [targets, setTargets] = useState(0);
    const [values, setValues] = useState(0);
    const [signatures, setSignatures] = useState(0);
    const [calldatas, setCalldatas] = useState(0);
    const [description, setDescription] = useState(0);

    const targetsOnChange = e => {
        setTargets(e.target.value);
    }

    const valuesOnChange = e => {
        setValues(e.target.value);
    }

    const signaturesOnChange = e => {
        setSignatures(e.target.value);
    }

    const calldatasOnChange = e => {
        setCalldatas(e.target.value);
    }

    const descriptionOnChange = e => {
        setDescription(e.target.value);
    }

    const proposeOnClick = async (
            provider,
            signer,
            targets,
            values,
            signatures,
            calldatas,
            description
        ) => {
        const uni = uniContract(provider);
        try {
            await uni.connect(signer).propose(
                targets,
                values,
                signatures,
                calldatas,
                description
            );
        } catch(err) {
            alert(err.message);
        }
    }

    return (
        <Paper square className={classes.paper}>
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
                label='description'
                variant='outlined'
                onChange={descriptionOnChange}
            />

            <Button
                className={classes.button}
                variant='outlined'
                onClick={
                    () => proposeOnClick(
                        props.provider,
                        props.signer,
                        targets,
                        values,
                        signatures,
                        calldatas,
                        description
                    )
                }
            >
                propose
            </Button>
        </Paper>
    );
}

export default UniProposalInterface;
