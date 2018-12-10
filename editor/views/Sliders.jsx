import React, { Component } from 'react';
import Slider from './Slider';
import { branch } from 'baobab-react/higher-order';

// yoyo is a boolean
const whitelist = key => key !== 'yoyo';

class Sliders extends Component {
	renderSlider = property => {
		const config = this.props.settings[property];
		return (
			<Slider
				key={ property }
				{...config}
			/>
		);
	}

	render() {
		return (
			<div className="options">
				{ Object.keys(this.props.settings).filter(whitelist).map(this.renderSlider) }
			</div>
		);
	}
};

export default branch({
	settings: ['settings'],
}, Sliders);