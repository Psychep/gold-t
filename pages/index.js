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

      <div className="  flex-1     mx-auto md:px-8 md:py-16 xl:flex md:flex lg:flex bg-gray-200 ">
        <div className="   text-center   px-12 py-1 m-1">
          <h2 className="font-Metal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  bg-gray-200 p-2 my-5 text-yellow-600 ">
            O L D &nbsp; BUT &nbsp; G O O D &nbsp; T A T T O O
          </h2>
          <img src="mytatto.jpg" className="max-w " alt="tattoo???"></img>
        </div>
        <div className="  text-center  px-12 py-1 m-1">
          <h2 className="font-Metal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  p-2 my-5 text-yellow-600   Y">
            O L D &nbsp; BUT &nbsp; G O O D &nbsp; T A T T O O
          </h2>

          <img src="mytatto.jpg" className="max-w" alt="dog???"></img>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
