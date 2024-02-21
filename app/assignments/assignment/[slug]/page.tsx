type AssignmentPageProps = {
  params: {
    slug: string;
  };
};

export default async function AssignmentPage({ params }: AssignmentPageProps) {
  return (
    <main className="h-screen flex flex-col items-center justify-center p-4">
      {params.slug}
    </main>
  );
}
