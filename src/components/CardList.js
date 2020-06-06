import React from 'react';
import Card from '../components/Card';
import { Robots } from '../Robots';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return <Card key={i} id={Robots[i].id} name={Robots[i].name} username={Robots[i].username} email={Robots[i].email}/> 
       })
      }
    </div>
  )
}

export default CardList;