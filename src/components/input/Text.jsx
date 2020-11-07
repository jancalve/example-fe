import React from "react";
import { makeStyles } from '@material-ui/core/styles';
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
        <div className='form-item'>
            <div>
                {props.fieldHeader}
            </div>
            <Field
                id={props.id}
                name={props.id}
                onChange={props.onChange}
                value={props.value}
                label="" />
            <div>
              <ErrorMessage name={props.id} component="span" className="error" />
            </div>
        </div>
    );
}
