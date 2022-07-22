import React from "react";
import Dropzone from "react-dropzone-uploader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { startAddProduct } from "../../actions/product";
import { provincias } from "../../data/provincias";
import { useForm } from "../../hooks/useForm";
import "./dropzoneStyle.css";

export const ProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let imageUploaded = [];

  const [values, handleInputChange] = useForm({
    nombre: "",
    descripcion: "",
    provincia: "",
  });

  const { nombre, descripcion, provincia } = values;

  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === "done") {
      imageUploaded.push(file);
    } else if (status === "aborted") {
      console.log("Cargando");
    } else if (status === "removed") {
      const imageRemoved = imageUploaded.filter(
        (file) => file.name !== meta.name
      );
      imageUploaded = imageRemoved;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (isValidateForm()) {
      values.imagenes = imageUploaded;
      dispatch(startAddProduct(values));
      navigate('/admin');
    }
  };

  const isValidateForm = () => {
    if (nombre.trim().length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ingrese un nombre válido",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    } else if (descripcion.trim().length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ingrese una descripción",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    } else if (provincia.length < 1) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Seleccione una provincia",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    } else if (imageUploaded.length < 1) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ingrese al menos una imagen",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    }

    return true;
  };

  return (
    <div className="container w-50 pt-3 animate__animated animate__fadeIn">
      <h2 className="display-7 text-center fst-italic text-main py-3">
        Ingresar Producto
      </h2>
      <div className="row p-3 border">
        <form onSubmit={handleSubmitForm}>
          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="inputname" className="fst-italic fw-bold">
                Nombre
              </label>
              <input
                type="text"
                value={nombre.toUpperCase()}
                onChange={handleInputChange}
                className="form-control mt-1"
                id="name"
                name="nombre"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="inputemail" className="fst-italic fw-bold">
                Descripcion
              </label>
              <input
                type="text"
                value={descripcion}
                onChange={handleInputChange}
                className="form-control mt-1"
                id="descripcion"
                name="descripcion"
                placeholder="Descripcion"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputsubject" className="fst-italic fw-bold">
              Provincia
            </label>
            <select
              className="form-select"
              name="provincia"
              aria-label="Select de provincia"
              onChange={handleInputChange}
            >
              <option value={provincia}>Selecciona la provincia</option>
              {provincias.map((provincia) => (
                <option
                  value={provincia.nombreProvincia}
                  key={provincia.idProvincia}
                >
                  {provincia.nombreProvincia}
                </option>
              ))}
            </select>
          </div>

          <Dropzone
            onChangeStatus={handleChangeStatus}
            multiple={true}
            inputWithFilesContent="Añadir"
            inputContent={(extra) =>
              extra.reject
                ? "Solo archivos de imagen"
                : "Click aquí o arrastra imágenes para subirlos"
            }
            accept="image/*"
          />

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              type="submit"
              className="btn btn-outline-main mt-3"
              title="Guardar Producto"
            >
              Guardar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
