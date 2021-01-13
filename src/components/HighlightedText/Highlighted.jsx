import React from 'react';

export default function Highlighted({ text, highlight, customClassName }) {
	// split the text with the user entered search keyword
	const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

	return (
		<p className={customClassName}>
			{' '}
			{parts.map((part, i) => (
				// compare the matched string pass the apropriate css class
				<span key={i} className={`${part.toLowerCase() === highlight.toLowerCase() && 'highlighted-text'}`}>
					{part}
				</span>
			))}{' '}
		</p>
	);
}
