import {NavLink} from "react-router-dom";

export default function NavItems({items}){

    return <>
        <br/>
        <br/>

        {items.map(el => <NavLink style={{textAlign: 'center'}}key={el.key} className="w3-bar-item w3-button"
                                           to={`/${el.key}`}>{el.title}</NavLink>)}
</>
}