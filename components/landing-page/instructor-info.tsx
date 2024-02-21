import { instructorInfo } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const InstructorInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{instructorInfo.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {instructorInfo.Email}
        {instructorInfo["Virtual Office"]}
        {instructorInfo.Office}
      </CardContent>
    </Card>
  );
};

export default InstructorInfo;
