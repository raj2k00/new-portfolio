import { Montserrat } from "next/font/google";
import { ErrorMessage, Field, Form, Formik } from "formik";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <section
      className={`flex relative items-center justify-center h-screen snap-start ${montserrat.className}`}
    >
      <div className="flex w-full">
        <aside className="w-2/5 flex items-center justify-center flex-col pl-24">
          <p className="text-5xl font-medium">
            Let&apos;s Talk <br /> Tell me about your Project.
          </p>
          <p className="text-lg self-start font-medium py-4">
            Let&apos;s create something together!
          </p>
          <div className="self-start flex gap-4 py-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="mail"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 29 29"
              width="50"
              height="50"
              xmlSpace="preserve"
              className="fill-primary "
            >
              <path d="M2 7.42v14.172l7.086-7.086zM3.408 6l8.971 8.971c1.133 1.133 3.109 1.133 4.242 0L25.592 6H3.408z"></path>
              <path d="M18.035 16.385c-.943.944-2.199 1.465-3.535 1.465s-2.592-.521-3.535-1.465l-.465-.465L3.42 23h22.16l-7.08-7.08-.465.465zM19.914 14.506L27 21.592V7.42z"></path>
            </svg>
            <div className="flex flex-col">
              <span className="">mail me at</span>
              <a
                className="font-semibold"
                href="mailto:mohanraj.2k00@gmail.com"
              >
                mohanraj.2k00@gmail.com
              </a>
            </div>
          </div>
        </aside>
        <main className=" w-3/5  ">
          <div className="dark_box_shadow w-4/5 p-8 rounded-lg">
            <h4 className="font-semibold opacity-75">
              Send me a message &nbsp; 🚀{" "}
            </h4>

            <Formik
              initialValues={{
                name: "",
              }}
              onSubmit={() => {}}
              validateOnChange={true}
              className="flex w-full flex-col items-center justify-start"
              // validationSchema={}
            >
              {({ isValid }) => (
                <Form className=" self-start py-4 w-4/5 flex flex-col gap-6">
                  <div className="">
                    <Field
                      name="name"
                      autoComplete="off"
                      placeholder="name *"
                      className="w-full p-2 outline-none border-2 rounded-md border-primary placeholder:text-primary"
                      maxLength={25}
                    />
                    <ErrorMessage name="name" />
                  </div>
                  <div className="">
                    <Field
                      name="email"
                      autoComplete="off"
                      placeholder="email *"
                      className="w-full p-2 outline-none border-2 rounded-md border-primary placeholder:text-primary"
                    />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="">
                    <Field
                      name="subject"
                      autoComplete="off"
                      placeholder="subject *"
                      className="w-full p-2 outline-none border-2 rounded-md border-primary placeholder:text-primary"
                      maxLength={150}
                    />
                    <ErrorMessage name="subject" />
                  </div>
                  <div className=" overflow-scroll">
                    <Field
                      name="description"
                      autoComplete="off"
                      component="textarea"
                      rows="4"
                      cols="100"
                      placeholder="tell me more about your project *"
                      className="w-full p-2 outline-none border-2 rounded-md border-primary placeholder:text-primary placeholder:font-semibold font-semibold min-h-[80px] max-h-[150px] "
                    />
                    <ErrorMessage name="description" />
                  </div>
                  <button
                    type="submit"
                    className=" px-5 py-2 rounded-md bg-primary text-[#fff] w-fit hover:bg-[#fff] hover:text-primary border-2  hover:border-primary delay-75 transition-all ease-in-out"
                  >
                    Send email
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Footer;
