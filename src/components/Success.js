import React, { Component } from "react";

export class Success extends Component {
  render() {
    const { close } = this.props;
    return (
      <div class="flex max-w-lg mx-auto my-16 overflow-hidden bg-white border rounded-lg shadow-lg dark:bg-gray-800 md:max-w-4xl lg:max-w-4xl">
        <div class="bg-cover lg:w-5/12 md:w-1/3 mt-8 bg-">
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

        <div class="w-full px-9 py-8 md:px-8 lg:w-full">
          <div
            className="-mt-3 float-right object-right-top hover:bg-gray-400 rounded-2xl hover:text-white cursor-pointer"
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
          <div class=" w-full mt-8 ml">
            <div className="mt-8">
              <h1 class="block text-xl font-bold font-sans text-center text-black">
                We Need To Verify Your <br /> <span class="ml-2">Email</span>
              </h1>
            </div>
            <div class="mt-4">
              <p class="px-2 block text-sm text-center font-sans text-gray-900 dark:text-gray-200">
                We Sent an email to the address you <br /> provided when you
                created your account. <br />
                verify Your Email To Continue
              </p>
              <input
                type="text"
                placeholder="xyz123@gmail.com"
                class="block text-center w-48 ml-44 mt-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring te"
                disabled
              />
            </div>
            <div class="flex items-center justify-between mt-8">
              <span class="w-full ml-32 border-b dark:border-gray-600 md:w-80"></span>
            </div>
            <div class="mt-4">
              <p class="px-2 block text-sm text-center font-sans text-gray-900 dark:text-gray-200">
                Click on the link in the email to verify <br /> your account.
                You may need to check <br /> your{" "}
                <span class=" text-black font-bold">spam</span> folder
              </p>
            </div>
            <div class="mt-12 justify-center">
              <button class="w-52  py-2 ml-28 tracking-wide text-white font-sans transition-colors duration-200 transform bg-blue-600 rounded hover:bg-blue-300 focus:outline-none focus:bg-gray-600 justify-center">
                Don't See It?Resend
              </button>
            </div>
            <p class="mt-8 text-base font-normal text-center text-gray-500">
              {" "}
              Not Your Account
              <a href="/" class="font-bold text-blue-700 hover:underline">
                {" "}
                Logout
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Success;       