import React from "react";
import Watches from "../components/Watches";

function watches() {
  return (
    <div className="pt-20">
      <Watches search={''} filter={''}/>
    </div>
  );
}

export default watches;
