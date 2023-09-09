import { Roboto, Saira_Condensed } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '300' })
const sair = Saira_Condensed({ subsets: ['latin'], weight: '300' })

export const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#eventInfo', label: 'EVENT INFO' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#tickets', label: 'TICKETS' },
]

export const Nav = () => {
  return (
    <div className={`${sair.className}`}>
      <header className='padding-x w-full py-[45px] bg-bglight text-light font-bold text-lg'>
        <nav className='flex justify-between items-center max-container'>
          <h1>Logo</h1>

          <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}
