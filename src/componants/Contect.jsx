import React from 'react'

const Contect = () => {

  function handleform(e){
    e.preventDefault();

    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const subject = e.target[3].value;
    const message = e.target[4].value;
    const data = {firstName, lastName, email, subject, message};

    fetch('http://localhost:3000/api/user/details',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log('Success:', data);
      alert('Message sent successfully!');
      e.target.reset();
    }
    )
    .catch((error) => {
      console.error('Error:', error);
      alert('Error sending message.');
    });

  }
  return (
    <>
      <div className='bg-[#E6DACE] pb-9'>
         <div className='flex flex-col items-center pt-8 '>
            <p className='w-4 h-4 bg-blue-700'></p>
            <h2 className='text-2xl font-bold'>Let's talk</h2>
         </div>
         <div className='bg-white ml-5 pl-6 pt-3 mr-2 lg:max-w-3xl lg:mt-20 lg:ml-70'>
            <form onSubmit={handleform} className='flex flex-col gap-5'>
                <div className='lg:flex '>
                  <div>
                <label className=''>First Name *</label>
                <input name='firstname' className=' border-b-2 border-solid-black hover:border-b-blue-700 focus:border-b-blue-700 duration-150 ease-in  outline-none bg-white  w-[300px]' type="text" required />
                 </div>
                  <div>
                <label className='' htmlFor="lastName">Last Name *</label>
                <input name='lastname' className=' border-b-2 border-solid-black  hover:border-b-blue-700  focus:border-b-blue-700 duration-150 ease-in outline-none bg-white  w-[300px]' type="text" required />
                  </div>
                </div>
                <label className='' htmlFor="email" >Email *</label>
                <input name='email' className=' border-b-2 border-solid-black lg:w-[680px] hover:border-b-blue-700  focus:border-b-blue-700 duration-150 ease-in  outline-none bg-white  w-[300px]' type="email" required />
                <label className=''>Subject </label>
                <input  className=' border-b-2 border-solid-black hover:border-b-blue-700 lg:w-[680px] focus:border-b-blue-700 duration-150 ease-in  outline-none bg-white  w-[300px]' name="subject" type="text"/>
                <label className=''  htmlFor="message">Messege </label>
                <textarea  className='border-b-2 outline-none w-[300px] hover:border-b-blue-700 lg:w-[680px]  focus:border-b-blue-700 duration-150 ease-in bg-white' name="message" id="" cols="30" rows="5"></textarea>

                <button type='submit' className='bg-blue-700 hover:bg-white hover:border-2 hover:border-blue-600 border-2 mr-5 border-blue-700 hover:text-black duration-300 ease-in cursor-pointer text-white py-2 rounded-3xl mb-6'>Send</button>
                
            </form>
         </div>
      </div>
    </>
  )
}

export default Contect