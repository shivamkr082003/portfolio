import React from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button
          onClick={() =>
            document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Back to top"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span>by Shivam Kumar</span>
          </div>

          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

