import React, { Component, Fragment } from "react";
import Post from "../../component/PostComponent/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
    state = {
        post : []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then ((res)=>{
            // console.log(res.data);
            this.setState({
                post: res.data
            })
        })      

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     console.log(json);
        //     this.setState({
        //         post: json
        //     });
        // })
    }

    render(){
        return (
            <Fragment>
            <p className="section-title">Blog Post</p>
            {
                this.state.post.map(post => {
                    return <Post key={post.id} title={post.title} desc={post.body} /> 
                })
            }
            </Fragment>
        )
    }
}

export default BlogPost;
