import React from 'react';
import SingleCard from './SingleCard';

function Cards(props) {

  return (
    props.posts.map(post => (
      <SingleCard key={post.id} post={post} />
    ))
  );
}

export default Cards;