import React from 'react';
import styled from 'styled-components/native';
import { flexbox, layout, color, space, typography, border } from 'styled-system';

export const TouchableOpacity = styled.TouchableOpacity`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${typography}
  ${border}
`;

export default class StyledTouchableOpacity extends React.Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <TouchableOpacity ref={(component) => (this._root = component)} {...this.props}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
