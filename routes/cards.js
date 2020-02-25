const cards = require('express').Router();
const { getCards, createCard, deleteCard } = require('../controllers/cards');
const { cardRequestCheck, deleteCardCheck } = require('../modules/validations');

cards.get('/cards', getCards);
cards.post('/cards', cardRequestCheck, createCard);
cards.delete('/cards/:cardId', deleteCardCheck, deleteCard);

module.exports = cards;
