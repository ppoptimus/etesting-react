import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css'

const Welcome = React.lazy(() => import('./welcome'))
const Verify = React.lazy(() => import('./verify'))
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<React.Suspense fallback={<>Loading...</>}>
							<Welcome />
						</React.Suspense>
					}></Route>
				<Route
					path='/verify'
					element={
						<React.Suspense fallback={<>Loading...</>}>
							<Verify />
						</React.Suspense>
					}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
)
