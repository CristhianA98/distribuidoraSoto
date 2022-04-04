import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../components/404/PageNotFound";
import { AdminScreen } from "../components/admin/AdminScreen";

export const AdminRoutes = () =>{
    return (
        <>
            <div>
                <Routes>
                    <Route path="dashboard" element={<AdminScreen />} />
                    <Route index element={<AdminScreen />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div> 
        </>
    );
}