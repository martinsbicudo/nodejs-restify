module.exports = {
  categories: {
    all: (id) => id ? 'SELECT * FROM categories WHERE id = ?' : 'SELECT * FROM categories',
    save: () => 'INSERT INTO categories SET ?',
    update: () => 'UPDATE categories SET ? WHERE id = ?',
    del: () => 'DELETE FROM categories WHERE id = ?'
  }
}
