import {Form, NavLink} from 'react-router-dom';

export default function Bookmark(props){
    const results = props.results;
    const bookmarks = [];

    for(let bookmark in results){
        bookmarks.push(results[bookmark])
    }

    const submissionHandler = (event) => {
        if (
            !window.confirm(
                "Please confirm you want to delete this record."
            )
        ) {
            event.preventDefault();
        }
    }

    return(
        <>
            <div className="w3-container w3-teal">
                <h1>{results ? bookmarks[0].title : 'Invalid Bookmark'}</h1>
            </div>

            <div className="w3-container">
                {results && (<>
                    <h2><a href={bookmarks[0].url} target='_blank'>Visit WebPage</a></h2>
                    <NavLink to='edit'>Edit</NavLink> <br/>
                    <Form method='DELETE' onSubmit={submissionHandler}>
                        <button to='' type='submit'>Delete</button>
                    </Form> </>)}
            </div>

        </>
    )
}
