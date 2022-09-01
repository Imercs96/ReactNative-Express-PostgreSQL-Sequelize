import { NextFunction, Request, Response } from 'express';

import { CourseModel } from '../../models/Courses';
import { PriceModel } from '../../models/Prices';
import { Course } from '../interfaces/courses';
import { Price } from '../interfaces/prices';

// GET all data 
const getData: (req: Request, res: Response, next: NextFunction) => Promise<void> |
  Response<Price, Record<string, Price>>
= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await PriceModel.findAll({ include: CourseModel });
    response && res.status(200).send(response);
    next();
  } catch(error) {
    return console.error(error);
  }
};

// POST data
const addPrice: (req: Request, res: Response, next: NextFunction) => Promise<void> |
  Response<Course, Record<string, Course>>
= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, category, description, image, link, teachers, price, hasInstalment, cards } = req?.body;

    const [ course, created ] = 
      await CourseModel.findOrCreate({ 
        where: { title, category, description, image, link, teachers }});
    if(course) {
      const response = await PriceModel.create({ price, hasInstalment, cards });
      if(response) {
        // response.setAuthor(course);
        res.status(201).send(response);
      }
    }

  } catch(error) {
    return console.error(error);
  }
};

export { addPrice, getData };