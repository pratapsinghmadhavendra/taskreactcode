import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import UserData from './components/UserData';
import Blogs from './components/Blogs';
import BlogPosts from './components/BlogPosts';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/home" component={Home} />
				<Route path="/userdata" component={UserData} />
				<Route path="/blogs" component={Blogs} />
				<Route path="/blogposts" component={BlogPosts} />
			</Switch>
		</div>
	);
}

export default App;
