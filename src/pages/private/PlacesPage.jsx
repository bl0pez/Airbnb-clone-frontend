import { Link, useParams } from 'react-router-dom';
import { NewPlace } from '../../components';

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
          <NewPlace />
        )
      }


    </div>
  )
}
