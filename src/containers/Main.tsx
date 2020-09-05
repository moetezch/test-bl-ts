import React, { useState, useEffect, FC } from 'react'
import axios from 'axios'
import Card from '../components/MovieCard'
import ActorCard from '../components/ActorCard'
import showErrorNotification from '../components/ShowErrorNotification'
import { moviesSchema, actorsSchema } from '../utils/validator'
import { Col, Row, Typography } from 'antd'

const { Title } = Typography

interface Props {
  currentTab: number
  searchTerm: string
}

const Main: FC<Props> = ({ currentTab, searchTerm }) => {
  const [movies, setMovies] = useState<any[]>([])
  const [actors, setActors] = useState<any[]>([])
  useEffect(() => {
    if (searchTerm === '') {
      if (currentTab === 1) {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
          )
          .then(async (res) => {
            const isValid = await moviesSchema.isValid(res.data.results)
            isValid
              ? setMovies(res.data.results)
              : showErrorNotification(
                  'Problem getting movies',
                  'Please try again'
                )
          })
          .catch((error) => {
            showErrorNotification("Couldn't get movies", 'Please try again')
            console.log(error)
          })
      }
    } else {
      if (currentTab === 1) {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&query=${searchTerm}`
          )
          .then(async (res) => {
            const isValid = await moviesSchema.isValid(res.data.results)
            isValid
              ? setMovies(res.data.results)
              : showErrorNotification(
                  'Problem getting movies',
                  'Please try again'
                )
          })
          .catch((error) => {
            showErrorNotification("Couldn't get movies", 'Please try again')
            console.log(error)
          })
      } else {
        axios
          .get(
            `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${searchTerm}`
          )
          .then(async (res) => {
            const isValid = await actorsSchema.isValid(res.data.results)
            isValid
              ? setActors(res.data.results)
              : showErrorNotification(
                  'Problem getting actors',
                  'Please try again'
                )
          })
          .catch((error) => {
            showErrorNotification("Couldn't get actors", 'Please try again')
            console.log(error)
          })
      }
    }
  }, [currentTab, searchTerm])

  return (
    <>
      {searchTerm === '' && currentTab === 2 && (
        <Title level={3}>No results found</Title>
      )}

      {currentTab === 1 && (
        <Row gutter={[16, 24]}>
          {movies.map((movie) => (
            <Col xs={24} sm={12} md={8} lg={8} xl={8} key={movie.id}>
              <Card
                title={movie.title}
                voteAverage={movie.vote_average}
                description={movie.overview}
                releaseDate={movie.release_date}
              />
            </Col>
          ))}
        </Row>
      )}
      {currentTab === 2 && searchTerm !== '' && (
        <Row gutter={[16, 24]}>
          {actors.map((actor) => (
            <Col xs={24} sm={12} md={8} lg={8} xl={8} key={actor.id}>
              <ActorCard name={actor.name} knownFor={actor.known_for} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Main
