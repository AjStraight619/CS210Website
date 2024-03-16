"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const GradeForm = () => {
  const [gradeForm, setGradeForm] = useState({
    grade: "",
  });

  const [grade, setGrade] = useState("90");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(gradeForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGradeForm({
      ...gradeForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Calculate Grade</CardTitle>
          <CardDescription>
            Enter the fields below to calculate your grade.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Label htmlFor="grade">Grade</Label>
            <Input
              id="grade"
              name="grade"
              type="text"
              value={grade}
              onChange={handleChange}
              required
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Calculate</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};

export default GradeForm;
