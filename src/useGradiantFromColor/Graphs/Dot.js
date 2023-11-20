import styled from 'styled-components';

const Dot = styled('div')`
  background-color: ${({ $color }) => $color};
  opacity: ${({ $opacity }) => $opacity};
  width: 5px;
  height: 5px;
  position: absolute;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export default Dot;
