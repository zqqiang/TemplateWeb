import React from "react";
import TextField from "@material-ui/core/TextField";

class TextFields extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className="col-md-3 col-12">
        <TextField
          id={props.id}
          label={props.label}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          // value={props.state.value}
          // onChange={props.handleChange}
          helperText={props.help}
          margin="normal"
          fullWidth
        />
      </div>
    );
  }
}

export default TextFields;
