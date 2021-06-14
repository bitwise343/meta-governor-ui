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
# TODO:
 - write code to retrieve past/present proposals
    - retrieve proposalCount
    - for i in range proposalCount:
        - query proposal status
        - if proposal is active:
            - find ipfs hash description to display with formatted actions

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
        // alignItems: 'center',
        padding: theme.spacing(1),
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

                <Paper className={classes.paper}>
                    <Markdown>
                        {markdown}
                    </Markdown>
                </Paper>

                <Paper className={classes.paper}>
                    <DelegationStats provider={props.provider}/>
                </Paper>


            </Box>
    );
}

export default Home;
