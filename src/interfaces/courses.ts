export interface Courses {
  data: Course[];
}

export interface Course {
  id:         number;
  title:       string;
  category:    string;
  description: string;
  image:       string;
  link:        string;
  teachers:    string;
}
