import { selectLinks } from "../../store/slice/linkSlice";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import s from "./ShortLinks.module.scss";

export const ShortLinks = () => {
  const links = useSelector(selectLinks);
  const [copiedLink, setCopiedLink] = useState(null);

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link);
    });
  };

  return (
    <section className={s.section}>
      {links.map((l) => (
        <AnimatePresence key={l.code}>
          <motion.div
            className={s.link_row}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <span className={s.base_link}>{l.original_link}</span>
            <span className={s.short_link}>{l.full_short_link2}</span>
            <button
              className={s.copy_btn}
              onClick={() => {
                copyToClipboard(l.full_short_link2);
              }}
            >
              {copiedLink === l.full_short_link2
                ? "Скопировано!"
                : "Копировать"}
            </button>
          </motion.div>
        </AnimatePresence>
      ))}
    </section>
  );
};
