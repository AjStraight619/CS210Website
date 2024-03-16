import Header from "@/components/common/header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default async function AssignmentPage() {
<<<<<<< HEAD
  // const drive = google.drive({ version: "v3", auth: auth });
  // const fileListResponse = await drive.files.list({
  //   q: `'${folderId}' in parents`,
  //   fields: "files(id, name, webViewLink, thumbnailLink)",
  // });
=======
  const drive = google.drive({ version: "v3", auth: auth });
  const fileListResponse = await drive.files.list({
    q: `'${folderId}' in parents`,
    fields:
      "nextPageToken, files(id, name, mimeType, webViewLink, thumbnailLink, webContentLink)",
  });
>>>>>>> 2b1dffb18642b2e585c030586640c46b7dc0e226

  // const files = fileListResponse.data.files;

  // console.log("Files: ", files);

  // for (const file of files!) {
  //   const fileId = file.id;
  //   const fileName = file.name;
  //   const webViewLink = file.webViewLink;
  //   const thumbnailLink = file.thumbnailLink;

<<<<<<< HEAD
  //   console.log(`File Name: ${fileName}`);
  //   console.log(`Web View Link: ${webViewLink}`);
  //   console.log(`Thumbnail Link: ${thumbnailLink}`);
=======
    // console.log(`File Name: ${fileName}`);
    // console.log(`Web View Link: ${webViewLink}`);
    // console.log(`Thumbnail Link: ${thumbnailLink}`);
>>>>>>> 2b1dffb18642b2e585c030586640c46b7dc0e226

  //   // Optionally, generate a direct download link (not shown here)
  //   // Remember, for direct downloads, proper permissions are required
  // }
  return (
<<<<<<< HEAD
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      AssignmentPage
      {/* <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
=======
    <main className="min-h-screen pt-[4rem] flex flex-col items-center justify-center p-4">
      <Header pagename="Assignments" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
>>>>>>> 2b1dffb18642b2e585c030586640c46b7dc0e226
        {files?.map((file) => (
          <li key={file.id} className="">
            <Card>
              <CardHeader>
                <CardTitle>{file.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={150 / 180}>
                  <Image
                    className="rounded-md"
                    src={file.thumbnailLink ?? ""}
                    alt={`Thumbnail of ${file.name}`}
                    width={150}
                    height={180}
                    quality={100}
                  />
                </AspectRatio>
              </CardContent>
            </Card>

            {/* <a
              href={file.webViewLink ?? ""}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              View File
            </a> */}
          </li>
        ))}
      </ul> */}
    </main>
  );
}
