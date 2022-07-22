import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { loadSearchProduct } from "./actions/product";
import { useForm } from "./hooks/useForm";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";

export const DistribuidoraSotoApp = () => {

  const [values, handleInputChange] = useForm({
    searchInput: ""
  })

  const { searchInput } = values;

  let [allProducts, setallProducts] = useState([]);
  let [produtsSearched, setprodutsSearched] = useState([]);

  useEffect(async () => {
    allProducts = await loadSearchProduct();
    setallProducts(allProducts);
  }, [allProducts]);

  const handleSearchProduct = ({ target }) => {
    const search = target.value;
    let expresion = new RegExp(`${search}.*`, "i");
    console.log(allProducts)
    let productFilter = allProducts?.filter(product => expresion.test(product.data.nombre));
    const tenProducts = productFilter.slice(0,6);
    setprodutsSearched(tenProducts);
  }

  useEffect(() => {
    console.log(produtsSearched);
  }, [produtsSearched])

  return (
    <Provider store={store}>
      <AppRouter />
      {/* Modal */}
      <div className="modal fade bg-white" id="templatemo_search" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document" >
          <div className="w-100 pt-1 mb-5 text-right">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <form className="modal-content modal-body border-0 p-0">
            <h2 className="h2 text-center pb-3">Busca tu producto</h2>
            <div className="input-group mb-2">
              <input type="text" value={searchInput} name='searchInput' onKeyUp={handleSearchProduct} onChange={handleInputChange} className="form-control" id="inputModalSearch" placeholder="Ingresa el producto a buscar ..." autoFocus />
              <i className="fa fa-fw fa-search text-main fs-2 px-4" />
            </div>
            <h6 className="text-muted">Coincidencias</h6>
            <ul className="list-group">
              {
                produtsSearched.length > 1 && produtsSearched.map(producto => (
                  <li role='button' key={producto.id} className="list-group-item d-flex justify-content-between align-items-center py-1">
                    <div className="ms-2 me-auto" >
                      <div className="fw-bold">{producto.data.nombre}</div>
                      {producto.data.descripcion}
                    </div>
                    <div className="image-parent">
                      <img src={producto.data.imagenes[0]} className="img-fluid" alt="quixote" />
                    </div>
                  </li>
                ))
              }
            </ul>

          </form>

        </div>
      </div>
    </Provider>
  );
};
