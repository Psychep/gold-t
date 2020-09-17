import Layout from "../components/layout";
import SimpleMap from "../js/SimpleMap";

function AboutPage() {
  return (
    <Layout>
      <div className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="space-y-6 md:w-1/2">
            {[
              {
                heading: `Biz Kimiz??`,
                body: `Nei.`,
              },
              {
                heading: `sss`,
                body: `asfsasafASFASF
                AFasfasf
                ASfasf
                ASF asfasfasfasfasfas  `,
              },
            ].map((section) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-bold">{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
          <SimpleMap></SimpleMap>

          <div className=""></div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
