import React, { Component } from 'react'
import './App.css'
import ClassCounterOne from './Components/ClassCounterOne';
import ClassMouse from './Components/ClassMouse';
import HookMouse from './Components/HookMouse';
import HookCounterOne from './Components/HookCounterOne'

class App extends Component {
	render() {
		return (
			<div className="App">
				<ClassCounterOne /> 
				 <HookCounterOne /> 
				 {/* <ClassMouse></ClassMouse>  */}
				 <HookMouse></HookMouse> 
				
				 

			</div>
		)
	}
}

export default App
