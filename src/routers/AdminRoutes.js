import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../components/404/PageNotFound";
import { AdminScreen } from "../components/admin/AdminScreen";
import { ProductForm } from "../components/admin/ProductForm";
import { Navbar } from "../components/ui/Navbar";

export const AdminRoutes = () =>{
    return (
        <>
        <Navbar />
            <div>
                <Routes>
                    <Route exact path="dashboard" element={<AdminScreen />} />
                    <Route path="ingresarProducto" element={<ProductForm />} />
                    <Route index element={<AdminScreen />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div> 
        </>
    );
}