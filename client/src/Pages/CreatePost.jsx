// import React, { useState } from 'react'
// import { Form, useNavigate } from 'react-router-dom'
// import { getRandompromot } from '../utils'
// import { FromField, Loader } from '../components';

// const [generatingImage, setGeneratingImage] = useState(false);
// const [loader, setloader] = useState(false);

// async function generateImage() {
//   if (form.prompt) {
//     try {
//       setGeneratingImage(true);
//       const response = await fetch('http://localhost:8080/api/v1/dell', {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ prompt: form.prompt }), // Use curly braces for the object
//       });
//       const data = await response.json();
//       setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` }); // Use curly braces for the object
//     } catch (error) {
//       alert(error);
//     } finally {
//       setGeneratingImage(false);
//     }
//   } else {
//     alert('Please Enter a Prompt');
//   }
// }

// function handleSubmit() {

// }

// function handleChange(e) {
//   setForm({...form, [e.target.name]: e.target.value})
// }
// function handleisSurpriseMe() {
//   const randomPrompt = getRandompromot(form.prompt)
//   setForm({...form, prompt: randomPrompt})
// }

// function CreatePost() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     prompt: "",
//     photo: "",
//   });

//   return (
//     <section className='max-w-7xl max-auto items-center justify-center flex'>

//     </section>
//   )
// }

// export default CreatePost

import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { getRandompromot } from "../utils";
import { FromField, Loader } from "../components";

function CreatePost() {
  const navigate = useNavigate();
  const [generatingImage, setGeneratingImage] = useState(false);
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  async function generateImage() {
    if (form.prompt) {
      try {
        setGeneratingImage(true);
        const response = await fetch("http://localhost:8080/api/v1/dell", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImage(false);
      }
    } else {
      alert("Please Enter a Prompt");
    }
  }

  function handleSubmit() {
    // Handle form submission
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleisSurpriseMe() {
    const randomPrompt = getRandompromot(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  }

  return (
    <section className="max-w-7xl max-auto items-center justify-center flex">
      <div className="max-w-7xl max-auto items-center flex justify-center ">
        <h1 className="text-[32px]">Create</h1>
        <p className="mt-4 text-[#666e75] text-[14px] max-w-[500px]">
          Here we can Create AI image generator which we can use flexibility
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FromField
            labelName="Your Name"
            type="text"
            name="prompt"
            placeholder="A Dinosaur exploring Cape Town, photography"
          />
        </div>
        <div className="flex flex-col gap-5 mt-10">
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
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src="/src/assets/preview.png"
                alt="Preview Image"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImage && (
              <div className="inset-0 z-0 absolute flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="mt-10 text-white bg-green-700 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center items-center justify-center w-full"
          >
            {generatingImage ? "...Generating" : "Generate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#132] text-[14px]">
            This is image generator app in this app we are try to calculate the
            problem statement and continous moiterating here
          </p>
        </div>

        <button
          type="submit"
          className="mt-10 text-white bg-green-700 font-medium rounded-md text-sm  sm:w-auto px-5 py-2.5 text-center items-center justify-center w-[100%]"
        >
          Share your Community
        </button>
      </form>
    </section>
  );
}

export default CreatePost;
