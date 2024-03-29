import styled from 'styled-components';
import Gradiants, { sortedArrayKeys } from './Gradiants';
import { bool, oneOf } from 'prop-types';
import { useRef, useState, createContext } from 'react';
import useAnimationFrame from '../../useAnimationFrame';

const GraphContext = createContext();

const Container = styled('div')`
  position: relative;
  height: ${256}px;
`;

const Graphs = ({
  showZeroRedOnly,
  showZeroGreenOnly,
  showZeroBlueOnly,
  sortedBy = 'default',
  showRed,
  showGreen,
  showBlue,
  showSource,
  showOne,
  showTwo,
}) => {
  const containerRef = useRef();
  const [width, setWidth] = useState();

  useAnimationFrame(() => {
    if (width !== containerRef.current?.clientWidth)
      setWidth(containerRef.current?.clientWidth);
  }, []);

  const [displayData, setDisplayData] = useState('');

  return (
    <GraphContext.Provider
      value={{
        sortedBy,
        showRed,
        showGreen,
        showBlue,
        showSource,
        showOne,
        showTwo,
        width,
        setDisplayData,
        showZeroRedOnly,
        showZeroGreenOnly,
        showZeroBlueOnly,
      }}
    >
      <Container ref={containerRef}>
        <Gradiants />
        <div>{displayData}</div>
      </Container>
    </GraphContext.Provider>
  );
};

Graphs.propTypes = {
  showZeroRedOnly: bool,
  showZeroGreenOnly: bool,
  showZeroBlueOnly: bool,
  sortedBy: oneOf(sortedArrayKeys),
  showRed: bool,
  showGreen: bool,
  showBlue: bool,
  showSource: bool,
  showOne: bool,
  showTwo: bool,
};

export { GraphContext };
export default Graphs;
