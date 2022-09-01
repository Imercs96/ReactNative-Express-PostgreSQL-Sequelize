import { NextFunction, Request, Response } from 'express';

import { CourseModel } from '../../models/Courses';
import { Course } from '../interfaces/courses';

// GET all data 
const getData: (req: Request, res: Response, next: NextFunction) => Promise<void> |
  Response<Course, Record<string, Course>>
= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await CourseModel.findAll();
    response && res.status(200).send(response);
    next();
    // return res.status(200).send(response);

    // QueryString request DB

    // dbClient.query('SELECT * FROM courses', 
    //   (error: Error, result: QueryResult<Course>) => {
    //     if(error) next(error);
    //     const courses: Course[] = result.rows;
    //     return res.status(200).json(courses);
    //   });

  } catch(error) {
    return console.error(error);
  }
};

// GET data by ID
const getDataById: (req: Request, res: Response, next: NextFunction) => Promise<void> |
  Response<Course , Record<string, Course>> 
= async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req?.params;

    const response = await CourseModel.findByPk(id);

    if(response) res.status(200).send(response);
    else res.status(404).send({ error: 'Parameter do not found' });

    next();

    // dbClient.query('SELECT * FROM courses WHERE id=$1',
    //   [ id ], 
    //   (error: Error, result: QueryResult<Course>) => {
    //     if(error) next(error);
    //     const course: Course = result.rows[0];
    //     // Success
    //     if(course) return res.status(200).json(course);
    //     return res.status(404).send({
    //       error: 'Parameter do not found'
    //     });
    //   });
  } catch(error) {
    return console.error(error);
  }
};

// DELETE data by ID
const deleteDataById: (req: Request, res: Response, next: NextFunction) => Promise<void> |
  Response<Course, Record<string, Course>>
= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req?.params;
    const response = await CourseModel.destroy({ where: { id }});

    if(response) res.status(200).send({ message: `The course with id ${ id } has been deleted succesfully`  });
    else res.status(404).send({ error: `The course with id ${ id } hasn't been deleted`  });

    next();

    // dbClient.query('DELETE FROM courses WHERE id=$1',
    //   [ id ], 
    //   (error: Error) => {
    //     if(error) next(error);
    //     return res.status(200).send({ message: `The course with id ${ id } has been deleted succesfully` });
    //   });
  } catch(error) {
    return console.error(error);
  }
};

// POST data
const addCourse: (req: Request, res: Response, next: NextFunction) => Promise<void> |
  Response<Course, Record<string, Course>> =
async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, category, description, image, link, teachers } = req?.body;

    const response = await CourseModel.create({ title, category, description, image, link, teachers });
    response && res.status(200).send(response);
    next();

    // dbClient.query('INSERT INTO courses(title, category, description, image, link, teachers) VALUES($1, $2, $3, $4, $5, $6)',
    //   [ title, category, description, image, link, teachers ], 
    //   (error: Error) => {
    //     if(error) next(error);
    //     return res.status(201).send({ message: 'Success. created'});
    //   });
  } catch(error) {
    return console.error(error);
  }
};

// PUT data by ID
const putDataById: (req: Request, res: Response, next: NextFunction) => Promise<void> |
  Response<Course, Record<string, Course>> =
async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, category, description, image, link, teachers } = req?.body;
    // Find id
    const { id } = req?.params;

    const response = await CourseModel.update(
      { title, category, description, image, link, teachers },
      { where: { id }}
    );

    if(response) res.status(200).send({ message: `The course with id ${ id } has been updated succesfully`  });
    else res.status(404).send({ error: `The course with id ${ id } hasn't been updated` });

    next();

    // dbClient.query('UPDATE courses SET title=$1, category=$2, description=$3, image=$4, link=$5, teachers=$6 WHERE id=$7',
    //   [ 
    //     title , 
    //     category, 
    //     description, 
    //     image, 
    //     link, 
    //     teachers, 
    //     id 
    //   ], 
    //   (error: Error) => {
    //     if(error) next(error);
    //     return res.status(200).send({ message: `The course with id ${ id } has been update succesfully` });
    //   });
  } catch(error) {
    return console.error(error);
  }
};

// PATCH data by ID
const patchDataById: (req: Request, res: Response, next: NextFunction) => Promise<void> |
  Response<Course, Record<string, Course>> =
async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, category, description, image, link, teachers } = req?.body;
    // Find id
    const { id } = req?.params;

    const response = await CourseModel.update(
      { title, category, description, image, link, teachers },
      { where: { id }}
    );

    if(response) res.status(200).send({ message: `The course with id ${ id } has been updated succesfully`  });
    else res.status(404).send({ error: `The course with id ${ id } hasn't been updated` });

    next();

    // dbClient.query('UPDATE courses SET title=$1, category=$2, description=$3, image=$4, link=$5, teachers=$6 WHERE id=$7',
    //   [ 
    //     title , 
    //     category, 
    //     description, 
    //     image, 
    //     link, 
    //     teachers, 
    //     id 
    //   ], 
    //   (error: Error) => {
    //     if(error) next(error);
    //     return res.status(200).send({ message: `The course with id ${ id } has been update succesfully` });
    //   });
  } catch(error) {
    return console.error(error);
  }
};

export { 
  addCourse, 
  deleteDataById, 
  getData, 
  getDataById, 
  patchDataById, 
  putDataById 
};

// {
//   "title": "✌️ React Native: Aplicaciones para Android y iOS",
//   "category": "frontend",
//   "description": "Aprenderemos como construir y diseñar aplicaciones móbiles para ambos SO",
//   "image": "novedades-react-native.jpg",
//   "link": "https://udemy.com/react-native",
//   "teachers": "Fernando herrera"
// }