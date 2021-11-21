import React, { useState } from 'react'
import axios from 'axios'
import { getMessages } from './fileIO'

export default async function callModel() {
  const [output, setOutput] = useState(null)

  const formData = new FormData()
  formData.append('json', JSON.stringify(await getMessages()))
  axios.post('/predict', formData)
    .then(res => {
      console.log(res)
    })
    .then(data => {
      if (data != null) {
        setOutput(data) 
      }
    })
    .catch(err => {
      console.log(err.state)
    })

  return output
}