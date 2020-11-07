import React from "react";
import { Field, ErrorMessage } from "formik";


export default function Email(props) {

    return (
        <div className="form-item">
            <div className="form-item-header">
                E-post
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
