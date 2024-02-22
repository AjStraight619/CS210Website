"use client";

import { sendEmail } from "@/actions/email";
import { motion } from "framer-motion";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import SectionHeading from "../common/section-heading";
import SubmitBtn from "../ui/submit-button";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <motion.section
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center pt-20"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mmuralidharanpriya@sdsu.edu">
          mmuralidharanpriya@sdsu.edu
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error, success } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          if (success) {
            toast.success("Email sent successfully!");
            formRef.current?.reset();
          }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border-black p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
