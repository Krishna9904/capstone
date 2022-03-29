

import DefaultLayout from "../components/DefaultLayout";
import React, { useState, useEffect } from "react";
import Tour from "./tour";
import toursData from "../tours.json";


//const url = "https://course-api.com/react-tours-project";
function Tours (){
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetchTours();
      }, []);
    
      const removeTour = (id) => {
        const newTours = tours.filter((item) => {
          return item.id !== id;
        });
        setTours(newTours);
      };
      const fetchTours =  () => {
      const tempTours=toursData;
      setTours(tempTours)
       
      };
      const handleClick = () => {
        fetchTours();
      };
    return (
        <DefaultLayout>
            <main>
      {tours.length > 0 ? (
        <Tour tours={tours} removeTour={removeTour} />
      ) : (
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={handleClick}>
            refresh
          </button>
        </div>
      )}
    </main>

        </DefaultLayout>
    )
}
export default Tours