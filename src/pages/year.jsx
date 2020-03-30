import React, {useEffect, useState} from "react";
import VideoFrame from "../components/VideoFrame";

const Year = ({location}) =>{
    console.log(location.state)
    const [objects, setObjects] = useState([])
    useEffect(() => {
        fetch(`https://rv673fuek6.execute-api.eu-west-2.amazonaws.com/Dev/?bucket=agastya-encoded&folder=${location.state.folder}`)
            .then(response => response.json())
            .then(resultData => {
                console.log(resultData);
                setObjects(resultData.Contents)
            }) // set data for the number of stars
    }, []);

    console.log(objects);


    return (
        <div>
            <ul>
                {objects.map((object,i) => {
                    if (object === typeof 'undefined') {
                        return null;
                    }
                    return (
                        <li key={object}>
                            <VideoFrame url={`https://d27s0pq0m2kt4k.cloudfront.net/${object.Key}`} title={object.Key} key={i}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    )

};

export default Year;
