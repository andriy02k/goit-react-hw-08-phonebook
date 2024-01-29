import { useSelector } from 'react-redux'
import { isAuthSelector } from '../../store/auth/selectors'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

const PublicRoute = () => {
	const isAuth = useSelector(isAuthSelector)
	const { state: prevLocation } = useLocation()
	return !isAuth ? <Outlet /> : <Navigate to={prevLocation ?? '/'} />
}

export default PublicRoute