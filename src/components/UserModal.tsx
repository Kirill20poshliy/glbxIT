import { FC } from 'react'
import exitIcon from '../assets/exit.svg'
import { UsersState } from '../types/types'
import { RootState } from '../store/index'
import { useDispatch, useSelector } from 'react-redux'
import { deleteActualUser, switchModal } from '../store/usersSlice'
import { useGetUsersQuery } from '../store/api'

const UserModal: FC = () => {

    const name: string = useSelector<RootState, UsersState>(state => state.users).actualUser

    const dispatch = useDispatch()

    const {data} = useGetUsersQuery(name)
    const user = data && data[0]

    const exitHandler = (): void => {
        dispatch(switchModal())
        dispatch(deleteActualUser())
    }

    return (
        <div className='fixed w-full h-screen bg-modalBg z-50 left-0 top-0 px-4'>
            <div className='w-full h-screen left-0' onClick={exitHandler}></div>
            <div className='absolute 
                            left-[50%] 
                            top-[50%] 
                            translate-x-[-50%] 
                            translate-y-[-50%] 
                            p-6 
                            bg-white 
                            w-calc
                            md:w-[31.25rem] 
                            min-h-[29.25rem] 
                            rounded-2xl
                            flex
                            flex-col
                            gap-10'>
                <div className='flex justify-between items-center text-[1.5rem] text-[#262C40] font-bold leading-[30px]'>
                    <h2>{user ? user?.name : '-'}</h2>
                    <button onClick={exitHandler}>
                        <img src={exitIcon} alt='exit'/>
                    </button>
                </div>
                <div className='grid 
                                grid-cols-modal 
                                gap-x-10 
                                gap-y-[14px] 
                                leading-6
                                text-[#8189A3]
                                [&>:nth-child(odd)]:text-[#262C40]
                                [&>:nth-child(odd)]:text-[18px]
                                break-all'>
                    <p>Телефон:</p><p>{user ? user?.phone : '-'}</p>
                    <p>Почта:</p><p>{user ? user?.email : '-'}</p>
                    <p>Дата приёма:</p><p>{user ? user?.hire_date : '-'}</p>
                    <p>Должность:</p><p>{user ? user?.position_name: '-'}</p>
                    <p>Подразделение:</p><p>{user ? user?.department : '-'}</p>
                </div>
                <div className='flex 
                                flex-col 
                                gap-3 
                                text-[16px] 
                                leading-[18px]
                                text-[#8189A3] 
                                [&>:first-child]:text-[#262C40]
                                [&>:first-child]:text-[18px]
                                [&>:first-child]:leading-6'>
                    <h3>Дополнительная информация:</h3>
                    <p>{user ? user?.address : '-'}</p>
                </div>
            </div>
        </div>
    )
}

export default UserModal
