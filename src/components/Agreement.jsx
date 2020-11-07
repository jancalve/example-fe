import React, { Component } from "react";
import { Formik } from "formik";
import { DesktopForm } from "./DesktopForm";
import { MobileForm } from "./MobileForm";
import * as Yup from "yup"



const validationSchema = Yup.object({

    vehicleNumber: Yup.string()
        .required("Dette feltet er påkrevd")
        .min(4, "Registreringsnummeret er for kort")
        .max(8, "Registreringsnummeret er for langt"),
    email: Yup.string()
        .email("Skriv inn en gyldig epostadresse")
        .required("E-post er påkrevd."),
    socialSecurityNumber: Yup.string()
        .min(11, "Nummeret er for kort")
        .max(11, "Nummeret er for langt")
        .required("Fødselsnummer er påkrevd"),
    firstName: Yup.string()
        .required("Fornavn er påkrevd"),
    lastName: Yup.string()
        .required("Etternavn er påkrevd")
});


class Agreement extends Component {

    render() {
        const initialValues = {
            vehicleNumber: "",
            firstName: "",
            lastName: "",
            socialSecurityNumber: "",
            bonus: "",
            email: ""
        };

        const isMobile = this._isMobile();

        return (
            <React.Fragment>
                <div className="form-root">
                    <div className="form-header">
                        <h1 className="form-header-title">Kjøp bilforsikring</h1>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                        </div>
                    </div>

                    { isMobile ?
                            <Formik
                            render={props => <MobileForm {...props} />}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            />
                    :
                            <Formik
                            render={props => <DesktopForm {...props} />}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            />
                    }


                </div>
            </React.Fragment>
        );
    }

    _isMobile = () => {
        return window.matchMedia("(max-width: 960px)").matches;
    };
}

export default (Agreement);
