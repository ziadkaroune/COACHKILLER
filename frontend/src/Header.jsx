export default function Header() {
  return (
    <header className="w-full px-6 md:px-12 py-4 flex items-center justify-between border-b border-gray-200 bg-white backdrop-blur-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-semibold tracking-tight text-gray-900">
        ThoughtSanitizer<span className="text-indigo-500">.</span>
      </div>

      {/* Nav */}
      <nav className="hidden md:flex space-x-8 text-sm text-gray-600 font-medium">
        <a href="#how-it-works" className="hover:text-black transition-colors">How It Works</a>
        <a href="#features" className="hover:text-black transition-colors">Features</a>
        <a href="#contact" className="hover:text-black transition-colors">Contact</a>
      </nav>

      {/* CTA Button */}
      <button className="hidden md:inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
        Try Now
      </button>
    </header>
  );
}
