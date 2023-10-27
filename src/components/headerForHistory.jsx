const HeaderForHistory = () => {
//   const timeParts = nextRelease.split(",");
  return (
    <div class="bg-slate-300 h-full w-full flex flex-col ">
      <div class="h-40 bg-custom-blue w-full ">
        <div class="flex flex-row ">
          <img
            class="logo h-10"
            src="https://api.fastlotwin.net/static/logo.png"
            alt="logo img"
          />
          <div class="flex-1"></div>
          <div class=" flex justify-between h-24 w-5/6 bg-custom-black mr-56 rounded-lg mt-1 ml-6">
            <h3 class="text-white text-xl font-semibold ml-6 mt-7">
              Next:11 am
            </h3>
            <div class="flex flex-row-reverse space-x-4 space-x-reverse space-y-6 ">
              <div class="text-center">
                <button class="h-10 w-24 bg-rose-600 rounded-lg mt-6 mr-3"></button>
                <p class="text-white h=1 font-bold -m-2">Seconds</p>
              </div>
              <div class="text-center">
                <button class="h-10 w-24 bg-rose-600 rounded-lg "></button>
                <p class="text-white h=1 font-bold -m-2">Minutes</p>
              </div>
              <div class="text-center">
                <button class="h-10 w-24 bg-rose-600 rounded-lg">
                  <p class="text-white font-bold text-3xl ">00</p>
                </button>
                <p class="text-white h=1 font-bold -m-1">Hours</p>
              </div>
              <div class="text-center">
                <button class="h-10 w-24 bg-rose-600 rounded-lg">
                  <p class="text-white font-bold text-3xl ">00</p>
                </button>
                <p class="text-white h=1 font-bold -m-1">Days</p>
              </div>
              <button class="h-8 w-10 bg-rose-600 rounded-sm border border-lime-600 hover:border-teal-700 flex flex-col items-center justify-center">
                {/* <img
                    class="icon h-5 w-5 fill-white "
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTMuNSAyYy01LjYyMSAwLTEwLjIxMSA0LjQ0My0xMC40NzUgMTBoLTMuMDI1bDUgNi42MjUgNS02LjYyNWgtMi45NzVjLjI1Ny0zLjM1MSAzLjA2LTYgNi40NzUtNiAzLjU4NCAwIDYuNSAyLjkxNiA2LjUgNi41cy0yLjkxNiA2LjUtNi41IDYuNWMtMS44NjMgMC0zLjU0Mi0uNzkzLTQuNzI4LTIuMDUzbC0yLjQyNyAzLjIxNmMxLjg3NyAxLjc1NCA0LjM4OSAyLjgzNyA3LjE1NSAyLjgzNyA1Ljc5IDAgMTAuNS00LjcxIDEwLjUtMTAuNXMtNC43MS0xMC41LTEwLjUtMTAuNXoiLz48L3N2Zz4="
                    alt="refresh img"
                  /> */}
                <svg
                  class="animate-spin h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="h-12 w-full bg-custom-black">
          <div class="flex space-x-4 justify-center">
            <button class="h-8 w-20  bg-rose-600 rounded-sm border border-lime-600 hover:border-teal-700 ">
              <p class="text-white ">SINGLE</p>
            </button>
            <button class="h-8 w-16  bg-rose-600 rounded-sm border border-lime-600 hover:border-teal-700">
              <p class="text-white">TWO</p>
            </button>
            <button class="h-8 w-16  bg-rose-600 rounded-sm border border-lime-600 hover:border-teal-700">
              <p class="text-white">FULL</p>
            </button>
            <button class="h-8 w-16  bg-rose-600 rounded-sm border border-lime-600 hover:border-teal-700">
              <p class="text-white">CHART</p>
            </button>
            <button class="h-8 w-16  bg-rose-600 hover:bg-black rounded-sm border border-lime-600">
              <p class="text-white  font-semibold">HOME</p>
            </button>
          </div>
        </div>
      </div>
      <div class="h-2.5 mt-4 mb-1 bg-rose-600 w-full mt=-2"></div>
    </div>
  );
};
export default HeaderForHistory;
