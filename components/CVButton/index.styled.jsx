import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  font-weight: 600;
  background-color: #f6f8fa;
  color: #b62dec;
  transition: all 0.2s;

  &:hover {
    color: #8221a8;
  }
`;

export default Button;
