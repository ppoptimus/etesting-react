import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

const Welcome = React.lazy(() => import('./welcome'))
const Verify = React.lazy(() => import('./verify'))
const Personal = React.lazy(() => import('./personal'))
const MainTesting = React.lazy(() => import('./testing/mainTest'))
export default function App() {
	const [personData] = useState(localStorage.getItem('personal'))

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
						<Route path='/verify' element={<Personal />} />
						<Route path='/testing' element={<MainTesting />} />
					</Routes>
				</React.Suspense>
			)}
		</div>
	)
}
