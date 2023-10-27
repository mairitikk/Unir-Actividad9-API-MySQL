const router = require('express').Router();


const PostsController = require('../../controllers/posts.controller');
router.get('/', PostsController.getAllPosts);
router.post('/', PostsController.createPosts);

router.get('/:postId', PostsController.getPostById);
router.get('/autor/:idautor', PostsController.getPostByAutorId)

router.put('/:postId', PostsController.updatePost);
router.delete('/:postId', PostsController.deletePost);


module.exports = router;