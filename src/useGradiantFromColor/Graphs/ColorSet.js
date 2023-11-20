import { number } from 'prop-types';
import Dot from './Dot';
import { oneOf } from 'prop-types';
import useGraphsContext from './useGraphsContext';
import { useMemo } from 'react';
import { formula } from './Gradiants';

const opacityLevels = [1, 0.75, 0.5];

const ColorSet = ({ r, g, b, x, level, sourceColor }) => {
  const { showRed, showGreen, showBlue, setDisplayData } = useGraphsContext();
  const opacity = useMemo(() => opacityLevels[level], [level]);

  const handleOnClick = () => {
    const answer = formula(sourceColor.g, sourceColor.r, sourceColor.b);
    setDisplayData(
      `g: ${sourceColor.g} & b: ${sourceColor.b} = ${
        answer === g
          ? `Correct! (${answer})`
          : `expected: ${g}; got: ${answer};`
      }`
    );
  };

  // Note, we use style for bottom left to avoid too many classnames causing performance issues.
  return (
    <>
      {showRed && (
        <Dot
          onClick={handleOnClick}
          style={{ bottom: `${r}px`, left: `${x}px` }}
          $color="red"
          $opacity={opacity}
        />
      )}
      {showGreen && (
        <Dot
          onClick={handleOnClick}
          style={{ bottom: `${g}px`, left: `${x}px` }}
          $color="green"
          $opacity={opacity}
        />
      )}
      {showBlue && (
        <Dot
          onClick={handleOnClick}
          style={{ bottom: `${b}px`, left: `${x}px` }}
          $color="blue"
          $opacity={opacity}
        />
      )}
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
