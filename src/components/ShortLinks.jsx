import { selectLinks } from "../store/slice/linkSlice";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

export const ShortLinks = () => {
  const links = useSelector(selectLinks);

  return (
    <section>
      {links.map((l) => (
        <AnimatePresence key={l.code}>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, heoght: "auto" }}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>{l.original_link}</span>
            <span>{l.full_short_link2}</span>
            <button>Copy</button>
          </motion.div>
        </AnimatePresence>
      ))}
    </section>
  );
};
