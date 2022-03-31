import { useState, useEffect } from 'react'
import { course_name, topic_name, left_time, question } from '../config/testQuestionChoice.json'

export default function QuestionChoice() {
	const [getQuestion] = useState(question)
	const [questionName, setQuestionName] = useState('')
	const [answerObj, setAnswerObj] = useState([])
	
	useEffect(() => {
		setQuestionName(`${getQuestion.question_no}.${getQuestion.question_name}`)
		setAnswerObj(getQuestion.choices.filter(
			(ele, ind) =>
				ind === getQuestion.choices.findIndex((elem) => elem.choice_no === ele.choice_no),
		))
	}, [])

	const onAnswer = () => {
 
   }

   const onTest = () => {
      console.log(answerObj)
   }
	return (
		<>
      <style jsx='true'>
         {
            ` 
            .cards:hover {
               box-shadow: 3px 4px 4px 1px #ffce67;
               transform: scale(1.05)
             }
            `
         }
      </style>
			<div className='mt-3 bg-light p-4 rounded-3 h-auto'>
				<div className='row'>
					<div className='col-8'>
						<p>ข้อ 1/6</p>
						<span className='fs-4' dangerouslySetInnerHTML={{ __html: questionName }}></span>
						<div className='container'>
							<div className='row row-cols-2'>
								{answerObj
									? answerObj
											.sort((a, b) => (a.choice_no > b.choice_no ? 1 : -1))
											.map((i) => (
												<div className='col mt-3'>
													<div className='card cards' style={{ cursor: 'pointer' }} onClick={onAnswer}>
														<div className='card-body' key={i.test_choice_id}>
															{i.choice_no}. {i.choice_name}
														</div>
													</div>
												</div>
											))
									: ''}
							</div>
						</div>
					</div>
					<div className='col-4 p-2 border border-gray border-2 rounded-3'>
						<div className='d-flex justify-content-around'>
							<div className='form-check'>
								<input className='form-check-input' type='checkbox' defaultValue id='flexCheckDefault' />
								<label className='form-check-label' htmlFor='flexCheckDefault'>
									1
								</label>
							</div>
							<div className='form-check'>
								<input className='form-check-input' type='checkbox' defaultValue id='flexCheckDefault' />
								<label className='form-check-label' htmlFor='flexCheckDefault'>
									2
								</label>
							</div>
							<div className='form-check'>
								<input className='form-check-input' type='checkbox' defaultValue id='flexCheckDefault' />
								<label className='form-check-label' htmlFor='flexCheckDefault'>
									3
								</label>
							</div>
							<div className='form-check'>
								<input className='form-check-input' type='checkbox' defaultValue id='flexCheckDefault' />
								<label className='form-check-label' htmlFor='flexCheckDefault'>
									4
								</label>
							</div>
							<div className='form-check'>
								<input className='form-check-input' type='checkbox' defaultValue id='flexCheckDefault' />
								<label className='form-check-label' htmlFor='flexCheckDefault'>
									5
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
         <button onClick={onTest}>Test</button>
		</>
	)
}
