import React, { useContext } from 'react';
import { inputClasses } from '../common/Classes';
import { jobProvider } from '../context/context';

const Step2 = () => {
  const { setSteps, formData, setFormData, cardId, handleSaveData } = useContext(jobProvider);
  
  return (
    <>
    <form onSubmit={handleSaveData} className="w-full p-8 bg-white rounded-md">
        <div className="flex justify-between align flex-wrap items-center">
          <h3 className="text-xl font-medium">Create a job</h3>
          <h5 className='font-medium text-base'>Step 2</h5>
        </div>
       
          <div className="mt-6">
            <label
              htmlFor="experience"
              className="block text-gray-700 font-medium text-sm"
            >
              Experience 
            </label>
            <div className='flex justify-between gap-x-6 mt-1'>
            <input 
              type="number"
              id="minExp"
              name="minExp"
              className={inputClasses}
              placeholder="Minimun"
              // value={formData['min_exp']}
              onChange={(e)=> setFormData({...formData, "minExp": e.target.value})}
            />
            <input
              type="number"
              id="maxExp"
              name="maxExp"
              className={inputClasses}
              placeholder="Maximum"
              // value={formData['max_exp']}
              onChange={(e)=> setFormData({...formData, "maxExp": e.target.value})}
            />
            </div>
          </div>
        
        {/* Salary */}
        <div className="mt-6">
            <label
              htmlFor="experience"
              className="block text-gray-700 font-medium text-sm"
            >
              Salary 
            </label>
            <div className='flex justify-between gap-x-6 mt-1'>
            <input 
              type="number"
              id="minSalary"
              name="minSalary"
              className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-1-blue-200 focus:outline-none"
              placeholder="Minimun"
              value={formData['minSalary']}
              onChange={(e)=> setFormData({...formData, "minSalary": e.target.value})}
            />
            <input
              type="number"
              id="maxSalary"
              name="maxSalary"
              className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-1-blue-200 focus:outline-none"
              placeholder="Maximum"
              value={formData['maxSalary']}
              onChange={(e)=> setFormData({...formData, "maxSalary": e.target.value})}
            />
            </div>
        </div>

        {/* Total employee */}
        <div className="mt-6">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-1 text-sm"
          >
            Total employee
          </label>
          <input
            type="text"
            id="total_emp"
            name="tatal_emp"
            className="w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-1-blue-200 focus:outline-none"
            placeholder="ex.100"
            value={formData['tatalEmp']}
            onChange={(e)=> setFormData({...formData, "tatalEmp": e.target.value})}
          />
        </div>
       
       {/* Apply Type */}

       <div className="mt-6">
            <label
              htmlFor="experience"
              className="block text-gray-700 font-medium mb-1 text-sm"
            >
              Apply type 
            </label>
            <div className='flex mt-3 flex-wrap '>
            <div className='flex items-center' >
            <input 
              type="radio"
              id="quick_apply"
              name="apply_type"
              className="pr-4 border rounded-md"
              placeholder="Minimum"
              value={formData['quick_apply']}
              onChange={()=> setFormData({...formData, "apply_type": 'quick_apply'})}
            />
            <label className='text-r-btn-color ml-1 me-2 text-sm' htmlFor="radio">Quick apply</label>
            </div>
            <div className='flex items-center' >
            <input
              type="radio"
              id="external_apply"
              name="apply_type"
              className="md:ml-4 border rounded-md"
              placeholder="Maximum"
              value={formData['external_apply']}
              onChange={()=> setFormData({...formData, "apply_type": "external_apply"})}
            />
            <label className='text-r-btn-color ml-1 text-sm'  htmlFor="radio">Expernal apply</label>
            </div>
            </div>
        </div>
       
       
        <div className="mt-24 flex justify-between">
        <button
            onClick={()=> setSteps(false)}
            type="submit"
            className="border border-btn-color text-btn-color hover:bg-btn-color hover:text-white font-medium py-2 px-4 rounded"
          >
            Back
          </button>


          <button
              type="submit"
              className="px-4 py-2 text-white bg-btn-color hover:bg-btn-color rounded"
            >
              {cardId? "update" :  "Save"}
            </button>

          {/* {
            cardId ?  
              <button
              onClick={updateCardData}
            className="px-4 py-2 text-white bg-btn-color hover:bg-btn-color rounded"
          >
            Update
          </button>
             : 
              <button
              type="submit"
              className="px-4 py-2 text-white bg-btn-color hover:bg-btn-color rounded"
            >
              Save
            </button>
            
          } */}

         
        </div>
      </form>

      

      </>
  )
}

export default Step2
