import gradiantColorTestData from '../testData';
import { useMemo } from 'react';
import { hexToRgb } from '../colorUtils';
import GradiantSet from './GradiantSet';
import useGraphsContext from './useGraphsContext';

const gradiantArrayHex = Object.values(gradiantColorTestData).slice(0);

const gradiantArrayRgb = [...gradiantArrayHex].map((gradiant) =>
  gradiant.map((color) => hexToRgb(color))
);

// helper functions

const sortByColor =
  (rgOrB) =>
  ([rgb1], [rgb2]) =>
    rgb1[rgOrB] - rgb2[rgOrB];

const getOtherColors = (rgOrB) => {
  if (rgOrB === 'r') return ['g', 'b'];
  if (rgOrB === 'g') return ['r', 'b'];
  if (rgOrB === 'b') return ['r', 'g'];
};

const getOtherColorValuesArray = (rgbArray = [], rgOrB) => {
  return rgbArray.map((rgb) => {
    const [color1, color2] = getOtherColors(rgOrB);
    return [rgb[color1], rgb[color2]];
  });
};

//sorters

const sortByBrightness = ({ r: r1, g: g1, b: b1 }, { r: r2, g: g2, b: b2 }) =>
  r1 + g1 + b1 - (r2 + g2 + b2);

const sortBySpread = ({ r: r1, g: g1, b: b1 }, { r: r2, g: g2, b: b2 }) =>
  Math.max(r1, g1, b1) -
  Math.min(r1, g1, b1) -
  (Math.max(r2, g2, b2) - Math.min(r2, g2, b2));

const sortByAverage = ({ r: r1, g: g1, b: b1 }, { r: r2, g: g2, b: b2 }) =>
  (r1 + g1 + b1) / 3 - (r2 + g2 + b2) / 3;

const greenOffset = 39;
const sineFrequency = 100; // between 96 and 104 get thre green zeros and blue zeros correct
export const formula = (target, other1, other2) => {
  // return target;
  const greenOffsetChange = Math.floor(
    greenOffset *
      Math.sin((Math.PI / 2) * ((target + sineFrequency) / sineFrequency))
  );
  const blueChange = Math.floor(other2 / 4);
  return target + blueChange + greenOffsetChange;
};

const sortByOtherColorsCombined =
  (rgOrB) =>
  ([rgb1], [rgb2]) => {
    const [[a1, a2], [b1, b2]] = getOtherColorValuesArray([rgb1, rgb2], rgOrB);
    return formula(rgb1[rgOrB], a1, a2) - formula(rgb2[rgOrB], b1, b2);
  };

const sortByOtherColorsAverage =
  (rgOrB) =>
  ([rgb1], [rgb2]) => {
    const [[a1, a2], [b1, b2]] = getOtherColorValuesArray([rgb1, rgb2], rgOrB);
    return (a1 + a2) / 2 - (b1 + b2) / 2;
  };

const sortByOtherColorsDifference =
  (rgOrB) =>
  ([rgb1], [rgb2]) => {
    const [[a1, a2], [b1, b2]] = getOtherColorValuesArray([rgb1, rgb2], rgOrB);
    return Math.abs(a1 - a2) - Math.abs(b1 - b2);
  };

const sortedArrays = {
  default: gradiantArrayRgb,
  sourceSpread: [...gradiantArrayRgb].sort(([color1], [color2]) =>
    sortBySpread(color1, color2)
  ),
  redSource: [...gradiantArrayRgb].sort(sortByColor('r')),
  greenSource: [...gradiantArrayRgb].sort(sortByColor('g')),
  blueSource: [...gradiantArrayRgb].sort(sortByColor('b')),
  // sums
  sourceBrightness: [...gradiantArrayRgb].sort(([color1], [color2]) =>
    sortByBrightness(color1, color2)
  ),
  gbCombined: [...gradiantArrayRgb].sort(sortByOtherColorsCombined('r')),
  rbCombined: [...gradiantArrayRgb].sort(sortByOtherColorsCombined('g')),
  rgCombined: [...gradiantArrayRgb].sort(sortByOtherColorsCombined('b')),
  // averages
  sourceAverage: [...gradiantArrayRgb].sort(([color1], [color2]) =>
    sortByAverage(color1, color2)
  ),
  gbAverage: [...gradiantArrayRgb].sort(sortByOtherColorsAverage('r')),
  rbAverage: [...gradiantArrayRgb].sort(sortByOtherColorsAverage('g')),
  rgAverage: [...gradiantArrayRgb].sort(sortByOtherColorsAverage('b')),
  // differences
  gbDifference: [...gradiantArrayRgb].sort(sortByOtherColorsDifference('r')),
  rbDifference: [...gradiantArrayRgb].sort(sortByOtherColorsDifference('g')),
  rgDifference: [...gradiantArrayRgb].sort(sortByOtherColorsDifference('b')),
};

const sortedArrayKeys = Object.keys(sortedArrays);

const GradiantSets = ({ sortedArray = [], increment }) =>
  sortedArray.map((gradiant, idx) => {
    const { r, g, b } = gradiant[0];
    const key = `${r}${g}${b}`;
    return (
      <GradiantSet
        increment={increment}
        idx={idx}
        key={key}
        colors={gradiant}
      />
    );
  });

const Gradiants = () => {
  const { sortedBy, width } = useGraphsContext();
  const sortedArray = useMemo(() => {
    return sortedArrays[sortedBy];
  }, [sortedBy]);

  const increment = useMemo(
    () => width / sortedArray.length,
    [width, sortedArray.length]
  );

  return <GradiantSets sortedArray={sortedArray} increment={increment} />;
};

export { sortedArrayKeys };
export default Gradiants;
