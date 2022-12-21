import { Routes, Route } from 'react-router-dom';
import Home from './Home';


function RouteComponent(props) {
    return (
       <Routes>
        <Route path = "/">
            <Route index element = {<Home />} />
        </Route>
       </Routes>
    );
}

export default RouteComponent;