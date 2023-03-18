import ErrorHandler from "../components/ErrorHandler";
import {useRouteError} from 'react-router-dom'

export default function ErrorPage(){
    const error = useRouteError();

    let title = 'An error occurred';
    let message = 'Something went wrong';

    if(error.status === 500 )
    {
        message = error.data.message;
    }


    return <>
        <ErrorHandler title = {title} description = {message}/>
    </>
}