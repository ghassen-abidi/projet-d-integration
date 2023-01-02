import { SideBar } from "../components/SideBar";
import { DropzoneButton } from "../components/DropzoneButton";
import { createStyles, Select, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    height: "auto",
    paddingTop: 18,
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));
const AddEvent = () => {
  const { classes } = useStyles();
  return (
    <div>
      <h1>Add Event</h1>
      <div>
        <TextInput
          label="title"
          placeholder="event title"
          classNames={classes}
        />
        <TextInput
          label="desription"
          placeholder="event description"
          classNames={classes}
        />

        <DatePicker
          style={{ marginTop: 20 }}
          label="event date"
          placeholder=""
          classNames={classes}
          clearable={false}
        />
      </div>

      <DropzoneButton />
    </div>
  );
};

export default AddEvent;
