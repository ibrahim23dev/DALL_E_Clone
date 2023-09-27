import { useEffect, useState } from 'react';
import { Card, FromField, loder } from '../components';
function Home() {
  const [loader, setloader] = useState(false);
  const [allPost, setallpost]=useState(null);
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
    <h1 className='text-[32px]'>The Community Showcase</h1>
      </div>

      <Card/>
    </section>
  )
}
export default Home
