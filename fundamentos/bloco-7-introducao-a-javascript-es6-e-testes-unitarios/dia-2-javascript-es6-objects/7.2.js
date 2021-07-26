const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order.name;
  const customerPhone = order.phoneNumber;
  const customerAdressStreet = order.address.street;
  const customerNumber = order.address.number;
  const AdressApartment = order.address.apartment
  return `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R ${customerAdressStreet}, Nº: ${customerNumber}, AP: ${AdressApartment}`
}
console.log(customerInfo(order));

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const pizza = Object.keys(order.order.pizza);
  const deliveryPerson = order.order.delivery.deliveryPerson = 'Luis Silva';
  const coke = order.order.drinks.coke.type;
  const total = order.payment.total = 50;
  
  return `Olá ${deliveryPerson}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${coke} é ${total},00`;
}
console.log(orderModifier(order));

orderModifier(order);