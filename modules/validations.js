const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

const userRequestCheck = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
    avatar: Joi.string().required().uri(),
  }),
});

const cardRequestCheck = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().required().min(2)
      .max(30),
    link: Joi.string().required().uri(),
  }),
});

const deleteCardCheck = celebrate({
  params: Joi.object().keys({
    cardId: Joi.objectId(),
  }),
});

module.exports = { userRequestCheck, cardRequestCheck, deleteCardCheck };
