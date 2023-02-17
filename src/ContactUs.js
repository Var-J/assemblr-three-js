import React from 'react'
import { useForm } from 'react-hook-form'

function ContactUs() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (formData) => {
        window.location.href = `mailto:jimmypranata2112@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.firstName}, ${formData.message}`
    }

  return (
    <div className='relative w-full max-w-7xl mx-auto z-30'>
        <h1 className='text-5xl text-center mb-20'>Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 max-w-4xl mx-auto gap-2 bg-slate-400/40 p-5 rounded-xl'>
            <label htmlFor="firstName" className="">First Name</label>
            <label htmlFor="lasttName" className="">Last Name</label>
            <input {...register('firstName')} id="firstName" type="test" placeholder="First Name" className='h-10 lg:h-20 forms' />
            <input {...register('lastName')} id="lastName" type="test" placeholder="Last Name" className='h-10 lg:h-20 forms'/>
            <label htmlFor="subject" className="">Subject</label>
            <input {...register('subject')} id="email" type="text" placeholder="Subject" className='col-span-2 h-10 lg:h-20 forms'/>
            <label htmlFor="message" className="">Message</label>
            <textarea {...register('message')} id="message" placeholder="Tyoe your Messages Here.." className='resize-none col-span-2 h-20 lg:h-40 forms'></textarea>
            <button type="submit" className="col-span-2 text-center bg-green-400 h-10 lg:h-20 p-2 rounded-lg">Send Message</button> 
        </form>
    </div>
  )
}

export default ContactUs