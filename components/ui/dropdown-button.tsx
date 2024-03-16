import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

type DropdownButtonProps = {
  isDropdownOpen: boolean;
};

const buttonVariants = {
  open: {
    rotate: 90,
  },
  closed: {
    rotate: 0,
  },
};

const DropdownButton = ({ isDropdownOpen }: DropdownButtonProps) => {
  return (
    <div className="inline-flex gap-1 hover:cursor-pointer text-primary/70 hover:text-primary ring-0">
      <span>Topics</span>
      <motion.span
        initial={false}
        animate={isDropdownOpen ? "open" : "closed"}
        variants={buttonVariants}
        transition={{ duration: 0.3 }}
      >
        <ChevronRight />
      </motion.span>
    </div>
  );
};

export default DropdownButton;
