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
    <div className="layout h-screen">

      {isLoading && <Loader />}
        <Header />

        <main>
          <Outlet />
        </main>

        <CartOverview />
        <Footer />
    </div>
  )
}

export default AppLayout;