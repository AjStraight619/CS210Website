import About from "@/components/landing-page/about";
import LandingPageHeader from "@/components/landing-page/header";
import InstructorInfo from "@/components/landing-page/instructor-info";

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="container mx-auto flex flex-col items-center space-y-16 max-w-2xl">
        <LandingPageHeader />
        <About />
        <InstructorInfo />
      </div>
    </main>
  );
}

{
  /* Smaller Pink Circle */
}
{
  /* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */
}
{
  /* Example Content */
}
