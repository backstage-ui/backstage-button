import React, { Component } from 'react';
import style from "./ButtonStyle.css";

import classNames from 'classnames';

export default class Button extends Component {
	render() {
		return (
			<div className={this.props.className} style={style}>
				<button />
			</div>
		);
	}
}

Button.propTypes = {
  className: React.PropTypes.string
};

Button.defaultProps = {};