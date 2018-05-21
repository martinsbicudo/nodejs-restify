module.exports = (error, msg, reject) => {
  console.error(error)
  reject({ error: msg })
}
