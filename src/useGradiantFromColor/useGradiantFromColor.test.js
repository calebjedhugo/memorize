import { string } from 'prop-types';

import { render } from '@testing-library/react';

import gradiantColorTestData from './testData';
import useGradiantFromColor from './useGradiantFromColor';

let outputColors = [];
const TestComponent = ({ color }) => {
  outputColors = useGradiantFromColor(color);
  return null;
};

TestComponent.propTypes = { color: string };

const createRender = (props) => {
  const utils = render(<TestComponent {...props} />);
  return { ...utils };
};

describe('useGradiantFromColor', () => {
  it('matches all previously generated colors', () => {
    Object.values(gradiantColorTestData).forEach((currentColorArray) => {
      createRender({ color: currentColorArray[0] });
      console.log(outputColors);
      expect(outputColors).toStrictEqual(currentColorArray);
    });
  });
});
