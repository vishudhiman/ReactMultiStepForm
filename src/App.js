import React from "react";
import UserForm from "./components/UserForm";

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <button
          className="bg-blue-600 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={openModal}
        >
          SignUp
        </button>
      </div>
      {modalIsOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-200">
            <UserForm close={closeModal} />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
