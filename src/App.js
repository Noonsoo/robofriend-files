import React,{Component} from 'react'
import {robots} from './robots'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'



class App extends Component  {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json()
		).then( users => {
			this.setState({robots: users})

		})
		
	}

	onSearchChange = (event) => {
		     this.setState({ searchfield: event.target.value })
	}
	render() {
		   const { robots, searchfield } = this.state;
		   const filteredArray = robots.filter(robot =>{
       return robot.name.toLowerCase().
       includes(searchfield.toLowerCase()) 
       })


		return(
         <div className='tc'>
         <h1>RoboFriends</h1>
         <SearchBox searchChange={this.onSearchChange} />
         <Scroll>

       <CardList robots={filteredArray} />
       </Scroll>
 
         </div>

         );

	}
	
	
}

export default App




