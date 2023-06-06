
import { Brand } from "@/components/Brand";
import { Button } from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen p-6 lg:px-8 flex gap-6 flex-col">
      <nav>
        <Brand>404 Not Found</Brand>
      </nav>
      <main className="flex flex-1 items-center justify-center flex-col lg:flex-row gap-16 md:gap-28">
        <div className="flex justify-center ">
          <div className="relative w-[286px] h-[238px] md:w-[34rem] md:h-[28rem]">
            <Image
              className="object-cover" src="/scarecrow.png" alt="Scarecrow Image" fill />
          </div>
        </div>
        <div className="flex flex-col text-left items-start">
          <h1 className="max-w-[586px] text-5xl md:text-6xl font-bold text-gray-900 mb-8">I have bad news for you</h1>
          <h2 className="max-w-[381px] text-lg md:text-2xl text-gray-900 mb-16">the page you are looking for be removed or is temporarily unavailable</h2>
          <Button>Back to homepage</Button>
        </div>
      </main>
      <footer className="flex justify-center font-footer text-sm text-gray-300">created by &nbsp;<span className="font-bold text-gray-400">Rick Neves</span>&nbsp; - devChallenges.io</footer>
    </div>
  )
}
