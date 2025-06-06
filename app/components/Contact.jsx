import React,{useState} from 'react'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bbebcc02-62e4-4c78-8769-edc89eabefc3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <>

        <div id='contact' className='w-full px-[12%] py-10 scrooll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90% auto]'>

            <h4 className='text-center mb-2 text-lg font-Ovo'>
                Connect with me
            </h4>

            <h2 className='text-center text-5xl font-Ovo'>
                Get in touch
            </h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I'd love to hear from you! If you have any questions, comments, or feedback,please use the from below.
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>

                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                    <input type="text" placeholder='Enter your name' name='name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
                    <input type="email" placeholder='Enter your email' name='email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>

                </div>

                <textarea rows="6" placeholder='Enter your message' name='message' required className='w-full p-4 outline-nome border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>

                <button type="submit" className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/80 duration-500 dark:bg-slate-50 dark:text-black/80 dark:hover:bg-transparent dark:hover:text-slate-50 '>Submit now</button>

                <p className='mt-4'>{result}</p>

            </form>

        </div>


       
      
    </>
  )
}

export default Contact


// iwaju