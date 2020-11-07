import React from "react";
import VehicleNumber from "./input/VehicleNumber";
import Bonus from "./input/Bonus";
import SocialSecurityNumber from "./input/SocialSecurityNumber";
import Text from "./input/Text";
import Email from "./input/Email";
import { createAgreement } from "../api/api.js";

export const DesktopForm = (props) => {
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

            createAgreement(data.get("firstName"),
                data.get("lastName"),
                data.get("email"),
                data.get("bonus"),
                data.get("socialSecurityNumber"),
                data.get("vehicleNumber"))
                .then((response) => {
                    alert("Avtale opprettet. Ditt avtalenummer er " + response.data.agreementId);
                })
                .catch(function (error) {
                    alert("En feil oppstod da avtalen skulle opprettes");
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
                <table>
                    <tr>
                        <th>

                        <Text onChange={change.bind(null, "firstName")}
                              touched={touched}
                              errors={errors}
                              id={"firstName"}
                              value={firstName}
                              fieldHeader={"Fornavn"} />

                        </th>
                        <th>

                        <Text onChange={change.bind(null, "lastName")}
                              touched={touched}
                              errors={errors}
                              id={"lastName"}
                              value={lastName}
                              fieldHeader={"Etternavn"}/>

                        </th>
                    </tr>
                </table>

                <Email onChange={change.bind(null, "email")}
                       touched={touched}
                       errors={errors}
                       value={email} />

                <div className="btn-container">
                    <button type="submit" className="btn-submit" disabled={!isValid}>Beregn pris</button>
                    <button className="btn-reset" type="reset">Avbryt</button>
                </div>
            </div>
        </form>

    );
};
