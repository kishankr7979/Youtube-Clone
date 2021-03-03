import axios from 'axios';
import React from 'react';

import FormatNumber from './FormatNumber';
import ErrorBoundary from './ErrorBoundary';

class WatchArea extends React.Component {
    constructor() {
            super();
            this.state = { loading: true };
        }
        // Best Place to write API (in componentDidMount)
    componentDidMount() {

        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,status,player&key=AIzaSyDz5W77ocNocvIZbasFxkgC3mYq7jWwnBs&id=${this.props.id}`)
            .then((res) => {
                const item = res.data.items[0];
                this.setState({
                    title: item.snippet.title,
                    views: item.statistics.viewCount,
                    description: item.snippet.description,
                    channel: item.snippet.channelTitle,
                    like: item.statistics.likeCount,
                    url: item.id,
                    loading: false
                })
            })
            .catch((res) => {
                console.log(err);
            })
    }
    render() {
        if (this.state.loading) {
            return <h1 className = "loader" > loading... < /h1>;
        }
        const { title, views, description, channel, like, url } = this.state;
        return ( <
            div className = "watch-area" >
            <
            div className = "player" >
            <
            iframe src = { `//www.youtube.com/embed/${url}` }
            width = "1050"
            height = "450"
            frameBorder = "0"
            allow = "autoplay encrypted-media"
            title = { title } > < /iframe> < /
            div > <
            h1 > { title } < /h1>  <
            div className = "video-stats" >
            <
            div className = "" > < FormatNumber number = { views }
            />
            Views < /div> <
            div className = "" > < FormatNumber number = { like }
            />
            Likes < /div> < /
            div > <
            div className = "channel-name" > { channel }
            Channel < /div> <
            p > { description } < /p> < /
            div >

        )
    }
}

export default function WatchAreaWithErrorBoundary(props) {
    return ( <
        ErrorBoundary >
        <
        WatchArea {...props }
        /> < /
        ErrorBoundary >
    )
}