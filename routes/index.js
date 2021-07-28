import express from 'express';
import { getProjects,getSkills,getTestimonials,createProjects,createMess,createSkills,createTestimonials} from '../controllers/index.js';

const router = express.Router();

router.get('/skills', getSkills);
router.get('/projects', getProjects);
router.get('/testi', getTestimonials);


router.post('/skills', createSkills);
router.post('/projects', createProjects);
router.post('/testi', createTestimonials)
router.post('/message', createMess)

export default router;

