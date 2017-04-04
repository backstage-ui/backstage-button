import React, { Component } from 'react';
import style from "./ButtonStyle.css";

import classNames from 'classnames';

export default class Button extends Component {
	render() {
        const classes = classNames('bs-button', this.props.className);
		return (
			<div className={classes} style={style}>
				<button>Some Text</button>
			</div>
		);
	}
}

Button.propTypes = {
  className: React.PropTypes.string
};

Button.defaultProps = {};
