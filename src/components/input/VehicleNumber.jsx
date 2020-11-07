import React from "react";
import { Field, ErrorMessage } from "formik";


export default function VehicleNumber(props) {
    return (
        <div className="form-item">
            <div className="form-item-header">
                Bilens registeringsnummer
            </div>
            <Field
                id="vehicleNumber"
               name="vehicleNumber"
                placeholder="AB 12345"
               onChange={props.onChange}
               value={props.value} />
             <div>
            <ErrorMessage name="vehicleNumber" component="span" className="error" />
             </div>
        </div>
    );
}

