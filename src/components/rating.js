import '../components/rating.css'


function Rating(props) {
    if(props.variable === 3) {
        return (
            <div className="rating-flex">
                <Star check={true}/>
                <Star check={true}/>
                <Star check={true}/>
                {/* <Star check={props.variable}/>      //Для передачи пропса вниз
                <Star check={props.variable}/>
                <Star check={props.variable}/> */}
                <Star check={false}/>
                <Star check={false}/>
            </div>
        )
    } 

    if(props.variable === 2){
        return (
            <div className="rating-flex">
                <Star check={true}/>
                <Star check={true}/>
                <Star check={false}/>
                <Star check={false}/>
                <Star check={false}/>
            </div>
        )
    }

    if(props.variable === 1) {
        return (
            <div className="rating-flex">
                <Star check={true}/>
                <Star check={false}/>
                <Star check={false}/>
                <Star check={false}/>
                <Star check={false}/>
            </div>
        )
    }
}

function Star(props) {
    if(props.check) {
        return <div className='star'>1</div>
        // return <div className='star'>{props.chech}</div>     //Для передачи пропса вниз (сюда)
    } else {
        return <div className='star'></div>
    }
    
}

export default Rating;