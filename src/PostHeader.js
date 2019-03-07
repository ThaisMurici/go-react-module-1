import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const PostHeader = (props) => {
  const { user, avatar, date } = props;
  const avatarPath = require(`./../images/${avatar}.png`);
  return (
    <div className="post-header">
      <img src={avatarPath} alt="avatar" />
      <div className="post-header-data">
        <strong className="user-name">{user}</strong>
        <p className="post-date">{moment(date).fromNow()}</p>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
};

export default PostHeader;
