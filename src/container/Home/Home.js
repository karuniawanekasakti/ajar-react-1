import React, { Component } from "react";
// import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
import BlogPost from "../BlogPost/BlogPost";
// import Product from "../Product/Product";

class Home extends Component {
    render(){
        return (
            <div>
                {/* <YoutubeComponent time="7.12" title="Title 1" desc="desc 1"/>
                <YoutubeComponent time="3.21" title="Title 2" desc="desc 2"/>
                <YoutubeComponent time="2.12" title="Title 3" desc="desc 3"/>
                <YoutubeComponent time="1.53" title="Title 4" desc="desc 4"/>
                <YoutubeComponent/> */}
                {/* <p>Counter</p>
                <hr/>
                <Product/> */}
                <p>Blog Post</p>
                <hr/>
                <BlogPost/>
            </div>
            
        )
    }
}

export default Home;