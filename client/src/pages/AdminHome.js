import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { deleteCar, getAllFlights } from "../redux/actions/flightsActions";
import { Col, Row, Divider, DatePicker, Checkbox, Edit } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
const { RangePicker } = DatePicker;
function AdminHome() {
  const { flights } = useSelector((state) => state.flightsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [totalFlights, setTotalFlights] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFlights());
  }, []);

  useEffect(() => {
    setTotalFlights(flights);
  }, [flights]);

  return (
    <DefaultLayout>
      <Row justify="center" gutter={16} className="mt-2">
        <Col lg={20} sm={24}>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mt-1 mr-2">Admin Panel</h3>
            <button className="btn1">
              <a href="/addflight">ADD FLIGHT</a>
            </button>
          </div>
        </Col>
      </Row>

      {loading == true && <Spinner />}

      <Row style={{"paddingLeft":"10rem","display":"flex" , "flexDirection":"column" }}  >
        {totalFlights.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="flight p-2 bs1">
               

                <div className=" d-flex align-items-center justify-content-between">
                  <div className="text-left pl-2">
                    <p>{car.name} Airlines </p>
                    <p> From: { car.from } - To: {car.to}  </p>
           
                  </div>
                  <div>
                    <p>
                      Time: {car.time}
                    </p>
                  </div>
                  <div>
                    <p>
                     RS: {car.price}
                    </p>
                  </div>
                  

                  <div className="mr-4">
                    

                    <Popconfirm
                      title="Are you sure to delete this car?"
                      onConfirm={()=>{dispatch(deleteCar({carid : car._id}))}}
                      
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </Popconfirm>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
}

export default AdminHome;
