import { Routes, Route } from 'react-router-dom';
import Index from '../Pages/Index';
import Show from '../Pages/Show';
import Home from './Home';
import New from '../Pages/New';
import Edit from '../Pages/Edit';

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
        </Route>
       </Routes>
    );
}

export default RouteComponent;