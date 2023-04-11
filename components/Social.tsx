import { State } from '@/helper/types'
import React , { useState } from 'react'
import { BsGithub, BsInstagram , BsLinkedin } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import SocialButton from './SocialButton'

const Social = () => {

  const socialLinks = [
    {
      Icon:BsGithub,
      name:'Github',
      link:'https://github.com/kuldeep345'
    },
    {
      Icon:BsInstagram,
      name:'Instagram',
      link:'https://www.instagram.com/singh_kuldeep_0'
    },
    {
      Icon:BsLinkedin,
      name:'LinkedIn',
      link:'https://www.linkedin.com/in/kuldeep-singh-21a69024b/'
    }
  ]

  return (
    <div className='absolute flex gap-8 bottom-10'>
      {socialLinks.map((item)=>(
       <SocialButton item={item}/>
      ))
      
      }
    </div>
  )
}

export default Social