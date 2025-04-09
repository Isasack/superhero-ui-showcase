import { motion } from "framer-motion";
import {
  SiXero,
  SiHsbc,
  SiCanva,
  SiQantas,
  SiApple,
  SiTesla,
  SiGoogle,
  SiAmazon,
  SiFacebook,
  SiBankofamerica,
  SiAircanada,
  SiAirindia,
  SiAirbnb,
  SiAirasia,
} from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";
import { FaAtlassian, FaMicrosoft, FaPaypal, FaEbay, FaWordpressSimple } from "react-icons/fa";
import { LiaUniversitySolid } from "react-icons/lia";
import { IconType } from "react-icons";
import { JSX } from "react";

const LogoShowcase = () => {
  return (
    <section className="bg-white py-4">
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItemsAus />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsAus />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsAus />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsUs />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsUs />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsUs />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }: { children: JSX.Element; reverse?: boolean }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, label }: { Icon: IconType; label: string }) => {
  return (
    <a
      href="/"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsAus = () => (
  <>
    <LogoItem Icon={SiXero} label="Xero" />
    <LogoItem Icon={FaAtlassian} label="Atlassian" />
    <LogoItem Icon={FaMicrosoft} label="Microsoft" />
    <LogoItem Icon={SiHsbc} label="HSBC" />
    <LogoItem Icon={SiCanva} label="Canva" />
    <LogoItem Icon={SiQantas} label="Qantas" />
    <LogoItem Icon={FaWordpressSimple} label="WordPress" />
    <LogoItem Icon={LiaUniversitySolid} label="University" />
    <LogoItem Icon={SiAircanada} label="Air Canada" />
    <LogoItem Icon={SiAirindia} label="Air India" />
    <LogoItem Icon={SiAirbnb} label="Airbnb" />
    <LogoItem Icon={SiAirasia} label="AirAsia" />
  </>
);

const LogoItemsUs = () => (
  <>
    <LogoItem Icon={SiApple} label="Apple" />
    <LogoItem Icon={SiTesla} label="Tesla" />
    <LogoItem Icon={SiGoogle} label="Google" />
    <LogoItem Icon={SiAmazon} label="Amazon" />
    <LogoItem Icon={SiFacebook} label="Facebook" />
    <LogoItem Icon={FaPaypal} label="PayPal" />
    <LogoItem Icon={SiBankofamerica} label="Bank of America" />
    <LogoItem Icon={TbBrandDisney} label="Disney" />
    <LogoItem Icon={FaEbay} label="eBay" />
  </>
);

export default LogoShowcase;
