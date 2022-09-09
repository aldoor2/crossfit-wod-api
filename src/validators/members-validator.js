import Joi from 'joi'

const dateRegex =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

export const validateSchema = (body, schema) => {
  try {
    const { error } = schema.validate(body)
    if (error) throw new Error('Joi Validation Error!')
  } catch (err) {
    throw err
  }
}

export const createMemberValidate = (body) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().required(),
    gender: Joi.string().valid('male', 'female').required(),
    dateOfBirth: Joi.string().regex(dateRegex).required()
  })

  return validateSchema(body, schema)
}
