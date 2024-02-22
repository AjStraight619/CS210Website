import TestServer from "@/components/testserver";

// export async function generateStaticParams() {
//   const response = await fetch("http://localhost:3000/api/google");
//   const data = await response.json();
//   console.log("This is the data returned from api: ", data);

//   const filenames = data.files?.map((file: any) => file.name.split(".")[0]);
//   const filenameswithoutfolder = filenames?.filter((name: string) =>
//     name.includes("assignment")
//   );
//   console.log(
//     "These are the file names without folder name ",
//     filenameswithoutfolder
//   );

//   // return filenames.map((name: string) => ({
//   //   slug: name,
//   // }));

//   return data.files.map((file: any) => ({
//     id: file.id
//   }))
// }

type AssignmentPageProps = {
  params: {
    slug: string;
  };
};

export default async function AssignmentPage({ params }: AssignmentPageProps) {
  console.log(params.slug);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      {params.slug}
      <TestServer />
    </main>
  );
}
