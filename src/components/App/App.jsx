import { Route, Routes } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import HomePage from '../../pages/HomePage/HomePage';

export default function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route></Route>
      </Routes>
    </>
  );
}
