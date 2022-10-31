import React from 'react'
import Button from '../../../components/inputs/Button'
import TextInput from '../../../components/inputs/TextInput'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  onSearch: (searchString: string) => void
}

const SearchBar = ({
  onSearch
}: SearchBarProps) => {

  const [search, setSearch] = React.useState('')
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  } 

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if( search && e.key == 'Enter' ) {
      handleSearch()
      setSearch('')
    }
  }

  const handleSearch = () => {onSearch(search)} 

  return (
    <div className={styles.container}>
    <TextInput onKeyPress={handleEnterPress} className={styles.input} label='' name='search' value={search} placeholder='Search posts' onChange={handleInputChange}/>
    <Button className={styles.button} icon='fa-solid fa-magnifying-glass' onClick={handleSearch}></Button>
  </div>
  )
}

export default SearchBar