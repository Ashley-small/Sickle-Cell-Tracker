import Image from "next/image";
import LandingClientComp from "./LandingClientComp";
import Doctor from "../assets/doctor.jpg";
export default function HomeLanding() {
  return (
    <main>
      <section className=" w-full text-center p-4 flex flex-col leading-10 m-auto">
        <h1 className="text-3xl md:text-5xl pb-2 font-semibold ">
          Track your condition, help your doctors help you.
        </h1>
        <p className=" text-xl md:text-3xl text-center items-center justify-center ">
          Our app helps you track your crisis events, and allows your doctors to
          track your progress and manage medications.
        </p>
        <LandingClientComp />
        <div className="m-auto">
          <Image src={Doctor} />
        </div>
      </section>
    </main>
  );
}
