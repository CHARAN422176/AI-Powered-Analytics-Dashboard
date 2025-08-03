// lib/data.ts
export const keyMetrics = {
  revenue: 45231.89,
  users: 3123,
  conversions: 271,
  growth: 12.5,
};

export const revenueData = [
  { name: "Jan", total: 3240 },
  { name: "Feb", total: 4129 },
  { name: "Mar", total: 4580 },
  { name: "Apr", total: 3908 },
  { name: "May", total: 4800 },
  { name: "Jun", total: 4600 },
  { name: "Jul", total: 5100 },
  { name: "Aug", total: 5350 },
];

export const userAcquisitionData = [
    { source: "Organic", users: 1200 },
    { source: "Paid", users: 800 },
    { source: "Referral", users: 500 },
    { source: "Direct", users: 623 },
];


export const paymentData = [
    { id: "1", amount: 100, status: "success", email: "user1@example.com" },
    { id: "2", amount: 150, status: "processing", email: "user2@example.com" },
    { id: "3", amount: 200, status: "failed", email: "user3@example.com" },
    // ...add more data if you wish
];
