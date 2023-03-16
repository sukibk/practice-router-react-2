import ContextDescription from "./ContextDescription";

export default function PageContext({title, description}){
    return <>
        <div className="w3-container w3-teal">
            <h1>{title}</h1>
        </div>

        {/*<img src="img_car.jpg" alt="Car" style={{width: '100%'}} />*/}

            <div className="w3-container">
                <h2>{description}</h2>
                <ContextDescription lines={['Here you can save bookmarks for your favorite websites', 'To make a new bookmark press "ADD NEW" button']}/>
            </div>
    </>

}