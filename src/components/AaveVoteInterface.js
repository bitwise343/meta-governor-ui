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
    textField: {
        width: '100%',
        margin: theme.spacing(0.5),
    },
    button: {
        margin: theme.spacing(1)
    }
}));

function AaveVoteInterface(props) {
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
        const aave = aaveGovernanceV2(provider);
        try {
            await aave.connect(signer).submitVote(proposalId, support);
        } catch(err) {
            alert(err.message);
        }
    }

    return (
        <Paper className={classes.paper}>
            <TextField
                className={classes.textField}
                label='proposalId'
                variant='outlined'
                onChange={proposalIdOnChange}
            />
            <TextField
                className={classes.textField}
                label='support'
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

export default AaveVoteInterface;
