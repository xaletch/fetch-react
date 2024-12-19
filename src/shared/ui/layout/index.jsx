import { Outlet } from 'react-router';
import { Header } from '../../../widgets/header';

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

