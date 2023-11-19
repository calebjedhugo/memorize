import { number } from 'prop-types';
import Dot from './Dot';
import { oneOf } from 'prop-types';
import useGraphsContext from './useGraphsContext';
import { useMemo } from 'react';
import { memo } from 'react';

const opacityLevels = [1, 0.75, 0.5];

const ColorSet = ({ r, g, b, x, level }) => {
  const { showRed, showGreen, showBlue } = useGraphsContext();
  const opacity = useMemo(() => opacityLevels[level], [level]);

  return (
    <>
      {showRed && <Dot $color="red" $x={x} $y={r} $opacity={opacity} />}
      {showGreen && <Dot $color="green" $x={x} $y={g} $opacity={opacity} />}
      {showBlue && <Dot $color="blue" $x={x} $y={b} $opacity={opacity} />}
    </>
  );
};

ColorSet.propTypes = {
  r: number,
  g: number,
  b: number,
  x: number,
  level: oneOf([0, 1, 2]),
};

export default ColorSet;
