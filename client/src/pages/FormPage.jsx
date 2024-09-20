import React, { useState } from 'react'
import '../App.css'
import {Form, Container, Button} from 'react-bootstrap'
import { postfrom } from '../helper/axios'

export const FormPage = () => {
 const [ form, setform ] = useState("")
 const [data, setData] =useState("")

 const handleonChange = (e)=>{
  const {name,value} = e.target
   setform({
    ...form,
    [name]:value
   })
 }

 const hanldeonSubmit = (e)=>{
  e.preventDefault()
  const {name, value} = form
  setData(postfrom(form))

 }
 console.log(data)
 

  return (
    <div>
    <Container>
        <Form onSubmit={hanldeonSubmit}>
            <div>
                <input className='p-2' type="text" name="title" placeholder='Enter your Title' onChange={handleonChange} />
                <input className='p-2' type="text" name="description" placeholder='Enter your Description' onChange={handleonChange} />
                
                <Button type='submit'> Submit</Button>

            </div>

        </Form>

    </Container>

    </div>
  )
}
