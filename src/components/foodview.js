const foodView = (props) => {
    return (
        <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Expiry time: {props.food.expiry}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{props.food.name}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Address: {props.food.address}</li>
              <li>Distance: {props.food.distance}</li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">View</button>
          </div>
        </div>
      </div>
    )
}

export default foodView;