import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-orange-300'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold'>Authentification</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li>Accueil</li>
          </Link>
          <Link to='/about'>
            <li>A propos</li>
          </Link>
          <Link to='/sign-in'>
            <li>Se connecter

            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}