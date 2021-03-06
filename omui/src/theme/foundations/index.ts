import borders from './borders';
import breakpoints from './breakpoints';
import colors from './colors';
import radii from './radius';
import shadows from './shadows';
import sizes, { baseSizes } from './sizes';
import typography from './typography';
import zIndices from './z-index';

const theme = {
  borders,
  breakpoints,
  colors,
  radii,
  shadows,
  sizes,
  space: baseSizes,
  ...typography,
  zIndices
};

export type Theme = typeof theme;

export default theme;
