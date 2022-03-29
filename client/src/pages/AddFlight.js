import { Col , Row , Form , Input} from 'antd'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner'
import { addFlight } from '../redux/actions/flightsActions'
function AddFlight() {

    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)

    function onFinish(values){

     //    values.bookedTimeSlots=[]

         dispatch(addFlight(values))
         console.log(values)
    }

    return (
        <DefaultLayout>
               {loading && (<Spinner />)}
               <Row justify='center mt-5'>
                   <Col lg={12} sm={24} xs={24} className='p-2'>
                       <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                           <h3>Add New Airlines</h3>
                           <hr />
                           <Form.Item name='name' label='Airlines' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='from' label='From' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='to' label='To' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='time' label='Time' rules={[{required: true}]}>
                               <Input type={"time"}/>
                           </Form.Item>
                           <Form.Item name='price' label='price' rules={[{required: true}]}>
                               <Input type={"number"}/>
                           </Form.Item>
                          

                           <div className='text-right'>
                           <button className='btn1'>ADD FLIGHT</button>
                           </div>

                       </Form>
                   </Col>
               </Row>

        </DefaultLayout>
    )
}

export default AddFlight
