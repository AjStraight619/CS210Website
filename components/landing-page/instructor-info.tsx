import { instructorInfo } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const InstructorInfo = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">{instructorInfo.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col items-center justify-center">
          {Object.entries(instructorInfo).map(([key, value]) =>
            key !== "name" ? (
              <li key={key}>
                <span className="font-semibold">{key}: </span>
                <span>{value}</span>
              </li>
            ) : null
          )}
        </ul>
        {/* <span>{instructorInfo.Email}</span>
        <span>{instructorInfo["Virtual Office"]}</span>
        <span>{instructorInfo.Office}</span> */}
      </CardContent>
    </Card>
  );
};

export default InstructorInfo;
