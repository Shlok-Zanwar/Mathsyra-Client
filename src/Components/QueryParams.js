import React from 'react'
import useQuery from ".././Hooks/useQuery";

function QueryParams() {
    
    const query = useQuery();
    const contentName = query.get("content")
    document.title = contentName;

    

    return (
        <div>
            {contentName}
        </div>
    )
}

export default QueryParams
