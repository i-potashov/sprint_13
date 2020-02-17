/* eslint no-underscore-dangle: 0 */
const path = require('path');
const router = require('express').Router();
const fsPromises = require('fs').promises;

async function sendUsers() {
  const usersPath = path.join(__dirname, '../data/users.json');
  return fsPromises.readFile(`${usersPath}`, { encoding: 'utf8' })
    .then((data) => [data, null])
    .catch((err) => [null, err]);
}

router.get('/', async (req, res) => {
  const [users, error] = await sendUsers();
  return error ? res.status(500).send({ message: 'Ошибка ответа сервера' }) : res.send(JSON.parse(users));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [users, error] = await sendUsers();
  if (error) {
    return res.status(500).send({ message: 'Ошибка ответа сервера' });
  }
  const user = JSON.parse(users).find((val) => val._id === id);
  return user ? res.send(user) : res.status(404).send({ message: 'Нет пользователя с таким id' });
});

module.exports = router; // экспортировали роутер
