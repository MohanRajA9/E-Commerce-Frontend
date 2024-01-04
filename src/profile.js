export function Profile ({Image , Name}) {
    const imgStyle = {
        height : "300px",
        width : "300px"
    }
    return (
        <div>
            <img style={imgStyle} src={Image}/>
            <h1> {Name} </h1>
        </div>
    );
}