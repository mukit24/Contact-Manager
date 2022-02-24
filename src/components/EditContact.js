import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

function EditContact({onEdit}) {
    const location = useLocation();
    const id = location.state.id;
    const [name,setName] = useState(location.state.name)
    const [email,setEmail] = useState(location.state.email)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email){
            alert('All Feilds Are Mandatory.')
            return
        }

        onEdit({id,name,email});

        setName('')
        setEmail('')
        navigate("/")
    }
    return (
        <div>
            <h4 className="text-center">Edit Contact</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}

export default EditContact