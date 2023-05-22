import Image from "next/image";

interface CertificateItemInterface {
  certificateImage: string;
  anchorLink?: string;
}

const CertificateItem = ({
  certificateImage,
  anchorLink,
}: CertificateItemInterface) => {
  return (
    <a
      href={anchorLink || "#"}
      className=" dark_box_shadow rounded-md p-2 hover:scale-105 scale-100 ease-in delay-75 transition-all md:w-80 md:h-52 w-72 h-48"
    >
      <Image
        src={certificateImage || "/images/beach.jpg"}
        alt={"beach pic"}
        width={300}
        height={200}
        className=""
      />
    </a>
  );
};

export default CertificateItem;
