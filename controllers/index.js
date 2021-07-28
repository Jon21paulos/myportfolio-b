import express from 'express';

import projectsModel from "../models/projectsModel.js"
import skillsModel from "../models/skillsModel.js"
import testimonialsModel from "../models/testimonialsModel.js"
import messModel from "../models/messModel.js"
const router = express.Router();

export const getSkills = async (req, res) => { 
    try {
        const skills = await skillsModel.find();
                
        res.status(200).json(skills);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProjects = async (req, res) => { 
    try {
        const projects = await projectsModel.find();
                
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTestimonials = async (req, res) => { 
    try {
        const testimonials = await testimonialsModel.find();
                
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSkills = async (req, res) => {
    const { skill } = req.body;

    const newskillsModel = new skillsModel({ skill })

    try {
        await newskillsModel.save();

        res.status(201).json(newskillsModel );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const createProjects = async (req, res) => {
    const { title,subtitle,description,image,link } = req.body;

    const newprojectsModel = new projectsModel({ title,subtitle,description,image,link })

    try {
        await newprojectsModel.save();

        res.status(201).json(newprojectsModel );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const createTestimonials = async (req, res) => {
    const { qoute,image,name,company } = req.body;

    const newtestimonialsModel = new testimonialsModel({ qoute,image,name,company })

    try {
        await newtestimonialsModel.save();

        res.status(201).json(newtestimonialsModel );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const createMess = async (req, res) => {
    const { name,email,message } = req.body;

    const newmessModel = new messModel({ name,email,message })

    try {
        await newmessModel.save();

        res.status(201).json(newmessModel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;