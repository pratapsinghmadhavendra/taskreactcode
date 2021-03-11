import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (

			<div style = {{display: "flex"}} fxLayoutAlign = "space-evenly center">
			<h1><i>Madhavendra Pratap Singh</i></h1>
			<div style = {{flex: 1, marginTop: "300px", height: "25px", width:"25px"}}>
				<a href="/userdata" >
				<button class = "btn btn-primary" >
				User Details
				</button>
				
				</a>
				</div>
			
				<br/>
				<br></br>
				<div style = {{flex: 1, marginTop: "300px", height: "25px", width:"25px"}}>
				<a href="/blogs"><button class = "btn btn-primary">
				Post Details
				</button></a>
				</div>
				<br></br>
				<div style = {{flex: 1, marginTop:"300px", height: "25px", width:"25px"}}>
				<a href="/"><button class = "btn btn-primary">
				Logout
				</button></a>
				</div>
			</div>
		);
	}
}
