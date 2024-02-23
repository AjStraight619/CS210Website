import React from "react";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { v4 as uuid } from "uuid";
import { SearchItem } from "./types";

export const navbarLinks = [
  {
    name: "Calculate Grade",
    href: "/calculator",
  },
] as const;

export const mainRoutes = [
  {
    name: "Java",
    description:
      "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",
    icon: React.createElement(FaJava),
    href: "/java",
  },
  {
    name: "C++",
    description:
      'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.',
    icon: React.createElement(SiCplusplus),
    href: "/c-plus-plus",
  },
];

export const programmingAssignments = [
  {
    href: "assignment-1",
    name: "Array Implementation of Stacks and Queues",
  },
  {
    href: "assignment-2",
    name: "Round Robin Scheduler",
  },
  {
    href: "assignment-3",
    name: "Building Heaps",
  },
  {
    href: "assignment-4",
    name: "Hashing",
  },
  {
    href: "assignment-5",
    name: "Queue with 2 Stacks",
  },
  {
    href: "assignment-6",
    name: "Sorting Algorithms",
  },
] as const;

export const instructorInfo = {
  name: "Manju Muralidharan Priya",
  Email: "mmuralidharanpriya@sdsu.edu",
  "Virtual Office": "Meeting ID 243-757-7255 (on Zoom)",
  Office: "GMCS 546 , T, TH 9:30 AM - 11:30 AM",
};

export const topics = [
  {
    name: "Java Basics & Generics",
    href: "java-basics",
  },
  {
    name: "Analysis of Algorithms",
    href: "analysis-of-algorithms",
  },
  {
    name: "Stacks, Queues, & Linked Lists",
    href: "stacks-queues-and-linked-lists",
  },
  {
    name: "Sorting Algorithms",
    href: "sorting-algorithms",
  },
  {
    name: "Priority Queues & Heaps",
    href: "priority-queues-and-heaps",
  },
  {
    name: "Trees",
    href: "trees",
  },
  {
    name: "Hashing",
    href: "hashing",
  },
  {
    name: "Graphs & Graph Algorithms",
    href: "graphs-graph-algorithms",
  },
] as const;

export const searchData: SearchItem[] = [
  ...programmingAssignments.map(
    (item) => ({ ...item, id: uuid(), type: "Assignment" } as const)
  ),
  ...topics.map((item) => ({ ...item, id: uuid(), type: "Topic" } as const)),
];
