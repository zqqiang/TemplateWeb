import React from "react";
import TextField from "@material-ui/core/TextField";

class TextFields extends React.Component {
  render() {
    const props = this.props;
    const selectProps = props.select
      ? { select: true, SelectProps: { native: true } }
      : {};

    return (
      <div className="col-md-3 col-12">
        <TextField
          id={props.id}
          {...selectProps}
          label={props.label}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          // value={props.state.value}
          // onChange={props.handleChange}
          helperText={props.help}
          margin="normal"
          fullWidth
        >
          {props.options &&
            props.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </TextField>
      </div>
    );
  }
}

export default TextFields;
