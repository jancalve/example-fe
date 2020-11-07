import React from "react";
import { Field, ErrorMessage } from "formik";



export default function Text(props) {

    return (
        <div className="form-item">
            <div className="form-item-header">
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
