import ContextDescription from "../components/ContextDescription";
import {Form, useLoaderData, useParams, redirect, useNavigate, useNavigation} from "react-router-dom";
import Button from "../components/Button";

export default function EditBookmark(){
    const bookmark = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate();

    const submitting = (navigation.state === 'submitting');

    return <>
    <div className="w3-container w3-teal">
        <h1>{bookmark.title}</h1>
    </div>

    {/*<img src="img_car.jpg" alt="Car" style={{width: '100%'}} />*/}

        <br/>
    <div className="w3-container">
        <Form method='PATCH' >
            <label htmlFor='title'>Title </label>
            <input type='text' name='title' id='title' defaultValue={bookmark ? bookmark.title : 'No Title'}/>
            <br/>
            <br/>
            <label htmlFor='url'>Link </label>
            <input type='url' id='url' name='url' defaultValue={bookmark ? bookmark.url : 'No Title'}></input>
            <br />
            <button style={{marginTop: '20px', width: '20%', color: 'black', marginRight: '20px', height: '40px'}}type='submit'>{!submitting ? 'Submit' : 'Submitting...'}</button>
            <button style={{marginTop: '20px', width: '20%', color: 'black', marginLeft: '20px', height: '40px'}}type='button'>Cancel</button>
        </Form>
    </div>
</>
}


    export async function loader({params}){
        const bookmarkId = params.bookmarkId;
        const results = await fetch(`https://react-http-app-9d66f-default-rtdb.firebaseio.com/bookmarks/${bookmarkId}.json`);
        return results;
    }

    export async function action({request, params}){
        const data = await request.formData();
        const dataToSend = {
            title: data.get('title'),
            url: data.get('url')
        };

        const bookmarkId = params.bookmarkId;
        const response = await fetch (`https://react-http-app-9d66f-default-rtdb.firebaseio.com/bookmarks/${bookmarkId}.json`, {
            method: 'PATCH',
            body: JSON.stringify(dataToSend)
        })
        return redirect(`../${bookmarkId}`);
    }
