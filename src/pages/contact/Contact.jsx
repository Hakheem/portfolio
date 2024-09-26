import React from "react";
import Form from "../contact/Form";
import images from "../../Constants/images";

const Contact = () => {
  return (
    <div className="container px-[10%] mx-auto my-8">
      <div className="flex justify-between items-center flex-col lg:flex-row ">
        <div className="flex flex-col w-full lg:w-[55%] ">
          <div className="texts">
            <p className="h2 ">
              Let's Work <br /> <span className=" ">Together </span>{" "}
            </p>
            <p className="subtitle py-8 ">
              I would love to hear about your project and how I could help. Send
              me an email at{" "}
              <a
                href="mailto:hectorjohn254@gmail.com"
                className="text-primary hover:text-secondary hover:border-b-2 border-secondary underline-offset-3"
              >
                hectorjohn254@gmail.com{" "}
              </a>
              or alternatively fill in the form below, and I’ll get back to you
              as soon as possible.
            </p>
          </div>
          <div>
            <Form />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[45%] mt-16 lg:mt-0">
          <div className="grid gap-8">
            <div className="flex flex-col items-center">
              <img src={images.email} />
              <h2 className="text-xl py-2 font-medium">Email Me</h2>
              <p>
                <a
                  href="mailto:hectorjohn254@gmail.com"
                  className="hover:text-primary hover:border-b-2 border-primary underline-offset-3 "
                >
                  hectorjohn254@gmail.com
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={images.phone} alt="" />
              <h2 className="text-xl py-2 font-medium">Call Me</h2>
              <p>
                <a
                  href="tel:+254769403162"
                  className="hover:text-primary hover:border-b-2 border-primary underline-offset-3 "
                >
                  +254769403162
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
