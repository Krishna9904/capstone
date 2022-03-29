import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllFlights } from '../redux/actions/flightsActions'
import { Col, Row, Divider, DatePicker, Checkbox, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner';
import moment from 'moment'
const { RangePicker } = DatePicker
function Home() {
    const { flights } = useSelector(state => state.flightsReducer)
    const { loading } = useSelector(state => state.alertsReducer)
    const [totalFlights, setTotalFlights] = useState([])
    const [tempflights, setTempflights] = useState([])
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllFlights())
    }, [])

    useEffect(() => {

        setTotalFlights(flights)
        setTempflights(flights)

    }, [flights])



    const handleChange = (e) => {
        if (e.target.name === "from") {
            setFrom(e.target.value)
        }
        else {
            setTo(e.target.value)
        }

    }
    const handleClick = () => {
        let filteredData = tempflights.filter(e => from === e.from ? e : e.from === from).filter(e => to === e.to ? e : e.to === to)
        setTotalFlights(filteredData)
    }
    console.log(tempflights)

    return (
        <DefaultLayout>



            {loading == true && (<Spinner />)}
            <Row style={{ "paddingLeft": "10rem", "paddingTop": "3rem" }} >
                <label for="from" style={{ "fontSize": "25px", "marginRight": "2rem" }} > From:  </label>
                <Input style={{ "width": "12rem", "height": "2.5rem" }} id="from" name='from' onChange={(e) => { handleChange(e) }} />
                <label for="to" style={{ "fontSize": "25px", "marginRight": "2rem", "marginLeft": "2rem" }} > To:  </label>
                <Input style={{ "width": "12rem", "height": "2.5rem" }} id="to" name='to' onChange={(e) => { handleChange(e) }} />
                <Button style={{ "height": "2.5rem", "width": "6rem", "marginLeft": "4rem" ,"borderRadius":"10px" }} className="btn1" onClick={handleClick} > Search </Button>

            </Row>



            <Row style={{ "paddingLeft": "10rem", "display": "flex", "flexDirection": "column" }}>

                {totalFlights.map(item => {
                    return <Col lg={5} sm={24} xs={24}>
                        <div className="flight p-2 bs1">


                            <div className=" d-flex align-items-center justify-content-between">

                                <div className="text-left pl-2">
                                    <p>{item.name} Airlines </p>
                                    <p> From: {item.from} - To: {item.to}  </p>

                                </div>
                                <div>
                                    <p>
                                        Time: {item.time}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        RS: {item.price}
                                    </p>
                                </div>

                                <div>
                                    <button className="btn1 mr-2" style={{"color":"blue"}}><Link to={`/booking/${item._id}`}>Book Now</Link></button>
                                </div>

                            </div>
                        </div>
                    </Col>
                })}

            </Row>

        </DefaultLayout>
    )
}

export default Home
