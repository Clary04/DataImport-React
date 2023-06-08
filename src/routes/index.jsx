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

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>} ></Route>
                <Route path="/dashboard" element={<Dashboard/>} ></Route>
                <Route path="/team" element={<Team/>} ></Route>
                <Route path="/contacts" element={<Contacts/>} ></Route>
                <Route path="/form" element={<Form/>} ></Route>
                <Route path="/calendar" element={<Calendar/>} ></Route>
                <Route path="/bar-chart" element={<Bar/>} ></Route>
                <Route path="/pie-chart" element={<Pie/>} ></Route>
                <Route path="/line-chart" element={<Line/>} ></Route>
                <Route path="/geo-chart" element={<Geography/>} ></Route>
            </Routes>
        </Router>
    );
}