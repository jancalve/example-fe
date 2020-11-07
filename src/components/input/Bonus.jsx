import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Bonus(props) {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    return (
        <div className='form-item'>
        <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                Din bonus
            </InputLabel>
            <Select
                labelId="demo-simple-select-placeholder-label-label"
                id="bonus"
                name="bonus"
                value={props.bonus}
                onChange={props.onChange}
                displayEmpty
                className={classes.selectEmpty}
            >
                <MenuItem value="">
                    <em>Velg din bonus</em>
                </MenuItem>
                <MenuItem value={30}>30%</MenuItem>
                <MenuItem value={40}>40%</MenuItem>
                <MenuItem value={50}>50%</MenuItem>
                <MenuItem value={60}>60%</MenuItem>
                <MenuItem value={70}>70%</MenuItem>
                <MenuItem value={80}>80%</MenuItem>
                <MenuItem value={90}>90%</MenuItem>
                <MenuItem value={100}>100%</MenuItem>
            </Select>
        </FormControl>
        </div>
    )

}
