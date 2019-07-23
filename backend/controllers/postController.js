const Post = require('../models/Post')

exports.newPost = async (req, res) => {
  const {title, description, img} = req.body
  await Post.create({title, description, img})

  res.status(201).json({message: 'se creo'})
}

exports.getPosts = async (req, res) => {
  const posts = await Post.find()
  res.status(200).json(posts)
}
