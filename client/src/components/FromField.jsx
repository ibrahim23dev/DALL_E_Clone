import React from 'react'

function FromField({labelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleisSurpriseMe}) {
  return (
    <div>
      <div className='flex items-center gap-2 mb-3'>
        <label className='block text-sm font-medium text-gray-900'>
           {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black' onClick={handleisSurpriseMe}>
              Surprise Me
          </button>
        )}
      </div>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border-gray-300 text-sm text-gray-900
        rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none
        block w-full p-3 '
      />
    </div>
  )
}

export default FromField
