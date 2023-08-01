import "./App.css";
import CircularLoader from "./common/Loader";
import Card from "./components/Card";
import DialogBox from "./components/Dialog";
import Modal from './common/Modal';
import { useContext } from "react";
import { jobProvider } from './context/context';

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, setIsOpen, cardData, loader } = useContext(jobProvider);
  return (
    <>
      <div className=" p-8">
        <div className="w-full">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded bg-sky-500 text-white py-2 px-4 font-medium"
          >
            Create Job
          </button>
          {
            loader && <CircularLoader />
          }
          
        </div>

        <div className="flex justify-between  flex-wrap items-center p-6 ">
          {cardData?.map((item, i) => (
            <Card item={item} key={i} id={item.id} />
          ))}
        </div>
      </div>
      <DialogBox isOpen={isOpen} setIsOpen={setIsOpen} />
      <Modal />
    </>
  );
}

export default App;
