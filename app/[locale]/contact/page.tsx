import Container from '@/components/container'
import React from 'react'

const ContactPage = () => {
  return (
    <Container className='py-6 md:py-12 flex flex-col md:flex-row gap-6 md:gap-14'>
      <div className='w-full md:w-2/3 '>Form</div>
      <div className='w-full md:w-1/3 '>details</div>
    
    </Container>
  )
}

export default ContactPage