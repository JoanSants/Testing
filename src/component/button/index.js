import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ content, onClick }) => (
	<button
		className="Button"
		onClick={() => onClick()}
		data-test="Button"
	>
		{content}
	</button>
);

Button.propTypes = {
	content: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Button;
