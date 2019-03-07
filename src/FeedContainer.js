import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

const FeedContainer = (props) => {
  const { posts } = props;
  return (
    <div className="feed-container">
      {posts.map(post => (
        <Post content={post} />
      ))}
    </div>
  );
};

FeedContainer.propTypes = {
  posts: PropTypes.instanceOf(Array).isRequired,
};

export default FeedContainer;
