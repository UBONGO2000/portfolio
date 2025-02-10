import React from 'react'

const Contact = () => {
  return (
    <>
        <h2 className='mb-8 text-center text-5xl font-Ovo'>Contact me</h2>

        <form action="" method='POST' className='w-full items-center font-Outfit' id='contact'>

            <div className='flex flex-col items-center p-5 gap-8'>
                <div className='flex flex-col md:flex-row gap-10 justify-center'>
                    <div  className='flex flex-col gap-2 justify-center '>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className='px-5 border-2 border-black'/>
                    </div>

                    <div  className='flex flex-col gap-2 justify-center '>
                        <label htmlFor="email">Email</label>
                        <input type="email"  id="email" className='px-5 border-2 border-black'/>
                    </div>
                </div>

                <div className=' px-8 mt-5 flex flex-col  gap-5'>
                    <textarea id="message" name="message" rows="4" cols="50" className='border-2 border-black p-5' placeholder='Your message'></textarea>
                </div>
                <button type="submit" className='w-[15%] px-5 rounded-md border-2 border-black bg-transparent hover:bg-black hover:text-white text-2xl'>Send</button>

            </div>
            
        </form>
      
    </>
  )
}

export default Contact


// iwaju