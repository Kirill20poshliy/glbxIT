import { FC } from 'react'
import { useGetUsersQuery } from '../store/api'
import UserCard from './UserCard'
import Spinner from './Spinner'
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { UsersState } from '../types/types'


const CardsGrid: FC = () => {

    const searchQuery: string = useSelector<RootState, UsersState>(state => state.users).searchQuery
    const {data, isLoading, isError} = useGetUsersQuery(searchQuery)

    return (
        <>
            {
                !isLoading
                ? <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-[25px] gap-y-[24px]'>
                    {
                        data?.map(user => (
                            <UserCard
                                key={user.name} 
                                name={user.name} 
                                phone={user.phone} 
                                email={user.email} 
                                position_name=''
                                department=''
                                address=''
                                hire_date=''/>                            
                        ))
                    }
                    {isError && <div>Сервер недоступен! Попробуйте позднее.</div>}
                </section>
                : <Spinner/>
            }
        </>
    )

}

export default CardsGrid
