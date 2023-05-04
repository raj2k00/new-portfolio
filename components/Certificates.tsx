import CertificateItem from "./CertificateItem";

const Certificates = () => {
  return (
    <section
      className={`flex relative items-center justify-center h-screen snap-start`}
    >
      <div className="-mt-14">
        <div className="text-4xl pb-4 text-center leading-snug">
          Certificates
        </div>
        <div className="grid gap-8 grid-cols-3 mt-12 ">
          <CertificateItem certificateImage={"/images/beach.jpg"} />
          <CertificateItem certificateImage={"/images/beach.jpg"} />
          <CertificateItem certificateImage={"/images/beach.jpg"} />
          <CertificateItem certificateImage={"/images/beach.jpg"} />
          <CertificateItem certificateImage={"/images/beach.jpg"} />
          <CertificateItem certificateImage={"/images/beach.jpg"} />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
