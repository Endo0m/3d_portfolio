import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Обо мне</p>
        <h2 className={styles.sectionHeadText}>Вступление.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Начинающий Frontend-разработчик. Обучаюсь самостоятельно. Да, мне 30.
        Опыта в it реального совсем нет. Только демо. Разбираюсь в чужом коде,
        могу писать свой. Высокий уровень знания HTML, CSS(Sass), JavaScript,
        фреймворков и программных платформ React, Tailwind. <br />{" "}
        <span className="orange-text-gradient"> Главное </span> Я
        дисциплинированный, пунктуальный, соблюдаю дедлайны{" "}
        <span className="text-slate-500">
          (для меня сроки это не возможность растянуть, я лучше сделаю быстрее и
          возьмусь за новый проект)
        </span>{" "}
        мне важен результат, я хочу освоить на профессиональном уровне Frontend
        и так же Game development
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
