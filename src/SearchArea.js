import React, { useState } from 'react';
import Results from './Results';
import axios from 'axios';
import video from './video';

const SearchArea = () => {
    const [keyword, setKeyword] = useState('');
    const [videos, setVideos] = useState([]);
    const orderList = ["date", "relevance", "rating"];
    const requestSearch = () => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?type=video&q=${keyword}&part=snippet&maxResults=25&key=AIzaSyDz5W77ocNocvIZbasFxkgC3mYq7jWwnBs`)
            .then((res) => {
                const { items } = res.data;
                console.log(items);
                setVideos(items);
            }).catch((err) => console.log(err));
    }
    return ( <
        div className = "search-area" >
        <
        form onSubmit = {
            (e) => {
                e.preventDefault();
                requestSearch();
            }
        } >
        <
        label htmlFor = "keyword" >
        Search <
        input type = "text"
        id = "keyword"
        value = { keyword }
        onChange = {
            (e) => setKeyword(e.target.value)
        }

        / >

        <
        /label>  

        <
        button > Submit < /button> < /
        form >
        <
        Results videos = { videos }
        />  < /
        div >


    )
}

export default SearchArea;