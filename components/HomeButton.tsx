import Link from "next/link";
import React from "react";

export default function HomeButton() {
  return (
    <div
      style={{
        position: "absolute",
        top: "1%",
        left: "1%",
        fontSize: "15px",
      }}
    >
      <Link href="/"> Home</Link>
    </div>
  );
}
