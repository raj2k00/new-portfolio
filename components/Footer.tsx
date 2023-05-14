import { Montserrat } from "next/font/google";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const montserrat = Montserrat({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SendMessageSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email!").required("Required"),
  subject: Yup.string()
    .min(25, "Too Short!")
    .max(80, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(100, "At least 100 characters!")
    .max(500, "Too Long!")
    .required("Required"),
});

interface SendMessageInterface {
  name: string;
  email: string;
  subject: string;
  description: string;
}

const Footer = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [mailStatus, setMailStatus] = useState<boolean>();

  const showToast = () => {
    toast.success("Done 🚀, Soon you'll hear from me");
  };

  async function HandleFormSubmit(
    values: SendMessageInterface,
    resetForm: Function
  ) {
    setSubmitting(true);
    try {
      await axios.post("https://formspree.io/f/xnqyrvkw", values);
      setSubmitting(false);
      setMailStatus(true);
      toast.success("Done 🚀, Soon you'll hear from me");
      resetForm();
    } catch (error) {
      setMailStatus(false);
      console.error(error);
      toast.error("Some error happened! Try Again!");
    }
  }

  return (
    <section
      className={`flex relative items-center justify-center h-screen snap-start ${montserrat.className}`}
    >
      <div className="flex w-full">
        <aside className="w-2/5 flex items-center justify-center flex-col pl-24">
          <p className="text-5xl font-medium" onClick={showToast}>
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
              Send me a message &nbsp; 🚀
            </h4>

            <div className="flex w-full flex-col items-center justify-start">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  description: "",
                }}
                onSubmit={(values, { resetForm }) => {
                  HandleFormSubmit(values, resetForm);
                }}
                validateOnChange={true}
                validationSchema={SendMessageSchema}
              >
                {() => (
                  <Form className=" self-start py-4 w-4/5 flex flex-col gap-6">
                    <div className="">
                      <Field
                        name="name"
                        autoComplete="off"
                        placeholder="name *"
                        className="w-full p-2 outline-none border-2 rounded-md border-primary placeholder:text-primary"
                        maxLength={50}
                      />
                      <div className="font-semibold text-sm pt-1">
                        <ErrorMessage name="name" />
                      </div>
                    </div>
                    <div className="">
                      <Field
                        name="email"
                        autoComplete="off"
                        placeholder="email *"
                        className="w-full p-2 outline-none border-2 rounded-md border-primary placeholder:text-primary"
                      />
                      <div className="font-semibold text-sm pt-1">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    <div className="">
                      <Field
                        name="subject"
                        autoComplete="off"
                        placeholder="subject *"
                        className="w-full p-2 outline-none border-2 rounded-md border-primary placeholder:text-primary"
                        maxLength={150}
                      />
                      <div className="font-semibold text-sm pt-1">
                        <ErrorMessage name="subject" />
                      </div>
                    </div>
                    <div className=" overflow-scroll">
                      <Field
                        name="description"
                        autoComplete="off"
                        component="textarea"
                        rows="4"
                        cols="100"
                        maxLength={500}
                        placeholder="tell me more about your project *"
                        className="w-full p-2 outline-none border-2 rounded-md border-primary placeholder:text-primary placeholder:font-semibold font-semibold min-h-[80px] max-h-[150px] "
                      />
                      <div className="font-semibold text-sm pt-1">
                        <ErrorMessage name="description" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className=" px-5 py-2 rounded-md bg-primary text-[#fff] w-36 group hover:bg-[#fff] hover:text-primary border-2  hover:border-primary delay-75 transition-all ease-in-out"
                    >
                      {submitting ? (
                        <div className=" h-6 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 48 48"
                            className="animate-spin-slow group-hover:fill-primary fill-[#fff]"
                            id="spinner"
                          >
                            <path d="M45 27h-6c-1.659 0-3-1.341-3-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3c0 1.659-1.341 3-3 3zm-8.274-11.484c-1.173 1.173-3.069 1.173-4.242 0s-1.173-3.069 0-4.242l4.242-4.245a3 3 0 1 1 4.242 4.245l-4.242 4.242zM24 48a3 3 0 0 1-3-3v-6a3.001 3.001 0 0 1 6 0v6c0 1.659-1.341 3-3 3zm0-36a3 3 0 0 1-3-3V3a3.001 3.001 0 0 1 6 0v6c0 1.659-1.341 3-3 3zM11.271 40.971c-1.173 1.173-3.069 1.173-4.242 0s-1.173-3.072 0-4.242l4.242-4.245a3 3 0 1 1 4.242 4.245l-4.242 4.242zm0-25.455l-4.242-4.242a3 3 0 1 1 4.242-4.245l4.242 4.245a2.997 2.997 0 0 1 0 4.242 3.002 3.002 0 0 1-4.242 0zM12 24a3 3 0 0 1-3 3H3a3 3 0 1 1 0-6h6c1.656 0 3 1.344 3 3zm24.726 8.484l4.242 4.245c1.173 1.17 1.173 3.069 0 4.242s-3.069 1.173-4.242 0l-4.242-4.242a3 3 0 1 1 4.242-4.245z"></path>
                          </svg>
                        </div>
                      ) : typeof mailStatus !== "boolean" ? (
                        "Send email"
                      ) : mailStatus ? (
                        "Send Again"
                      ) : (
                        "Try Again"
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Footer;
