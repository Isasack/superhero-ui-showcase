import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { RiLightbulbLine, RiBarChartBoxLine, RiRocketLine, RiAwardFill } from "react-icons/ri";
import Navbar from "../components/navbar";
import Phone from "../components/phone";
import VantaClouds from "../components/vantaClouds";
import { Typewriter } from "react-simple-typewriter";
import LogoShowcase from "../components/logoShowcase";
import Footer from "../components/footer";
import CountUp from "react-countup";

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 100, once: false });
    }, []);

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const desktopFloatingItems = [
        {
            icon: <RiLightbulbLine />,
            text: "Welcome to Intuitive Investing",
            top: "45%",
            left: "10%",
            aos: "fade-up",
        },
        {
            icon: <RiBarChartBoxLine />,
            text: "Sign up in minutes, trade in seconds",
            top: "20%",
            left: "65%",
            aos: "fade-right",
        },
        {
            icon: <RiRocketLine />,
            text: "Easy to use, intuitive design",
            top: "60%",
            left: "80%",
            aos: "fade-left",
        },
        {
            icon: <RiAwardFill />,
            text: "An award-winning investing experience",
            top: "5%",
            left: "15%",
            aos: "fade-down",
        },
    ];

    const mobileFloatingItems = [
        {
            icon: <RiLightbulbLine />,
            text: "Invest Intuitively",
            top: "10%",
            left: "5%",
            aos: "fade-up",
        },
        {
            icon: <RiBarChartBoxLine />,
            text: "Trade in Seconds",
            top: "10%",
            left: "75%",
            aos: "fade-right",
        },
        {
            icon: <RiRocketLine />,
            text: "Simple Design",
            top: "80%",
            left: "5%",
            aos: "fade-left",
        },
        {
            icon: <RiAwardFill />,
            text: "Award Winning",
            top: "80%",
            left: "75%",
            aos: "fade-down",
        },
    ];

    const floatingItems = isMobile ? mobileFloatingItems : desktopFloatingItems;

    return (
        <div className="w-screen flex flex-col min-h-screen">
            <motion.section className="relative min-h-screen">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <VantaClouds />
                    <Canvas>
                        <Stars radius={50} count={1500} factor={4} fade speed={1} />
                    </Canvas>
                </div>
                <Navbar />
                <div className="flex flex-col items-center gap-10 pt-48 relative">
                    <div className="relative flex justify-center w-full">
                        {floatingItems.map((item, i) => (
                            <div
                                key={i}
                                data-aos={item.aos}
                                className="absolute flex flex-col items-center text-xl sm:text-2xl md:text-3xl"
                                style={{ top: item.top, left: item.left }}
                            >
                                <motion.div
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-blue-800"
                                >
                                    {item.icon}
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="mt-1 bg-white/50 text-black text-xs px-2 py-1 rounded shadow text-center"
                                >
                                    {item.text}
                                </motion.div>
                            </div>
                        ))}
                        <motion.div
                            data-aos="fade-up"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            <div className="absolute -z-10 left-1/2 bottom-0 w-72 h-24 transform -translate-x-1/2 bg-blue-500/30 blur-2xl rounded-full" />
                            <Phone />
                        </motion.div>
                    </div>
                    <motion.section
                        data-aos="fade"
                        className="relative text-3xl sm:text-5xl font-bold text-neutral-900 mt-6 z-10 px-4 py-2 bg-white/50 rounded-xl shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typewriter
                            words={[
                                "Low Fee. Award-Winning Super",
                                "Get Invested. Trade For $2",
                            ]}
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={4000}
                            loop={true}
                        />
                    </motion.section>
                </div>
            </motion.section>
            <motion.section
                data-aos="fade-up"
                className="text-center my-8 px-4 py-8 bg-slate-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Over{" "}
                    <CountUp start={0} end={9000} duration={3} separator="," /> Aussie and
                    U.S. shares & ETFs to choose from
                </h2>
                <p className="text-base md:text-lg text-neutral-700 mb-6">
                    Trade with confidence in thousands of top companies and ETFs.
                </p>
                <LogoShowcase />
            </motion.section>
            <Footer />
        </div>
    );
};

export default Home;
