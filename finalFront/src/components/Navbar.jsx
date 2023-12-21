import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Bouton de menu */}
          <button type="button" data-hs-overlay="#hs-overlay-body-scrolling">
            <MenuIcon />
          </button>

          {/* Bloc de gauche */}
          <div
            id="hs-overlay-body-scrolling"
            className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs  w-1/2 z-[60] bg-white border-e dark:bg-gray-800 dark:border-gray-700 [--body-scroll:true] [--overlay-backdrop:false]"
            tabIndex="-1"
          >
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">Menu</h3>
              <button
                type="button"
                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-overlay-body-scrolling"
              >
                <span className="sr-only">Close modal</span>
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <ul
                role="list"
                className="marker:text-blue-600 list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <li>Students list</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>

          {/* Titre central */}
          <Typography
            variant="h6"
            className="text-center"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Fullstack app with Spring Boot and React.js
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
