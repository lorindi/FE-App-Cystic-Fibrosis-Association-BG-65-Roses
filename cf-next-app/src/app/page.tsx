"use client";
import Image from "next/image";
import Button from "./components/buttons/Button";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="">
      <div className="flex flex-col gap-[10px] items-center">
        <Button type="primary" text="primary" onClick={handleClick} />
        <Button type="outlined" text="Outlined Button" />
        <Button type="text-icon" text="Text Button" />
        <Button type="icon" icon={<span>🔍</span>} />
        <Button type="iconWithText" icon={<span>🔍</span>} text="Search" />
        <Button type="arrow" icon={<span>←</span>} text="Back" />
        <Button type="arrow" text="Next" icon={<span>→</span>} />
        <Button type="disabled" text="Disabled Button" />
      </div>
    </div>
  );
}
