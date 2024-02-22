const About = () => {
  return (
    <article className="body-font overflow-hidden dark:text-gray-600 text-gray-800">
      <h2 className="text-sm title-font tracking-widest dark:text-gray-500 text-gray-700 text-center">
        CS210 - Data Structures
      </h2>
      <h1 className="text-3xl title-font font-medium mb-4 dark:text-gray-900 text-gray-900 text-center">
        Welcome to CS210!
      </h1>
      <p className="leading-relaxed mb-4 dark:text-gray-600 text-gray-800">
        This website is a master list of all things data structures. You will
        find video lectures, slides, JAR files of code, and additional resources
        to help you through your journey in learning data structures.
      </p>
      <div>
        <h2 className="text-2xl font-medium mb-2 dark:text-gray-900 text-gray-900">
          Resources Available:
        </h2>
        <ul className="list-disc pl-5 mb-4 dark:text-gray-600 text-gray-800">
          <li>Video Lectures</li>
          <li>Slides</li>
          <li>JAR Files of Code</li>
          <li>Additional Learning Materials</li>
        </ul>
      </div>
    </article>
  );
};

export default About;
