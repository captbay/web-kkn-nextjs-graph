import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="mt-4 text-center lg:flex lg:justify-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} KKN UAJY Butuh Lor (Kelompok 53)
            &nbsp;
          </p>
          <p className="text-white">
            by I Putu Agestya Pramana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
