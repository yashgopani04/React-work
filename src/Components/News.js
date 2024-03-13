import React, { useEffect, useState } from 'react'

import Newspart from './Newspart';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticales] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async () => {
    props.setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=253068a5c7ad464f834ea9f19f11a2b2&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticales(parsedData.articles)
    setTotalResults(parsedData.totalResults)

    setLoading(false)

    props.setProgress(100);


  }

  useEffect(() => {
    document.title = `${props.category} - RemoteNews`;
    updateNews(); // eslint-disable-next-line
  }, []);


  async function fetchMoreData() {

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=253068a5c7ad464f834ea9f19f11a2b2&page=1 & pageSize = ${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticales(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

  }

  const heading = {
    textAlign: 'center',
    margin: '35px 0',
    marginTop: '90px',
    fontFamily: "Times New Roman Times, serif",
    color: '#333', /* Dark gray text color */
    textTransform: 'capitalize', /* Capitalize category */
  };
    
  return (
    <>
      <div className="container">
        s<h1 className='text-center' style={heading}>Remote News Top {props.category} Headlines </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className='container'>
            <div className='row'>
              {articles.map((element) => {
                return <div className='col-md-4' key={element.url}>

                  <Newspart title={element.title ? element.title : ''} description={element.description ? element.description : ''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}

            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default News
