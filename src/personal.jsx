import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default function Personal() {
	const [personData] = useState(JSON.parse(sessionStorage.getItem('personal')))
	useEffect(() => {}, [])
	const test = () => {
		console.log(personData.imageSrc)
	}
	return (
		<div className='d-flex justify-content-center align-items-center vh-100 bg-info'>
			<div className='container vw-100 bg-transparent'>
				<div className='row justify-content-between p-0'>
					<div className='col p-0'>
						<div className='card mb-3 me-3 justify-content-center p-4' style={{ height: '17rem' }}>
							<div className='row'>
								<div className='col-5'>
									<img className='img rounded-circle' width={170} src={personData.imageSrc} />
								</div>
								<div className='col-6 align-self-center ml-2'>
									<div className='card-body'>
										<p className='card-text'>Rathapong Pumpo</p>
										<p className='card-text'>สถานที่สอบ</p>
										<p className='card-text'>วันที่ 23 ก.พ. 2565</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col p-0'>
						<div className='card mb-3 ml-3 justify-content-center' style={{ height: '17rem' }}>
							<div className='row'>
								<div className='col text-center px-5'>
									<div className='card-body'>
										<span className='card-title h5'>สาขาการสอบครั้งนี้ คือ</span>
										<span className='card-text h6'>ช่างไฟฟ้าภายในนอกอาคาร</span>
										<span className='card-text h6'>ระดับ 1</span>
										<span className='card-text h6'>จำนวนข้อสอบ 5 ข้อ | เวลาทำข้อสอบ 15 นาที</span>
										<button className='btn btn-lg btn-primary mt-2'>เริ่มทำข้อสอบ</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='card justify-content-center align-items-center' style={{ height: '17rem' }}>
						<div className='justify-content-center text-center'>
							<p><FontAwesomeIcon icon={faPlayCircle} size='5x' /></p>
							<span className='card-title h5'>กดเพื่อดูวิดีโอการใช้งานแบบทดสอบออนไลน์</span>
						</div>
					</div>
				</div>
			</div>

			
		</div>
	)
}
