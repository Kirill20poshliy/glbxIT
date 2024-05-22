import { FC } from "react"
import Search from "./components/Search"
import CardsGrid from "./components/CardsGrid"
import UserModal from "./components/UserModal"
import { useSelector } from "react-redux"
import { RootState } from "./store/index"
import { UsersState } from "./types/types"


const App: FC = () => {

  const modal: boolean = useSelector<RootState, UsersState>(state => state.users).userModal

  return (
    <main className='px-2 py-8 md:px-4 md:py-10 lg:py-16 lg:px-20 flex flex-col gap-8 relative'>
      <Search/>
      <CardsGrid/>
      {modal && <UserModal/>}
    </main>
  )

}

export default App
