import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import CardMoviesComponents from '../../Components/CardMovies/CardMovie';
import PaginationComponent from '../../Components/Pagination/pagination'

const Home = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1)
  const [paginationno, setPaginationno] = useState(0);
  const API_KEY = '109a8b5e0bd4a193106df8e20b538748';

  const GetDataTrending = async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`);
    setContent(data.results);
    setPaginationno(data.total_pages);
    console.log('data', data);
};

useEffect(()=>{
  
  GetDataTrending();
  
}, [])

const handleClick = (number)=>{
  setPageno(number);
}

useEffect(()=>{
 
  GetDataTrending();

}, [pageno])

  return (
    <main className='homePage'>
      <Container>
        <Row>
          <Col className='col-12'>
            <section>
              <h2 className='txtCenter'>Top Trending Movies</h2>
            </section>
      
          </Col>

          {
            content && content.length > 0 ? content.map((item, index)=>{
              return (<CardMoviesComponents key={index} data={item} />)
              }) : 'Loading ....'
          }

          {
            paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
        }

        </Row>
      </Container>
    </main>
  )
}

export default Home