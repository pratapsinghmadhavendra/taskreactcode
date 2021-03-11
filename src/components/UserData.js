import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './UserData.css';

function CountryData() {
	const [country, getCountry] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				getCountry(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function handleSearch() {
		axios
			.get('https://jsonplaceholder.typicode.com/users?username=' + search)
			.then((response) => {
				getCountry(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div>
			<h1 id="title">
				<b>
					<i>User Data</i>
				</b>
			</h1>
			<a href="/home">Back</a>
			<div class="input-group">
				
				<input type="text" placeholder="Search By UserName" value={search} name="search" onChange={(e) => setSearch(e.target.value)} />
				<button type="button" variant="contained" class="btn btn-primary" onClick={handleSearch}>
					Search
				</button>
			</div>
			{
				<table id="country">
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>User Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>City</th>
					</tr>

					{country.map((data) => (
						<tr key={data.id}>
							<td>{data.id}</td>
							<td>{data.name}</td>
							<td>{data.username}</td>
							<td>{data.email}</td>
							<td>{data.phone}</td>
							<td>{data.address.city}</td>
						</tr>
					))}
				</table>
			}
		</div>
	);
}

export default CountryData;
