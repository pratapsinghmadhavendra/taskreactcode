import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './UserData.css';

function CountryData() {
	const [country, getCountry] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				getCountry(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function handleSearch() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts?userId=' + search)
			.then((response) => {
				getCountry(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	function handleClick(event) {
		const title = event.target.innerText;
		sessionStorage.setItem('titleId', title);
	}

	return (
		<div>
			<h1 id="title">
				<b>
					<i>Blog Data</i>
				</b>
			</h1>
			<a href="/home">Back</a>
			<div class="input-group">
				
				<input type="text" placeholder="Search By UserId" value={search} name="search" onChange={(e) => setSearch(e.target.value)} />
				<button type="button" variant="contained" class="btn btn-primary" onClick={handleSearch}>
					Search
				</button>
			</div>
			{
				<table id="country">
					<tr>
						<th>Id</th>
						<th>User Id</th>
						<th>Title</th>
					</tr>

					{country.map((data) => (
						<tr key={data.id}>
							<td>{data.id}</td>
							<td>{data.userId}</td>
							<td>
								<a href="/blogposts" onClick={handleClick}>
									{data.title}
								</a>
							</td>
						</tr>
					))}
				</table>
			}
		</div>
	);
}

export default CountryData;
