import { Routes, Route } from 'react-router-dom';
import Index from '../Pages/Index';
import Show from '../Pages/Show';
import Home from './Home';
import New from '../Pages/New';
import Edit from '../Pages/Edit';
import About from '../Pages/About';
import Error from '../Pages/Error';

function RouteComponent() {
    return (
       <Routes>
        <Route path = "/">
            <Route index element = {<Home />} />
            <Route path = "logs">
                <Route index element = {<Index />} />
                <Route path = "new" element = {<New />} />
                
                <Route path = ":index" >
                    <Route index element = {<Show />} />
                    <Route path = "edit" element ={<Edit />} />
                </Route>
            </Route>
            <Route path = "about" element = {<About />} />
        </Route>
        <Route path = "*" element= {<Error />} />
       </Routes>
    );
}

export default RouteComponent;