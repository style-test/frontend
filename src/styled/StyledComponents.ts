import * as styledComponents from 'styled-components';

interface IThemeInterface {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
