import TextField from "components/TextFields/TextFields";
import RadioButtonsGroup from "components/Selection/RadioButtons/RadioButtonsGroup";
import Switchs from "components/Switchs/Switchs";

const EditorTag = type => {
  if (type === "text") return TextField;
  if (type === "radiosGroup") return RadioButtonsGroup;
  if (type === "switch") return Switchs;
};

export default EditorTag;
