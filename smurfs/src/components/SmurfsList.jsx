import React from 'react';
import { Smurf } from './Smurf';
import styled from 'styled-components';
import { FlexFunc } from './../~reusables/reusables';

const SmurfListDiv = styled.div`
	${FlexFunc('row', 'space-evenly', 'center')};
	flex-wrap: wrap;
	position: relative;
`;

export class SmurfsList extends React.Component {
	componentDidMount() {
		this.props.fetchSmurfs();
	}

	render() {
		return (
			<SmurfListDiv>
				{this.props.smurfs.map(smurf => (
					<Smurf
						{...smurf}
						key={smurf.id}
						deleteSmurf={this.props.deleteSmurf}
					/>
				))}
			</SmurfListDiv>
		);
	}
}
