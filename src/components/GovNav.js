import {
    makeStyles,
    Box,
} from '@material-ui/core';

import GovIcon from '../components/GovIcon';
import aavelogo from '../assets/aave.png';
import compoundlogo from '../assets/compound.png';
import unilogo from '../assets/uniswap.png';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        maxWidth: '480px',
        width: '100%'
    },
}));


function GovNav() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <GovIcon
                logo={aavelogo}
                alt={"aave logo"}
                linkTo="/aave-portal"
                name="aave"
            />
            <GovIcon
                logo={compoundlogo}
                alt={"compound logo"}
                linkTo="/compound-portal"
                name="compound"
            />
            <GovIcon
                logo={unilogo}
                alt={"uni logo"}
                linkTo="/uni-portal"
                name="uniswap"
            />
        </Box>
    );
}

export default GovNav;
