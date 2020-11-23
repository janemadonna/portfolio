import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home'
import About from '../screens/About'
import Projects from '../screens/Projects'
import Contact from '../screens/Contact'

const Routes = ({blue}) => {
    return (
        <div className='routes'>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' render={props => <About {...props} blue={blue} />}/>
                <Route exact path='/projects' render={props => <Projects {...props} blue={blue} />}/>
                <Route exact path='/contact' component={Contact}/>
            </Switch>
        </div>
    )
}

export default Routes