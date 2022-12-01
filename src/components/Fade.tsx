import * as React from "react";
import { motion } from "framer-motion";

export interface IFadeProps {
  children?: React.ReactNode;
  fullHeight?: boolean;
}
function Fade(props: IFadeProps) {
  return (
    <motion.div
      style={{ height: props.fullHeight ? "100%" : "" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
}

export default Fade;
