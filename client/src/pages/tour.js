import React, { Component, useState } from "react";


const Tour = (props) => {
  const { tours , removeTour } = props;
  const[readMore,setReadMore] = useState(false);
  const handleClick = () => {
      setReadMore(!readMore);
  }
  const handleClick1 = (id) => {
    removeTour(id);
  }

  return (
    <section>
      <div className="title">
        <h2>KRISHNA'S TOURISM</h2>
        <div className="underline"> </div>
      </div>
      <div>{tours.length > 0 ? tours.map((item) => {
          return <article className='singleTour'>
              <img src={item.image} alt={item.name} />
              <footer>
                  <div className="tour-info">
                      <h4>{item.name}</h4>
                      <h4 className="tourPrice">Rs: 4,1{item.price}</h4>
                  </div> 
                  <p>{readMore ?item.info  :`${item.info.substring(0,200)}...`}
                  <button onClick={handleClick}>
                      {readMore ?"show less" : "read more"}
                  </button>
                  </p>
                  <button className="delete-btn" onClick={() => handleClick1(item.id)}>Not Intrested</button>
              </footer>
          </article>
      }) : null}</div>
    </section>
  );
};

export default Tour;
