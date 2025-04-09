import { motion } from "motion/react";
import transparantLogo from "../assets/transparantLogo.png";

const Navbar = () => {
    return (
        <nav
            className="fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-xl border-[1px] border-neutral-100 bg-neutral-50 p-2 text-md text-[#058cf8] font-medium z-20  shadow-lg">
            <img src={transparantLogo} className="h-8" alt="Logo" />
            <Button>Super</Button>
            <Button>Invest</Button>
            <Button>Blog</Button>
            <Button>Support</Button>
            <Button>About</Button>
        </nav>
    );
};

const Button = ({ children }: { children: string }) => {
    return (
        <a href="" className="block overflow-hidden">
            <motion.div
                whileHover={{ y: -20 }}
                transition={{ ease: "backInOut", duration: 0.5 }}
                className="h-[20px]"
            >
                <span className="flex h-[20px] items-center">{children}</span>
                <span className="flex h-[20px] items-center font-bold">
                    {children}
                </span>
            </motion.div>
        </a>
    );
};

export default Navbar;
