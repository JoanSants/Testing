import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

import './app.scss';
import Header from './component/header';
import Headline from './component/headline';
import Button from './component/button';
import ListItem from './component/listItem';

class App extends Component {
	state = { showButton: true }

	toggleButton = () => this.setState({ showButton: !this.state.showButton });

	fetchPosts = () => {
		const { fetch } = this.props;
		this.toggleButton();
		fetch();
	}

	returnNumberPlusOne = number => number + 1;

	render () {
		const { posts } = this.props;
		const { showButton } = this.state
		return (
			<div className="App" data-test="App">
				<Header />
				<section className="main">
					<Headline header="Posts" desc="Click the button to render posts" />
					{showButton && <Button content="FETCH POSTS" onClick={this.fetchPosts} />}
					{posts.map(({title, body}) => <ListItem key ={title} title={title} paragraph={body} />)}
				</section>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	posts: state.posts
});

const mapActionsToProps = dispatch => ({
	fetch: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapActionsToProps)(App);
