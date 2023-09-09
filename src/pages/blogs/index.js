import Image from 'next/image'
import { Roboto, Saira_Condensed } from 'next/font/google'
import Footer from '@/components/Footer'

const roboto = Roboto({ subsets: ['latin'], weight: '300' })
const sair = Saira_Condensed({ subsets: ['latin'], weight: '300' })

export default function Home({ data }) {
  const posth = data.map((post, i) => (
    <>
      <div className={`${roboto.className}`}>
        <p key={post.id} className='font-bold'>
          {post.title.rendered}
        </p>
      </div>
      <div className={`${sair.className}`}>
        <p className='font-sair'>{post.content.rendered}</p>
      </div>
    </>
  ))
  return (
    <div>
      <h1 className='flex flex-col gap-5 p-5 max-w-screen-xl mx-auto'>{posth}</h1>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://dev-headlessnext.pantheonsite.io/wp-json/wp/v2/posts`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data,
    },
  }
}
