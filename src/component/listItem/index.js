import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ title, paragraph }) => {
	if (!title) return null;
	return(
		<article className="ListItem" data-test="ListItem">
			<h1 data-test="title">{title}</h1>
			<p data-test="paragraph">{paragraph}</p>
		</article>
	);	
};

ListItem.propTypes = {
	title: PropTypes.string,
	paragraph: PropTypes.string
};

export default ListItem;
