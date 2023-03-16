export default function ContextDescription(props){
    return <>
        {props.lines.map(line=><p>{line}</p>)}
    </>

}