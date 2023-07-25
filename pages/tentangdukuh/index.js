import React from "react";
import { useRouter } from "next/router";

import { Loader, TheGod } from "../../components";

import { grpahCMSImageLoader } from "../../util";
import Image from "next/image";

const PostDetails = ({}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 h-max mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 h-full">
            <h1 className=" text-3xl font-semibold border-b p-4 text-center">
              Padukuhan Butuh Lor
            </h1>
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt="Captbay"
              height={300}
              width={300}
              src="/logobutuhlor.svg"
              className="mx-auto"
            ></Image>
            <p className="mt-8 mb-8 text-justify p-4">
              Padukuhan Butuh Lor adalah padukuhan yang terletak di Desa
              Triwidadi, Kecamatan/Kapanewon Pajangan, Kabupaten Bantul, Daerah
              Istimewa Yogyakarta. Padukuhan ini terdiri dari 4 RT. Padukuhan
              ini berbatasan dengan Padukuhan Butuh Kidul di sebelah selatan,
              Padukuhan Sabrang Kidul di sebelah barat, Padukuhan Jojoran Kulon
              di sebelah utara, dan Padukuhan Sendang Sari di sebelah timur.
            </p>
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt="Captbay"
              height={300}
              width={500}
              src="/petapadukuhan.jpg"
              className="mx-auto p-4"
            ></Image>
            <h3 className="text-xl font-semibold my-4 p-4"> Sejarah </h3>
            <p className="mt-8 mb-8 text-justify p-4">
              Padukuhan Butuh Lor, sebuah tempat dengan sejarah indah. Dulu
              hanya satu keluarga yang berjuang bersama. Anak-anaknya kemudian
              memisahkan diri, membentuk Butuh Lor dan Butuh Kidul. Di Butuh
              Lor, kearifan leluhur dan nilai-nilai berharga dijaga dengan
              sepenuh hati. Di Butuh Kidul, semangat muda dan pesona alam
              menghadirkan kegembiraan. Kini, Padukuhan ini berdiri kokoh,
              dengan kebersamaan dan persatuan sebagai fondasi kuat. Pesona dan
              kehangatan masyarakatnya menjadi daya tarik tak tergantikan.
            </p>
            <h3 className="text-xl font-semibold mb-4 p-4"> Kepala Dukuh </h3>
            <li className="text-justify p-4">Amad Dimejo</li>
            <li className="text-justify p-4">Sadiman</li>
            <li className="text-justify p-4">
              Warsiyo ( 30 sep 2000 - 30 sep 2025 )
            </li>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
              <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                Peta Padukuhan
              </h3>
              <div className="google-map-code flex justify-center items-center aspect-w-3 aspect-h-3">
                <iframe
                  src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=butuh lor&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-full h-full lg:w-80 lg:h-80"
                ></iframe>
              </div>
            </div>
            <TheGod />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetails;
