import { useState, useRef, useCallback } from 'react'
import Webcam from 'react-webcam'
import axios from 'axios'

export default function Verify() {
	const [step1, setStep1] = useState(true)
	const [step2, setStep2] = useState(false)
	const [step3, setStep3] = useState(false)
	const [imgSrc, setImgSrc] = useState(null)
	const webcamRef = useRef(null)
	const videoConstraints = {
		width: 720,
		height: 1280,
		facingMode: 'tester',
	}

	/** send citizenid check to server **/
	const onCheckId = () => {
		const result = CheckCitizenId()
		if (result) {
			setStep2(true)
			setStep1(false)
			console.table('step1=', step1, 'step2=', step2, 'step3=', step3)
		}
	}

	const onCapture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot()
		setImgSrc(imageSrc)
	}, [webcamRef, setImgSrc])

	const onClearImg = () => {
		setImgSrc(null)
	}

	const onConfirm = () => {
		setStep1(false)
		setStep2(false)
		setStep3(true)
		console.table('step1=', step1, 'step2=', step2, 'step3=', step3)
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
						{/* <div className='text-center py-4 mb-0 border-1 border-bottom col-4 fs-6 cursor'
						style={{backgroundColor:(step3)?'#32d6c5':'#fff', color:(step3)?'#fff':'#000'}}>
							<label className='rounded-circle bg-warning text-white py-2 px-3 m-1'>3</label>
							ยืนยันตัวตนสำเร็จ
						</div> */}
					</div>
					<div className='d-flex flex-column align-items-center justify-content-center h-100 px-5 py-4'>
						{step1 ? (
							<>
								<label className='mb-3'>กรุณาใส่เลขบัตรประจำตัวประชาชน</label>
								<input className='form-control w-50 mb-3 text-center' maxLength={13}></input>

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
											ถ่ายรูป
										</button>
									) : (
										<button className='btn btn-secondary shadow fs-6 px-4 m-2' onClick={onClearImg}>
											ถ่ายอีกครั้ง
										</button>
									)}
									<button className='btn btn-success shadow fs-6 px-4' onClick={onConfirm}>
										ยืนยัน
									</button>
								</div>
							</div>
						)}
					</div>
					<div className='container'>
						<div className='row'></div>
					</div>
				</div>
			</div>
		</>
	)
}
const CheckCitizenId = async () => {
	try {
		const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
		return resp
	} catch (err) {
		return err
	}
}
