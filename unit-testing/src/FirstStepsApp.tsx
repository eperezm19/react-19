import ItemCounter from "./shopping-cart/item-counter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch", quantity: 1 },
  { productName: "PlayStation 5", quantity: 1 },
  { productName: "Xbox Series X", quantity: 1 },
];

export default function FirstStepsApp() {
  return (
    <div>
      <h1>carrito de compras</h1>
      {itemsInCart.map((item) => (
        <ItemCounter
          key={item.productName}
          itemName={item.productName}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}
