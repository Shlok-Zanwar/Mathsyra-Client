import React from 'react'
import { useState } from 'react';
import BlogButton from './BlogButton'
import BlogImage from './BlogImage'
import BlogList from './BlogList'
import BlogPara from './BlogPara'
import BlogSubheading from './BlogSubheading'
import BlogTitle from './BlogTitle'
import { SemipolarLoading } from 'react-loadingg';
import MCQuestion from './MCQuestion'

export default function TestingBlog() {
    const [blogData, setBlogData] = useState(require("./TempBlog.json"));
    // const query = useQuery();
    // const contentName = query.get("content")
    // document.title = contentName;
    // const history = useHistory();
    // const {enqueueSnackbar} = useSnackbar();


    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     axios.get(window.location.pathname, {
    //         params: {
    //             contentUrl: contentName
    //         }
    //     })
    //         .then(res => {
    //             // console.log(res.data);
    //             setBlogData(JSON.parse(res.data.blogDetail))
    //             document.title = "Blogs | " + JSON.parse(res.data.blogDetail)[0].text + " | Shlok Zanwar";
    //             window.scrollTo(0, 0);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             if(err.response.status === 401){
    //                 window.location.href = "/login"
    //             }
    //             else{
    //                 enqueueSnackbar("Blog not found", {
    //                     variant: 'error',
    //                     anchorOrigin:{
    //                         vertical:"top",
    //                         horizontal:"center"
    //                     }
    //                 })
    //                 history.push("/")
    //             }
    //         })

        
    // }, [])
    
    // if(blogData.length > 0){
    //     document.title = "Blogs | " + blogData[0].text + " | Shlok Zanwar";
    // }

    const getRandomNumber = () =>{
        return Math.floor(Math.random() * 100000);
    }

    const blog = blogData.map(index => {
        if(index.type === "title"){
            return <BlogTitle details={index} key={getRandomNumber()} />
        }
        else if(index.type === "paragraph"){
            return <BlogPara details={index} key={getRandomNumber()} />
        }
        else if(index.type === "subheading"){
            return <BlogSubheading details={index} key={getRandomNumber()} />
        }
        else if(index.type === "button"){
            return <BlogButton details={index} key={getRandomNumber()} />
        }
        else if(index.type === "list"){
            return <BlogList details={index} key={getRandomNumber()} />
        }
        else if(index.type === "image"){
            return <BlogImage details={index} key={getRandomNumber()} />
        }
        else if(index.type === "mcq"){
            return <MCQuestion question={index} key={getRandomNumber()} />
        }
        
        else{
            return <div className="blog-para"> ------ Could not render ------ </div>
        }
    })

    return (
        <div className="blog-outer-div">
            {blogData.length === 0 ? <SemipolarLoading   size="large" color="rgb(251, 255, 3)" /> : blog}
        </div>
    )
}
