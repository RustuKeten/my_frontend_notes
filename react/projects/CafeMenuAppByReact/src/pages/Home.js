import React from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Menus from "../components/menus/Menus";
import data from "./../helper/data";
import { useState } from "react";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
//*map ile ayırdığımız aynı isimli itemları new Set() ile sadece uniq olanlarına ayırdık.
//*... metodu ile itemları birbirinden ayırdık.
const Home = () => {
  const [menuItems, setmenuItems] = useState(data);
  const filterItems = (CategoryItem) => {
    if (CategoryItem === "all") {
      setmenuItems(data);
    } else {
      const filtered = data.filter((item) => item.category === CategoryItem);
      setmenuItems(filtered);
    }
  };
  return (
    <div>
      <Header />
      <Categories allCategories={allCategories} filterItems={filterItems} />
      <Menus menuItems={menuItems} />
    </div>
  );
};

export default Home;
