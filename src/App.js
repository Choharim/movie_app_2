import React from 'react';

function Food({fav, picture}){
  return (
    <div>
      <h3>I love {fav}</h3>
      <img src={picture}></img>
    </div>
  );
}

const foodILike = [
  {
    name:"kimchi",
    image:"https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg"
  },
  {
    name:"samgyupsal",
    image:"https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg"
  }
];

function renderFood(food){
  return (
    <Food fav={food.name} picture={food.image}/>
  );
}
function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
