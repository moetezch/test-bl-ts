import { string, object, number, array } from 'yup'

const singleMovieSchema = object().shape({
  title: string().required(),
  vote_average: number().required(),
  overview: string().required(),
  release_date: string().required(),
})

const singleActorSchema = object().shape({
  name: string().required(),
  known_for: array().of(
    object().shape({
      title: string(),
      name: string(),
    })
  ),
})

export const moviesSchema = array().of(singleMovieSchema)

export const actorsSchema = array().of(singleActorSchema)
