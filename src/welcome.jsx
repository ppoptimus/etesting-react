import { Link } from 'react-router-dom'

export default function Welcome() {
	return (
		<div style={{ backgroundColor: '#f0ffff' }}>
			<style jsx='true'>
				{`
					.bg {
						background: #0cebeb; /* fallback for old browsers */
						background: -webkit-linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb); /* Chrome 10-25, Safari 5.1-6 */
						background: linear-gradient(151deg, #349fdc 28.87%, #99f4c0 124.18%);
					}
				`}
			</style>
			<div className='d-flex align-items-center justify-content-center min-vh-100'>
				<div className='card shadow bg' style={{ height: '35rem', width: '50rem' }}>
					<div className='d-flex flex-column align-items-center justify-content-center h-100 px-5'>
						<img src='img/logo.png' className='img img-fluid' width={140}></img>
						<p className='h1 my-4 mx-5 fw-bold text-center'>ระบบการทดสอบมาตรฐานฝีมือแรงงานแห่งชาติ (ภาคความรู้)</p>
						<Link to='verify'>
							<button className='btn btn-light shadow fs-4 fw-bold px-4' style={{ color: '#bdb76b' }}>
								ยืนยันตัวตน
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
