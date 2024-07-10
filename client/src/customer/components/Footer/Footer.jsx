import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6">
      <div className="container mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          <div className="mb-8 md:mb-0 md:mr-8">
            <a
              href="https://flowbite.com"
              className="flex items-center justify-center md:justify-start mb-4"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                className="w-8 h-8 mr-2"
              />
              <span className="font-semibold text-lg">Fashion Palace</span>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-left md:text-left">
            <div>
              <h2 className="font-semibold text-md mb-2">Shop</h2>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Women
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Men
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Kids
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Personal Care
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-2 text-md">Company</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-2 text-md">Support</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Fashion Palace. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-100">
                <FacebookIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-100">
                <InstagramIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-100">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
