import Layout from "../components/layout";
function IndexPage() {
  return (
    <Layout>
      <div className="  rounded-sm  ">
        <div className="flex flex-col items-center justify-center  hero bg-fixed h-screen">
          <img
            src="navvv.png"
            className="w-full max-w-md"
            alt="Four one-eyed aliens playing"
          />

          <h2 className="p-2 my-4  font-Metal  text-yellow-400 md:text-2xl">
            G - O L D &nbsp; S C H O O L &nbsp; T A T T O O
          </h2>
        </div>
      </div>
      {/*  HERO SECTİON  */}
      <div className="relative pt-16 pb-32 flex content-center bg-gray-900 items-center justify-center">
        <div className="flex flex-wrap items-center mt-16">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <img src="navvv.png"></img>{" "}
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              I NEED WEED
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"></p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"></p>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
              className="font-bold text-gray-800 mt-8"
              target="_blank"
            ></a>
          </div>
          {/*  ABOUT  */}

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-900">
              <img
                alt="..."
                src="mytatto.jpg"
                className="w-full align-middle rounded-t-lg"
                title=""
                styles="outline: red dashed 1px;"
              ></img>
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  styles="height: 95px; top: -94px;"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-yellow-400 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">AND MORE </h4>
                <p className="text-md font-light mt-2 text-white"></p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/*  STORE  */}
      <div className="relative pt-16 pb-32 flex content-center bg-yellow-900 items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full  content-center md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full  rounded-lg shadow-lg"
                src="mytatto.jpg"
                title=""
                styles="outline: red dashed 1px;"
              ></img>
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-yellow-400 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-black">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">A growing company</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Amazing page examples</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  ABOUT PERSON  */}

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Here are our heroes</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-1-800x800-fa5a7ac2c81a43925586ea85f2fea332.jpg"
                className="shadow-lg rounded-full max-w-full mx-auto"
                styles="max-width: 120px;"
                title=""
              ></img>
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Ryan Tompson</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Web Developer
                </p>
                <div className="mt-6">
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </button>
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg"
                className="shadow-lg rounded-full max-w-full mx-auto"
                styles="max-width: 120px;"
                title=""
              ></img>
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Romina Hadid</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Marketing Specialist
                </p>
                <div className="mt-6">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg"
                className="shadow-lg rounded-full max-w-full mx-auto"
                styles="max-width: 120px;"
                title=""
              ></img>
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Alexa Smith</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  UI/UX Designer
                </p>
                <div className="mt-6">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-4-470x470-4ef82ef45a9598d24c4c951ead4d626a.png"
                className="shadow-lg rounded-full max-w-full mx-auto"
                styles="max-width: 120px;"
                title=""
              ></img>
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Jenna Kardi</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Founder and CEO
                </p>
                <div className="mt-6">
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </button>
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
