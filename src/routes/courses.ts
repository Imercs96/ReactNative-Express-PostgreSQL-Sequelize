import { Router } from 'express';

import * as coursesController from '../controllers/courses';

const router: Router = Router();

// GET all data 
router.get('/', coursesController.getData);

// GET data by ID
router.get('/:id', coursesController.getDataById);

// DELETE data by ID
router.delete('/:id', coursesController.deleteDataById);

// POST data
router.post('/', coursesController.addCourse);

// PUT data by ID
router.put('/:id', coursesController.putDataById);

// PATCH data by ID
router.patch('/:id', coursesController.patchDataById);

export default router;

// CREATE TABLE courses (
// id SERIAL PRIMARY KEY,
// title TEXT NOT NULL
// category TEXT NOT NULL,
// description TEXT NOT NULL,
// image TEXT,
// link TEXT NOT NULL,
// teachers TEXT NOT NULL
// );

// INSERT INTO courses (title,  category, description, image, link, teachers) VALUES('🐂 Makefiles', 'tooling', 'El centralizar tareas de nuestras aplicaciones es algo muy importante, y con los Makefiles se simplifica mucho.', 'makefiles.jpg', 'xxxx','Rafa');
// INSERT INTO courses (title,  category, description, image, link, teachers) VALUES('✌️ Vue 3: Novedades aplicadas al mundo real', 'frontend', 'Veremos cómo exprimir las novedades de Vue 3 con ejemplos reales y aplicando buenas prácticas.', 'novedades-vue-3.jpg', 'https://pro.codely.tv/library/novedades-vue-3/about/?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=courses-masonry','Javi y Núria');
// INSERT INTO courses (title,  category, description, image, link, teachers) VALUES('💻 Bash para el día a día: Scripting & Productividad', 'tooling', 'Aprende a usar la navaja suiza de los programadores 😬', 'bash.jpg', 'https://pro.codely.tv/library/curso-bash/about/?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=courses-masonry','Javi y Núria');
