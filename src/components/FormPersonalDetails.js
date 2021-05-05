import React, { Component } from "react";

export class FormPersonalDetails extends Component {
  Continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, close } = this.props;
    return (
      <div>
        <div class="container w-screen h-full flex bg-white border rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-screen-lg ">
          <div class="bg-cover lg:w-5/12 md:w-1/3 mt-8">
            <div class="w-72">
              <img
                src="https://ik.imagekit.io/sfatbd3jh/New_Folder/jump_KnOcuJLo3.svg"
                alt="JumpStart"
                class="w-auto px-10 pt-2 md:w-auto sm:w-auto"
              />
            </div>
            <div class="h-96 flex flex-col justify-center px-10 pt-10">
              <p class="mt-16 mb-10 px-2 block text-xl font-bold font-sans text-center text-black">
                Welcome back!
              </p>
              <p class="mt-4 px-2 block text-sm text-center font-sans text-gray-600 dark:text-gray-200">
                SignUp To Continue
              </p>
            </div>
          </div>

          <div class="w-8/12 mt-10 mx-4 py-8 md:w-auto lg:w-full sm:w-auto">
            <div
              className="-mt-6 float-right object-right-top text-xl text-gray-400 hover:bg-gray-400 rounded-2xl hover:text-black cursor-pointer"
              onClick={close}
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <div class="my-32 mx-10 mr-12">
              <div class="">
                <label
                  class="block mb-2 text-sm font-bold text-gray-800 dark:text-gray-200"
                  for="LoggingName"
                >
                  College
                </label>
                <input
                  id="collegeName"
                  class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                  placeholder="Enter Your CollegeName"
                  onChange={handleChange("collegeName")}
                  defaultValue={values.collegeName}
                />
              </div>
              <div class="-mx-3 md:flex flex-wrap mb-2 mt-4">
                <div class="md:w-1/2 px-3">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-800 dark:text-gray-200"
                    for="CollegeName"
                  >
                    Graduation Year
                  </label>
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-gray-700 py-3 px-4 pr-8 rounded"
                      id="grid-state"
                    >
                      <option>Select Graduation Year</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                    </select>
                  </div>
                </div>
                <div class="md:w-1/2 px-3">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-800 dark:text-gray-200"
                    for="CollegeName"
                  >
                    Degree
                  </label>
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-gray-700 py-3 px-4 pr-8 rounded"
                      id="grid-state"
                    >
                      <option>Select Degree Name</option>
                      <option>B.Tech</option>
                      <option>BSc</option>
                      <option>BCA</option>
                      <option>BA</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <label
                  class="block mb-2 text-sm font-bold text-gray-800 dark:text-gray-200"
                  for="LoggingName"
                >
                  Major
                </label>
                <input
                  id="major"
                  class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                  placeholder="Enter Your Major"
                  onChange={handleChange("major")}
                  defaultValue={values.major}
                />
              </div>

              <div class="flex justify-between mt-8">
                <button
                  class="w-28 px-4 py-2 tracking-wide text-white font-sans transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-300 hover:text-gray-900 focus:outline-none focus:bg-gray-600"
                  onClick={this.back}
                >
                  Back
                </button>
                <button
                  class="w-28 px-4 py-2 ml-60 tracking-wide text-white font-sans transition-colors duration-200 transform bg-blue-600 rounded hover:bg-blue-300 focus:outline-none focus:bg-gray-600 justify-center"
                  onClick={this.Continue}
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormPersonalDetails;
