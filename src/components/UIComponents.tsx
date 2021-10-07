import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
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


export const ErrorMessageWrapper = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: darkred;
`;
