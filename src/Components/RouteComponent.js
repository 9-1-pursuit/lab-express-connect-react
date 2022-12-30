import { Routes, Route } from 'react-router-dom';
import Index from '../Pages/Index';
import Show from '../Pages/Show';
import Home from './Home';
import New from '../Pages/New';


function RouteComponent() {
    return (
       <Routes>
        <Route path = "/">
            <Route index element = {<Home />} />
            <Route path = "logs">
                <Route index element = {<Index />} />
                <Route path = "new" element = {<New />} />
                <Route path = ":index" element = {<Show />} />
            </Route>
            


        </Route>
       </Routes>
    );
}

export default RouteComponent;