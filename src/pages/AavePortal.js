import {
    makeStyles,
    Box,
    Typography,
} from '@material-ui/core';


import GovIcon from '../components/GovIcon';
import AaveVoteInterface from '../components/AaveVoteInterface';
import AaveProposalInterface from '../components/AaveProposalInterface';
// import AaveProposalViewer from '../components/AaveProposalViewer';
import aavelogo from '../assets/aave.png';

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

                <AaveProposalInterface
                    provider={props.provider}
                    signer={props.signer}
                />

                <AaveVoteInterface
                    provider={props.provider}
                    signer={props.signer}
                />

            </Box>
    );
}

export default AavePortal;
