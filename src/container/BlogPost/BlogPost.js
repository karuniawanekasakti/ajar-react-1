import React, { Component, Fragment } from "react";
import Post from "../../component/PostComponent/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
    state = {
        post : []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then ((res)=>{
            // console.log(res.data);
            this.setState({
                post: res.data
            })
        })      
    }

    handleRemove = (data) => {
        // console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) =>{
            this.getPostAPI();
        })
    }

    componentDidMount(){
        this.getPostAPI();

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
            <div className="wrapper">
                <p className="section-title">Blog Post</p>
                <div className="">

                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/> 
                    })
                }
            </div>
            </Fragment>
        )
    }
}

export default BlogPost;
