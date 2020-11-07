import React from "react";
import { Field, ErrorMessage } from "formik";

export default function SocialSecurityNumber(props) {

    return (
        <div className="form-item">
            <div className="form-item-header">
                Fødselsnummer
            </div>
            <Field
                       id="socialSecurityNumber"
                       name="socialSecurityNumber"
                       onChange={props.onChange}
                       value={props.value}
                       error={props.touched.socialSecurityNumber && Boolean(props.errors.socialSecurityNumber)}
                       className={props.errors.email && props.touched.email ? "input-error" : null}
                       label=""/>
            <div>
                <ErrorMessage name="socialSecurityNumber" component="span" className="error" />
            </div>
        </div>
    );
}

