const JoinUs = () => {
  return (
    <section className="relative w-full flex justify-center items-center">
      <div className="container">
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4 md:gap-8 p-12">
          {/* faded circles */}
          <div className="absolute -z-10 top-20 md:top-30 left-0 md:left-10 lg:left-20 blur-circle size-50 lg:size-60 rounded-full bg-primary/15 blur-2xl" />
          <div className="hidden md:block absolute -z-10 top-60 blur-circle size-20 lg:size-30 rounded-full bg-primary/15 blur-xl" />
          <div className="absolute -z-10 top-60 md:top-40 right-10 lg:right-20 blur-circle size-30 lg:size-40 rounded-full bg-primary/15 blur-xl" />
          <div className="absolute -z-10  bottom-20 md:-bottom-10 md:left-30 lg:left-50 blur-circle size-50 lg:size-60 rounded-full bg-primary/15 blur-2xl" />
          <div className="hidden md:block absolute -z-10 bottom-30 md:bottom-20 blur-circle size-20 lg:size-30 rounded-full bg-primary/15 blur-xl" />
          <div className="hidden sm:block absolute -z-10 -bottom-10 right-0 lg:right-10 blur-circle size-40 md:size-60 lg:size-70 rounded-full bg-primary/15 blur-2xl" />

          {/* school logos */}
          <img
            src="/school-logos/dlsu 1.png"
            alt="dlsu"
            className="absolute -z-10 size-[70px] md:size-[80px] xl:size-[100px] top-1/5 left-1/9 lg:left-1/5"
          />
          <img
            src="/school-logos/tip 1.png"
            alt="tip"
            className="absolute -z-10 size-[20px] md:size-[30px] xl:size-[50px] top-1/9 lg:top-2/7 left-1/3 lg:left-1/2"
          />
          <img
            src="/school-logos/Mapua_Uni_logo.svg 1.png"
            alt="mapua"
            className="absolute -z-10 w-[90px] md:w-[100px] xl:w-[120px] top-1/7 lg:top-1/5 right-2/7 lg:right-1/5"
          />
          <img
            src="/school-logos/pup logo 1.png"
            alt="pup"
            className="absolute -z-10 size-[70px] md:size-[80px] xl:size-[100px] top-2/7 lg:top-1/2 right-1/5 lg:right-1/8"
          />
          <img
            src="/school-logos/plm 1.png"
            alt="plm"
            className="absolute -z-10 size-[60px] md:size-[70px] xl:size-[90px] bottom-2/7 lg:bottom-2/5 left-1/6"
          />
          <img
            src="/school-logos/ue 1.png"
            alt="ue"
            className="absolute -z-10 size-[20px] md:size-[30px] xl:size-[50px] bottom-1/5 lg:bottom-1/4 left-1/3"
          />
          <img
            src="/school-logos/FEU_Tech_official_seal 1.png"
            alt="feu-tech"
            className="absolute -z-10 h-[70px] md:h-[80px] xl:h-[100px] bottom-1/7 lg:bottom-1/5 right-1/4 lg:left-1/2"
          />
          <img
            src="/school-logos/colegio de muntinlupa 1.png"
            alt="colegio-de-muntinlupa"
            className="absolute -z-10 size-[20px] md:size-[30px] xl:size-[50px] bottom-3/9 right-1/6 lg:right-1/3"
          />

          {/* main content */}
          <h1 className="text-4xl md:text-6xl text-primary text-center text-glow font-bold">
            ICpEP.se NCR
          </h1>
          <span className="text-sm md:text-lg text-center font-semibold">
            Creating Pioneers for Excellence
          </span>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
