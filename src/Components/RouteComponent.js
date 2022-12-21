import { Routes, Route } from 'react-router-dom';
import Index from '../Pages/Index';
import Home from './Home';


function RouteComponent(props) {
    return (
       <Routes>
        <Route path = "/">
            <Route index element = {<Home />} />
            <Route path = "logs" element = {<Index />} />
        </Route>
       </Routes>
    );
}

export default RouteComponent;