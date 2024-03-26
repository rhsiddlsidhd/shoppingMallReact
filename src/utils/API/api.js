// export const fetchClothesData = async () => {
//   try {
//     const url = new URL(`http://localhost:5000/products`);
//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`${res.status} =====> ${res.statusText}`);
//     }

//     const data = await res.json();
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };
