import React from "react";

import CardBox from "components/CardBox/index";
import IntlMessages from "util/IntlMessages";

import EditorTag from "components/EditorTag/index";
import IntfSyntax from "pages/network/interfaces";

class Interfaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    switch (e.target.type) {
      case "text":
        this.setState({ [e.target.id]: e.target.value });
        break;
      case "radio":
      case "radioGroup":
      case "simpleSelect":
        this.setState({ [e.target.name]: e.target.value });
        break;
      case "checkbox":
        this.setState({ [e.target.id]: e.target.checked });
        break;
      default:
        console.log("unsupport editor type:", e.target.type);
        break;
    }
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
                        !editor.condition ||
                        (editor.condition && editor.condition(this.state))
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
                              value={this.state.value}
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

export default Interfaces;
