import {
    useState,
} from 'react';

import {
    makeStyles,
    Box,
    Button,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';

import Markdown from './Markdown.js';

import {
    uniContract,
} from '../scripts/utils';


const useStyles = makeStyles((theme) => ({
    box: {
        width: '100%',
        marginBottom: theme.spacing(1),
    },
    descriptionBox: {
        width: '100%',
        minHeight: theme.spacing(2),
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#bdbdbd',
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        '&:hover': {
            borderColor: 'black',
        }
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(1),
        maxWidth: '960px',
        margin: 'auto',
        marginBottom: theme.spacing(1),
        width: '100%',
    },
    text: {
        color: '#616161',
    },
    textField: {
        width: '100%',
        marginBottom: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1)
    },
    markdownViewer: {
        // padding: theme.spacing(1)
    }
}));

function UniProposalInterface(props) {
    const classes = useStyles();

    const [targets, setTargets] = useState(0);
    const [values, setValues] = useState(0);
    const [signatures, setSignatures] = useState(0);
    const [calldatas, setCalldatas] = useState(0);
    const [description, setDescription] = useState(
        '# click here to edit the description\n\n## this is a markdown editor'
    );
    const [descriptionFocus, setDescriptionFocus] = useState(false);

    const proposeOnClick = async (
            provider,
            signer,
            targets,
            values,
            signatures,
            calldatas,
            description
        ) => {
        const uni = uniContract(provider);
        try {
            await uni.connect(signer).propose(
                targets,
                values,
                signatures,
                calldatas,
                description
            );
        } catch(err) {
            alert(err.message);
        }
    }

    return (
        <Paper className={classes.paper}>
        <Box
            className={classes.descriptionBox}
            onClick={() => setDescriptionFocus(true)}
            onBlur={() => setDescriptionFocus(false)}
        >
            {
                descriptionFocus ?
                <TextField
                    className={classes.textField}
                    multiline
                    autoFocus
                    rowsMax={100}
                    value={description}
                    label='description'
                    onChange={e => setDescription(e.target.value)}
                    InputProps={{ disableUnderline: true }}
                /> :

                <Box className={classes.box}>
                    <Typography className={classes.text} variant='caption'>
                        description
                    </Typography>

                     <Markdown className={classes.markdownViewer} >
                         {description}
                    </Markdown>
                </Box>
            }
        </Box>
            <TextField
                className={classes.textField}
                label='targets'
                variant='outlined'
                onChange={e => setTargets(e.target.value)}
            />
            <TextField
                className={classes.textField}
                label='values'
                variant='outlined'
                onChange={e => setValues(e.target.value)}
            />
            <TextField
                className={classes.textField}
                label='signatures'
                variant='outlined'
                onChange={e => setSignatures(e.target.value)}
            />
            <TextField
                className={classes.textField}
                label='calldatas'
                variant='outlined'
                onChange={e => setCalldatas(e.target.value)}
            />

            <Button
                className={classes.button}
                variant='outlined'
                onClick={
                    () => proposeOnClick(
                        props.provider,
                        props.signer,
                        targets,
                        values,
                        signatures,
                        calldatas,
                        description
                    )
                }
            >
                propose
            </Button>
        </Paper>
    );
}

export default UniProposalInterface;
