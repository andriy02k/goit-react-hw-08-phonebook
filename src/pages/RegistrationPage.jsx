import { useDispatch } from 'react-redux'
import RegistrationForm from '../components/Forms/RegistrationForm'
import { signUpThunk } from '../store/auth/thunks'

const RegistrationPage = () => {
	const dispatch = useDispatch()

	const register = (body) => {
		dispatch(signUpThunk(body))
	}

	return <RegistrationForm register={register} />
}

export default RegistrationPage