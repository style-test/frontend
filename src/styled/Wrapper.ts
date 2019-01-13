import styled from './StyledComponents';

const LayoutDiv = styled('div')<{
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}>`
  width: ${props => (props.width ? props.width : 'unset')};
  height: ${props => (props.height ? props.height : 'unset')};
  margin: ${props => (props.margin ? props.margin : 'unset')};
  padding: ${props => (props.padding ? props.padding : 'unset')};
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
