import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function AddContact({onAdd}) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email){
            alert('All Feilds Are Mandatory.')
            return
        }

        onAdd({name,email});

        setName('')
        setEmail('')
        navigate("/")
    }
    return (
        <div>
            <h4 className="text-center">Add Contact</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default AddContact