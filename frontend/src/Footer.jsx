export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-500 text-sm py-6 px-4 md:px-12 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} Ziad Karoune. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="mailto:ziad99kr@gmail.com" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
