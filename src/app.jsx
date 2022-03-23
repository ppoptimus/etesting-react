import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

const Welcome = React.lazy(() => import('./welcome'))
const Verify = React.lazy(() => import('./verify'))
const Personal = React.lazy(() => import('./personal'))
export default function App() {
	const [personData] = useState(sessionStorage.getItem('personal'))

	return (
		<div>
			{!personData ? (
				<React.Suspense fallback={<>Loading...</>}>
					<Routes>
						<Route path='/' element={<Welcome />} />
						<Route path='/verify' element={<Verify />} />
					</Routes>
				</React.Suspense>
			) : (
				<React.Suspense fallback={<>Loading...</>}>
					<Routes>
						<Route path='/' element={<Personal />} />
					</Routes>
				</React.Suspense>
			)}
		</div>
	)
}
