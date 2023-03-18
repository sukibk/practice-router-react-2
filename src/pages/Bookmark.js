import {Form, Await, defer, NavLink, redirect, useLoaderData, json} from 'react-router-dom';
import ContextDescription from "../components/ContextDescription";
import {Suspense} from "react";
import Bookmark from "../components/Bookmark";

export default function BookmarkPage(){
    const {bookmark} = useLoaderData();

    return(
    <>
        <Suspense fallback={<p style={{all: 'unset'}}>Loading...</p>}>
            <Await resolve={bookmark}>
                {bookmarkData => {console.log(bookmark);
                    return <Bookmark results={bookmarkData} />}}
            </Await>
        </Suspense>
    </>
    )
}

async function loadBookmark(id){
    const results = await fetch(`https://react-http-app-9d66f-default-rtdb.firebaseio.com/bookmarks/${id}.json`);

    if(!results.ok)
    {
        throw json({message: 'Could not fetch details for selected event.'},
            {status: 500})
    }
    else{
    const data = await results.json();
    console.log(data)
    return data;}
}

export async function action({request, params}){
    const data = await request.formData();
    const bookmarkId = params.bookmarkId;
    const response1 = await fetch (`https://react-http-app-9d66f-default-rtdb.firebaseio.com/bookmarks/${bookmarkId}.json`, {
        method: request.method
    })
    return redirect('..')
}

export async function loader({params}){
    const id = params.bookmarkId;
    return defer({
        bookmark: loadBookmark(id)
    })
}