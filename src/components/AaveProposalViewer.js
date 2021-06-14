import {
    useState,
} from 'react';

import {
    makeStyles,
    Paper,
} from '@material-ui/core';

import Markdown from './Markdown.js';


const markdown = `
# Proposal Viewer
 - proposal description
 - votes display
 - vote button
 - list of voted addresses as a scrollable table
   - sorted greatest to least
`;


const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(2),
        maxWidth: '960px',
        marginBottom: theme.spacing(1),
        width: '100%',
    },
}));

function AaveProposalViewer(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Markdown>
                {markdown}
            </Markdown>
        </Paper>
    );
}

export default AaveProposalViewer;
