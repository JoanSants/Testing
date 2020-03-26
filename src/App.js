import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

import './app.scss';
import Header from './component/header';
import Headline from './component/headline';
import Button from './component/button';
import ListItem from './component/listItem';

const App = ({ posts, fetch }) => (
  <div className="App" data-test="App">
      <Header />
      <section className="main">
        <Headline 
          header="Posts" 
          desc="Click the button to render posts" 
        />
		<Button 
			content="FETCH POSTS"
			onClick={fetch}
		/>
		{posts.map(({title, body}) => <ListItem key ={title} title={title} paragraph={body} />)}
      </section>
    </div>
);

const mapStateToProps = state => ({
	posts: state.posts
});

const mapActionsToProps = dispatch => ({
	fetch: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapActionsToProps)(App);
