const selectAllPosts = () => {
    return db.query('SELECT titulo, description, fecha_de_creacion, categoria, nombre, email, imagen_url FROM posts, autores WHERE autores_idautores = idautores');
}


const insertPost = ({ titulo, description, fecha_de_creacion, categoria, autores_idautores }) => {
    return db.query('INSERT INTO posts (titulo, description, fecha_de_creacion, categoria, autores_idautores) VALUES (?,?,?,?,?)',
        [titulo, description, fecha_de_creacion, categoria, autores_idautores])
}

const selectPostById = (id) => {
    return db.query('SELECT titulo, description, fecha_de_creacion, categoria, nombre, email, imagen_url FROM posts, autores WHERE idposts = ? AND autores_idautores = idautores', [id]);
}
const updatePostById = (id, { titulo, description, fecha_de_creacion, categoria, autores_idautores }) => {
    return db.query('UPDATE posts SET titulo=?, description=?, fecha_de_creacion=?, categoria=?, autores_idautores=?', [titulo, description, fecha_de_creacion, categoria, autores_idautores]);
}

const deletePostById = (id) => {
    return db.query('DELETE  FROM posts WHERE idposts= ?', [id]);
}

const selectPostByAutorId = (id) => {
    return db.query('SELECT * FROM posts WHERE autores_idautores= ?', [id])
}

module.exports = { selectAllPosts, insertPost, selectPostById, updatePostById, deletePostById, selectPostByAutorId }