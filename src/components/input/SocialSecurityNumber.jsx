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

export default function SocialSecurityNumber(props) {
    const classes = useStyles();

    return (
        <div className='form-item'>
            <div>
                Fødselsnummer
            </div>
            <Field id="socialSecurityNumber"
                       name="socialSecurityNumber"
                       onChange={props.onChange}
                       value={props.value}
                       helperText={props.touched.socialSecurityNumber ? props.errors.socialSecurityNumber : ""}
                       error={props.touched.socialSecurityNumber && Boolean(props.errors.socialSecurityNumber)}
                       className={props.errors.email && props.touched.email ? "input-error" : null}
                       label=""/>
            <div>
                <ErrorMessage name="socialSecurityNumber" component="span" className="error" />
            </div>
        </div>
    );
}

