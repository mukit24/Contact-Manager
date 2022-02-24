import Contact from "./Contact"
import { Link } from 'react-router-dom'

const ContactList = ({ contacts, onDelete }) => {
    return (
        <div>
            <div className="alert alert-success contact-list-header">
                <h3 className="d-inline">Contact List</h3>
                <Link to='/add'>
                    <button className="btn btn-success float-end fw-bold">Add To Contact</button>
                </Link>
            </div>
            {contacts.length > 0 ? 
            <div className="card my-3">
                <ul className="list-group list-group-flush">
                    {contacts.map((contact) => (
                        <Contact key={contact.id} contact_data={contact} onDelete={onDelete} />
                    ))}
                </ul>
            </div> : 
            <h5 className="alert alert-danger text-center p-1">No Contacts To Show</h5>
            }

        </div>
    )
}

export default ContactList