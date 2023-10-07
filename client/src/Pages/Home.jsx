import { useEffect, useState } from 'react';
import { Card, FromField, Loader } from '../components';
function Home() {
  const [loader, setloader] = useState(true);
  const [allPost, setallpost] = useState(null);
  const [searchText, SetSearchText] = useState('abc');

  const RenderCard = ({ data, title }) => {
    if (data?.length > 0) {
      return data.map((post)=> <Card key={post._id}{...post}/>)
    }
    return (
      <h2 className='mt-5 font-bold text-[6449ff] text-xl uppercase'>{title}</h2>
    )
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='text-[32px]'>The Community Showcase</h1>
        <p className='mt-4 text-[#666e75] text-[14px] max-w-[500px]'>You show a magic here just upload a image and submit here</p>
      </div>
      <div className='mt-16'>
        <FromField/>
      </div>
      <div className='mt-10'>
        {loader ? (
          <div className='flex justify-center items-center'>
          <Loader/>
          </div>
        ) : (
            <>{searchText && (
              <h1 className='font-medium text-[#666e75] text-xl mb-3'>
                Show result for <span className='text-[222328] '>{searchText}</span>
              </h1>
            )}
              <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 geid-cols-1 gap-3'>
                {searchText ? (
                  <RenderCard 
                    data={[ ]}
                  title="No Search Result found"
                  />
                ) : (<RenderCard
                    data={[ ]}
                    title="No Post found"
                />)}
            </div>
            
            </>
        )}

      </div>
      
    </section>
  )
}
export default Home
