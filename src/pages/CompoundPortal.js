import {
    makeStyles,
    Box,
    Typography,
} from '@material-ui/core';


import GovIcon from '../components/GovIcon';
import CompoundVoteInterface from '../components/CompoundVoteInterface';
import CompoundProposalInterface from '../components/CompoundProposalInterface';
// import CompoundProposalViewer from '../components/CompoundProposalViewer';
import compoundlogo from '../assets/compound.png';


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

function CompoundPortal(props) {
    const classes = useStyles();

    return (
            <Box className={classes.root}>
                <Box className={classes.portalbox}>
                    <Typography>
                        compound finance
                    </Typography>
                    <GovIcon
                        logo={compoundlogo}
                        alt={"compound logo"}
                        linkTo="/"
                        className={classes.logo}
                    />
                </Box>

                <CompoundProposalInterface
                    provider={props.provider}
                    signer={props.signer}
                />

                <CompoundVoteInterface
                    provider={props.provider}
                    signer={props.signer}
                />

            </Box>
    );
}

export default CompoundPortal;
