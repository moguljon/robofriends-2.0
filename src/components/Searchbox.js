import React from 'react';

const Searchbox = ({searchfield, searchchange}) => {
  return (
    <div>
     <input className='bg-light-pink dib br3 ma2 grow bw2 shadow-5' type='search' placeholder='enter robot friend' onChange={searchchange}/>
    </div>
  )
}
export default Searchbox;