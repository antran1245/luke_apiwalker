import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

export default function Form() {
    const [options, setOptions] = useState(['planets', 'spaceships', 'vehicles', 'people', 'films', 'species'])
    const navigate = useNavigate();

    const sendFetch = (e) => {
    e.preventDefault();
    navigate(`/${e.target.category.value}/${e.target.id.value}`)
    }
    return (
        <div className="App">
        <form onSubmit={sendFetch}>
            <div className='form-group'>
                <label>Search for: </label>
                <select name='category'>
                    {options.map((item, i) => 
                    <option value={item} key={i}>{item}</option>
                    )}
                </select>
            </div>
            <div className='form-group'>
                <label>ID: </label>
                <input type={'number'} name="id"></input>
            </div>
            <div className='form-group'>
                <input type={'submit'} value="Search"/>
            </div>
        </form>
        </div>
    );
}