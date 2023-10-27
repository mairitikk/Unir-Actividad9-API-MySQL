const PostModel = require('../models/post.model');

const getAllPosts = async (req, res) => {
    try {
        const [result] = await PostModel.selectAllPosts();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}
const createPosts = async (req, res) => {
    try {
        const [result] = await PostModel.insertPost(req.body);
        const [post] = await PostModel.selectPostById(result.insertId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getPostById = async (req, res) => {
    try {
        const { postId } = req.params;

        const [post] = await PostModel.selectPostById(postId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}
const getPostByAutorId = async (req, res) => {
    try {
        const { idautor } = req.params;

        const [post] = await PostModel.selectPostByAutorId(idautor);
        res.json(post);
    } catch (error) {
        res.json({ fatal: error.message });
    }

}


const updatePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const [result] = await PostModel.updatePostById(postId, req.body);

        if (result.changedRows == 0) {
            res.status(404).send('Post not found');
        } else {
            res.status(200).send("Post modified successfuly");
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }

}


const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const [result] = await PostModel.deletePostById(postId);

        if (result.affectedRows == 0) {
            res.status(404).send('Post not found');
        } else {
            res.status(200).send("Post deleted successfuly");
        }
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { getAllPosts, createPosts, getPostById, updatePost, deletePost, getPostByAutorId }