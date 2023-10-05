import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRandompromot } from '../utils'
import { FromField, Loader } from '../components';


function generatImage() {
  
}

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
  const [Loader, setLoader] = useState(true);
  return (
    <section className='max-w-7xl max-auto'>
      <div>
        <h1 className='text-[32px]'>Create</h1>
        <p className='mt-4 text-[#666e75] text-[14px] max-w-[500px]'>Here we can Create AI image generator which we can use flexibility</p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>

     

      <div className='flex flex-col gap-5'>
        <FromField
          labelName="Your Name"
          type="text"
          name="prompt"
          placeholder="A Dinosaur exploring Cape Town, photography"
          
          
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
        <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-500 w-64 p-3 h-64 flex justify-center items-center'>
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className='w-full h-full object-contain'
            />
          ) : (
              <img src="/src/assets/preview.png" 
              alt="Preview Image"
                 className='w-9/12 h-9/12 object-contain opacity-40'
              />
          )}

          {generatingImage && (
            <div className='inset-0 z-0 absolute flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
            <Loader/>
            </div>
          )}
          </div>
          
        </div>
        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            onClick={generatImage}
          >
            {generatImage ? '...generating' : 'Generate'}
            
        </button>
        </div>
         </form>
    </section>
  )
}

export default CreatePost
