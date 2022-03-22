import { useState, useEffect } from 'react'

export default function Personal() {
	const [personImage, setPersonImage] = useState('')
	useEffect(() => {
    
	}, [])
	return (
		<div className='d-flex-column border-2 border-dark'>
			<div className='row justify-content-around'>
				<div className='col-5 bg-danger'>
					<div className='card'>
						<div className='row g-0'>
							<div className='col-md-4'>
								<img src={''} className='img-fluid rounded-start' alt='...' />
							</div>
							<div className='col-md-8'>
								<div className='card-body'>
									<h5 className='card-title'>Card title</h5>
									<p className='card-text'>
										This is a wider card with supporting text below as a natural lead-in to additional
										content. This content is a little bit longer.
									</p>
									<p className='card-text'>
										<small className='text-muted'>Last updated 3 mins ago</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-5 bg-dark'>2</div>
			</div>
			<div className='row justify-content-around bg-dark'>3</div>
		</div>
	)
}
