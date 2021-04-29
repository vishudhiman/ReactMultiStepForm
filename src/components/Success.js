import React, { Component } from "react";

export class Success extends Component {
  render() {
    const { close } = this.props;
    return (
      <div class="flex max-w-lg mx-auto my-16 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:max-w-4xl lg:max-w-4xl">
        <div class="bg-cover lg:w-5/12 md:w-1/3">
          <img
            src="https://ik.imagekit.io/sfatbd3jh/New_Folder/jump_KnOcuJLo3.svg"
            alt="JumpStart"
            class="w-6 px-4 md:w-auto"
          />
          <p class="mt-16 block text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>
        </div>

        <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div
            className="-mt-8 float-right object-right-top hover:bg-gray-400 rounded-2xl hover:text-white cursor-pointer"
            onClick={close}
          >
            <svg
              class="w-6 h-6"
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
          <div class="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              natus sint sit omnis enim? Nam impedit sit, dolorem, similique
              temporibus dolor molestiae harum exercitationem assumenda rem ipsa
              accusamus quisquam fuga.
            </p>
          </div>
          <div class="mt-4">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
              natus sint sit omnis enim? Nam impedit sit, dolorem, similique
              temporibus dolor molestiae harum exercitationem assumenda rem ipsa
              accusamus quisquam fuga.
            </p>
          </div>

          <div class="flex items-center justify-between mt-4">
            <span class="w-full border-b dark:border-gray-600 md:w-3/5"></span>
          </div>
        </div>
      </div>
    );
  }
}
export default Success;
