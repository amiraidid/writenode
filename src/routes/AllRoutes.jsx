import { Routes, Route } from "react-router-dom";
import {CreatePost, HomePage, PageNotFound} from '../pages'
import ProtectedRoutes from "./ProtectedRoutes";

function AllRoutes() {
    return (
        <section>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="create" element={ <ProtectedRoutes><CreatePost /></ProtectedRoutes> }/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </section>
    )
}

export default AllRoutes