import styled from 'styled-components';
import { backgroundImage } from '../../assets/Minxin.js';
import logoImg from '../../assets/images/logo.png';

const Nav = styled.nav`
  display: grid;
  background-color: black;

  .logo {
    ${backgroundImage}
    width:100px;
    height: 100px;
    background-image: url(${logoImg});
  }
`;

export { Nav };
