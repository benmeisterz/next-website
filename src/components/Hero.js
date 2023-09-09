import { Roboto, Saira_Condensed } from 'next/font/google'
import Image from 'next/image'

const roboto = Roboto({ subsets: ['latin'], weight: '300' })
const sair = Saira_Condensed({ subsets: ['latin'], weight: '300' })

export const Hero = () => {
  return (
    <header className='padding-x w-full py-[5px] bg-bgdark text-light font-bold text-lg lg:pt-[150px]'>
      <div className='max-container flex '>
        <Image
          src='/images/deftones-22lead.jpg'
          alt='/'
          width={970} // Set the width
          height={700}
          className='flex flex-end'
        />
        <h1>sdfkljklsdjg</h1>
      </div>
    </header>
  )
}
