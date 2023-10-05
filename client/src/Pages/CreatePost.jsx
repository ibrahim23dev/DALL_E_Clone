import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//import { preview } from '../assets'
import { getRandompromot } from '../utils'
import { FromField, Loader } from '../components';

function handleSubmit() {
  
}

function handleChange(e) {
  
}
function handleisSurpriseMe() {
  
}


function CreatePost() {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImage, setgeneratingImage] = useState(false);
  const [Loader, setLoader] = useState(false);
  return (
    <section className='max-w-7xl max-auto'>
      <div>
        <h1 className='text-[32px]'>Create</h1>
        <p className='mt-4 text-[#666e75] text-[14px] max-w-[500px]'>Here we can Create AI image generator which we can use flexibility</p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>

      </form>

      <div className='flex flex-col gap-5'>
        <FromField
          labelName="Your Name"
          type="text"
          name="prompt"
          placeholder="A Dinosaur exploring Cape Town, photography"
          value={form.name}
          handleChange={handleChange}
          isSurpriseMe
          handleisSurpriseMe={handleisSurpriseMe}
        />
      </div>
      <div className='flex flex-col gap-5 mt-10'>
        <FromField
          labelName="prompt"
          type="text"
          name="prompt"
          placeholder="A Dinosaur exploring Cape Town, photography"
          value={form.name}
          handleChange={handleChange}
          isSurpriseMe
          handleisSurpriseMe={handleisSurpriseMe}
        />
      </div>
    </section>
  )
}

export default CreatePost
