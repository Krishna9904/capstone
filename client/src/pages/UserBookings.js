import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from '../components/Spinner';
import moment from "moment";
function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const {loading} = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);
//console.log(bookings)

  return (
    <DefaultLayout>
      {loading && <Spinner/>}
      <div className="display1">
        {
          bookings

          ?bookings.map((item)=>{
            console.log(item)
            return <div className="display2">
              <h3> Name : {item.user} </h3>
              <h5>Airlines: {item.flight.name} </h5>
              <p> From: {item.from} - TO: {item.to} </p>
              <p> Date : {item.date} Time: {item.flight.time} hrs  </p> 
              <p> RS: {item.totalAmount} </p>
              </div>
  
          })
          :<h2>No Bookings found</h2>
        }
        <div>

        </div>
      </div>
    </DefaultLayout>
    
  );
}

export default UserBookings;
