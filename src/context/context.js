import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const jobProvider = createContext();

const ContextProvider = ({ children }) => {
  const [steps, setSteps] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cardData, setCardData] = useState();
  const [loader, setLoader] = useState(false);
  const [errorHandler, setErrorHandaler] = useState(false);
  const [error, setError] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [formData, setFormData] = useState({
      jobTitle: "",
      companyName: "",
      industry: "",
      location: "",
      remoteType: "",
      minExp: "",
      maxExp: "",
      minSalary: "",
      maxSalary: "",
      tatalEmp: "",
      apply_type: "",
  });
  


  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

// Get Data From API
  async function getData() {
    setLoader(true);
    try {
      const responce = await axios.get(
        "https://642fc85eb289b1dec4b9ccc1.mockapi.io/jobs"
      );
      setCardData(responce.data);
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  }

// Submit Form Data ( POST )
  const handleSaveData = async (e) => {
    e.preventDefault()
    if( cardId ) {
      try {
        setLoader(true);
        await axios.put(
          `https://642fc85eb289b1dec4b9ccc1.mockapi.io/jobs/${cardId}`,
          formData
        );
        setIsOpen(false);
        setSteps(false);
        setErrorHandaler(true);
        getData();
        setLoader(false);
        setFormData(
          {
            jobTitle: "",
            companyName: "",
            industry: "",
            location: "",
            remoteType: "",
            minExp: "",
            maxExp: "",
            minSalary: "",
            maxSalary: "",
            tatalEmp: "",
            apply_type: "",
          }
        )
      } 
      catch (err) {
        console.log(err);
  
        setIsOpen(false);
        setSteps(false);
        setErrorHandaler(true);
        setLoader(false);
      }
    } 
    else 
    {
      try {
        setLoader(true);
        await axios.post(
          "https://642fc85eb289b1dec4b9ccc1.mockapi.io/jobs",
          formData
        );
        setIsOpen(false);
        setSteps(false);
        setErrorHandaler(true);
        getData();
        setLoader(false);
        setFormData(
          {
            jobTitle: "",
            companyName: "",
            industry: "",
            location: "",
            remoteType: "",
            minExp: "",
            maxExp: "",
            minSalary: "",
            maxSalary: "",
            tatalEmp: "",
            apply_type: "",
          }
        )
      } 
      catch (err) {
        console.log(err);
        setIsOpen(false);
        setSteps(false);
        setErrorHandaler(true);
        setLoader(false);
      }


    }


   
  };

// Delete Card
  const handleDeleteCard = async (i) => {
    setLoader(true);
    await axios.delete(`https://642fc85eb289b1dec4b9ccc1.mockapi.io/jobs/${i}`);
    getData();
    setLoader(false);
  };

// Edit Card

   const handleEditCardData = async (id) => {
    setIsOpen(true)
    setCardId(id)
    const edtResponce = await axios.get(`https://642fc85eb289b1dec4b9ccc1.mockapi.io/jobs/${id}`);
    setFormData( edtResponce.data)
    console.log("editData", id)
   } 




  function handleStepOne () {
    setSteps(true)
  }


// Modal Open Close functions 
  function closeModal() {
    setIsOpen(false);
    setSteps(false);
  }
  function closeErrorModal() {
    setErrorHandaler(false);
  }

  function openErrorModal() {
    setErrorHandaler(true);
  }

  return (
    <jobProvider.Provider
      value={{
        steps,
        setSteps,
        formData,
        setFormData,
        closeModal,
        isOpen,
        setIsOpen,
        handleDeleteCard,
        cardData,
        loader,
        errorHandler,
        setErrorHandaler,
        closeErrorModal,
        openErrorModal,
        handleSaveData,
        handleStepOne,
        error,
        cardId,
        setError,
        handleEditCardData,
      }}
    >
      {children}
    </jobProvider.Provider>
  );
};

export { jobProvider, ContextProvider };
