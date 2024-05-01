export default function Spacer({height, horizontal}: {height?: number, horizontal?: boolean})
{
    return (horizontal ?? false) == false ? 
    <div style={{height: height ?? 8}}/> : 
    <div style={{width: height ?? 8}}/>
}