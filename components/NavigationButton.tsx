import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavigationInterface {
  Path: string;
  ButtonText: String;
  corner: "BR" | "BL" | "TR" | "TL";
  height?: number;
  width?: number;
}

export default function HomeButton(Props: NavigationInterface) {
  const { Path, ButtonText, corner, height, width } = Props;
  const TOP = corner.includes("T") ? "0" : "";
  const BOTTOM = corner.includes("B") ? "0" : "";
  const RIGHT = corner.includes("R") ? "0" : "";
  const LEFT = corner.includes("L") ? "0" : "";
  const router = useRouter();
  return (
    <div
      style={{
        position: "absolute",
        top: `${TOP}`,
        left: `${LEFT}`,
        right: `${RIGHT}`,
        bottom: `${BOTTOM}`,
        fontSize: "15px",
        width: "57px",
        height: "30px",
        margin: "10px",
      }}
    >
      <Link href={Path}>
        <button>{ButtonText}</button>
      </Link>
    </div>
  );
}
