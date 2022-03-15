export default function Welcome() {
	return (
		<div style={{ backgroundColor: '#f0ffff' }}>
			<style jsx='true'>
				{`
					.bg {
						background: #0cebeb; /* fallback for old browsers */
						background: -webkit-linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb); /* Chrome 10-25, Safari 5.1-6 */
						background: linear-gradient(
							to right,
							#29ffc6,
							#20e3b2,
							#0cebeb
						); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
					}
				`}
			</style>
			<div className='d-flex align-items-center justify-content-center min-vh-100'>
				<div className='card shadow bg' style={{ height: '35rem', width: '50rem' }}>
					<div className='d-flex flex-column align-items-start justify-content-center h-100 px-5'>
						<p className='h1 my-4'>ระบบการทดสอบมาตรฐานฝีมือแรงงานแห่งชาติ (ภาคความรู้) กรมพัฒนาฝีมือแรงงาน</p>
						<button className='btn btn-light shadow fs-4 fw-bold px-4'>ยืนยันตัวตน</button>
					</div>
				</div>
			</div>
		</div>
	)
}
