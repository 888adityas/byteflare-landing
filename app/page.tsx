import FooterOne from "@/components/UI/footerOne";

export default function Home() {
  return (
    <div className="">
      <main>
        <div className="flex flex-col  justify-center items-center mt-[40vh] font-mono">
          <h1 className="capitalize text-3xl  md:text-7xl ">welcome to</h1>
          <h2 className="capitalize text-xl md:text-4xl font-semibold">
            byteflare technologies
          </h2>
          <p className="capitalize text-sm md:text-xl text-center mx-3">
            We Engineer Solutions, You Lead the Revolution.😎
          </p>
        </div>
        <div className="w-full bg-green-300 fixed bottom-0">
          <FooterOne />
        </div>
      </main>
    </div>
  );
}
