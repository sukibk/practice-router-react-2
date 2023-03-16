import {NavLink, useLoaderData} from 'react-router-dom';
import ContextDescription from "../components/ContextDescription";

export default function BookmarkPage(){
    const bookmark = useLoaderData();
    return(
    <>
        <div className="w3-container w3-teal">
            <h1>{bookmark ? bookmark.title : 'No Title'}</h1>
        </div>

        {/*<img src="img_car.jpg" alt="Car" style={{width: '100%'}} />*/}

        <div className="w3-container">
            <h2><a href={`${bookmark ? bookmark.url : ''}`} target='_blank'>Visit WebPage</a></h2>
            <NavLink to='edit'>Edit</NavLink> <br/>
            <NavLink to=''>Delete</NavLink>
        </div>

    </>
    )
}

export async function loader({params}){
    const bookmarkId = params.bookmarkId;
    const results = await fetch(`https://react-http-app-9d66f-default-rtdb.firebaseio.com/bookmarks/${bookmarkId}.json`);
    return results;
}