import {
    makeStyles,
    Box,
    Paper,
    Typography,
} from '@material-ui/core';

import Markdown from '../components/Markdown.js';
import GovNav from '../components/GovNav';
import DelegationStats from '../components/DelegationStats';


const markdown = `
# DeFi Governance Meets Student Governance
The Blockchain at UCLA student organization is responsible for deliberating on
governance decisions across the following three decentralized protocols:

1. [Aave Protocol](https://aave.com/)
2. [Compound Finance](https://compound.finance)
3. [Uniswap](https://uniswap.org)

Although we are stewards of great value, we do not have access to the underlying
tokens which are used to delegate voting power to us. However, we aim to improve
security around interacting with decentralized protocols by introducing a suite
of smart contracts that enable student organizations to experiment with writing
Solidity and use their code to initiate votes and proposals!

# DAO on DAO Action
We point to the initial implementation of the [MetaDAO](https://github.com/jmb-42/meta-governor).
These smart contracts aim to give students the flexibility to implement
different methods of initiating votes while also adding more security for
delegators. For example, before a proposal can be submitted, students make a
commitment to the proposal arguments that gives delegators a 3 day window to
potentially remove their delegates, so that they can prevent harmful proposals
from ever making it to the protocol, but which does not allow them to undermine
student voting decisions. This would be totally optional from the side of the
delegators, though, and they could choose to allow a proposal they disagree with
to be submitted on-chain.

# Decentralized Governance Super Interface
This interface allows students to vote on each of the protocols we help
govern. Additionally, it provides an interface for submitting new proposals.
`;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '960px',
        margin: 'auto',
        padding: theme.spacing(1),
    },
    portalbox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(1),
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    markdownPaper: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        marginBottom: theme.spacing(1),
    }
}));

function Home(props) {
    const classes = useStyles();

    return (
            <Box className={classes.root}>
                <Box className={classes.portalbox}>
                    <Typography>
                        choose a portal
                    </Typography>
                    <GovNav />
                </Box>

                <Paper className={classes.paper} elevation={10}>
                    <DelegationStats provider={props.provider}/>
                </Paper>

                <Paper className={classes.markdownPaper} elevation={10}>
                    <Markdown>
                        {markdown}
                    </Markdown>
                </Paper>

            </Box>
    );
}

export default Home;
