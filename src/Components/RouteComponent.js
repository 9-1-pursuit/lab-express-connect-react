import { Routes, Route } from 'react-router-dom';
import Index from '../Pages/Index';
import Show from '../Pages/Show';
import Home from './Home';


function RouteComponent(props) {
    return (
       <Routes>
        <Route path = "/">
            <Route index element = {<Home />} />
            <Route path = "logs">
                <Route index element = {<Index />} />
                <Route path = ":index" element = {<Show />} />
            </Route>
            


        </Route>
       </Routes>
    );
}

export default RouteComponent;