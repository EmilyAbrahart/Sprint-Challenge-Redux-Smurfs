import React from 'react';

export const Smurf = props => {
const onDeleteSmurf = () => {
  props.deleteSmurf(props.id);
};

	return (
		<div>
			<div>{props.name}</div>
			<div>{props.age}</div>
			<div>{props.height}</div>
			<button onClick={()=>{onDeleteSmurf()}}>x</button>
		</div>
	);
};
