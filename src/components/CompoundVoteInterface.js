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
    compoundContract,
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

function CompoundVoteInterface(props) {
    const classes = useStyles();

    const [proposalId, setProposalId] = useState(0);
    const [support, setSupport] = useState(false);

    const proposalIdOnChange = e => {
        setProposalId(e.target.value);
    }

    const supportOnChange = e => {
        setSupport(e.target.value);
    }

    const voteOnClick = async (provider, signer, proposalId, support) => {
        const compound = compoundContract(provider);
        try {
            await compound.connect(signer).submitVote(proposalId, support);
        } catch(err) {
            alert(err.message);
        }
    }

    return (
        <Paper square className={classes.paper}>
            <TextField
                label='proposalId'
                className={classes.textField}
                variant='outlined'
                onChange={proposalIdOnChange}
            />
            <TextField
                label='support'
                className={classes.textField}
                variant='outlined'
                onChange={supportOnChange}
            />
            <Button
                className={classes.button}
                variant='outlined'
                onClick={
                    () => voteOnClick(
                        props.provider, props.signer, proposalId, support
                    )
                }
            >
                vote
            </Button>
        </Paper>
    );
}

export default CompoundVoteInterface;
