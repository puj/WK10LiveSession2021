import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');

    const onNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={onNameChange}
                />
            </div>
            <div>
                <label htmlFor="season">Favourite season</label>
                <select id="season">
                    <option>Winter</option>
                    <option>Spring</option>
                    <option>Summer</option>
                    <option>Fall</option>
                </select>
            </div>
            <div>
                <p>Favourite technology</p>
                <label htmlFor="html">HTML</label>
                <input id="html" type="radio" />
                <label htmlFor="css">CSS</label>
                <input id="css" type="radio" />
                <label htmlFor="js">JavaScript</label>
                <input id="js" type="radio" />
            </div>
        </form>
    )
}

export default Form;