import {
    makeStyles,
    Box,
    Typography,
} from '@material-ui/core';


import GovIcon from '../components/GovIcon';
import AaveVoteInterface from '../components/AaveVoteInterface';
import AaveProposalInterface from '../components/AaveProposalInterface';
import aavelogo from '../components/aave.png';


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

function AavePortal(props) {
    const classes = useStyles();

    return (
            <Box className={classes.root}>
                <Box className={classes.portalbox}>
                    <Typography>
                        aave protocol
                    </Typography>
                    <GovIcon
                        logo={aavelogo}
                        alt={"aave logo"}
                        linkTo="/"
                        className={classes.logo}
                    />
                </Box>

                <AaveVoteInterface
                    provider={props.provider}
                    signer={props.signer}
                />

                <AaveProposalInterface
                    provider={props.provider}
                    signer={props.signer}
                />

            </Box>
    );
}

export default AavePortal;
