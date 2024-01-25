import React, { Suspense, lazy, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { refreshThunk } from 'store/auth/thunks'

const Navigation = lazy(() => import('./Navigation/Navigation'))
const PublicRoute = lazy(() => import('./guards/PublicRoute'))
const RegistrationPage = lazy(() => import('pages/RegistrationPage'))
const LoginPage = lazy(() => import('pages/LoginPage'))
const ContactsPage = lazy(() => import('pages/ContactsPage'))
const PrivateRoute = lazy(() => import('./guards/PrivateRoure'))

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(refreshThunk());
    }, [dispatch]);
  return (
    <>
      <Suspense fallback={<>loading...</>}>
        <Navigation />
        <Routes>
          {/* <Route path="/" element={<PublicRoute />}>
            <Route path="/signup" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route> */}
          <Route
						path='/login'
						element={
							<PublicRoute>
								<LoginPage />
							</PublicRoute>
						}
					/>
					<Route
						path='/signup'
						element={
							<PublicRoute>
								<RegistrationPage />
							</PublicRoute>
						}
					/>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  )
}
