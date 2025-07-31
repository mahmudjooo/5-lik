// "use client";

// import { X } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

// type Props = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function Modal({ isOpen, onClose }: Props) {
//   const handleClick = (message: string) => {
//     console.log(message);
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.3 }}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
//         >
//           <div className="bg-white rounded-lg w-[90%] max-w-md p-6 relative">
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 text-gray-600 hover:text-black"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
//               alt="Nike"
//               className="h-6 mb-4"
//             />

//             <h2 className="text-lg font-semibold">Privacy Settings</h2>
//             <p className="text-sm text-gray-700 mt-2">
//               This site uses cookies to improve your experience. You can accept
//               or reject them.
//             </p>

//             <div className="mt-6 flex flex-col sm:flex-row gap-3">
//               <button
//                 className="bg-black text-white py-2 px-4 rounded"
//                 onClick={() => handleClick("✅ Allowed all cookies")}
//               >
//                 Allow All
//               </button>

//               <button
//                 className="bg-gray-200 text-black py-2 px-4 rounded"
//                 onClick={() => handleClick("🚫 Rejected all cookies")}
//               >
//                 Reject
//               </button>

//               <button
//                 className="bg-gray-800 text-white py-2 px-4 rounded"
//                 onClick={() => handleClick("⚙️ Confirmed settings")}
//               >
//                 Confirm
//               </button>
//             </div>

//             <p className="text-xs text-right text-gray-400 mt-6">
//               Powered by onetrust
//             </p>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
