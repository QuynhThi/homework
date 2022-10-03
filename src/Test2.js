// import React, { useEffect } from "react";
// import { SelectListMember } from "./memberSlice";
// import {
//   AddListProduct,
//   GetListProduct,
//   SelectListProduct,
// } from "./productSlice";
// import useDispatch from "./useDispatch";
// import useSlector from "./useSelector";

// const Test2 = () => {
//   let dispatch = useDispatch();
//   let listMember = useSlector(SelectListMember) || [];
//   let listProduct = useSlector(SelectListProduct) || [];

//   useEffect(() => {
//     dispatch(GetListProduct());
//   }, []);

//   const addItem = () => {
//     dispatch(AddListProduct());
//   };

//   return (
//     <>
//       <div style={{ margin: "100px", display: "flex" }}>
//         {listMember?.map((item, index) => {
//           return (
//             <div
//               style={{
//                 width: "100px",
//                 textAlign: "center",
//                 border: "1px solid #333",
//                 marginRight: "10px",
//               }}
//               key={index}
//             >
//               <p style={{ marginY: "5px" }}>{item?.name}</p>
//             </div>
//           );
//         })}
//       </div>

//       <div style={{ margin: "'100px", display: "flex" }}>
//         {listProduct.map((item, index) => {
//           return (
//             <div
//               style={{
//                 width: "150px",
//                 textAlign: "center",
//                 border: "1px solid #333",
//                 marginRight: "10px",
//               }}
//               key={index}
//             >
//               <p style={{ marginY: "5px" }}>{item?.name}</p>
//             </div>
//           );
//         })}

//         <div
//           style={{
//             width: "150px",
//             textAlign: "center",
//             border: "1px solid #333",
//             marginRight: "10px",
//             cursor: "pointer",
//           }}
//         >
//           <p style={{ marginY: "5px" }} onClick={addItem}>
//             Add Product
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Test2;
