import {
  getAbout,
  getWorks,
  getSkills,
  getContact,
  getExperiences,
} from '../controllers/controller.js';

const routes = (app) => {
  app.route('/').get(getAbout);

  app.route('/work').get(getWorks);

  app.route('/contact').get(getContact);

  app.route('/about').get(getSkills);

  app.route('/experiences').get(getExperiences);
};

export default routes;
