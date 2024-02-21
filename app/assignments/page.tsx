import { google } from "googleapis";
import Image from "next/image";

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

export default async function AssignmentPage() {
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
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      AssignmentPage
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {files?.map((file) => (
          <li
            key={file.id}
            className="bg-black shadow-md rounded-lg flex flex-col items-center p-4 space-y-2"
          >
            <h3 className="text-lg font-semibold">{file.name}</h3>
            <div className="rounded overflow-hidden">
              <Image
                src={file.thumbnailLink ?? ""}
                alt={`Thumbnail of ${file.name}`}
                width={240}
                height={240}
                layout="responsive"
                quality={100}
              />
            </div>
            <a
              href={file.webViewLink ?? ""}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              View File
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
