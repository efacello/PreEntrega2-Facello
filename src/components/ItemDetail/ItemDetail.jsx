import React from "react";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        recusandae reprehenderit sapiente maxime dicta aperiam voluptate atque
        quo aspernatur. A iste amet aspernatur ea aliquam animi iusto maiores
        perspiciatis reprehenderit?
      </p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
