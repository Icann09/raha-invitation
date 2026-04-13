export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-serif text-white mb-4">
            EverAfter
          </h3>
          <p className="text-sm text-gray-400">
            Create beautiful, modern digital wedding invitations
            with ease and elegance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-medium mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-white font-medium mb-4">Features</h4>
          <ul className="space-y-2 text-sm">
            <li>Custom Guest Links</li>
            <li>RSVP Management</li>
            <li>Elegant Templates</li>
            <li>Music & Animation</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-medium mb-4">
            Stay Updated
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            Get updates on new templates and features.
          </p>

          <div className="flex">
            <input
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md text-black bg-white outline-none"
            />
            <button className="bg-accent px-4 py-2 rounded-r-md text-primary font-medium">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EverAfter. All rights reserved.
      </div>
    </footer>
  );
}