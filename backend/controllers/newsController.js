import News from '../models/News.js';

// Fetch news articles
export const getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news' });
  }
};
