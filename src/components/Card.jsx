import React, { useContext } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo-N.png";
import { jobProvider } from "../context/context";

const Card = ({ item, id }) => {
  const { handleDeleteCard, handleEditCardData } = useContext(jobProvider);
  const jobDetails = [
    { value: "Part-Time (9.00 am - 5.00 pm IST)" },
    { value: `Experience (${item.minExp} - ${item.maxExp} years)` },
    { value: `INR(₹) ${item.minSalary} - ${item.maxSalary} / Month` },
    { value: `${item.tatal_emp} employees` },
  ];
  return (
    <div className="flex my-6 bg-white rounded-lg shadow-md p-6 sm:w-full lg:w-cardW">
      <div className="flex flex-wrap">
        <img
          className="inline w-10 h-10 rounded-md me-2"
          src={Logo}
          alt="Logo"
        />
        <div>
          <h3 className=" text-2xl font-semibold ">{item.jobTitle}</h3>
          <p className="text-gray-700 font-medium">{item.industry}</p>
          <p className="text-r-btn-color mb-4">
            {item.location} ({item.remoteType})
          </p>

          {jobDetails.map((detail, index) => (
            <p key={index} className="mt-2">
              {detail.value}
            </p>
          ))}

          <div className="flex justify-between mt-6">
            {item.apply_type   &&
              ((item.apply_type === "quick_apply") ? (
                <button className=" bg-btn-color hover:bg-btn-color text-white font-normal py-2 px-4 rounded">
                  Apply Now
                </button>
              ) : (
                <button className="border border-btn-color text-btn-color hover:bg-btn-color hover:text-white font-medium py-2 px-4 rounded">
                  External Apply
                </button>
              ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-end ">
        <div className="relative group  h-7">
          <PencilSquareIcon onClick={() => handleEditCardData(id)} className="h-6 w-6 text-blue-200 cursor-pointer group-hover:text-btn-color" />
          <span className="absolute bottom-8 left-0  bg-black text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100">
            Edit
          </span>
        </div>

        <div className="relative group h-7">
          <TrashIcon
            onClick={() => handleDeleteCard(id)}
            className="h-6 w-6 ms-3 text-blue-200 hover:text-btn-color cursor-pointer"
          />
          <span className="absolute bottom-8 left-0 bg-black text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100">
            Delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
