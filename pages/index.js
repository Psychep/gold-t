import Layout from "../components/layout";
function IndexPage() {
  return (
    <Layout>
      <div className="  ">
        <div className="flex flex-col items-center justify-center  hero bg-fixed h-screen">
          <img
            src="team-of-critters.svg"
            className="w-full max-w-xl"
            alt="Four one-eyed aliens playing"
          />

          <h2 className="p-3 my-8  font-all-roll  text-yellow-400 md:text-2xl">
            G-OLD SCHOOL TATTOO
          </h2>
        </div>
      </div>

      <div class="bg-gray-200">
        <div class="inline-block text-gray-700 text-center font-billion bg-gray-400 px-4 py-2 m-2">
          <img
            src="https://images.unsplash.com/photo-1595683709970-c0844deb290e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&auto=format&fit=crop&w=1534&q=80"
            alt="dog???"
            width="500"
            height="600"
          ></img>
        </div>
        <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          2
        </div>
        <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          3
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
