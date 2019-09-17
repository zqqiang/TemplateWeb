import TextField from "components/TextFields/TextFields";
import RadioButtonsGroup from "components/Selection/RadioButtons/RadioButtonsGroup";
import Switchs from "components/Switchs/Switchs";
import SimpleSelect from "components/Selects/SimpleSelect";
import Checkboxes from "components/Selection/Checkboxes/Checkboxes";

const EditorTag = type => {
  if (type === "text") return TextField;
  if (type === "radiosGroup") return RadioButtonsGroup;
  if (type === "switch") return Switchs;
  if (type === "simpleSelect") return SimpleSelect;
  if (type === "checkboxes") return Checkboxes;
};

export default EditorTag;
