import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';

const Button = styled(MuiButton)`
  &.MuiButton-root {
    background-color: #2986cc;
    color: #fff;
    width: 100%;
    height: 56px;
    max-width: 480px;
    margin-top: 7px;

    &:hover {
      background-color: #2986cc;
    }
  }
`;

export default Button;
