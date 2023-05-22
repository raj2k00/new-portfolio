import CertificateItem from "./CertificateItem";

const Certificates = () => {
  return (
    <section
      className={`flex relative items-center justify-center h-fit md:h-screen snap-start`}
    >
      <div className="md:-mt-14 mt-12">
        <div className="text-2xl md:text-4xl pb-4 text-center leading-snug">
          Certificates
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 ">
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
