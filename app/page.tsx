import { google } from "googleapis";

const base64Credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS!;
// Decode the base64 string to get the JSON string
const jsonCredentials = Buffer.from(base64Credentials, "base64").toString(
  "utf-8"
);
// Parse the JSON string to get the credentials object
const credentials = JSON.parse(jsonCredentials);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const folderId = "1j5S7C8Uy5scRpNZyRZ8Ugah_XT7Elqsa";

export default async function Home() {
  const drive = google.drive({ version: "v3", auth: auth });
  const fileListResponse = await drive.files.list({
    q: `'${folderId}' in parents`,
    fields: "files(id, name, webViewLink, thumbnailLink)",
  });

  const files = fileListResponse.data.files;

  console.log("Files: ", files);

  for (const file of files!) {
    const fileId = file.id;
    const fileName = file.name;
    const webViewLink = file.webViewLink;
    const thumbnailLink = file.thumbnailLink;

    console.log(`File Name: ${fileName}`);
    console.log(`Web View Link: ${webViewLink}`);
    console.log(`Thumbnail Link: ${thumbnailLink}`);

    // Optionally, generate a direct download link (not shown here)
    // Remember, for direct downloads, proper permissions are required
  }
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start p-24 overflow-auto">
      {/* Smaller Pink Circle */}
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      {/* Example Content */}

      <header className="relative text-4xl font-bold dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
        Data Structures & Algorithms
      </header>
    </main>
  );
}
