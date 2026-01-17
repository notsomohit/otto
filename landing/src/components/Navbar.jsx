import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-orange-300/20 backdrop-blur-sm border-b border-black/5">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Otter logo" className="h-10 w-auto" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="hover:text-accent transition-colors">How it works</a>
          <a href="#privacy" className="hover:text-accent transition-colors">Privacy</a>
          <a href="https://github.com/pushkarscripts/otto" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
        </div>
        <a href="#cta" className="bg-accent text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity">
          Add to Chrome
        </a>
      </nav>
    </header>
  );
};

export default Navbar;