import React from "react";
import Shoes from "../components/Shoes";

function page() {
  return (
    <div className="pt-20">
      <Shoes search={''} filter={''}/>
    </div>
  );
}

export default page;
