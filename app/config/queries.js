module.exports = {
  categories: {
    all: (id) => id ? 'SELECT * FROM categories WHERE id = ?' : 'SELECT * FROM categories',
    save: () => 'INSERT INTO categories SET ?',
    update: () => 'UPDATE categories SET ? WHERE id = ?',
    del: () => 'DELETE FROM categories WHERE id = ?'
  },
  users: {
    all: (id) => id ? 'SELECT * FROM users WHERE id = ?' : 'SELECT * FROM users',
    save: () => 'INSERT INTO users SET ?',
    update: () => 'UPDATE users SET password = ? WHERE id = ?',
    del: () => 'DELETE FROM users WHERE id = ?'
  }
}
