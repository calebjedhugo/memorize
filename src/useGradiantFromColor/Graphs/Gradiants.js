import gradiantColorTestData from '../testData';
import { useMemo } from 'react';
import { hexToRgb } from '../colorUtils';
import GradiantSet from './GradiantSet';
import useGraphsContext from './useGraphsContext';

const gradiantArrayHex = Object.values(gradiantColorTestData).slice(0);

const gradiantArrayRgb = [...gradiantArrayHex].map((gradiant) =>
  gradiant.map((color) => hexToRgb(color))
);

const sortByBrightness = ({ r: r1, g: g1, b: b1 }, { r: r2, g: g2, b: b2 }) =>
  r1 + g1 + b1 - (r2 + g2 + b2);

const sortByColor = (rgOrB) => (rgb1, rgb2) => rgb1[rgOrB] - rgb2[rgOrB];

const sortedArrays = {
  default: gradiantArrayRgb,
  sourceBrightness: [...gradiantArrayRgb].sort(([color1], [color2]) =>
    sortByBrightness(color1, color2)
  ),
  redSource: [...gradiantArrayRgb].sort(sortByColor('r')),
};

const GradiantSets = ({ sortedArray = [], increment }) =>
  sortedArray.map((gradiant, idx) => {
    const { r, g, b } = gradiant[0];
    const key = `${r}${g}${b}`;
    return <GradiantSet increment={increment} idx={idx} key={key} colors={gradiant} />;
  });

const Gradiants = () => {
  const { sortedBy, width } = useGraphsContext();
  const sortedArray = useMemo(() => {
    return sortedArrays[sortedBy];
  }, [sortedBy]);

  const increment = useMemo(() => width / sortedArray.length, [width, sortedArray.length]);

  return <GradiantSets sortedArray={sortedArray} increment={increment} />;
};

export default Gradiants;
