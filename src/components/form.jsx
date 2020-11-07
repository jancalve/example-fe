import React from "react";
import Button from "@material-ui/core/Button";
import VehicleNumber from "./input/VehicleNumber";
import Bonus from "./input/Bonus";
import SocialSecurityNumber from "./input/SocialSecurityNumber";
import Text from "./input/Text";
import Email from "./input/Email";
import { createAgreement } from "../api/api.js";
import {Formik} from "formik";

export const Form = (props) => {
    const {
        values: { vehicleNumber, bonus, socialSecurityNumber, firstName, lastName, email},
        errors,
        touched,
        handleChange,
        isValid,
        setFieldTouched
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };


    return (


        <form onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.target);

            createAgreement(data.get('firstName'),
                data.get('lastName'),
                data.get('email'),
                data.get('bonus'),
                data.get('socialSecurityNumber'),
                data.get('vehicleNumber'))
                .then((response) => {
                    if (response.status === 200) {
                     console.log('success');
                    }
                    else {
                        console.log('failure');
                    }
                })
            }}>

            <div className="form-content">

                <VehicleNumber
                    touched={touched}
                    errors={errors}
                    onChange={change.bind(null, "vehicleNumber")}
                    value={vehicleNumber}/>

                <Bonus touched={touched}
                       errors={errors}
                       onChange={change.bind(null, "bonus")}
                       value={bonus}/>

                <SocialSecurityNumber
                    touched={touched}
                    errors={errors}
                    onChange={change.bind(null, "socialSecurityNumber")}
                    value={socialSecurityNumber}/>

                <Text onChange={change.bind(null, "firstName")}
                      touched={touched}
                      errors={errors}
                      id={'firstName'}
                      value={firstName}
                      fieldHeader={'Fornavn'} />

                <Text onChange={change.bind(null, "lastName")}
                      touched={touched}
                      errors={errors}
                      id={'lastName'}
                      value={lastName}
                      fieldHeader={'Etternavn'}/>

                <Email onChange={change.bind(null, "email")}
                       touched={touched}
                       errors={errors}
                       value={email} />


                <Button type="submit" disabled={!isValid} color={'primary'}>{'Beregn pris'}</Button>
                <Button type="reset" color={'secondary'}>{'Avbryt'}</Button>
            </div>
        </form>

    );
};
