import {Link} from 'react-router-dom'

const Contact = ({ contact_data, onDelete }) => {
    const { id,name, email } = contact_data
    return (
        <li className="list-group-item d-flex justify-content-between">
            <div>
                <h5>{name}</h5>
                <p className="fw-lighter">{email}</p>
            </div>
            <div className="contact-icon">
                <i onClick={() => onDelete(id)} className="fa fa-trash lead text-danger mx-3"></i>
                <Link to='/edit' state={contact_data}>
                <i className="fa fa-edit lead text-primary"></i>
                </Link>
            </div>
        </li>

    )
}

export default Contact