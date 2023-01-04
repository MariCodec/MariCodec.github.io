import PizzaBlock from "./PizzaBlock";
import pizzaDate from "./pizzaDate";
import "./pizzaBlock.scss";
import AddsList from "./AddsList";

const Pizza = () => {
  return (
    <div>
      <div className="food">
        {pizzaDate.map((obj) => (
          <PizzaBlock
            pizza={obj}
            key={obj.name}
            id={obj.id}
            type={obj.types}
            img={obj.src}
            price={obj.price}
            name={obj.name}
          />
        ))}

        <div className="adds">
          <div className="adds__title">ДОДАТКИ</div>
          <AddsList />
        </div>
      </div>
    </div>
  );
};

export default Pizza;
