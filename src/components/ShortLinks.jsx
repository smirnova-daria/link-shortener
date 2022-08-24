import { selectLinks } from "../store/slice/linkSlice";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const ShortLinks = () => {
  const links = useSelector(selectLinks);
  const [copiedLink, setCopiedLink] = useState(null);

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link);
    });
  };

  return (
    <section>
      {links.map((l) => (
        <AnimatePresence key={l.code}>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{l.original_link}</span>
            <span>{l.full_short_link2}</span>
            <button
              onClick={() => {
                copyToClipboard(l.full_short_link2);
              }}
            >
              {copiedLink === l.full_short_link2 ? "Copied!" : "Copy"}
            </button>
          </motion.div>
        </AnimatePresence>
      ))}
    </section>
  );
};
