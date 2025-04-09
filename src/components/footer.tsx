const Footer = () => {
  return (
    <footer className="bg-[#0d6dff] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold mb-2">Superhero</h3>
        <p className="mb-4">
          Invest | Super | Qantas | Resources | Support | Company
        </p>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-white text-[#058cf8] px-4 py-2 rounded font-semibold">
            Download on the App Store
          </button>
          <button className="bg-white text-[#058cf8] px-4 py-2 rounded font-semibold">
            Get it on Google Play
          </button>
        </div>
        <p className="mt-4 text-sm opacity-80">
          &copy; {new Date().getFullYear()} Isaac Lam Chun Hei. For Showcasing Purpose Only
        </p>
      </div>
    </footer>
  );
};

export default Footer;
