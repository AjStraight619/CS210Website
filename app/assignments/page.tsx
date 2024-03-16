// const base64Credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS!;
// // Decode the base64 string to get the JSON string
// const jsonCredentials = Buffer.from(base64Credentials, "base64").toString(
//   "utf-8"
// );
// // Parse the JSON string to get the credentials object
// const credentials = JSON.parse(jsonCredentials);

// const auth = new google.auth.GoogleAuth({
//   credentials,
//   scopes: ["https://www.googleapis.com/auth/drive"],
// });

// const folderId = "1j5S7C8Uy5scRpNZyRZ8Ugah_XT7Elqsa";

export default async function AssignmentPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      AssignmentPage
    </main>
  );
}
