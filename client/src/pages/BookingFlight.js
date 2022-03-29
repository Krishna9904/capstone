import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllFlights } from "../redux/actions/flightsActions";
import moment from "moment";
import { bookFlight } from "../redux/actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";
import AOS from 'aos';

import 'aos/dist/aos.css'; // You can also use <link> for styles

function BookingFlight({ match }) {
  const { flights } = useSelector((state) => state.flightsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [flight, setFlight] = useState({});
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const [to, setTo] = useState();

 
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (flights.length == 0) {
      dispatch(getAllFlights());
    } else {
      setFlight(flights.find((o) => o._id == match.params.carid));
    }
  }, [flights]);

  

  function selectTimeSlots(values) {
    setDate(moment(values[0]).format("MMM DD yyyy "));
    

   
  }

  

  function onToken(token){
    const reqObj = {
        token,
        user: JSON.parse(localStorage.getItem("user")).username,
        flight: flight._id,
        from:flight.from,
        to:flight.to,
        date,
    
        totalAmount:flight.price,
       
          
        
      };
  
      dispatch(bookFlight(reqObj));
      
  }
  console.log(JSON.parse(localStorage.getItem("user")))
  return ( 
      
      <DefaultLayout>
          {loading && <Spinner/> }
          <div className="book">
              <div>
                 <h3> {flight.name}</h3>
                 <p>From: {flight.from} - To: {flight.to}   </p>
                 <p>Time: {flight.time} </p>
                 <p>RS: {flight.price}</p>
                 <DatePicker
          
          format ="MMM DD yyyy "
          onChange={selectTimeSlots}
          />
              </div>
              <div> 
              <StripeCheckout
                shippingAddress
                token={onToken}
                currency='inr'
                amount={flight.price*100}
                stripeKey="pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ"
              >
                  <button className="btn1">
                Book Now
              </button>
              </StripeCheckout>
                 </div>
              
             
          </div>
      </DefaultLayout>
   
  );
}

export default BookingFlight;
