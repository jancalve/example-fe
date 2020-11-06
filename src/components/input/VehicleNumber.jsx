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

export default function VehicleNumber(props) {
    const classes = useStyles();
    debugger;
    return (
        <div>
            <div shrink id="demo-simple-select-placeholder-label-label">
                Bilens registeringsnummer
            </div>
            <Field
                id="vehicleNumber"
               name="vehicleNumber"
               label="ABC 12345"
               onChange={props.onChange}
               value={props.value} />
            <ErrorMessage name="vehicleNumber" component="span" className="error" />
        </div>
    );
}

