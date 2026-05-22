export interface Student {
  id: string;
  fullName: string;
  age: number;
  email: string;
  faculty: string;
  status: "active" | "inactive";
  courses: string[];
}
