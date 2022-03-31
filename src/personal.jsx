import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import json from './config/testJson.json'

export default function Personal() {
	const [personData] = useState(JSON.parse(localStorage.getItem('personal')))
	const [info] = useState(json)
	
	const navigate = useNavigate()
	useEffect(() => {

	}, [])


	const onStartTesting = () => {
		navigate('/testing')
	}

	const testingDate = () => {
		const date = new Date(info.test.from_date)
		return date
	}

	const onTest = () => {
		console.log(testingDate('dd MMM yyyy'))
	}
	return (
		<div className='d-flex justify-content-center align-items-center vh-100 bg-info'>
			<div className='container vw-100 bg-transparent'>
				<div className='row justify-content-between p-0'>
					<div className='col p-0'>
						<div className='card mb-3 me-3 justify-content-center p-4' style={{ height: '17rem' }}>
							<div className='row'>
								<div className='col-5 text-center'>
									<img className='img img-fluid rounded-circle' width={170} src={personData.imageSrc} />
								</div>
								<div className='col-6 align-self-center ml-2'>
									<div className='card-body'>
										<p className='card-text'>{`${info.candidate.candidate_name} ${info.candidate.citizen_id}`}</p>
										<p className='card-text'>สถานที่สอบ{` ${info.test.location_name}`}</p>
										<p className='card-text'>วันที่ {` ${info.test.from_date}`}</p>
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
										<p className='card-title h5'>สาขาการสอบครั้งนี้ คือ</p>
										<p className='card-text h6'>{` ${info.test.course_name}`}</p>
										<p className='card-text h6'>ระดับ {` ${info.test.level} `}</p>
										<p className='card-text h6'>จำนวนข้อสอบ {`${info.course.no_of_topics}`} ข้อ | เวลาทำข้อสอบ {`${info.course.test_time}`} นาที</p>
										<p>
											<button className='btn btn-lg btn-primary mt-4 shadow' onClick={onStartTesting}>เริ่มทำข้อสอบ</button>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='card justify-content-center align-items-center' style={{ height: '17rem' }}>
						<div className='justify-content-center text-center'>
							<p>
								<FontAwesomeIcon icon={faPlayCircle} size='5x' onClick={onTest} />
							</p>
							<span className='card-title h5'>กดเพื่อดูวิดีโอการใช้งานแบบทดสอบออนไลน์</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
