import React from "react";
import Image from "next/image";
import { grpahCMSImageLoader } from "../util";
import Link from "next/link";

const TheGod = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Developer Website
      </h3>
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt="Captbay"
        height={300}
        width={300}
        src="/20201123_151646_0000.png"
        className="rounded-lg"
      ></Image>
      <div>
        <p className="text-xl mb-2 font-semibold border-b p-4">
          I Putu Agestya Pramana
        </p>
        <div className="cursor-pointer block pb-2">
          <Link href="https://www.instagram.com/agespramana_" target="_blank">
            <img className="w-8 inline-block" src="/icons8-instagram.svg" />
            agespramana_
          </Link>
        </div>
        <div className="cursor-pointer block">
          <Link href="https://www.linkedin.com/in/agespramana" target="_blank">
            <img className="w-8 inline-block" src="/icons8-linkedin.svg" />I
            Putu Agestya Pramana
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TheGod;
