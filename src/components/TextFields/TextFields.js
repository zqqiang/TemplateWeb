import React from "react";
import TextField from "@material-ui/core/TextField";

class TextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.defaultValue };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const props = this.props;

    return (
      <div className="col-md-3 col-12">
        <TextField
          id={props.id}
          label={props.label}
          placeholder={props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
          helperText={props.help}
          margin="normal"
          fullWidth
        />
      </div>
    );
  }
}

export default TextFields;
