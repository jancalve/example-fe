import { makeStyles } from '@material-ui/core/styles';
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
        <div className='form-item'>
            <div>
                Epost
            </div>
            <Field
                type="email"
                id="email"
                name="email"
                onChange={props.onChange}
                value={props.value}
                className={props.errors.email && props.touched.email ? "input-error" : null}
                label=""/>
                <div>
            <ErrorMessage name="email" component="span" className="error" />
                </div>
        </div>
    );
}
