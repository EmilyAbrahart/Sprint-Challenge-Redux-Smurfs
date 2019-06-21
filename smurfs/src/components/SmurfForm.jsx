import React from 'react';

export const SmurfForm = (props) => {
	const nameRef = React.createRef();
	const ageRef = React.createRef();
  const heightRef = React.createRef();
  
  const onAddSmurf = () => {
    const smurfObj = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      height: heightRef.current.value,
    };

    props.addSmurf(smurfObj);
    nameRef.current.value='',
    ageRef.current.value='',
    heightRef.current.value= ''
  }

  const clearForm = () => {
    nameRef.current.value='',
    ageRef.current.value='',
    heightRef.current.value= ''
  }

	return (
		<div>
      <h3>Add A Smurf</h3>
			<input type="text" ref={nameRef} />
			<input type="text" ref={ageRef} />
			<input type="text" ref={heightRef} />
			<button onClick={onAddSmurf}>Add Smurf</button>
			<button onClick={clearForm}>Clear</button>
		</div>
	);
};
