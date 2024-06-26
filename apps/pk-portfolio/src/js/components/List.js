import React from 'react';


const List = (props) => {
	return (
		<div className="component-list__container">
			<ul>{props.children}</ul>
		</div>
	)
}

export default List;
