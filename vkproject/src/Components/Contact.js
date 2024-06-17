import React, { useState } from 'react'
import Axios from 'axios'
import './Contact.css'

const Contact = () => {

  const url = "https://firebase-uiab.onrender.com/prod/v1/contactus"
  const [data, setData] = useState({
    FullName: '',
    Email: '',
    Subject: '',
    Message: ''
  })

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      FullName: data.FullName,
      Email: data.Email,
      Subject: data.Subject,
      Message: data.Message
    })
      .then(res => {
        console.log(res.data);
      })
  }


  return (
    <>
      <div className='container' id='contact'>
        <div className='row'>
          <div className='col-4 col-4 col-4 contactPage'>
            <div className='contactDetails'>
              <div className='contactDetailsSubDiv'>
                <h1 className='contactDetailsSubDivHeading'>Contact Us</h1>
              </div>
              <div className='contactDetailsSubDiv2'>
                <form onSubmit={(e) => submit(e)}>
                  <div className='contactData1'>
                    <div className='contactData1Div1'>
                      <label htmlFor='FullName' className='contactFullNameLabel'>Full Name</label> <br />
                      <input type='text' onChange={(e) => handle(e)} id='FullName' value={data.FullName} placeholder='Name' className='contactFullNameInput' required />
                    </div>
                    <div className='contactData1Div2'>
                      <label htmlFor='Email' className='contactEmailLabel'>Email</label> <br />
                      <input type='email' onChange={(e) => handle(e)} id='Email' value={data.Email} placeholder='Email' className='contactEmailInput' required />
                    </div>
                  </div>
                  <div className='contactData2'>
                    <label htmlFor='Subject' className='contactSubjectLabel'>Subject</label> <br />
                    <input type='text' onChange={(e) => handle(e)} id='Subject' value={data.Subject} placeholder='Subject' className='contactSubjectInput' required /> <br />
                    <label htmlFor='Message' className='contactMessageLabel'>Message</label> <br />
                    <textarea rows={10} cols={40} onChange={(e) => handle(e)} id='Message' value={data.Message} placeholder='Message' className='contactMessageTextarea' required></textarea> <br />
                    <button className='contactSendButton'>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
