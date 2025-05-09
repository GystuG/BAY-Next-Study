import React from "react";
import Image from "next/image";

interface Iprops {
    imageUrl: string;
    altText: string;
    content: string;

}
export default function Hero(props:Iprops) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imageUrl}
          fill
          style={{ objectFit: "cover" }}
          alt={props.altText}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </div>
  );
}
