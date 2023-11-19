import styled from 'styled-components';

const Dot = styled('div')`
  background-color: ${({ $color }) => $color};
  opacity: ${({ $opacity }) => $opacity};
  width: 3px;
  height: 3px;
  position: absolute;
  border-radius: 50%;
`;

export default Dot;
