import ContextDescription from "../components/ContextDescription";
import {Form, json, useLoaderData, useParams, redirect, useNavigate, useNavigation} from "react-router-dom";
import Button from "../components/Button";

export default function EditBookmark(){
    const results = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();
    const bookmarks = [];
    for(let bookmark in results){
        bookmarks.push(results[bookmark])
    }


    const submitting = (navigation.state === 'submitting');

    return <>
    <div className="w3-container w3-teal">
        <h1>{results ? bookmarks[0].title : ''}</h1>
    </div>

    {/*<img src="img_car.jpg" alt="Car" style={{width: '100%'}} />*/}

        <br/>
    <div className="w3-container">
        <Form method='PATCH' >
            <label htmlFor='title'>Title </label>
            <input type='text' name='title' id='title' defaultValue={results ? bookmarks[0].title : 'No Title'}/>
            <br/>
            <br/>
            <label htmlFor='url'>Link </label>
            <input type='url' id='url' name='url' defaultValue={results ? bookmarks[0].url : 'No Title'} />
            <br />
            <button style={{marginTop: '20px', width: '20%', color: 'black', marginRight: '20px', height: '40px'}}type='submit'>{!submitting ? 'Submit' : 'Submitting...'}</button>
            <button style={{marginTop: '20px', width: '20%', color: 'black', marginLeft: '20px', height: '40px'}}type='button' onClick={() => navigate(-1)}>Cancel</button>
        </Form>
    </div>
</>
}


    export async function loader({params}){
        const bookmarkId = params.bookmarkId;
        const results = await fetch(`https://react-http-app-9d66f-default-rtdb.firebaseio.com/bookmarks/${bookmarkId}.json`);
        if(false){
            throw json({message: 'No data for this bookmark'}, {status: 500})
        }
        return results;
    }

    export async function action({request, params}){
        const data = await request.formData();
        const dataToSend = {
            key: params.bookmarkId,
            title: data.get('title'),
            url: data.get('url')
        };

        const bookmarkId = params.bookmarkId;

        const response1 = await fetch (`https://react-http-app-9d66f-default-rtdb.firebaseio.com/bookmarks/${bookmarkId}.json`, {
            method: 'DELETE'
        })

        const response2 = await fetch (`https://react-http-app-9d66f-default-rtdb.firebaseio.com/bookmarks/${bookmarkId}.json`, {

            method: 'POST',
            body: JSON.stringify(dataToSend)
        })
        return redirect(`../${bookmarkId}`);
    }
