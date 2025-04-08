export default function HomePage() {
  return (
    <div className="w-full flex h-screen flex-col sm:flex-row">
      {/* Left Column */}
      <div className="flex flex-col w-full sm:w-1/2 sm:border-r">
        {/* Myzn Section */}
        <div className="h-screen sm:h-64 flex flex-col justify-center items-center sm:justify-end sm:items-end pb-7 sm:pr-10 text-center">
          <h1 className="text-5xl">
            <span className="tracking-tight text-[120px]">myzn</span>
          </h1>
          <p className="mt-4 text-base sm:text-sm">
            __A slothful creature from Earth__
          </p>
        </div>

        {/* Under Myzn Section */}
        <div className="flex flex-col sm:grid sm:grid-rows-[100px_1fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr_80px] flex-1">
          {/* We know very little */}
          <div className="border-t w-full flex items-center justify-center py-8 sm:py-0 sm:col-span-4 sm:h-[100px]">
            <p className="text-xl sm:text-2xl uppercase">We know very little</p>
          </div>

          {/* Border left */}
          <div className="hidden sm:block border-r border-t row-start-2 row-span-3 col-start-1" />

          {/* Profile Image and Text */}
          <div className="flex flex-col sm:items-center sm:border-r border-t sm:row-start-2 sm:row-span-3 sm:col-start-2 sm:col-span-2 sm:px-8">
            <img
              src="/images/sample.png"
              className="w-full object-cover sm:mt-8 sm:-ml-50 "
              alt="sample"
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
            />
            <div className="w-full border-t sm:border-t-0 p-8 sm:p-0 sm:mt-4 ">
              <p className="text-xl sm:text-2xl highlight w-fit py-1">い am</p>
              <p className="text-sm mt-2">
                __an extroverted introvert, if that makes sense__
              </p>
            </div>
          </div>

          {/* I'm too old */}
          <div className=" flex items-center justify-center sm:border-t py-8 sm:py-0 sm:row-start-2 sm:row-span-3 sm:col-start-4">
            <p className="text-xl sm:text-sm uppercase sm:rotate-90 sm:whitespace-nowrap">
              I'm too おld to care
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col w-full sm:w-1/2 sm:grid sm:grid-rows-[100px_1fr_1fr] sm:grid-cols-2">
        {/* Nav (PC only) */}
        <div className=" border-t sm:border-t-0 flex col-span-2 items-center justify-center h-[100px]">
          <p>curl -s https://hellomyzn.github.io/aboutme.json</p>
        </div>
        {/* Hero Image Left */}
        <div className="flex items-center justify-center sm:border-r border-t overflow-hidden sm:col-start-1 sm:row-span-2">
          <img
            src="/images/sample3.png"
            className="h-full object-cover"
            alt="hero image"
            width={800}
            height={1200}
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* I'm not lazy text */}
        <div className="flex flex-col items-center justify-center sm:justify-start border-t py-8 sm:border-b sm:col-start-2 sm:row-span-1 text-center">
          <p className="uppercase highlight text-3xl mb-2 p-1 sm:mt-8">
            I'm not lazy
          </p>
          <p className="text-sm">__I'm on energy saving mode__</p>
        </div>
        {/* Enjoying (Mobile & PC統一) */}
        <div className="border-t sm:border-t-0 p-8 sm:p-0 sm:ml-4 flex flex-col items-end sm:items-start justify-center sm:row-span-1 sm:col-start-2 text-center ">
          <p className="text-3xl ">
            <span className="tracking-tighter">え</span>njoying
          </p>
          <p className="text-sm">__being average__</p>
        </div>
      </div>
    </div>
  );
}
