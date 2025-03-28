import { useNavigation, Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import { CartOverview } from '../features';


const AppLayout = () => {
  //useNavigation hook: we can get access when the app is currently idle(inactive), when is loading or submiting data (for the entire app)
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>

      {isLoading && <Loader />}
        <Header />

      <div className='overflow-scroll '>
        <main className='max-w-3xl  mx-auto'>
            <Outlet />
          </main>
      </div>
        

        <CartOverview />
        <Footer />
    </div>
  )
}

export default AppLayout;