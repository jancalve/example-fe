import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Bonus(props) {

    return (
        <div className="form-item">
            <div className="form-item-header">
                Bonus <FontAwesomeIcon color="black" icon="exclamation-circle" />
            </div>
            <select
                name="bonus"
                value={props.bonus}
                onChange={props.handleChange}
                style={{ display: "block" }}
            >
                <option value="" label="Velg din bonus" />
                <option value="30" label="30%" />
                <option value="40" label="40%" />
                <option value="50" label="50%" />
                <option value="60" label="60%" />
                <option value="70" label="70%" />
                <option value="80" label="80%" />
                <option value="90" label="90%" />
                <option value="100" label="100%" />
            </select>
            {props.errors.bonus && props.touched.bonus}
            <div className="input-error">
                {props.errors.bonus}

            </div>
        </div>
    )

}
