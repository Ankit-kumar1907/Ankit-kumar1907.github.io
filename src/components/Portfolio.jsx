import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  quote,
  description,
  focus,
  tools,
  methods,
  outcome,
  image,
  link,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full bg-[#151030]/60 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center"
    >
      {/* Project Image Preview */}
      <div
        onClick={() => link && window.open(link, "_blank")}
        className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-2xl border border-white/5 group"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-white font-bold text-2xl sm:text-3xl mb-4">
            {name}
          </h3>

          {/* Meta Tags */}
          <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
            {focus && (
              <div>
                <span className="text-secondary block font-semibold">FOCUS</span>
                <span className="text-white">{focus}</span>
              </div>
            )}
            {tools && (
              <div>
                <span className="text-secondary block font-semibold">TOOLS</span>
                <span className="text-white">{tools}</span>
              </div>
            )}
            {methods && (
              <div>
                <span className="text-secondary block font-semibold">METHODS</span>
                <span className="text-white">{methods}</span>
              </div>
            )}
            {outcome && (
              <div>
                <span className="text-secondary block font-semibold">OUTCOME</span>
                <span className="text-white">{outcome}</span>
              </div>
            )}
          </div>

          {/* Quote */}
          {quote && (
            <p className="italic text-gray-300 border-l-2 border-[#915eff] pl-3 my-3 text-sm">
              "{quote}"
            </p>
          )}

          {/* Description */}
          <p className="text-secondary text-sm leading-relaxed mt-2">
            {description}
          </p>
        </div>

        {/* Action Button */}
        {link && (
          <div className="pt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#915eff] hover:bg-[#804dee] text-white text-sm font-semibold py-2.5 px-5 rounded-xl transition-all duration-200"
            >
              View Case Study <span>→</span>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Selected Projects.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-10">
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");