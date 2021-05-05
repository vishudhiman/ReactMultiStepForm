import React from "react";
import Home from "./components/Home";
import UserForm from "./components/UserForm";
// import Modal from "react-modal";

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
      <button
        type="button"
        onClick={openModal}
        class="w-28 px-4 py-2 ml-60 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded hover:bg-blue-300 focus:outline-none focus:bg-gray-600 justify-center"
      >
        SignUp
      </button>
      {modalIsOpen ? (
        <div className="container mx-auto flex justify-content-center">
          {/* <Home /> */}
          <UserForm close={closeModal} />
        </div>
      ) : null}
    </>
    // <div>
    //   <button onClick={openModal}>Open Modal</button>
    //   <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
    //     <div className="container mx-auto">
    //       {/* <Home /> */}
    //       <UserForm />
    //     </div>
    //   </Modal>
    // </div>
  );
}

export default App;
