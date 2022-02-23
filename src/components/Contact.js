const Contact = ({ contact_data }) => {
    const { id, name, email } = contact_data
    return (
        <li className="list-group-item d-flex justify-content-between">
            <div>
                <h5>{name}</h5>
                <p className="fw-lighter">{email}</p>
            </div>
            <div className="">
                <i className="fa fa-trash lead text-danger mx-3"></i>
                <i className="fa fa-edit lead text-info"></i>
            </div>
        </li>

    )
}

export default Contact