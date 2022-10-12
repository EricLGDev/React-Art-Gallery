const Gallery = (props) => {
    return (
        <div style={{'width': '100%'}}>
            <img style={{'maxWidth': '100vw', 'maxHeight': '80vh', 'border': '20px groove sunglow'}} src={props.objectImg} alt={props.title} />
        </div>
    )
}

export default Gallery