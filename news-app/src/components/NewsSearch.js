import axios from 'axios';
import React,{useState,useEffect} from 'react'
import NewsItems from './NewsItems';



function NewsSearch({text}) {
	const [results, setresults] = useState([]);


	// recherche
	const getSearch= async()=>{
		const resp = await axios.get(`https://newsapi.org/v2/everything?q=${text}&apiKey=cc9cb112b00a4baca5bad860723b0b80`)
		console.log(resp)
		console.log(resp.data.totalResults)
		setresults(resp.data.articles)
	}
	useEffect( () => {
        getSearch()
    }, [text])

  return (
	<div className='container mt-4' id='infoUser'>
		<div className='row'>
			<div className='col'>
			{results.map(result=>{
				return(
					<NewsItems
					title={result.title}
					description={result.description}
					url={result.url}
					urlToImage={result.urlToImage}
					author={result.author}
					publishedAt={result.publishedAt}
					/>
				)
			})}
			</div>
		</div>
	</div>
  )
}

export default NewsSearch