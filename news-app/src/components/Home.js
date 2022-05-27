import React,{useState} from 'react'
import NewsList from './NewsList'
import { Link, useNavigate} from 'react-router-dom'
import logo from '../img/All_News-logo-62939EED68-seeklogo.com.png'
import NewsSearch from './NewsSearch'




function Home() {
	const navigate = useNavigate();

	const [text, settext] = useState('');
	const [flag, setflag] = useState(false);

	

	const checkInput=e=>{
		settext(e.currentTarget.value)
	}

	const handleSearch =()=>{
		setflag(true)
	}

	console.log(text)
	

  return (
	<div className='container-fluid '>
		<div className='col-md-12 text-center mt-3 mb-3'>
			<img src={logo} alt="" />
		</div>
		<header className='sticky-top' >
		
		<div className='row p-3' style={{backgroundColor:'#fff'}}>
			<div className='col-md-4'>
				{/* <h3 style={{color:'#fff'}}> News APP </h3> */}
			</div>
			<div className='col-md-4'>
				<div className='row'>
					<input 
						type="text" 
						class="form-control mb-2 " 
						placeholder="Search" 
						name='text'
						onChange={checkInput}
						/>
				</div>
				<div className='row-md d-flex justify-content-center'>
					<button 
						className='btn btn-danger ' 
						type='submit'
						onClick={handleSearch}
						style={{backgroundColor:'rgb(249,168,38)'}}
						> 
							Search
					</button>
				</div>
			</div>
		</div>
		</header> 
		<main>
			{flag && <NewsSearch text={text}/>}
			{/* <NewsSearch/> */}
			<NewsList/>
		</main>
	</div>
  )
}

export default Home