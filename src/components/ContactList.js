import Contact from "./Contact"
import { Link } from 'react-router-dom'

const ContactList = ({ contacts, onDelete, term, onSearch }) => {

    const getSearchValue = (e) => {
        //console.log(e.target.value);
        onSearch(e.target.value);
    }
    return (
        <div>
            <div className="alert alert-success contact-list-header">
                <h3 className="d-inline">Contact List</h3>
                <Link to='/add'>
                    <button className="btn btn-success float-end fw-bold">Add To Contact</button>
                </Link>
            </div>
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control" placeholder="Search Contact" value={term} onChange={getSearchValue} />
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