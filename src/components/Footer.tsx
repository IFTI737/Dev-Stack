import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1280px] px-5">

        {/* Main Footer */}
        <div className="py-8 md:py-10">
          <div className="grid gap-8 md:grid-cols-4">

            {/* Brand */}
            <div className="md:col-span-2">
              <img
                src={Logo}
                alt="Dev Stack"
                className="w-[125px]"
              />

              <p className="mt-3 max-w-[360px] text-sm leading-5 text-[#7c8799]">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

              <div className="mt-4 flex items-center gap-5 text-sm text-[#334155]">
                <a href="#" className="hover:text-[#f43f8f]">
                  GitHub
                </a>

                <a href="#" className="hover:text-[#f43f8f]">
                  Twitter
                </a>

                <a href="#" className="hover:text-[#f43f8f]">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Product */}
            <div className="hidden md:block">
              <h3 className="text-xs font-bold uppercase text-[#111827]">
                Product
              </h3>

              <div className="mt-3 flex flex-col gap-1.5 text-sm text-[#7c8799]">
                <a href="#" className="hover:text-[#f43f8f]">
                  Home
                </a>
                <a href="#" className="hover:text-[#f43f8f]">
                  Technologies
                </a>
                <a href="#" className="hover:text-[#f43f8f]">
                  Projects
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="hidden md:block">
              <h3 className="text-xs font-bold uppercase text-[#111827]">
                Company
              </h3>

              <div className="mt-3 flex flex-col gap-1.5 text-sm text-[#7c8799]">
                <a href="#" className="hover:text-[#f43f8f]">
                  About
                </a>
                <a href="#" className="hover:text-[#f43f8f]">
                  Contact
                </a>
                <a href="#" className="hover:text-[#f43f8f]">
                  Careers
                </a>
              </div>
            </div>

            {/* Legal */}
            <div className="hidden md:block">
              <h3 className="text-xs font-bold uppercase text-[#111827]">
                Legal
              </h3>

              <div className="mt-3 flex flex-col gap-1.5 text-sm text-[#7c8799]">
                <a href="#" className="hover:text-[#f43f8f]">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#f43f8f]">
                  Terms of Service
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 py-4">
          <div className="flex flex-col gap-3 text-sm text-[#94a3b8] md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-[#f43f8f]">
                Privacy
              </a>

              <a href="#" className="hover:text-[#f43f8f]">
                Terms
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;