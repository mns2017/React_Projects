import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main className='con'>
            <h1>Contact Us</h1>
            <form>
                <div class="dek">
                    <label>Name</label>
                    <input type='text' required placeholder='Enter Your Name'/>
                </div>

                <div class="dek">
                    <label>Email</label>
                    <input type='email' required placeholder='Enter Your Gmail'/>
                </div>

                <div class="dek">
                    <label>Message</label>
                    <input type='text' required placeholder='Tell us about your query..'/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>

    </div>
  )
}

export default Contact