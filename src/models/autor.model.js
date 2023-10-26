const selectAllAutors = () => {
    return db.query('SELECT * FROM autores');
}

const insertAutor = ({ nombre, email, imagen_url }) => {
    return db.query('INSERT INTO autores (nombre, email, imagen_url) VALUES (?,?,?)',
        [nombre, email, imagen_url])
}

const selectAutorById = (id) => {
    return db.query('SELECT * FROM autores WHERE idautores= ?', [id]);
}
const updateAutorById = (id, { nombre, email, imagen_url }) => {
    return db.query('UPDATE autores SET nombre=?, email=?, imagen_url=? WHERE idautores=?', [nombre, email, imagen_url, id]);
}

const deleteAutorById = (id) => {
    return db.query('DELETE  FROM autores WHERE idautores= ?', [id]);
}

module.exports = { selectAllAutors, insertAutor, selectAutorById, updateAutorById, deleteAutorById }