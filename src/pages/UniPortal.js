import {
    makeStyles,
    Box,
    Typography,
} from '@material-ui/core';


import GovIcon from '../components/GovIcon';
import UniVoteInterface from '../components/UniVoteInterface';
import UniProposalInterface from '../components/UniProposalInterface';
import unilogo from '../components/uniswap.png';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '960px',
        margin: 'auto',
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

                <UniVoteInterface
                    provider={props.provider}
                    signer={props.signer}
                />

                <UniProposalInterface
                    provider={props.provider}
                    signer={props.signer}
                />

            </Box>
    );
}

export default UniPortal;
