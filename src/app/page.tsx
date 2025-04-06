export default function HomePage() {
  return (
    <div className="w-full flex h-screen flex-col sm:flex-row">
      {/* <!-- first column --> */}
      <div className="flex flex-col w-full sm:w-1/2">
        {/* <!-- myzn --> */}
        <div className="h-screen sm:h-64 sm:border-r flex justify-center items-center sm:justify-end sm:items-end flex-col pb-7 sm:pr-10">
          <div className="relative">
            <h1 className="text-5xl">
              <span className="tracking-tight text-[120px]">myzn</span>
            </h1>
            <p className="">__A slothful creature from Earth__</p>
          </div>
        </div>
        {/* <!-- Under myzn --> */}
        <div className="hidden sm:grid grid-rows-[100px_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr_80px] flex-1">
          <div className="border-r border-t col-span-4 flex justify-center items-center ">
            <p className="text-2xl uppercase">We know very little</p>
          </div>
          <div className="border-r border-t row-start-2 row-span-3 col-start-1 col-span-1 "></div>
          {/* <!-- IMAGE --> */}
          <div className="border-r border-t row-start-2 row-span-3 col-start-2 col-span-2 px-8">
            <img
              src="/images/me.jpg"
              className="mt-8 mb-4 -ml-24"
              alt="sample"
              width={1000}
              height={500}
              loading="lazy"
              decoding="async"
            />
            <div className="">
              <p className="text-2xl highlight w-fit mb-2 py-1 px-0.5">い am</p>
              <p className="text-sm">
                __an extroverted introvert, if that makes sense__
              </p>
            </div>
          </div>
          <div className="border-r row-start-2 row-span-3 col-start-4 col-span-1 flex justify-center items-center">
            <p className="uppercase rotate-90 whitespace-nowrap">
              I'm too おld to care
            </p>
          </div>
        </div>
      </div>
      {/* <!-- FOR SM --> */}
      <div className="sm:hidden">
        <div className="border-t w-full py-8 flex items-center justify-center">
          <p className="text-xl uppercase">We know very little</p>
        </div>
        <div className="p-8 border-t">
          <p className="text-xl font-jp highlight w-fit mb-2">い am</p>
          <p>__an extroverted introvert, if that makes sense__</p>
        </div>
        <div className="border-t w-full py-8 flex items-center justify-center">
          <p className="text-xl uppercase">I'm too おld to care</p>
        </div>
      </div>

      {/* <!-- right column --> */}
      <div className="w-full sm:w-1/2 sm:grid grid-rows-[100px_1fr_1fr] grid-cols-2">
        {/* <!-- Nav --> */}
        <div className="hidden col-span-2 row-span-1 sm:flex justify-end items-start"></div>
        {/* <!-- Under nav HERO image --> */}
        <div className="sm:border-r sm:border-t col-start-1 col-span-1 row-span-2 flex items-center overflow-hidden">
          <img
            src="/images/top.jpg"
            className="h-full object-cover"
            alt="hero image"
            width="800"
            height="1200"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="border-t py-10 flex text-right flex-col sm:hidden pr-8">
          <p className="text-3xl font-jp">
            <span className="tracking-tighter">え</span>
            njoying
          </p>
          <p className="text-sm">
            <span>__being average__</span>
          </p>
        </div>
        <div className="border-t sm:border-b col-start-2 col-span-1 row-span-1">
          <div className="p-6 sm:px-8 flex-row sm:flex-col sm:py-10 m-auto sm:mt-8 sm:p-0 w-fit text-center h-full">
            <p className="uppercase highlight mb-3 sm:mb-2 text-3xl">
              I'm not lazy
            </p>
            <p className="text-sm">__I'm on energy saving mode__</p>
          </div>
        </div>
        <div className="hidden col-start-2 col-span-1 row-span-1 sm:flex items-center">
          <div className="ml-4">
            <p className="text-3xl font-jp">
              <span className="tracking-tighter">え</span>
              njoying
            </p>
            <p className="text-sm">
              <span>__being average__</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
