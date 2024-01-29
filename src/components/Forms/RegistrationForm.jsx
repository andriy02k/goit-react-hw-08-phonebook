import { useNavigate } from 'react-router-dom'
import { FormLabel, Button, Input, Box, useTheme } from '@chakra-ui/react';

const RegistrationForm = ({ register }) => {
	const theme = useTheme()

	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault()
		const { name, email, password } = e.target.elements
		register({ name: name.value, email: email.value, password: password.value })
		navigate("/contacts")
	}
	return (
		<Box>
			<form onSubmit={handleSubmit}>
				<div style={{marginBottom: "8px"}}>
					<FormLabel style={{fontSize: "28px"}}>
						Name
					</FormLabel>
					<Input type='text' name='name' />
				</div>
				<div style={{marginBottom: "8px"}}>
					<FormLabel style={{fontSize: "28px"}}>
						Email address
					</FormLabel>
					<Input
						type='email'
						name='email'
					/>
					<div style={{ color: theme.colors.secondary, fontSize: "14px" }}>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div style={{marginBottom: "8px"}}>
					<FormLabel style={{fontSize: "28px"}}>
						Password
					</FormLabel>
					<Input
						name='password'
						type='password'
					/>
				</div>
				<Button type='submit'>
					Registration
				</Button>
			</form>
		</Box>
	)
}

export default RegistrationForm
