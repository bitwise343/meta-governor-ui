import {
    makeStyles,
    Box,
    Typography,
} from '@material-ui/core';


import GovIcon from '../components/GovIcon';
import UniVoteInterface from '../components/UniVoteInterface';
import UniProposalInterface from '../components/UniProposalInterface';
// import UniProposalViewer from '../components/UniProposalViewer';
import unilogo from '../assets/uniswap.png';


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
        padding: theme.spacing(0.5),
    }
}));

function UniPortal(props) {
    const classes = useStyles();

    return (
            <Box className={classes.root}>
                <Box className={classes.portalbox}>
                    <Typography>
                        uniswap
                    </Typography>
                    <GovIcon
                        logo={unilogo}
                        alt={"uni logo"}
                        linkTo="/"
                        className={classes.logo}
                    />
                </Box>

                <UniProposalInterface
                    provider={props.provider}
                    signer={props.signer}
                />

                <UniVoteInterface
                    provider={props.provider}
                    signer={props.signer}
                />

            </Box>
    );
}

export default UniPortal;
