import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRout({ loggedIn }) {
  return (
    loggedIn ? <Outlet/> : <Navigate to="/login"/>
  );
}

export default ProtectedRout;