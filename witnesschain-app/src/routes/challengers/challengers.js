import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import axios from 'axios';

const Challengers = () => {
    const [provers, setProvers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://api.witnesschain.com/proof/v1/pob/challengers')
            .then(response => {
                console.log(response.data.result.challengers);
                setProvers(Array.isArray(response.data.result.challengers) ? response.data.result.challengers : []);
            })
            .catch(error => console.error('Error fetching:', error));
    }, []);

    const filteredProvers = Array.isArray(provers) ? provers.filter(prover => prover.geoip.city.toLowerCase().includes(search.toLowerCase())) : [];

    return (
        <div className="provers-container">
            <h2>Challengers</h2>
            <input
                type="text"
                className="search-input"
                placeholder="Search Challengers City..."
                value={search}
                onInput={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredProvers.length > 0 ? (
                        filteredProvers.map((item, index) => (
                            <li className="prover-item" key={index}>
                                <span><strong>ID:</strong> {item.id} </span><br />
                                <span><strong>Key Type:</strong> {item.keyType}</span> <br />
                                <span><strong>Last Alive:</strong> {new Date(item.last_alive).toLocaleString()}</span> <br />
                                <span><strong>Project Name:</strong> {item.projectName}</span> <br />
                                <span><strong>GeoIP City:</strong> {item.geoip.city}</span> <br />
                                <span><strong>Claims City:</strong> {item.claims.city}</span> <br />
                                <span><strong>Claims Country:</strong> {item.claims.country}</span> 
                            </li>
                        ))
                    ) : (
                        <li className="prover-item">No items found.</li>
                    )}
            </ul>
        </div>
    );
};

export default Challengers;
