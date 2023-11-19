import styled from 'styled-components';

const Dot = styled('div')`
  background-color: ${({ $color }) => $color};
  opacity: ${({ $opacity }) => $opacity};
  bottom: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  width: 3px;
  height: 3px;
  position: absolute;
  border-radius: 50%;
`;

export default Dot;
