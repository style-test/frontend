import styled from './StyledComponents';

const LayoutDiv = styled('div')<{
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}>`
  width: ${props => (props.width ? props.width : 'inherit')};
  height: ${props => (props.height ? props.height : 'inherit')};
  margin: ${props => (props.margin ? props.margin : 'inherit')};
  padding: ${props => (props.padding ? props.padding : 'inherit')};
`;

const BlockWrapper = styled(LayoutDiv)`
  display: block;
`;

const FlexWrapper = styled(LayoutDiv)`
  display: flex;
`;

export default {
  BlockWrapper,
  FlexWrapper,
};
