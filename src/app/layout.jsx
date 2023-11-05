import Link from 'next/link'
import './globals.css'
import { poppins } from '@/fonts/fonts'

export const metadata = {
  title: 'RoyerRR Dev',
  description: 'my developer portfolio',
}

export default function RootLayout({ children }) {
  const NAV_LINKS = [
    'Inicio',
    'Experiencia',
    'Proyectos',
    'Habilidades',
    'Hobbies'
  ]
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-[#0a192f]`}>
        <nav className='flex justify-end p-10 h-[170px]'>
          {NAV_LINKS.map((link, i) => (
            <span
              key={i}
              className='text-white font-bold text-xl p-5 m-2 cursor-pointer transition-all ease-in-out hover:border-b-[10px] hover:border-b-blue-500 border-b-blue-500 hover:text-2xl'
            >
              {link}
            </span>
          ))}
        </nav>
        {children}
      </body>
    </html>
  )
}
