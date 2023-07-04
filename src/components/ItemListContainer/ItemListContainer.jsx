import { useState, useEffect } from "react";
import { getProductos, getProductoPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    const funcion = idCategory ? getProductoPorCategoria : getProductos;

    funcion(idCategory).then((res) => setProductos(res));
  }, [idCategory]);

  return (
    <>
      <h2> Bienvenidos a Pichichus! </h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
