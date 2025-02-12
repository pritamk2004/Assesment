import Job from '../models/Job.js';

// Fetch all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new job
export const createJob = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const newJob = new Job({ title, description, category });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job' });
  }
};
