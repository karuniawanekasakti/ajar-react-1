import React, { Component, Fragment } from "react";
import Post from "../../component/PostComponent/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
    state = {
        post : [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then ((res)=>{
            // console.log(res.data);
            this.setState({
                post: res.data
            })
        })      
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
        .then((res)=>{
            console.log(res);
            this.getPostAPI();
        }, (err) => {
            console.log('error:',err);
        })
    }

    handleRemove = (data) => {
        // console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) =>{
            this.getPostAPI();
        })
    }

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        formBlogPostNew['id'] = timeStamp;
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        this.postDataToAPI();
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render(){
        return (
            <Fragment>
            <div className="wrapper">
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <p className="section-title">Add Content</p>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange}/>
                    <label htmlFor="body">Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add content" onChange={this.handleFormChange}/>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
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
