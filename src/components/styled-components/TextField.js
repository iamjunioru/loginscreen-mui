import styled from 'styled-components';
import MuiTextField from '@material-ui/core/TextField';

const InputField = styled(MuiTextField)`
  &.MuiFormControl-root {
    margin: 7px 0;
    width: 100%;
    max-width: 480px;
  }

  .MuiFormLabel-root {
    &.Mui-focused {
      color: #2986cc;
    }
  }

  .MuiOutlinedInput-root {
    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border: 1px solid #2986cc;
      }
    }

    &.Mui-focused {
      color: #000;

      .MuiOutlinedInput-notchedOutline {
        border: 1px solid #2986cc;
      }
    }
  }
`;

export default InputField;
