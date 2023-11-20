import { array, number } from 'prop-types';
import ColorSet from './ColorSet';
import useGraphsContext from './useGraphsContext';
import { useMemo } from 'react';

const GradiantSet = ({ colors = [], increment = 1, idx }) => {
  const {
    showSource,
    showOne,
    showTwo,
    showZeroRedOnly,
    showZeroGreenOnly,
    showZeroBlueOnly,
  } = useGraphsContext();

  const x = useMemo(
    () => Number((increment * idx).toFixed(2)),
    [increment, idx]
  );

  if (showZeroRedOnly && colors[0].r !== 0) return;
  if (showZeroGreenOnly && colors[0].g !== 0) return;
  if (showZeroBlueOnly && colors[0].b !== 0) return;

  return colors.map((rgb, level) => {
    if (
      (level === 0 && showSource) ||
      (level === 1 && showOne) ||
      (level === 2 && showTwo)
    )
      return (
        <ColorSet
          sourceColor={colors[0]}
          key={level}
          {...rgb}
          level={level}
          x={x}
        />
      );
  });
};

GradiantSet.propTypes = {
  colors: array,
  x: number,
};

export default GradiantSet;
