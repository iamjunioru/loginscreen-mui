import styled from 'styled-components';

const Sidebar = styled.aside`
  flex: 0 0 25%;
  background-color: #2986cc;

  @media (max-width: 480px) {
    flex: 0 0 0;
  }
`;

export default Sidebar;
