import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Dashboard } from '../pages/Home/dashboard';
import { Team } from '../pages/Home/team';
import { Contacts } from '../pages/Home/contacts';
import { Form } from '../pages/Home/form';
import { Calendar } from '../pages/Home/calendar';
import { Bar } from '../pages/Home/bar-chart';
import { Pie } from '../pages/Home/pie-chart';
import { Line } from '../pages/Home/line-chart';
import { Geography } from '../pages/Home/geo-chart';
import { PrivateRoute } from './privateRoutes';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>} ></Route>
                
            <Route path="/dashboard" element={<PrivateRoute/>}>
                <Route path="/dashboard" element={<Dashboard/>} ></Route>
             </Route>
            
            <Route path="/team" element={<PrivateRoute/>}>
               <Route path="/team" element={<Team/>} ></Route>
            </Route>

            <Route path="/contacts" element={<PrivateRoute/>}>
                <Route path="/contacts" element={<Contacts/>} ></Route>
             </Route>  

            <Route path="/form" element={<PrivateRoute/>}>
                <Route path="/form" element={<Form/>} ></Route>
            </Route>

            <Route path="/calendar" element={<PrivateRoute/>}>
                <Route path="/calendar" element={<Calendar/>} ></Route>
            </Route>

            <Route path="/bar-chart" element={<PrivateRoute/>}>
                <Route path="/bar-chart" element={<Bar/>} ></Route>
            </Route>

            <Route path="/pie-chart" element={<PrivateRoute/>}>
                <Route path="/pie-chart" element={<Pie/>} ></Route>
            </Route>

            <Route path="/line-chart" element={<PrivateRoute/>}>
                <Route path="/line-chart" element={<Line/>} ></Route>
            </Route>

            <Route path="/geo-chart" element={<PrivateRoute/>}>
                <Route path="/geo-chart" element={<Geography/>} ></Route>
            </Route>
            
            </Routes>
        </Router>
    );
}