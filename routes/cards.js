const path = require('path');
const router = require('express').Router();
const fsPromises = require('fs').promises;

async function sendCards() {
  const cardsPath = path.join(__dirname, '../data/cards.json');
  return fsPromises.readFile(`${cardsPath}`, { encoding: 'utf8' })
    .then((data) => [data, null])
    .catch((err) => [null, err]);
}

router.get('/', async (req, res) => {
  const [cards, error] = await sendCards();
  return error ? res.status(500).send({ message: 'Ошибка ответа сервера' }) : res.send(JSON.parse(cards));
});

module.exports = router;
