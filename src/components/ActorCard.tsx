import React, { FC } from 'react'
import { Card, Typography } from 'antd'
const { Text } = Typography

interface Props {
  name: string
  knownFor: { name: string; title: string }[]
}

const CardWrapper: FC<Props> = ({ name, knownFor }) => {
  return (
    <Card size='small' title={name}>
      <p>
        <Text strong>Popular movies:</Text>{' '}
        {knownFor.map((movie) => movie.name || movie.title).join(', ')}
      </p>
    </Card>
  )
}

export default CardWrapper
