import {
    Link
} from 'react-router-dom';
import {
    makeStyles,
    Typography,
} from '@material-ui/core';

import GovIcon from '../components/GovIcon';
import aavelogo from '../components/aave.png';
import compoundlogo from '../components/compound.png';
import unilogo from '../components/uniswap.png';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
}));


function GovNav() {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Link to="/aave-portal">
                    <GovIcon logo={aavelogo} alt={"aave logo"} />
                </Link>

                <Link to="/compound-portal">
                    <GovIcon logo={compoundlogo} alt={"compound logo"} />
                </Link>

                <Link to="/uni-portal">
                    <GovIcon logo={unilogo} alt={"uni logo"} />
                </Link>
            </div>
    );
}

export default GovNav;
