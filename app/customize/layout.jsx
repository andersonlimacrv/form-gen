import React from 'react';

export default function CustomizeLayout({ children }) {
	return (
		<div className="pt-2 pb-16 px-4 lg:px-16 2xl:px-24 ">
			{children}
		</div>
	);
}
