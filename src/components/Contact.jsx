import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const contactDetails = [
    {
      title: "Email",
      value: "ansu7157@gmail.com",
      link: "mailto:ansu7157@gmail.com",
      icon: "✉️",
    },
    {
      title: "GitHub",
      value: "https://github.com/Ankit-kumar1907",
      link: "https://github.com/Ankit-kumar1907",
      icon: "🐙",
    },
    {
      title: "LinkedIn",
      value: "www.linkedin.com/in/ankit-kumar-ux",
      link: "https://linkedin.com/in/ankit-kumar-ux",
      icon: "💼",
    },
    {
      title: "Location",
      value: "India",
      link: null,
      icon: "📍",
    },
  ];

  return (
    <div className="md:m-12 md:px-12 flex flex-col lg:flex-row gap-12 overflow-hidden">
      {/* Contact Info Panel */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          show: {
            opacity: 1,
            x: 0,
            transition: { type: "tween", duration: 0.8, delay: 0.2 },
          },
        }}
        className="flex-1 flex flex-col justify-between"
      >
        <div>
          <p className="text-secondary uppercase tracking-wider text-sm">
            Get in touch
          </p>
          <h3 className={styles.sectionText}>Contact Details</h3>
          <p className="text-white/80 mt-4 max-w-md leading-relaxed text-sm md:text-base">
            Feel free to reach out directly via email, connect on social
            channels, or drop a message through the form.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-tertiary border border-white/10 hover:border-white/20 transition-all"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-secondary">
                    {item.title}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:underline text-sm md:text-base"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm md:text-base">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Message Form */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 50 },
          show: {
            opacity: 1,
            x: 0,
            transition: { type: "tween", duration: 0.8, delay: 0.2 },
          },
        }}
       >
       
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");