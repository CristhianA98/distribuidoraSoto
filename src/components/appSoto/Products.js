import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadProvinces, startLoadingProducts } from '../../actions/product';
import { ProductCard } from './ProductCard'

export const Products = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);
    const [provinces, setprovinces] = useState([]);

    useEffect(async () => {
        dispatch(startLoadingProducts());
        setprovinces(await loadProvinces());
    }, []);
    

    const handleProvinceSelected = (e) => {
        const provinceSelected = e.target.value;
        dispatch(startLoadingProducts(null, provinceSelected));
    }
    return (
        <>
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1 text-main">Categories of The Month</h1>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-inline shop-top-menu pb-3 pt-1">
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="#">All</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="h3 text-dark text-decoration-none" href="#">Women's</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 py-5">
                                <div className="d-flex">
                                    <select className="form-control" onChange={handleProvinceSelected}>
                                        <option value=''>Todas las Provincias</option>
                                        {
                                            provinces.map(province => (
                                                <option value={province} key={province} >
                                                    {province}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Listado de productos */}
                        <div className="row">
                            {
                                products.map(product => (
                                    <ProductCard key={product.id} {...product} />
                                ))
                            }
                        </div>

                        <div div="row">
                            <ul className="pagination pagination-lg justify-content-end">
                                <li className="page-item disabled">
                                    <a className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabIndex={-1}>1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
