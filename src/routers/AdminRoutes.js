import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../components/404/PageNotFound";
import { AdminScreen } from "../components/admin/AdminScreen";
import { ProductForm } from "../components/admin/ProductForm";
import { ProductList } from "../components/admin/ProductList";
import { ProductViewEdit } from "../components/admin/ProductViewEdit";
import { Navbar } from "../components/ui/Navbar";

export const AdminRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route exact path="dashboard" element={<AdminScreen />} />
                    <Route path="ingresarProducto" element={<ProductForm />} />
                    <Route path="listado" element={<ProductList />} />
                    <Route path="listado/editar" element={<ProductViewEdit />} />
                    <Route index element={<AdminScreen />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </>
    );
}