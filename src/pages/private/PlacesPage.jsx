import { Link, useParams } from 'react-router-dom';

export const PlacesPage = () => {

  const { action } = useParams();

  return (
    <div>
      {
        action !== 'new' && (
          <div className="text-center">
            <Link
              to="/places/new"
              className="bg-primary text-white py-2 px-4 rounded-full inline-flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              New Place
            </Link>
          </div>
        )
      }

      {
        action === 'new' && (
          <div>
            <form action="">
              <h2 className='text-2xl mt-4'>Title</h2>
              <p className='text-sm text-gray-500'>Title for your places. should be short and catchy as in advertisement</p>
              <input type="text" placeholder='title, for examble: My lovely apt' />
              <h2 className='text-2xl mt-4'>Address</h2>
              <p className='text-sm text-gray-500'>Address for your places. should be short and catchy as in advertisement</p>
              <input type="text" placeholder='address' />
              <h2 className='text-2xl mt-4'>Photos</h2>
              <p className='text-sm text-gray-500'>Photos for your places. should be short and catchy as in advertisement</p>
              <div className='flex gap-2'>
                <input type="text" placeholder={'Add using a link ...jpg'} />
                <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
              </div>
              <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                <button className='flex justify-center gap-1 items-center border bg-transparent rounded-2xl p-8 text-gray-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  Upload</button>
              </div>
              <h2 className='text-2xl mt-4'>Description</h2>
              <p className='text-sm text-gray-500'>Description for your places. should be short and catchy as in advertisement</p>
              <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>
              <h2 className='text-2xl mt-4'>Perks</h2>
              <p className='text-sm text-gray-500'>Select all the perks that your place has</p>
              <div>
                <label>
                  <input type="checkbox" id="wifi" name="wifi" />
                  <span className='ml-2'>Wifi</span>
                </label>
              </div>
            </form>
          </div>
        )
      }


    </div>
  )
}
