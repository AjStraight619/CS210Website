type TopicPageProps = {
  params: {
    slug: string;
  };
};

export default function TopicPage({ params }: TopicPageProps) {
  return (
    <main className="h-screen flex flex-col items-center justify-center p-4">
      {params.slug}
    </main>
  );
}
