import React from 'react'
import Button from '../../../components/inputs/Button'
import TextInput from '../../../components/inputs/TextInput'
import styles from './SearchBar.module.css'

interface SearchBarProps {
}

const SearchBar = ({
}: SearchBarProps) => {

  const [search, setSearch] = React.useState('')
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  } 

  return (
    <div className={styles.container}>
    <TextInput className={styles.input} label='' name='search' value={search} placeholder='Search posts' onChange={handleSearch}/>
    <Button className={styles.button} icon='fa-solid fa-magnifying-glass'></Button>
  </div>
  )
}

export default SearchBar