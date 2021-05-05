import React, { Component } from "react";

export class FormUserDetails extends Component {
  Continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange, close } = this.props;
    return (
      <div class="flex lg:w-full h-screen  mx-auto my-8 overflow-hidden bg-white border rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl ">
        <div class="bg-cover lg:w-5/12 md:w-1/3 mt-8 ">
          <div>
            <img
              src="https://ik.imagekit.io/sfatbd3jh/New_Folder/jump_KnOcuJLo3.svg"
              alt="JumpStart"
              class="w-6 px-10 pt-2 md:w-auto"
            />
          </div>
          <div class="h-96 flex flex-col justify-center px-10 pt-10">
            <p class="mt-16 px-2 block text-xl font-bold font-sans text-center text-black">
              Welcome back!
            </p>
            <p class="mt-4 px-2 block text-sm text-center font-sans text-gray-600 dark:text-gray-200">
              SignUp To Continue
            </p>
          </div>
        </div>

        <div class="w-8/12 mt-10 mx-4 py-8 md:px-8 lg:w-full sm:w-1/3">
          <div
            className="-mt-12 float-right object-right-top hover:bg-gray-400 rounded-2xl hover:text-white cursor-pointer"
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
          <a
            href="/"
            class="flex ml-8 items-center justify-center mt-4 text-gray-600 border border-blue-600 bg-transparent "
          >
            <div class="px-4 py-3">
              <svg class="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span class="w-5/6py-3 font-bold text-center text-blue-600">
              Continue With Google
            </span>
          </a>

          <div class="flex items-center justify-between mt-11">
            <span class="w-2/5 border-b dark:border-gray-600 lg:w-64"></span>

            <a
              href="/"
              class="text-xs text-center text-black-800 font-medium uppercase dark:text-gray-400 hover:underline"
            >
              OR
            </a>

            <span class="w-3/5 border-b dark:border-gray-400 lg:w-64"></span>
          </div>

          <div class="ml-8 mt-8">
            <label
              class="block mb-2 text-sm font-bold text-gray-800 dark:text-gray-200"
              for="LoggingName"
            >
              Your Full Name
            </label>
            <input
              id="LoggingName"
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              placeholder="Enter Your Full Name"
              onChange={handleChange("fullName")}
              defaultValue={values.fullName}
            />
          </div>

          <div class="mt-4 ml-8">
            <label
              class="block mb-2 text-sm font-bold text-gray-800 dark:text-gray-200"
              for="LoggingEmailAddress"
            >
              Your Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
              placeholder="Enter Your Email Address"
              onChange={handleChange("email")}
              defaultValue={values.fullName}
            />
          </div>

          <div class="mt-4 ml-8">
            <div class="flex justify-between">
              <label
                class="block mb-2 text-sm font-bold text-gray-800 dark:text-gray-200"
                for="loggingPassword"
              >
                Password
              </label>
            </div>
            <input
              id="LoggingPassword"
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="password"
              placeholder="Enter Password"
              onChange={handleChange("password")}
              defaultValue={values.fullName}
            />
          </div>

          <div class="mt-12">
            <button
              class="w-28 px-4 py-2 ml-60 tracking-wide text-white font-sans transition-colors duration-200 transform bg-blue-600 rounded hover:bg-blue-300 focus:outline-none focus:bg-gray-600 justify-center"
              onClick={this.Continue}
            >
              Next
            </button>
          </div>

          <div class="flex items-center justify-between mt-12">
            <span class="w-full ml-32 border-b dark:border-gray-600 md:w-96"></span>
          </div>
          <p class="mt-8 text-base font-normal text-center text-gray-500">
            {" "}
            By signing up, you're agreeing to our
            <a href="/" class="font-bold text-blue-700 hover:underline">
              {" "}
              Terms of Use
            </a>
          </p>
          <p class="mt-2 text-base font-normal text-center text-gray-500">
            {" "}
            Already have an account?
            <a href="/" class="font-bold text-blue-700 hover:underline">
              {" "}
              Log In
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default FormUserDetails;
