import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getResult } from '../../actions/index'

function SearchForm() {

    const [ username, setUsername ] = useState("")
    const [ repos, setRepos ] = useState([])
    const dispatch = useDispatch();
    

    const handleSubmit = e => {
        e.preventDefault();
        const search = searchTerm => dispatch(getResult(searchTerm));
        const repoList = search(username);
        setRepos(repoList)
        console.log(repos)
    }

    const updateInput = e => {
        const input = e.target.value 
        setUsername(input)
    }

    const renderRepos = () => repos.map(repo => <li>{repo.name}</li>)
    
    return (
        <div>
            <form role='form' onSubmit={handleSubmit} >
            
                <input type="text" id="username" label = "username" name= "username" value={username} onChange={updateInput} />
            
                <input type="submit" value="Submit" />
            </form>
            <br/>
            {renderRepos()}
        </div>
    );
};

export default SearchForm;