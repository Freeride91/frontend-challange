import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { theme } from "../theme/theme";

export const CooltixCheckbox = withStyles({
  root: {
    color: theme.colors.cooltixBrand,
    "&$checked": {
      color: theme.colors.cooltixBrand,
    },
    padding: "6px 8px",
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
