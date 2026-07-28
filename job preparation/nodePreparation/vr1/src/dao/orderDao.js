const orders = require('../data/orders');


  const findAll=() => {
    return orders;
  }

  const findById= (id) => {
    return orders.find((order) => order.id === id);
  }

  const findByUserId =(userId) => {
    return orders.filter((order) => order.userId === userId);
  }

  const create =(orderData) => {
    const nextId = orders.length ? Math.max(...orders.map((order) => order.id)) + 1 : 1;
    const newOrder = {
      id: nextId,
      status: 'PLACED',
      ...orderData
    };
    orders.push(newOrder);
    return newOrder;
  }

  const update = (id, orderData) => {
    const index = orders.findIndex((order) => order.id === id);
    if (index === -1) return null;

    orders[index] = { ...orders[index], ...orderData, id };
    return orders[index];
  }

  const deleteOrder = (id) => {
    const index = orders.findIndex((order) => order.id === id);
    if (index === -1) return false;

    orders.splice(index, 1);
    return true;
  }


module.exports = {deleteOrder,update,create,findByUserId,findAll,findById}
