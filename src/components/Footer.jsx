import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
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

