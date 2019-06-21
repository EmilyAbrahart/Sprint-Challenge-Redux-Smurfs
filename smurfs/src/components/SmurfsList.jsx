import React from 'react';
import { Smurf } from './Smurf';

export class SmurfsList extends React.Component {
	componentDidMount() {
		this.props.fetchSmurfs();
	}

	render() {
		return (
			<div>
				{this.props.smurfs.map(smurf => (
					<Smurf {...smurf} key={smurf.id} deleteSmurf={this.props.deleteSmurf}/>
				))}
			</div>
		);
	}
}
