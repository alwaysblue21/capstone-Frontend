import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import App from "./App";
import Index from "./pages/Index";
import Show from "./pages/Show";
import {indexLoader, showLoader} from "./loaders";
import { createAction, updateAction, deleteAction, signupAction } from "./actions";
//auth//
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Main/>}>
                <Route path="signup" element={<Signup/>} action={signupAction}/>
                <Route path="login" element={<Login/>}/>
            </Route>
            <Route path="post/:id" element={<Show/>} loader={showLoader}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
            <Route path="dashboard" element={<Index/>} loader={indexLoader} />
        </Route>
    </>
));

export default router;