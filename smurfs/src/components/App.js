import React, { Component } from 'react';
import './App.css';
import { SmurfsList } from './SmurfsList';
import { SmurfForm } from './SmurfForm';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf, deleteSmurf } from './../actions/index';
import styled from 'styled-components';
import { FlexFunc, color_light, text_font } from './../~reusables/reusables';

const AppDiv = styled.div`
	${FlexFunc('column', 'space-evenly', 'center')};
	color: ${color_light};
	font-family: ${text_font};
`;

const ContentContainer = styled.div`
	${FlexFunc('row', 'flex-start', 'flex-start')};
`;

class App extends Component {
	render() {
		return (
			<AppDiv>
				<ContentContainer>
					<SmurfForm addSmurf={this.props.addSmurf} />
					<SmurfsList
						smurfs={this.props.smurfs}
						fetchSmurfs={this.props.fetchSmurfs}
						deleteSmurf={this.props.deleteSmurf}
					/>
				</ContentContainer>
			</AppDiv>
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
