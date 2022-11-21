import React from "react";

export default function ToggleSide() {
  return (
    <>
      {" "}
      <aside className="fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 translate-x-96">
        <div className="flex items-start justify-between px-6 pt-8 pb-6">
          <div>
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">Dashboard Configurator</h5>
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">See our dashboard options.</p>
          </div>
          <button
            className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
            type="button"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>
        <div className="py-4 px-6">
          <div className="mb-12">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">Sidenav Colors</h6>
            <div className="mt-3 flex items-center gap-2">
              <span className="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-blue-400 to-blue-600 border-black" />
              <span className="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-blue-gray-800 to-blue-gray-900 border-transparent" />
              <span className="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-green-400 to-green-600 border-transparent" />
              <span className="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-orange-400 to-orange-600 border-transparent" />
              <span className="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-red-400 to-red-600 border-transparent" />
              <span className="h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 from-pink-400 to-pink-600 border-transparent" />
            </div>
          </div>
          <div className="mb-12">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">Sidenav Types</h6>
            <p className="block antialiased font-sans text-sm font-light leading-normal text-gray-700">Choose between 3 different sidenav types.</p>
            <div className="mt-3 flex items-center gap-2">
              <button
                className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]"
                type="button"
              >
                Dark
              </button>
              <button
                className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-blue-500 text-blue-500 hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85]"
                type="button"
              >
                Transparent
              </button>
              <button
                className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-blue-500 text-blue-500 hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85]"
                type="button"
              >
                White
              </button>
            </div>
          </div>
          <div className="mb-12">
            <hr />
            <div className="flex items-center justify-between py-5">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">Navbar Fixed</h6>
              <div className="inline-flex items-center">
                <div className="relative inline-block w-8 h-4 cursor-pointer rounded-full">
                  <input
                    id="navbar-fixed"
                    type="checkbox"
                    className="peer appearance-none w-8 h-4 absolute bg-blue-gray-100 rounded-full cursor-pointer transition-colors duration-300 checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
                    defaultValue="true"
                  />
                  <label
                    htmlFor="navbar-fixed"
                    className="bg-white w-5 h-5 border border-blue-gray-100 rounded-full shadow-md absolute top-2/4 -left-1 -translate-y-2/4 peer-checked:translate-x-full transition-all duration-300 cursor-pointer before:content[''] before:block before:bg-blue-gray-500 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:transition-opacity before:opacity-0 hover:before:opacity-10 peer-checked:border-blue-500 peer-checked:before:bg-blue-500"
                  >
                    <div className="inline-block top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 rounded-full" style={{ position: "relative", overflow: "hidden" }} />
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="my-8 flex flex-col gap-4">
              <a href="https://www.creative-tim.com/product/material-tailwind-dashboard-react?rel=mtdr" target="_black">
                <button
                  className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full"
                  type="button"
                >
                  Free Download
                </button>
              </a>
              <a href="https://www.material-tailwind.com/docs/react/installation?rel=mtdr" target="_black">
                <button
                  className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] block w-full"
                  type="button"
                >
                  View Documentation
                </button>
              </a>
              <a href="https://www.material-tailwind.com/blocks/react?rel=mtdr" target="_black">
                <button
                  className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] block w-full"
                  type="button"
                >
                  Material Tailwind PRO
                </button>
              </a>
            </div>
            <a className="mx-auto flex items-center justify-center gap-2" href="https://github.com/creativetimofficial/material-tailwind-dashboard-react" target="_blank" rel="noreferrer">
              <div className="relative inline-block align-baseline font-sans text-xs font-bold uppercase center leading-none whitespace-nowrap py-2 rounded-lg select-none text-white bg-blue-gray-900 px-4" style={{ opacity: 1 }} data-projection-id={16}>
                <div className="w-5 h-5 absolute top-2/4 left-1 -translate-y-2/4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-px ml-1.5 h-4 w-4">
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-4  mt-px">69 - Stars</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="text-center">
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">Thank you for sharing ❤️</h6>
            <div className="mt-4 flex justify-center gap-2">
              <button
                className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white shadow-md shadow-blue-gray-500/20 hover:shadow-lg hover:shadow-blue-gray-500/40 active:opacity-[0.85] flex items-center gap-2"
                type="button"
              >
                <i className="fa-brands fa-twitter text-white" />
                Tweet
              </button>
              <button
                className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white shadow-md shadow-blue-gray-500/20 hover:shadow-lg hover:shadow-blue-gray-500/40 active:opacity-[0.85] flex items-center gap-2"
                type="button"
              >
                <i className="fa-brands fa-facebook text-white" />
                Share
              </button>
            </div>
          </div>
        </div>
      </aside>
      <button
        className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-white text-blue-gray-900 shadow-md hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
        type="button"
      >
        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </>
  );
}
