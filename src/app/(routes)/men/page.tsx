import Men from "@/app/(routes)/components/Men";
import React from "react";

export default function page() {
  return (
    <div className="pt-20">
      <Men search={""} filter={""} />
    </div>
  );
}
