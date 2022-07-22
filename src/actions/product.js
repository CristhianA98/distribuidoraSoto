import { Action } from "history";
import Swal from "sweetalert2";
import {
  collection,
  addDoc,
  db,
  setDoc,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  startAt,
  endAt,
  orderBy
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

    const docProduct = await addDoc(collection(db, `productos`), product);
    await setDoc(docProduct, product);

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


export const startLoadingProducts = (search = '', province = '') => {
  return async (dispatch) => {
    Swal.fire({
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    const products = [];

    if (province) {
      const getProvinces = await getDocs(query(collection(db, "productos"), where("provincia", "==", province)));
      getProvinces.forEach(snapHijo => {
        products.push({
          id: snapHijo.id,
          ...snapHijo.data()
        });
      });

    } else if (search) {
      const productRef = collection(db, "productos");
      const queryProduct = query(productRef, orderBy('nombre'), startAt(search.toUpperCase()), endAt(search.toUpperCase() + '\uf8ff'));
      const productsSnap = await getDocs(queryProduct);

      productsSnap.forEach(snapHijo => {
        console.log(snapHijo.data().nombre);
        products.push({
          id: snapHijo.id,
          ...snapHijo.data()
        });
      });

    } else {
      const productsSnap = await getDocs(collection(db, "productos"));
      productsSnap.forEach(snapHijo => {
        products.push({
          id: snapHijo.id,
          ...snapHijo.data()
        });
      });
    }

    dispatch(setProducts(products));
    Swal.close();
  }
}

export const setProducts = (products) => ({
  type: types.productsLoad,
  payload: products
});

export const startLoadNote = (id = '') => {
  return async (dispatch) => {
    Swal.fire({
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
    const productsRef = doc(db, "productos", id);
    const productSnap = await getDoc(productsRef);

    if (productSnap.exists()) {
      const product = productSnap.data();
      dispatch(activeProduct(id, product));
    } else {
      dispatch(activeProduct(null, null));
    }
    Swal.close();
  }
}

export const loadProvinces = async () => {
  const provinces = [];
  const productsSnap = await getDocs(collection(db, "productos"));

  productsSnap.forEach(snapHijo => {
    if (!provinces.includes(snapHijo.data().provincia))
      provinces.push(snapHijo.data().provincia);
  });

  return provinces;
}

export const loadSearchProduct = async () => {
  const products = [];
  const productsSnap = await getDocs(collection(db, "productos"));

  productsSnap.forEach(snapHijo => {
    products.push({ id: snapHijo.id, data: snapHijo.data() });
  });

  return products;
}


export const activeProduct = (id, product) => ({
  type: types.productActive,
  payload: {
    id,
    ...product
  }
})