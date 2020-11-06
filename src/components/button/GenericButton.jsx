import React from "react";
import { Button } from '@material-ui/core';

class GenericButton extends React.Component {
    render() {
        return (
            <Button type="submit" disabled={this.props.isValid} color={this.props.color}>{this.props.text}</Button>
        )
    }
}

export default GenericButton;
