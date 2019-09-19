import React from "react";

import CardBox from "components/CardBox/index";
import IntlMessages from "util/IntlMessages";

import EditorTag from "components/EditorTag/index";
import IntfSyntax from "pages/network/interfaces";

class InterfacesEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { version: `6.1.0` };

    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  handleChange = e => {
    switch (e.target.type) {
      case "text":
        this.setState({ [e.target.id]: e.target.value });
        break;
      case "radio":
      case "radiosGroup":
      case "simpleSelect":
        this.setState({ [e.target.name]: e.target.value });
        break;
      case "checkbox":
        this.setState({ [e.target.id]: e.target.checked });
        break;
      default:
        if (e.target.name && e.target.value) {
          this.setState({ [e.target.name]: e.target.value });
        } else {
          console.log("unsupport editor:", e.target);
        }
        break;
    }
  };

  getValue = editor => {
    switch (editor.type) {
      case "text":
      case "checkbox":
      case "radio":
      case "radiosGroup":
      case "simpleSelect":
      case "switch":
      case "checkboxes":
        return this.state[editor.id] || ``;
      default:
        console.log("unsupport editor type:", editor.type);
        break;
    }
  };

  version = v => {
    return !v || v.start <= this.state.version;
  };

  condition = c => {
    return !c || c(this.state);
  };

  render() {
    return (
      <div className="animated slideInUpTiny animation-duration-3">
        {IntfSyntax.cards &&
          IntfSyntax.cards.map(card => {
            return (
              <div className="row" key={card.tag}>
                <CardBox
                  styleName="col-lg-12"
                  heading={<IntlMessages id={card.tag} />}
                >
                  <form className="row" noValidate autoComplete="off">
                    {card.editors.map(editor => {
                      const CustomTag = EditorTag(editor.type);
                      if (
                        this.version(editor.version) &&
                        this.condition(editor.condition)
                      ) {
                        return (
                          <div className="col-12" key={editor.id}>
                            <CustomTag
                              id={editor.id}
                              className={editor.className}
                              label={editor.label}
                              select={editor.select}
                              helperText={editor.helper}
                              placeholder={editor.placeholder}
                              defaultValue={editor.defaultValue}
                              options={editor.options}
                              onChange={this.handleChange}
                              value={this.getValue(editor)}
                            />
                          </div>
                        );
                      } else {
                        return <div key={editor.id} />;
                      }
                    })}
                  </form>
                </CardBox>
              </div>
            );
          })}
      </div>
    );
  }
}

export default InterfacesEdit;
