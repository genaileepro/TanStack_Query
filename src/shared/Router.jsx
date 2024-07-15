import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Empty from '../pages/Empty';
import Main from '../pages/Main';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/empty" element={<Empty />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
