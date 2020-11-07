
import Header from "./header/Header";



import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import * as Yup from 'yup'


const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
            .spacing.unit * 5}px`
    },
    container: {
        maxWidth: "200px"
    }
});

const validationSchema = Yup.object({

    vehicleNumber: Yup.string()
        .required("Dette feltet er påkrevd.")
        .min(4, 'Registreringsnummeret er for kort')
        .max(8, 'Registreringsnummeret er for langt'),
    email: Yup.string()
        .email('Skriv inn en gyldig epostadresse')
        .required("E-post er påkrevd."),
    socialSecurityNumber: Yup.string()
        .min(11, 'Nummeret er for kort.')
        .max(11, 'Nummeret er for langt.')
        .required('Required'),
    firstName: Yup.string()
        .required('Fornavn er påkrevd.'),
    lastName: Yup.string()
        .required('Etternavn er påkrevd.')
});


class Agreement extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const initialValues = {
            vehicleNumber: "123",
            firstName: 'F',
            lastName: 'Lastname test',
            socialSecurityNumber: '123',
            bonus: '30',
            email: 'email@test.com'
        };

        return (
            <React.Fragment>
                <div className="form-root">
                    <div className="form-header">
                        <h1>Kjøp bilforsikring</h1>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                        </div>
                    </div>
                    <Formik
                        render={props => <Form {...props} />}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Agreement);
