import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class StickyBar extends Component {
  observer

  constructor(props) {
    super(props)
    this.state = {
      isAtBottom: false
    }
  }

  componentDidMount() {
    this.observer = new MutationObserver(mutations => {
      this.determineState()
    })
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    })
    window.addEventListener('scroll', this.handleScroll);
    this.determineState()
  }

  componentWillUnmount() {
    this.observer.disconnect()
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    let fixedStyles = {
      ...this.props.stickyStyles,
      bottom: 0,
      position: 'fixed',
      width: '100%'
    }
    const normalStyles = {
      bottom: 0,
      position: 'absolute',
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
      padding: '2rem'
    }
    return (
      <div style={!this.state.isAtBottom ? fixedStyles : normalStyles}>{this.props.children}</div>
    )
  }

  determineState = () => {
    const siteFooterElem = document.getElementById('footer');
    const scrollBottom = document.body.scrollHeight - window.innerHeight - window.pageYOffset;
    if (scrollBottom <= siteFooterElem.scrollHeight) {
      console.log('a');
      this.setState({ isAtBottom: true })
      this.props.onFooterStateChange && this.props.onFooterStateChange(true);
    } else {
      this.setState({ isAtBottom: false })
      this.props.onFooterStateChange && this.props.onFooterStateChange(false);
      console.log('b');
    }
    // const scrollOffset = window.pageYOffset + window.innerHeight;
    // const contentHeight =
    //   document.body.clientHeight - this.props.bottomThreshold;

    // if (!this.state.isAtBottom && scrollOffset >= contentHeight) {
    //   this.setState({ isAtBottom: true })
    //   this.props.onFooterStateChange && this.props.onFooterStateChange(true);
    // } else if (
    //   this.state.isAtBottom &&
    //   scrollOffset < contentHeight - contentHeight * this.props.stickAtThreshold
    // ) {
    //   this.setState({ isAtBottom: false })
    //   this.props.onFooterStateChange && this.props.onFooterStateChange(false);
    // }
  };

  handleScroll = () => {
    this.determineState()
  };
}

StickyBar.propTypes = {
  /**
   * A value that tells the component how close to the bottom should the scroller be before the sticky footer hides
   * and displays at the end of your content. The default is 0, meaning the user needs to scroll all the way to the bottom
   * before the footer hides. A number greater than 0 would cause the sticky footer to hide at some point before the user
   * has scrolled all the way down, depending on the value of the number.
   */
  bottomThreshold: PropTypes.number,
  /**
   * A value that tells the component how much the user should scroll back up before the sticky footer shows up again.
   * The default is 0.001. A number greater than the default would require the user scroll up more before the
   * sticky footer shows up.
   */
  stickAtThreshold: PropTypes.number,
  /**
   * Styles to be applied to the sticky footer only.
   */
  stickyStyles: PropTypes.object,
  /**
   * Styles to be applied to the footer in its standard location only.
   */
  normalStyles: PropTypes.object,
  /**
   * Callback that informs when the state of the footer has changed from sticky to being in normal document flow, via boolean argument.
   * true means it is in normal flow, false means it is sticky.
   */
  onFooterStateChange: PropTypes.func
}

StickyBar.defaultProps = {
  bottomThreshold: 0,
  stickAtThreshold: 0.001,
  stickyStyles: {},
  normalStyles: {}
}