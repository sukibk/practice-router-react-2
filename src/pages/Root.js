import {Outlet, useLoaderData, useNavigation} from 'react-router-dom';
import NavItems from "../components/NavItems";
import Button from "../components/Button";

export default function RootPage(){
    const results = useLoaderData();
    const navigation = useNavigation();
    const bookmarks = [];
    for(let bookmark in results){
        for(let key in results[bookmark]){
            bookmarks.push(results[bookmark][key]);
        }

    }

    const loading = (navigation.state === 'loading...');

    return (
        <>
            <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width: '25%'}}>
                <Button type='submit' onClick={e => e.preventDefault()}>ADD NEW</Button>
                {!loading ? <NavItems items={bookmarks}/> : 'Loading...'}
            </div>
            <div style={{marginLeft: '25%'}}>
                {!loading ? <Outlet /> : 'Loading...'}
            </div>
        </>
    )
}

export async function loader(){
        const results = await fetch(`https://react-http-app-9d66f-default-rtdb.firebaseio.com/bookmarks.json`);
        return results;
}