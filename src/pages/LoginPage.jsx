import { useDispatch } from 'react-redux'
import LoginForm from '../components/Forms/LoginForm'
import { loginThunk } from '../store/auth/thunks'

const LoginPage = () => {
	const dispatch = useDispatch()

	const login = (body) => {
		dispatch(loginThunk(body))
	}
	return <LoginForm login={login} />
}

export default LoginPage