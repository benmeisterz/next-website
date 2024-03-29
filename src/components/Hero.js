import { Roboto, Saira_Condensed } from 'next/font/google'
import Image from 'next/image'

const roboto = Roboto({ subsets: ['latin'], weight: '100' })
const sair = Saira_Condensed({ subsets: ['latin'], weight: '500' })

export const Hero = () => {
  return (
    <header className='padding-x w-full py-[10px] bg-bgdark text-light font-bold text-lg lg:pt-[150px] min-h-screen'>
      <div className='max-container flex  flex-col lg:flex-row justify-between align-top gap-5 max-h-[900px]'>
        <div className={`${sair.className}`}>
          <h1 className='text-[40px] font-bold pb-[20px]'>THURSDAY, DEC 31ST</h1>
          <div className='block leading-[85px]'>
            <h1 className='text-[80px] font-bold'>
              GREAT MUSIC <br /> EVENT OF THE <br /> YEAR WITH <br />
              GOOD VIBES
            </h1>
          </div>
          <div className={`${roboto.className}`}>
            <p className='text-[15px]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, veritatis!
            </p>
          </div>
          <div className='mt-[55px] hidden xl:block'>
            <Image
              src='/images/Arrow.png'
              alt='/'
              width={100} // Set the width
              height={100}
            />
          </div>
        </div>

        <div className='pb-8'>
          <Image
            src='/images/deftones-22lead.jpg'
            alt='/'
            width={970} // Set the width
            height={800}
          />
        </div>
      </div>
    </header>
  )
}
