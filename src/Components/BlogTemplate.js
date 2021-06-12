import React from 'react'
import MCQuestion from '../BlogTemplates/MCQuestion'

function BlogTemplate() {
    const myQuestion = {
        question: "What is y name ?",
        options: ["Shlok", "Rohan", "Aiman", "Aditya"],
        correct: "Shlok"
    }

    return (
        <div className="blog-outer-div">
            <div className="blog-title">
                Title
            </div>
            <div className="blog-subheading">
                Title
            </div>
            <div className="blog-para">
                Title
            </div>
            <div className="blog-title">
                Title
            </div>
            {/* <div className="blog-template"> */}
                {/* shglok <br /> */}
                {/* shglok <br /> */}
                {/* shglok <br /><br /><br /><br /><br /> */}
                
                <MCQuestion question={myQuestion} />
            {/* </div> */}
        </div>
    )
}

export default BlogTemplate
