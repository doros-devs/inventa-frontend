import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FolderIcon from "@mui/icons-material/Folder";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useNavigate } from "react-router-dom";
import { useAlerts } from "../context/AlertContext";

const SideBar = () => {
  const navigate = useNavigate();
  const { alerts } = useAlerts(); // Get alerts from the context

  return (
    <div className="border-blue-600 fixed top-0 left-0">
      <div className="lg:w-64 p-5">
        <h1 className="mb-6 text-4xl font-bold text-blue-600">Inventa</h1>
        <ul className="space-y-4 text-sm">
          <li
            className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
            onClick={() => navigate("/")}
          >
            <HomeIcon className="mt-4" />{" "}
            <span className="ml-2 mt-4">Home</span>
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
            onClick={() => navigate("/add-product")}
          >
            <LocalOfferIcon /> <span className="ml-2">Add Products</span>
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
            onClick={() => navigate("/productlist")}
          >
            <LocalOfferIcon /> <span className="ml-2">Products</span>
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
            onClick={() => navigate("/sales")}
          >
            <ShoppingCartIcon /> <span className="ml-2">Sales</span>
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
            onClick={() => navigate("/alerts")}
          >
            <NotificationsNoneIcon />
            <span className="ml-2">Alerts</span>
            {alerts.length > 0 && (
              <span className="ml-2 text-red-600 font-bold">
                ({alerts.length})
              </span>
            )}
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
            onClick={() => navigate("/reports")}
          >
            <FolderIcon /> <span className="ml-2">Reports</span>
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
            onClick={() => navigate("/aboutus")}
          >
            <ManageHistoryIcon /> <span className="ml-2">About Us</span>
          </li>
          <li
            className="cursor-pointer text-blue-600 hover:text-purple-600 flex items-center"
            onClick={() => navigate("/contact")}
          >
            <InterpreterModeIcon /> <span className="ml-2">Contacts</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
