import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { Formik, Field, ErrorMessage } from "formik";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Text(props) {
    const classes = useStyles();

    return (
        <div>
            <div>
                {props.fieldHeader}
            </div>
            <Field
                id={props.id}
                name={props.id}
                onChange={props.onChange}
                value={props.value}
                label="" />
            <ErrorMessage name="firstName" component="span" className="error" />
        </div>
    );
}
