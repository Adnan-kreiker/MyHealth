<template>
  <body>
    <div>
      <div
        class="absolute w-full h-64 md:h-96 object-center object-fit z-10 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500"
      />
      <div
        class="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32"
      >
        <div class="md:py-36 py-20">
          <h1
            role="heading"
            class="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white"
          >
            Frequently asked questions
          </h1>
        </div>
        <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
          <div class="bg-white shadow rounded p-8">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-base font-semibold leading-none text-gray-800">
                  Why should I use your service?
                </h2>
              </div>
              <button
                data-menu
                class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                <svg
                  v-if="faq1"
                  role="button"
                  aria-label="close dropdown"
                  class=""
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="faq1 = false"
                >
                  <path
                    d="M1 5L5 1L9 5"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-if="!faq1"
                  width="10"
                  role="button"
                  aria-label="open dropdown"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="faq1 = true"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <ul v-if="faq1">
              <li>
                <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                  If you want to choose Pro or Business plan the you can use all
                  payments. You can pay from Paypal, Payoneer, Master Card,
                  Debit Card.
                </p>
              </li>
            </ul>
          </div>
          <div class="bg-white shadow rounded p-8 mt-8">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-base font-semibold leading-none text-gray-800">
                  What payment method I can use?
                </h2>
              </div>
              <button
                data-menu
                class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                <svg
                  v-if="faq2"
                  role="button"
                  aria-label="close dropdown"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="faq2 = false"
                >
                  <path
                    d="M1 5L5 1L9 5"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-if="!faq2"
                  width="10"
                  role="button"
                  aria-label="open dropdown"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="faq2 = true"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <ul v-if="faq2">
              <li>
                <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                  If you want to choose Pro or Business plan the you can use all
                  payments. You can pay from Paypal, Payoneer, Master Card,
                  Debit Card.
                </p>
              </li>
            </ul>
          </div>
          <div class="bg-white shadow rounded p-8 mt-8">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-base font-semibold leading-none text-gray-800">
                  Is your service safe to use?
                </h2>
              </div>
              <button
                data-menu
                class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                <svg
                  v-if="faq3"
                  role="button"
                  aria-label="close dropdown"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="faq3 = false"
                >
                  <path
                    d="M1 5L5 1L9 5"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-if="!faq3"
                  width="10"
                  role="button"
                  aria-label="open dropdown"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="faq3 = true"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <ul v-if="faq3">
              <li>
                <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                  If you want to choose Pro or Business plan the you can use all
                  payments. You can pay from Paypal, Payoneer, Master Card,
                  Debit Card.
                </p>
              </li>
            </ul>
          </div>
          <div class="bg-white shadow rounded p-8 mt-8">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-base font-semibold leading-none text-gray-800">
                  How to recover password?
                </h2>
              </div>
              <button
                data-menu
                class="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                <svg
                  v-if="faq4"
                  role="button"
                  aria-label="close dropdown"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="faq4 = false"
                >
                  <path
                    d="M1 5L5 1L9 5"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-if="!faq4"
                  width="10"
                  role="button"
                  aria-label="open dropdown"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="faq4 = true"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <ul v-if="faq4">
              <li>
                <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                  If you want to choose Pro or Business plan the you can use all
                  payments. You can pay from Paypal, Payoneer, Master Card,
                  Debit Card.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      faq1: false,
      faq2: false,
      faq3: false,
      faq4: false,
    }
  },
}
</script>
