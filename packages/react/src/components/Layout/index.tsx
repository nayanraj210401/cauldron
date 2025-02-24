import React from 'react';
import PropTypes from 'prop-types';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  layoutRef?: React.Ref<HTMLDivElement>;
}

export default class Layout extends React.Component<LayoutProps> {
  static defaultProps = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    layoutRef: () => {}
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    layoutRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any })
    ])
  };

  render() {
    const { layoutRef, children, ...other } = this.props;
    return (
      <div className="Layout" ref={layoutRef} {...other}>
        {children}
      </div>
    );
  }
}
