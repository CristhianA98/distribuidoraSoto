import Swal from "sweetalert2";
import {
  collection,
  addDoc,
  db,
  setDoc
} from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { types } from "../types/types";

export const startAddProduct = (product) => {
  return async (dispatch) => {

    Swal.fire({
      title: "Subiendo...",
      text: "Por favor espera",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    product.likes = 0;
    
    const imagenesUrl = await fileUpload(product.imagenes);
    product.imagenes = imagenesUrl;
    
    const docProduct = await addDoc(collection(db, `productos`),product);
    await setDoc(docProduct,product);

    dispatch(addNewProduct(docProduct.id, product));

    Swal.close();
  };
};

export const addNewProduct = (id, product) => ({
  type: types.productAddNew,
  payload: {
    id,
    ...product,
  },
});
