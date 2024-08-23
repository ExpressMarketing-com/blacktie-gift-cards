import { Oswald } from 'next/font/google'

const ostwald =Oswald({
  weight:'400',
  subsets:['latin'],
  display:'swap'
})


export default function Home() {
  return (
    <div>
      <h1 className={ostwald.className}>
      </h1>
    
    </div>
  )
}
