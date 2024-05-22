import { FC } from 'react'
import { User } from '../types/types'
import phoneImg from '../assets/phone.svg'
import letterImg from '../assets/letter.svg'
import { useDispatch } from 'react-redux'
import { setActualUser, switchModal } from '../store/usersSlice'

const UserCard: FC<User> = ({name, phone, email}) => {

  const dispatch = useDispatch()

  const modalHandler = (): void => {
    dispatch(setActualUser(name))
    dispatch(switchModal())
  }

  return (
    <div className='flex flex-col gap-6 rounded-2xl p-6 shadow-custom min-h-[314px]' 
      onClick={modalHandler}>
      <h2 className='text-[1.5rem] font-bold text-[#262C40] leading-[30px]'>{name}</h2>
      <div className='flex flex-col gap-3 text-[14px] text-[#8189A3]'>
        <div className='flex gap-[14px] items-center leading-5'>
          <img src={phoneImg} alt='phone' />
          <p className='break-all'>{phone}</p>
        </div>
        <div className='flex gap-[14px] items-center leading-5'>
          <img src={letterImg} alt='email' />
          <p className='break-all'>{email}</p>
        </div>
      </div>
    </div>
  )

}

export default UserCard
