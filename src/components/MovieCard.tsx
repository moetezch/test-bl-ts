import React, { FC } from 'react'
import { Card, Typography } from 'antd'
const { Text, Paragraph } = Typography

interface Props {
  title: string
  releaseDate: string
  voteAverage: number
  description: string
}
const CardWrapper: FC<Props> = ({
  title,
  releaseDate,
  voteAverage,
  description,
}) => {
  return (
    <Card size='small' title={title}>
      <p>
        <Text strong>Release date:</Text> {releaseDate}
      </p>
      <p>
        <Text strong>Vote average:</Text> {voteAverage}
      </p>
      <div>
        <Text strong>Description:</Text>
        <Paragraph ellipsis>{description}</Paragraph>
      </div>
    </Card>
  )
}

export default CardWrapper
