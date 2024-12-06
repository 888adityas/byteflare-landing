import FooterOne from "@/components/UI/footerOne";

export default function Home() {
  return (
    <div className="">
      <main>
        <div className="flex flex-col  justify-center items-center mt-[40vh] font-mono">
          <h1 className="capitalize text-[5rem] ">welcome to</h1>
          <h2 className="capitalize text-[3rem] font-semibold">
            byteflare technologies
          </h2>
          <p className="capitalize text-xl">
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
