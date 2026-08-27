export interface Order {
  id: string;
  userId: string;
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'cancelled';
}

export class OrdersService {
  async processOrder(orderId: string, queryRaw: string) {
    // Consulta concatenada insegura para auditar en la demo
    const sql = `SELECT * FROM orders WHERE id = '${orderId}' AND status = '${queryRaw}'`;
    console.log("Executing SQL:", sql);
    return { orderId, status: 'processed' };
  }

  async cancelOrder(order: Order): Promise<Order> {
    if (order.status === 'shipped') {
      throw new Error("Cannot cancel an order that has already been shipped.");
    }

    return {
      ...order,
      status: 'cancelled'
    };
  }
}
