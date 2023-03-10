import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SiVk, SiTelegram, SiGithub } from "react-icons/si";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // E7k4svjxlMbvNsJdr
    // template_5tde6t2
    // service_scrncj6
    emailjs
      .send(
        "service_scrncj6",
        "template_5tde6t2",
        {
          from_name: form.name,
          to_name: "Arthur Sadreev",
          from_email: form.email,
          to_email: "arthur.sadreev@gmail.com",
          message: form.message,
        },
        "E7k4svjxlMbvNsJdr"
      )
      .then(
        () => {
          setLoading(false);
          alert("Спасибо! Я скоро с вами свяжусь");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Оппа.. Что-то пошло не так =(");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-12 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Связаться</p>
        <h3 className={styles.sectionHeadText}>Контакт</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ваше имя</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Как ваше имя?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ваша почта</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Какой у вас email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ваше сообщение</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="
              Пример: Привет! Вы нас заинтересовали. Перезвоните по номеру +7 (9393) 92-92-13"
              className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary active:py-2 active:px-7"
          >
            {loading ? "Отправляется..." : "Отправить"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        className=" absolute inset-x-0 bottom-0 h-16 mb-3 phones"
      >
        <div className="mt-3 text-5xl flex justify-center gap-10 py-1 ">
          <a href="https://vk.com/endo0m" className="icon_blue" target="_blank">
            <SiVk />
          </a>
          <a
            href="https://t.me/Endoom"
            className="icon_blue-3xl"
            target="_blank"
          >
            <SiTelegram />
          </a>
          <a
            href="https://github.com/Endo0m"
            className="icon_git"
            target="_blank"
          >
            <SiGithub />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
