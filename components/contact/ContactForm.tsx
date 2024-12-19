"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useToast } from '@/hooks/use-toast'
import SuccessMessage from './SuccessMessage'

const ContactForm = () => {
    const {toast} = useToast()
    const[status,setStatus]=useState('')
    const [success,setSuccess]=useState(false)
    const[loading,setLoading]=useState(false)
    const[formData,setFormData]=useState({
        Name:"",
        Email:"",
        Message:"",
    })

    const handleChange=(e:ChangeEvent<HTMLInputElement |HTMLTextAreaElement>) =>{
        const {name, value} =e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value,
        }))
    }
    const handleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try {
            setLoading(true)
            if(!formData.Name.trim() || !formData.Email.trim()){
                toast({
                    title:"Error: Something is wrong",
                    description: "Please input your name and email to continue",
                    variant:'destructive'
                });
                return
            }
            const form = new FormData();
            const currentDateTime = new Date().toLocaleDateString();
            form.append('Name', formData.Name)
            form.append('Email', formData.Email)
            form.append('Message', formData.Message)
            form.append('DateTime', currentDateTime)
            
            const response = await fetch("https://getform.io/f/bnllwrjb",{
                method: 'POST',
                body:form}
            )
            if(response?.ok){
                setSuccess(true)
                setStatus('Sucess! Your message has been sent.')
                setFormData({        
                    Name:"",
                    Email:"",
                    Message:"",})
            }else{
                setStatus('Error! Unable to send your message.')
            }
        } catch (error) {
            console.error("Data submitting Error", error)
            setStatus('Error! Something went wrong.')
        }finally{
            setLoading(false)
        }

    }

  return (
    <div className='space-y-4'>
        <h3 className='text-2xl md:text-4xl text-lightSky'>Let&apos;s work together</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat officiis consequatur est natus suscipit earum iusto autem ea, et consectetur illum nisi quas optio tempora iure, consequuntur sed corrupti!</p>

        <>
        {success ? <SuccessMessage status={status}/>:
                <form onSubmit={handleSubmit} className='flex flex-col  gap-4'>
                <div className='flex flex-col md:flex-row gap-4 items-center '>
                    <Input type='text' id="Name" name='Name' required placeholder='Your name' value={formData.Name} onChange={handleChange} disabled={loading} className='disabled:bg-white/10'/>
                    <Input type='email' id="Email" name='Email' required placeholder='Email address' value={formData.Email} onChange={handleChange} disabled={loading} className='disabled:bg-white/10'/>
                </div>
                <Textarea name="Message" placeholder='Text here' rows={4} value={formData.Message} onChange={handleChange} disabled={loading} className='disabled:bg-white/10'/>
                <Button disabled={loading} type='submit' className='w-full py-4 bg-lightSky text-white/80 border border-lightSky/10 hover:bg-lightSky/30 hover:text-hoverColor hoverEffect'>
                    {loading? "Submitting message..." : "Send Message"}
                </Button>
            </form>}
        </>
    </div>
  )
}

export default ContactForm