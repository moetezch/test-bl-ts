import React, { FC } from 'react'
import { Input } from 'antd'
const { Search } = Input

interface Props {
  changeSearchTerm: (term: string) => void
}
const InputWrapper: FC<Props> = ({ changeSearchTerm }) => {
  return (
    <Search
      placeholder='search...'
      onSearch={changeSearchTerm}
      className='search-input'
      size='middle'
    />
  )
}

export default InputWrapper
