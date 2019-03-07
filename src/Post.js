import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import PostHeader from './PostHeader';

const Post = (props) => {
  const { content } = props;
  return (
    <div className="post">
      <PostHeader user={content.user} avatar={content.avatar} date={content.date} />
      <p>{content.text}</p>
    </div>
  );
};

Post.propTypes = {
  content: PropTypes.shape({
    user: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(moment).isRequired,
    text: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
