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
	const titleId = sessionStorage.getItem('titleId');
	return (
		<div>
			<a href="/blogs">Back</a>
			<br></br>
			<a href="/home">Home</a>
			<h1 id="title">
				<b>
					<i>User Blog</i>
				</b>
			</h1>

			{
				<table id="country">
					<tr>
						<th>Posts</th>
					</tr>

					{country.map((data) =>
						data.title === titleId ? (
							<tr key={data.id}>
								<td>{data.body}</td>
							</tr>
						) : null
					)}
				</table>
			}
		</div>
	);
}

export default CountryData;
