import models from '<serverModels>';
import { article } from '<fixtures>/article';

const { Article } = models;

const createArticle = async (req, res) => {
  const { title, body } = req.body;

  const categoryId = req.body.categoryId || article.categoryId;

  const { userId } = req;

  try {
    const newArticle = await Article.create({
      title, body, userId, categoryId,
    });

    res.status(201).json({
      status: 'success',
      message: 'Article created successfully',
      data: newArticle
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Server error'
    });
  }
};

export default createArticle;