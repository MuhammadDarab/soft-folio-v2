import { motion } from "framer-motion";
import { Menu } from "react-feather";

const Navbar = () => {
  return (
    <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ type: 'spring', delay: 2 }} className="flex backdrop-invert bg-gray-700 fixed p-8 rounded-md bg-transparent z-10 w-[98%] mt-4 ml-4 text-white justify-between flex-row">
    <div>M.Darab</div>
      <Menu />
    </motion.div>
  );
};

export default Navbar;
