import { Link, Outlet } from "@remix-run/react";

export default function AppLayout() {
  return (
    <>
      <header style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'baseline'
      }}>
        <Link to='/'>
          <h1>Сайт</h1>
        </Link>
        <Link to='/posts'>Посты</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
