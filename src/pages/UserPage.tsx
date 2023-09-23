import { FC } from 'react'
import Sliders from '~/components/Sliders'

const UserPage: FC = () => {
  return (
    <div>
      <h1 className='font-bold text-4xl flex flex-col justify-center bg-rose-100 h-[20vh] w-full text-green-500'>
        User Pages
      </h1>
      <Sliders />
    </div>
  )
}
export default UserPage
