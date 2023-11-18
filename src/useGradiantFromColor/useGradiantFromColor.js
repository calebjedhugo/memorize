import { useMemo } from 'react';

import { ensureLeadingHex, hexToRgb, rgbToHex } from './colorUtils';

const getR1 = ({ r, g, b }) => {
  if (!r && !g && !b) return 42;
  //   if (Math.abs(b - g) < 61) return r;
  return r;
};

const getDerivedColor1 = (hex = '') => {
  const srcRgb = hexToRgb(hex);
  const newRgb = { r: getR1(srcRgb), g: 0, b: 0 };

  return rgbToHex(newRgb);
};

const getDerivedColor2 = (hex = '') => {
  const srcRgb = hexToRgb(hex);
  const newRgb = { r: 0, g: 0, b: 0 };

  return rgbToHex(newRgb);
};

/**
 * derives an Oscar approved gradiant from a color.
 * @param {string|object} hex - rgb or hex. Up to you!
 * @returns {Array.<String>} - an array of three hex strings
 */
const useGradiantFromColor = (hexOrRgb) => {
  const hex = useMemo(() => {
    if (typeof hexOrRgb === 'object') return rgbToHex(hexOrRgb);
    return ensureLeadingHex(hexOrRgb);
  }, [hexOrRgb]);

  const gradiantColors = useMemo(() => {
    return [hex, getDerivedColor1(hex), getDerivedColor2(hex)];
  }, [hex]);

  return gradiantColors;
};

export default useGradiantFromColor;
