const selectAllPosts = () => {
    return db.query('select * from posts');
}
module.exports = { selectAllPosts }