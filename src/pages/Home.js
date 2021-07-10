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
# Democratizing DeFi Governance
The mostly prestigious student organizations across the whole of the entire
**United States of America** are given the super dank privilege of participating
in turbo-decentralized governance (tm) thanks to the cutting-edge
decentralization mechanism of decentralized governance whereby vote delegation
enables expert undergraduate students to command the power of millions without
the ability to spend a _single cent_ of it. This is decentralized collaboration
on both **steroids** and **crack** and enables the powerful innocent hopes and
dreams of aspiring computer scientists across this beautiful heckin GLOBERINO.

 - FUTURE OF FRANCE, can I get an AMEN?

# Decentralized Governance Super Interface
This interface allows the super-user to super-do new super-proposals on cool
awesome decentralized super-governance super-platforms directly on super-chain.
Yeah, this has costs in the form of ETHER, so buy the ultra sound super-money
today or get the rest of your meals from a super-soup kitchen for the rest of
your days!

# AH-MEN!
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
