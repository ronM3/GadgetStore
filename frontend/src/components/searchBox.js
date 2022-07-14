import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const searchBox = () => {
    const [searchValue, setSearchValue] = useState('')
  return (
    <Form>
        <Form.Control type='text' name='q' onChange={(e)=>{setSearchValue(e.target.value)}} placeholder='Search Something...' className='mr-sm-2 ml-sm-5'>
            <Button variant='outline-success' className='p-2'></Button>
        </Form.Control>
    </Form>
  )
}

export default searchBox