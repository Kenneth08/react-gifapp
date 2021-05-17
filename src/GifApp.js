import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["One Punch Man"]);

  return (
    <>
      <h2>
        GifApp <span className="by">by Murcast</span>
      </h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifApp;
