import { array, number } from 'prop-types';
import ColorSet from './ColorSet';
import useGraphsContext from './useGraphsContext';
import { useMemo } from 'react';

const GradiantSet = ({ colors = [], increment = 1, idx }) => {
  const { showSource, showOne, showTwo } = useGraphsContext();

  const x = useMemo(() => increment * idx, [increment, idx]);

  return colors.map((rgb, level) => {
    if ((level === 0 && showSource) || (level === 1 && showOne) || (level === 2 && showTwo))
      return <ColorSet key={level} {...rgb} level={level} x={x} />;
  });
};

GradiantSet.propTypes = {
  colors: array,
  x: number,
};

export default GradiantSet;
