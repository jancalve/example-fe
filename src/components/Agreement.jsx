
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
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
            .spacing.unit * 5}px`
    },
    container: {
        maxWidth: "200px"
    }
});

const validationSchema = Yup.object({

    myTest: Yup.string()
        .required("Vehicle number is required")
        .min(1, 'Too Short!')
        .max(2, 'Too Long!'),
    vehicleNumber: Yup.string()
        .required("Vehicle number is required")
        .min(1, 'Too Short!')
        .max(2, 'Too Long!'),
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(4, 'Too Long!')
        .required("Email is required"),
    socialSecurityNumber: Yup.string()
        .min(2, 'Too Short!')
        .max(4, 'Too Long!')
        .required('Required'),
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(4, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(4, 'Too Long!')
        .required('Required')
});


class Agreement extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props;
        const initialValues = {
            vehicleNumber: "123",
            firstName: 'F',
            lastName: 'Lastname test',
            socialSecurityNumber: '123',
            bonus: '30',
            email: 'email@test.com',
            myTest: 'Test'
        };

        return (
            <React.Fragment>
                        <Header/>
                        <Formik
                            render={props => <Form {...props} />}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Agreement);
