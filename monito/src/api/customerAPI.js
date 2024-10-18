const BASE_URL = "https://monitor-backend-rust.vercel.app/api/customers";

export const getCustomers = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }

    const customers = await response.json();
    return customers;
  } catch (error) {
    console.log("Error Fetching Data ", error);
  }
};
