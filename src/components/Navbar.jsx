const Navbar = () => {
  return (
    <nav className="absolute z-10 py-4 px-2">
      <a className="flex justify-center items-center gap-2" href="/">
        <img src="logo.png" className="lg:w-10 w-5" />
      </a>
    </nav>
  );
};

export default Navbar;
