import { FC } from 'react'
import searchImg from '../assets/search.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { UsersState } from '../types/types'
import { setQuery } from '../store/usersSlice'

const Search: FC = () => {

  const searchQuery: string = useSelector<RootState, UsersState>(state => state.users).searchQuery
  const dispatch = useDispatch()



  return (
    <div className='relative'> 
      <img src={searchImg} alt='Search' className='absolute right-6 top-3'/>  
      <input 
        value={searchQuery} 
        onChange={(e) => dispatch(setQuery(e.currentTarget.value))} 
        className='rounded-full h-12 px-6 py-3 outline-none border-[#D4DEFE] border w-full'/>
    </div>
  )
}

export default Search
