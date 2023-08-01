import React, {useContext, useState} from 'react';
import { inputClasses } from '../common/Classes';
import { jobProvider } from '../context/context'

const Step1 = () => {
  const { formData, setFormData, handleStepOne } = useContext(jobProvider);
  
  return (
    <div className="w-full p-8 bg-white rounded-md ">
        <div className="flex justify-between align flex-wrap items-center ">
          <h3 className="text-xl font-medium">Create a job</h3>
          <h5 className='font-medium text-base'>Step 1</h5>
        </div>
        <div className="mt-6">
          <label
            htmlFor="job-title"
            className="block text-gray-700 font-medium text-sm"
          >
            Job title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="job-title"
            name="job-title"
            className={inputClasses}
            required
            placeholder="ex.UX UI Designer"
            value={formData['jobTitle']}
            onChange={(e)=> setFormData({...formData, "jobTitle": e.target.value})}
          />
           {/* {
            (formData['jobTitle'].length<=10) ? <p className='text-xs mt-1 ml-3 text-red-600'>Enter valid job title</p>: ""
           } */}
          
        </div>
        <div className="mt-6">
          <label
            htmlFor="company-name"
            className="block text-gray-700 font-medium text-sm"
          >
            Company name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company-name"
            name="company-name"
            className={inputClasses}
            required
            placeholder="ex. Google"
            value={formData['companyName']}
            onChange={(e)=> setFormData({...formData, "companyName": e.target.value})}
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="industry"
            className="block text-gray-700 font-medium text-sm"
          >
            Industry <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            className={inputClasses}
            required
            placeholder="ex.Information Technology"
            value={formData['industry']}
            onChange={(e)=> setFormData({...formData, "industry": e.target.value})}
          />
        </div>
        <div className="flex justify-between flex-wrap mt-6">
          <div className="mb-6 w-full lg:w-w40 md:w-w40">
            <label
              htmlFor="location"
              className="block text-gray-700 font-medium text-sm"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className={inputClasses}
              placeholder="ex.Information Technology"
              // value={formData['location']}
              onChange={(e)=> setFormData({...formData, "location": e.target.value})}
            />
          </div>
          <div className="w-full lg:w-w40 md:w-w40 ">
            <label
              htmlFor="location"
              className="block text-gray-700 font-medium text-sm"
            >
              Remote Type
            </label>
            <input
              type="remote"
              id="remote"
              name="remote"
              className={inputClasses}
              placeholder="ex. In-office"
              // value={formData['remoteType']}
              onChange={(e)=> setFormData({...formData, 'remoteType': e.target.value})}
            />
          </div>
        </div>
        <div className="mt-24 flex justify-end">
          <button
            onClick={handleStepOne}
            className="px-4 py-2 text-white bg-btn-color hover:bg-btn-color rounded-md"
          >
            Next
          </button>
        </div>
      </div>
  )
}

export default Step1
