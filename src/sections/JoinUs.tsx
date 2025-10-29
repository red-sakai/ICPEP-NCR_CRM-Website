const JoinUs = () => {
  return (
    <section className="relative w-full flex justify-center items-center">
      <div className="container">
        <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
          <div className="absolute -z-10 top-20 md:top-30 left-0 md:left-10 lg:left-20 blur-circle size-50 lg:size-60 rounded-full bg-primary/15 blur-2xl" />
          <div className="hidden md:block absolute -z-10 top-60 blur-circle size-20 lg:size-30 rounded-full bg-primary/15 blur-xl" />
          <div className="hidden sm:block absolute -z-10 top-40 right-10 lg:right-20 blur-circle size-30 lg:size-40 rounded-full bg-primary/15 blur-xl" />
          <div className="absolute -z-10  bottom-20 md:-bottom-10 left-30 lg:left-50 blur-circle size-50 lg:size-60 rounded-full bg-primary/15 blur-2xl" />
          <div className="hidden md:block absolute -z-10 bottom-30 md:bottom-20 blur-circle size-20 lg:size-30 rounded-full bg-primary/15 blur-xl" />
          <div className="hidden sm:block absolute -z-10 -bottom-10 right-0 lg:right-20 blur-circle size-40 md:size-60 lg:size-70 rounded-full bg-primary/15 blur-2xl" />
          <h1 className="text-6xl text-primary text-glow font-sans font-bold">
            ICpEP.se NCR
          </h1>
          <span className="text-lg font-semibold">
            Creating Pioneers for Excellence
          </span>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
