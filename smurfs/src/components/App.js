import React, { Component } from 'react';
import './App.css';
import { SmurfsList } from './SmurfsList';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf, deleteSmurf } from './../actions/index';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
	render() {
		return (
			<div className="App">
        <h1>Smurfs</h1>
				<SmurfsList
					smurfs={this.props.smurfs}
					addSmurf={this.props.addSmurf}
          fetchSmurfs={this.props.fetchSmurfs}
          deleteSmurf={this.props.deleteSmurf}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
		isFetching: state.isFetching
	};
};

export default connect(
	mapStateToProps,
	{ fetchSmurfs, addSmurf, deleteSmurf }
)(App);
