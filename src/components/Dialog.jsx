import React, { useContext } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { jobProvider } from '../context/context';


const DialogBox = () => {
    
    const { steps, closeModal, isOpen } = useContext(jobProvider);


  return (
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle  transition-all">
              <div className="flex box-content justify-center items-center ">

                {
                    !steps? <Step1 /> : <Step2 />
                }
                
                
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}

export default DialogBox
