function Card(props) {

    const { id, name, age, institute, isActive } = props;

    return (
        <div className="card">
            <div className="container">
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Institute: {institute}</p>
                <p>IsActive: {isActive ? "Yes" : "No"}</p>
            </div>
        </div>
    )
}

export default Card;

