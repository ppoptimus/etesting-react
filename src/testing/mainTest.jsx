import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import QuestionChoice from './questionChoice'

export default function MainTesting() {
	return (
		<div className='bg-info p-4 vh-100'>
			<div className='card overflow-hidden p-3'>
				<div className='card-body' style={{ backgroundColor: '#f0f8ff' }}>
					<div className='row align-items-center'>
						<div className='col-8'>
							<p className='mb-0'>
								<small>สาขา:</small>
							</p>
							<p className='mb-0'>
								<small>หมวด:</small>
							</p>
							<p className='mb-0'>
								<small>วันที่:</small>
							</p>
						</div>
						<div className='col-4 text-center'>
							<span className='h2'>
								<FontAwesomeIcon icon={faClock} size='1x' /> เหลือเวลา 00:00:00
							</span>
						</div>
					</div>
				</div>
			</div>
			<QuestionChoice/>
		</div>
	)
}
