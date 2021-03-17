import React from "react";

const Menu = ({ items }) => {
  return (
    <div>
      {items.map(item => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id} {...item}>
            <img src={img} alt={title} />
            <div>
              <header>
                <h4>{title}</h4>
                <h4>${price}</h4>
              </header>
            </div>
            <p>{desc}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
