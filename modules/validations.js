const { celebrate, Joi } = require('celebrate');

const userRequestCheck = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    about: Joi.string().required(),
    avatar: Joi.string().required(),
  }),
});

const cardRequestCheck = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    link: Joi.string().required(),
    likes: Joi.string().required(),
  }),
});

module.exports = { userRequestCheck, cardRequestCheck };
