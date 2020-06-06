//react is need as an import to use jsx which is 
//html like syntax that serves at styling for our app(s)
import React from 'react';


const Card = ( { id, name, username, email } ) => {
  return (
    <div className='tc bg-light-pink dib br3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
}

export default Card;