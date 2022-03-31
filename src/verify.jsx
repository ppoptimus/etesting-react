import { useState, useRef, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'
import Swal from 'sweetalert2'
import Config from './config/endpoint.json'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

export default function Verify() {
	const [step1, setStep1] = useState(true)
	const [step2, setStep2] = useState(false)
	const [citizenId, setCitizenId] = useState(null)
	const [personal, setPersonal] = useState(null)
	const [imgSrc, setImgSrc] = useState(null)
	const webcamRef = useRef(null)
	const videoConstraints = {
		width: 720,
		height: 1280,
		facingMode: 'tester',
	}
	const navigate = useNavigate()

	useEffect(() => {}, [])

	const onCitizenChange = (e) => {
		setCitizenId(e.target.value)
	}

	/** send citizenid check to server **/
	const onCheckId = () => {
		const config = {
			method: 'get',
			url: `${Config.config_endpoint.candidates_validate}${citizenId}`,
			headers: {
				'Content-Type': 'application/json',
			},
		}
		axios(config)
			.then(function (res) {
				if (res.status == 200) {
					Swal.fire({
						title: 'ยืนยันตัวตนสำเร็จ',
						text: 'เข้าสู่ขั้นตอนถ่ายรูป',
						icon: 'info',
						confirmButtonColor: '#49ad85',
					}).then((result) => {
						if (result.isConfirmed) {
							setStep2(true)
							setStep1(false)
							setPersonal(res.data)
						}
					})
				}else if(res.status == 204) {
					Toast.fire({
						icon: 'warning',
						title: 'ไม่มีข้อมูลในระบบ',
					})
				}
				 else {
					Toast.fire({
						icon: 'error',
						title: 'ยืนยันตัวตนไม่สำเร็จ',
					})
				}
			})
			.catch(function (err) {
				Toast.fire({
					icon: 'error',
					title: err,
					timer: 5000,
				})
				console.log('result verify citizen = ', err)
			})
	}

	/** capture from camera set into useState imageSrc **/
	const onCapture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot()
		setImgSrc(imageSrc)
		Toast.fire({
			icon: 'success',
			title: 'ถ่ายรูปสำเร็จ',
		})
		let updatedValue = {}
		updatedValue = { imageSrc: imageSrc }
		setPersonal((personal) => ({
			...personal,
			...updatedValue,
		}))
	}, [webcamRef, setImgSrc])

	/** capture again **/
	const onClearImg = () => {
		setImgSrc(null)
	}

	const onConfirm = () => {
		Swal.fire({
			icon: 'success',
			title: '',
			text: 'อัพโหลดรูปสำเร็จ',
			confirmButtonColor: '#119516',
			confirmButtonText: 'ตกลง',
		}).then(() => {
			localStorage.setItem('personal', JSON.stringify(personal))
			navigate('/')
			window.location.reload(false)
		})
	}

	const onTest = () => {
		const personalData = localStorage.getItem('personal')
		console.log(personalData)
	}

	return (
		<>
			<div className='d-flex align-items-center justify-content-center min-vh-100'>
				<div className='card shadow bg overflow-hidden' style={{ height: '33rem', width: '50rem' }}>
					<div className='row'>
						<div
							className='text-center py-4 mb-0 border-1 border-bottom col-6 fs-6 cursor'
							style={{ backgroundColor: step1 ? '#32d6c5' : '#fff', color: step1 ? '#fff' : '#000' }}>
							<label className='rounded-circle bg-warning text-white py-2 px-3 m-2'>1</label>
							กรอกเลขบัตรประชาชน
						</div>
						<div
							className='text-center py-4 mb-0 border-1 border-bottom col-6 fs-6 cursor'
							style={{ backgroundColor: step2 ? '#32d6c5' : '#fff', color: step2 ? '#fff' : '#000' }}>
							<label className='rounded-circle bg-warning text-white py-2 px-3 m-2'>2</label>
							ถ่ายรูป
						</div>
					</div>
					<div className='d-flex flex-column align-items-center justify-content-center h-100 px-5 py-4'>
						{step1 ? (
							<>
								<label className='mb-3'>กรุณาใส่เลขบัตรประจำตัวประชาชน</label>
								<input
									className='form-control w-50 mb-3 text-center'
									maxLength={13}
									onChange={(e) => onCitizenChange(e)}></input>

								<button className='btn btn-primary shadow fs-6 px-4' onClick={onCheckId}>
									ถัดไป
								</button>
							</>
						) : (
							<div className='container text-center'>
								{!imgSrc ? (
									<Webcam
										ref={webcamRef}
										mirrored={true}
										audio={false}
										height={300}
										screenshotFormat='image/jpeg'
										videoConstraints={videoConstraints}
									/>
								) : (
									<>
										<img src={imgSrc}></img>
									</>
								)}

								<div className='flex-row mt-3'>
									{!imgSrc ? (
										<button className='btn btn-info shadow fs-6 px-4 m-2' onClick={onCapture}>
											<FontAwesomeIcon icon={faCameraRetro} /> ถ่ายรูป
										</button>
									) : (
										<button className='btn btn-secondary shadow fs-6 px-4 m-2' onClick={onClearImg}>
											ถ่ายอีกครั้ง
										</button>
									)}
									<button
										className={`btn btn-success shadow fs-6 px-4 ${imgSrc ? 'enabled' : 'disabled'}`}
										onClick={onConfirm}>
										ยืนยัน
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
				
			</div>
		</>
	)
}

const Toast = Swal.mixin({
	toast: true,
	position: 'top',
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	},
})
