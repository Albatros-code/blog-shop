import clsx from 'clsx'
import React from 'react'
import Button from '../inputs/Button'
import TextInput from '../inputs/TextInput'
import styles from './Pagination.module.css'

interface PaginationProps {
    count: number
    defaultPage?: number
    disabled?: boolean
    onChange?: (page: number) => void
    page?: number
    className?: string
}

function resolvePage(count: number, inputPage: string, currentPage: number){
    if (!inputPage) return currentPage
    const inputPageInt = parseInt(inputPage)
    if (inputPageInt >= count) return count
    if (inputPageInt === 0) return 1
    return inputPageInt
}

function Pagination({
    count = 1,
    defaultPage = 1,
    disabled = false,
    onChange,
    page = 1,
    className
}:PaginationProps) {

    
    const [inputPage, setInputPage] = React.useState(page.toString())

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPage(e.target.value)
    }
    
    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if( inputPage && e.key == 'Enter' ) onChange && onChange(parseInt(inputPage))
      }

    const handleButtonClick = (dir: '+' | '-') => (e: any) => {
        e.preventDefault()
        const nextPage = (dir === '+' ? page + 1 : page - 1)
        onChange && onChange(nextPage)
        setInputPage(nextPage.toString())
    }

  return (
    <div className={clsx(styles.container, className)}>
        <Button onClick={handleButtonClick('-')} icon='fa-solid fa-chevron-left' disabled={page === 1}/>
        <p>page:</p>
        <TextInput onKeyPress={handleEnterPress} max={count} min={1} name='page' value={inputPage.toString()} type='number' onChange={handleInputChange} className={styles.input}/>
        <p>/ {count}</p>
        <Button onClick={handleButtonClick('+')} icon='fa-solid fa-chevron-right' disabled={page === count}/>
    </div>
  )
}

export default Pagination