import React, { Component } from 'react';

class ReloadButton extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.onClick !== prevProps.onClick) {
      console.log('ReloadButton updated');
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    console.log('ReloadButton rendered');
    const { onClick } = this.props;

    return (
      <button className='reload-button' onClick={onClick} >
        Reload
      </button>
    );
  }
}

export default ReloadButton;
