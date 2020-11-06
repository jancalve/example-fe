import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
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

export default function Email(props) {
    const classes = useStyles();

    return (
        <FormControl>
            <div>
                Epost
            </div>
            <Field
                type="text"
                id="email"
                name="email"
                onChange={props.onChange}
                value={props.value}
                className={props.errors.email && props.touched.email ? "input-error" : null}
                label=""/>
            <ErrorMessage name="email" component="span" className="error" />
        </FormControl>
    );
}
