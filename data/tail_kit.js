// export const tail_kit = {  '/components/commerce/index.tsx': 
//     `import React, { FC } from 'react';
// import SectionDesc from '../../../site/section/SectionDesc';

// const Commerce: FC = () => {
//     const commerceSections = [
//         {
//             title: 'Pricing cards',
//             items: 9,
//             img: 'images/sections/pricing.png',
//             link: '/components/pricing',
//         },
//         {
//             title: 'Shopping cards',
//             items: 7,
//             img: 'images/sections/shopping.png',
//             link: '/components/shopping',
//         },
//     ];

//     return <SectionDesc id="commerce" items={commerceSections} title="Commerce" />;
// };

// export default Commerce;
// `.trim(),
//   '/components/commerce/pricing/PricingCard.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../../elements/buttons/Button';

// export const prices = [
//     {
//         label: 'All illimited components',
//         include: true,
//     },
//     {
//         label: ' Own custom Tailwind styles',
//         include: true,
//     },
//     {
//         label: 'Unlimited Templates',
//         include: true,
//     },
//     {
//         label: ' Free premium dashboard',
//         include: true,
//     },
//     {
//         label: 'Best ranking',
//         include: true,
//     },
//     {
//         label: 'Prenium svg',
//         include: false,
//     },
//     {
//         label: 'My wife',
//         include: false,
//     },
// ];

// export const notIncluded = [
//     ' No Contracts. No monthly, setup, or additional payment processor fees',
//     ' No 2-week on-boarding, it takes 20 minutes!',
// ];

// const PricingCard: FC = () => {
//     return (
//         <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
//             <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">Entreprise</p>
//             <p className="text-3xl font-bold text-gray-900 dark:text-white">
//                 \$0 <span className="text-sm text-gray-300">/ month </span>
//             </p>
//             <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
//                 For most businesses that want to optimize web queries.
//             </p>

//             <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
//                 {prices.map((price) => {
//                     return (
//                         <li key={price.label} className={`mb-3 flex items-center ${price.include ? '' : 'opacity-50'}\\`}>
//                             {price.include ? (
//                                 <svg
//                                     className="w-6 h-6 mr-2"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="6"
//                                     height="6"
//                                     stroke="currentColor"
//                                     fill="#10b981"
//                                     viewBox="0 0 1792 1792"
//                                 >
//                                     <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
//                                 </svg>
//                             ) : (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="6"
//                                     height="6"
//                                     className="w-6 h-6 mr-2"
//                                     fill="red"
//                                     viewBox="0 0 1792 1792"
//                                 >
//                                     <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
//                                 </svg>
//                             )}

//                             {price.label}
//                         </li>
//                     );
//                 })}
//             </ul>

//             <Button label="Choose plan" color="indigo" />
//         </div>
//     );
// };
// export default PricingCard;
// `.trim(),
//   '/components/commerce/pricing/PricingCard2.tsx': 
//     `import React, { FC } from 'react';
// import { prices } from './PricingCard';

// const PricingCard2: FC = () => {
//     return (
//         <div className="w-64 p-4 bg-indigo-500 shadow-lg rounded-2xl dark:bg-gray-800">
//             <div className="flex items-center justify-between text-white">
//                 <p className="mb-4 text-4xl font-medium">Pro</p>
//                 <p className="flex flex-col text-3xl font-bold">
//                     \$99
//                     <span className="text-sm font-thin text-right">month</span>
//                 </p>
//             </div>

//             <p className="mt-4 text-white text-md">Plan include :</p>

//             <ul className="w-full mt-6 mb-6 text-sm text-white">
//                 {prices.map((price) => {
//                     return (
//                         <li key={price.label} className={\\`mb-3 flex items-center \${price.include ? '' : 'opacity-50'}\\`}>
//                             {price.include ? (
//                                 <svg
//                                     className="w-6 h-6 mr-2"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="6"
//                                     height="6"
//                                     stroke="currentColor"
//                                     fill="white"
//                                     viewBox="0 0 1792 1792"
//                                 >
//                                     <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
//                                 </svg>
//                             ) : (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="6"
//                                     height="6"
//                                     className="w-6 h-6 mr-2"
//                                     fill="white"
//                                     viewBox="0 0 1792 1792"
//                                 >
//                                     <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
//                                 </svg>
//                             )}

//                             {price.label}
//                         </li>
//                     );
//                 })}
//             </ul>

//             <button
//                 type="button"
//                 className="w-full px-3 py-3 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
//             >
//                 Choose plan
//             </button>
//         </div>
//     );
// };
// export default PricingCard2;
// `.trim(),
//   '/components/commerce/pricing/PricingCard3.tsx': 
//     `import React, { FC } from 'react';

// const includes = ['All illimited components Tailwind', 'Own analitycs templates', '24/24 support link'];
// const bonus = ['All free dashboard', 'Best ranking', 'Chocolate and meel'];

// const PricingCard3: FC = () => {
//     return (
//         <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
//             <p className="text-3xl font-bold text-black dark:text-white">Essential</p>
//             <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">For the basics tailwind</p>
//             <p className="text-3xl font-bold text-black dark:text-white">\$99</p>
//             <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">Per agent per month</p>

//             <button
//                 type="button"
//                 className="w-56 px-3 py-3 m-auto text-sm text-black bg-white border border-black rounded-lg shadow hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
//             >
//                 Request demo
//             </button>

//             <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
//                 {includes.map((price) => {
//                     return (
//                         <li key={price} className="flex items-center mb-3">
//                             <svg
//                                 className="mr-2"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 viewBox="0 0 1792 1792"
//                             >
//                                 <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
//                             </svg>
//                             {price}
//                         </li>
//                     );
//                 })}
//             </ul>
//             <span className="block w-56 h-1 my-2 bg-gray-100 rounded-lg" />
//             <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
//                 {bonus.map((bon, index) => {
//                     return (
//                         <li key={index} className="flex items-center mb-3 space-x-2">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 fill="#10b981"
//                                 viewBox="0 0 1792 1792"
//                             >
//                                 <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
//                             </svg>
//                             <div>
//                                 {bon}
//                                 {index === 0 && (
//                                     <a href="#" className="font-semibold text-red-500">
//                                         free plan
//                                     </a>
//                                 )}
//                             </div>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };
// export default PricingCard3;
// `.trim(),
//   '/components/commerce/pricing/PricingCard4.tsx': 
//     `import React, { FC } from 'react';

// const PricingCard4: FC = () => {
//     return (
//         <div className="mb-4 overflow-hidden rounded-lg shadow-lg">
//             <div className="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
//                 <div className="flex justify-center">
//                     <span className="inline-flex px-4 py-1 text-sm font-semibold leading-5 tracking-wide uppercase rounded-full dark:text-white">
//                         Team Plan
//                     </span>
//                 </div>
//                 <div className="flex justify-center mt-4 text-6xl font-extrabold leading-none dark:text-white">
//                     <span className="ml-1 mr-3 text-xl font-medium leading-8 text-gray-500 dark:text-gray-400">
//                         from
//                     </span>
//                     \$10
//                     <span className="pt-8 ml-1 text-2xl font-medium leading-8 text-gray-500 dark:text-gray-400">
//                         /month
//                     </span>
//                 </div>
//             </div>
//             <div className="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
//                 <ul>
//                     <li className="flex items-start mt-4">
//                         <div className="flex-shrink-0">
//                             <svg
//                                 className="w-6 h-6 text-green-500"
//                                 stroke="currentColor"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M5 13l4 4L19 7"
//                                 ></path>
//                             </svg>
//                         </div>
//                         <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">\$10/month per user</p>
//                     </li>
//                     <li className="flex items-start mt-4">
//                         <div className="flex-shrink-0">
//                             <svg
//                                 className="w-6 h-6 text-green-500"
//                                 stroke="currentColor"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M5 13l4 4L19 7"
//                                 ></path>
//                             </svg>
//                         </div>
//                         <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
//                             Unlimited number of projects
//                         </p>
//                     </li>
//                     <li className="flex items-start mt-4">
//                         <div className="flex-shrink-0">
//                             <svg
//                                 className="w-6 h-6 text-green-500"
//                                 stroke="currentColor"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M5 13l4 4L19 7"
//                                 ></path>
//                             </svg>
//                         </div>
//                         <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">Cancel anytime</p>
//                     </li>
//                 </ul>
//                 <div className="mt-6 rounded-md shadow">
//                     <a
//                         href="#"
//                         className="flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
//                     >
//                         Start team plan
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default PricingCard4;
// `.trim(),
//   '/components/commerce/pricing/PricingCard5.tsx': 
//     `import React, { FC } from 'react';

// const PricingCard5: FC = () => {
//     return (
//         <section className="px-2 py-1 mb-4 bg-white border-2 border-t-8 border-purple-600 rounded w-72 dark:bg-gray-800">
//             <section className="w-full">
//                 <header className="text-3xl text-center md:mt-5 dark:text-white">Recruiter</header>
//                 <header className="justify-center w-full mb-2 text-center md:flex">
//                     <span className="text-6xl text-purple-600">50</span>
//                     <span className="text-2xl dark:text-white">\$</span>
//                     <span className="text-6xl line-through dark:text-white">150</span>
//                 </header>

//                 <ul className="p-1 mt-5 text-gray-600 text-md dark:text-gray-200">
//                     <li className="flex py-1 mb-1">
//                         <svg
//                             fill="none"
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                             className="w-8 h-8 font-bold text-indigo-800 dark:text-white"
//                         >
//                             <path d="M5 13l4 4L19 7"></path>
//                         </svg>
//                         &nbsp;Everything in Access
//                     </li>
//                     <li className="flex py-1 mb-1">
//                         <svg
//                             fill="none"
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                             className="w-8 h-8 font-bold text-indigo-800 dark:text-white"
//                         >
//                             <path d="M5 13l4 4L19 7"></path>
//                         </svg>
//                         &nbsp;100+ members
//                     </li>
//                     <li className="flex py-1 mb-1">
//                         <svg
//                             fill="none"
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                             className="w-8 h-8 font-bold text-indigo-800 dark:text-white"
//                         >
//                             <path d="M5 13l4 4L19 7"></path>
//                         </svg>
//                         &nbsp;All videos
//                     </li>
//                     <li className="flex py-1 mb-1">
//                         <svg
//                             fill="none"
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                             className="w-8 h-8 font-bold text-indigo-800 dark:text-white"
//                         >
//                             <path d="M5 13l4 4L19 7"></path>
//                         </svg>
//                         &nbsp;1 Job Post for 30 days
//                     </li>
//                 </ul>
//             </section>
//         </section>
//     );
// };
// export default PricingCard5;
// `.trim(),
//   '/components/commerce/pricing/PricingCard6.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../../elements/buttons/Button';

// const PricingCard6: FC = () => {
//     return (
//         <div className="max-w-xs p-4 bg-white rounded-lg shadow-lg w-72 dark:bg-gray-800">
//             <p className="pt-4 text-2xl font-bold leading-normal text-center text-black dark:text-white">Pro</p>
//             <p className="pb-4 text-4xl font-bold leading-normal text-center text-black font-inter dark:text-white">
//                 <span className="text-base font-medium leading-loose text-center text-black uppercase font-inter dark:text-white">
//                     \$
//                 </span>
//                 19
//                 <span className="text-sm font-bold leading-tight text-center text-black opacity-50 font-inter dark:text-white">
//                     /user/month
//                 </span>
//             </p>
//             <ul>
//                 <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
//                     All features included
//                 </li>
//                 <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
//                     3 Mailboxes
//                 </li>
//                 <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
//                     Saved replies
//                 </li>
//                 <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
//                     Social Inbox
//                 </li>
//                 <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
//                     Reports
//                 </li>
//                 <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
//                     Collaboration tools (tags,notes)
//                 </li>
//                 <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
//                     Satisfaction ratings
//                 </li>
//                 <li className="py-4 text-xs font-medium leading-normal text-center text-black border-t border-gray-300 font-inter dark:text-white">
//                     Workflows
//                 </li>
//             </ul>
//             <div className="py-4 text-center">
//                 <Button label="Try it free" color="indigo" />
//             </div>
//         </div>
//     );
// };
// export default PricingCard6;
// `.trim(),
//   '/components/commerce/pricing/PricingCard7.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../../elements/buttons/Button';
// import { prices, notIncluded } from './PricingCard';

// const PricingCard7: FC = () => {
//     return (
//         <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
//             <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
//                 <div className="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12">
//                     <h3 className="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
//                         Zero Commission
//                     </h3>
//                     <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
//                         Start selling online for free with all the features you need to launch your local delivery and
//                         pick-up service, nothing more. We don't charge commission or monthly fees, keep all your margin.
//                     </p>
//                     <div className="mt-8">
//                         <div className="flex items-center">
//                             <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
//                                 What's included
//                             </h4>
//                             <div className="flex-1 border-t-2 border-gray-200"></div>
//                         </div>
//                         <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
//                             {prices.map((price) => {
//                                 return (
//                                     <li className="flex items-start lg:col-span-1" key={price.label}>
//                                         <div className="flex-shrink-0">
//                                             <svg
//                                                 className="w-6 h-6 mr-2"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 width="6"
//                                                 height="6"
//                                                 stroke="currentColor"
//                                                 fill="#10b981"
//                                                 viewBox="0 0 1792 1792"
//                                             >
//                                                 <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
//                                             </svg>
//                                         </div>
//                                         <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
//                                             {price.label}
//                                         </p>
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     </div>
//                     <div className="mt-8">
//                         <div className="flex items-center">
//                             <h4 className="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider text-indigo-600 uppercase bg-white dark:bg-gray-800">
//                                 &amp; What's not
//                             </h4>
//                         </div>
//                         <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
//                             {notIncluded.map((not) => {
//                                 return (
//                                     <li className="flex items-start lg:col-span-1" key={not}>
//                                         <div className="flex-shrink-0">
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 width="6"
//                                                 height="6"
//                                                 className="w-6 h-6 mr-2"
//                                                 fill="red"
//                                                 viewBox="0 0 1792 1792"
//                                             >
//                                                 <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
//                                             </svg>
//                                         </div>
//                                         <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">{not}</p>
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="px-6 py-8 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
//                     <p className="text-lg font-bold leading-6 text-gray-900 dark:text-white">Free</p>
//                     <div className="flex items-center justify-center mt-4 text-5xl font-extrabold leading-none text-gray-900 dark:text-white">
//                         <span>\$0/mo</span>
//                     </div>
//                     <p className="mt-4 text-sm leading-5">
//                         <span className="block font-medium text-gray-500 dark:text-gray-400">Card payments:</span>
//                         <span className="inline-block font-medium text-gray-500  dark:text-gray-400">
//                             2.9% + 20p per transaction
//                         </span>
//                     </p>
//                     <div className="mt-6">
//                         <div className="rounded-md shadow">
//                             <Button label="Create your store" color="indigo" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default PricingCard7;
// `.trim(),
//   '/components/commerce/pricing/PricingCard8.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../../elements/buttons/Button';

// const PricingCard8: FC = () => {
//     return (
//         <div className="p-4 mx-auto text-center bg-white border-t-4 border-indigo-500 rounded shadow w-72 dark:bg-gray-800">
//             <div className="overflow-hidden">
//                 <div className="mb-8 text-2xl font-medium text-gray-800 dark:text-white">Basic</div>
//                 <div className="mb-10 text-sm font-light leading-loose text-gray-700 dark:text-gray-50">
//                     <div className="font-bold">5000 products</div> <div>All features</div>
//                     <div>Free support</div>
//                 </div>
//                 <div className="mb-2 text-2xl font-bold text-gray-500 dark:text-gray-200">
//                     <span>249 \$</span>
//                 </div>
//                 <div className="text-sm text-gray-500 dark:text-gray-200">/ month</div>
//                 <div className="px-4 mt-8">
//                     <Button color="indigo" label="Start" />
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default PricingCard8;
// `.trim(),
//   '/components/commerce/pricing/PricingCard9.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../../elements/buttons/Button';

// const PricingCard9: FC = () => {
//     return (
//         <div className="p-4 mx-auto text-center bg-white border-indigo-500 rounded shadow h-36 w-96 dark:bg-gray-800">
//             <div className="flex items-center justify-between h-full">
//                 <div className="flex flex-col justify-between h-full">
//                     <div>
//                         <span className="p-2 mr-2 text-white bg-gray-700 rounded dark:bg-gray-400">Business</span>
//                         <span className="dark:text-white"> Plan </span>
//                     </div>
//                     <div>
//                         <p className="mb-0 text-left text-gray-500 dark:text-gray-300">12 of 20 user</p>
//                         <div className="w-full h-4 mt-3 bg-gray-400 rounded-full">
//                             <div className={\\`w-2/3 h-full text-center text-xs text-white bg-indigo-500 rounded-full\\`}>
//                                 60%
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex flex-col justify-between h-full">
//                     <p className="text-4xl font-bold text-gray-900 dark:text-white">
//                         <span className="text-sm">\$</span> 199 <span className="text-sm text-gray-300">/ month </span>
//                     </p>
//                     <Button color="indigo" label="Upgrade plan" />
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default PricingCard9;
// `.trim(),
//   '/components/commerce/shopping/ClassicShoppingCard.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../../elements/buttons/Button';
// const ClassicShoppingCard: FC = () => {
//     return (
//         <div className="flex bg-white rounded-lg shadow dark:bg-gray-800">
//             <div className="relative flex-none w-24 md:w-48">
//                 <img
//                     src="/images/object/8.jpg"
//                     alt="shopping image"
//                     className="absolute inset-0 object-cover w-full h-full rounded-lg"
//                 />
//             </div>
//             <form className="flex-auto p-6">
//                 <div className="flex flex-wrap">
//                     <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">Classic Utility Jacket</h1>
//                     <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">\$110.00</div>
//                     <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
//                         In stock
//                     </div>
//                 </div>
//                 <div className="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
//                     <div className="flex space-x-2">
//                         <label className="text-center">
//                             <input
//                                 className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg dark:bg-gray-600"
//                                 name="size"
//                                 type="radio"
//                                 value="xs"
//                             />
//                             XS
//                         </label>
//                         <label className="text-center">
//                             <input
//                                 className="flex items-center justify-center w-6 h-6"
//                                 name="size"
//                                 type="radio"
//                                 value="s"
//                             />
//                             S
//                         </label>
//                         <label className="text-center">
//                             <input
//                                 className="flex items-center justify-center w-6 h-6"
//                                 name="size"
//                                 type="radio"
//                                 value="m"
//                             />
//                             M
//                         </label>
//                         <label className="text-center">
//                             <input
//                                 className="flex items-center justify-center w-6 h-6"
//                                 name="size"
//                                 type="radio"
//                                 value="l"
//                             />
//                             L
//                         </label>
//                         <label className="text-center">
//                             <input
//                                 className="flex items-center justify-center w-6 h-6"
//                                 name="size"
//                                 type="radio"
//                                 value="xl"
//                             />
//                             XL
//                         </label>
//                     </div>
//                     <a href="#" className="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">
//                         Size Guide
//                     </a>
//                 </div>
//                 <div className="flex mb-4 text-sm font-medium">
//                     <Button label="Buy now" color="indigo" />
//                 </div>
//                 <p className="text-sm text-gray-500 dark:text-gray-300">Free shipping on all continental US orders.</p>
//             </form>
//         </div>
//     );
// };
// export default ClassicShoppingCard;
// `.trim(),
//   '/components/commerce/shopping/MultipleShoppingCard.tsx': 
//     `import React from 'react';

// interface Props {
//     showOne?: boolean;
// }

// const MultipleShoppingCard = (props: Props) => {
//     return (
//         <div className="flex flex-wrap items-center justify-center">
//             <div className="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-yellow-500 rounded-lg shadow-lg">
//                 <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
//                     <rect
//                         x="159.52"
//                         y="175"
//                         width="152"
//                         height="152"
//                         rx="8"
//                         transform="rotate(-45 159.52 175)"
//                         fill="#f3c06b"
//                     />
//                     <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="#f3c06b" />
//                 </svg>
//                 <div className="relative flex items-center justify-center px-10 pt-10">
//                     <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
//                     <picture>
//                         <source srcSet="/images/object/5.webp" type="image/webp" />
//                         <source srcSet="/images/object/5.png" />
//                         <img className="relative w-40" src="/images/object/5.png" alt="shopping item" />
//                     </picture>
//                 </div>
//                 <div className="relative px-6 pb-6 mt-6 text-white">
//                     <span className="block -mb-1 opacity-75">Indoor</span>
//                     <div className="flex justify-between">
//                         <span className="block text-xl font-semibold">Peace Lily</span>
//                         <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-yellow-500 bg-white rounded-full">
//                             \$36.00
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             {!props.showOne && (
//                 <>
//                     <div className="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-blue-500 rounded-lg shadow-lg sm:mb-0">
//                         <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
//                             <rect
//                                 x="159.52"
//                                 y="175"
//                                 width="152"
//                                 height="152"
//                                 rx="8"
//                                 transform="rotate(-45 159.52 175)"
//                                 fill="#6da3fb"
//                             />
//                             <rect
//                                 y="107.48"
//                                 width="152"
//                                 height="152"
//                                 rx="8"
//                                 transform="rotate(-45 0 107.48)"
//                                 fill="#6da3fb"
//                             />
//                         </svg>
//                         <div className="relative flex items-center justify-center px-10 pt-10">
//                             <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
//                             <img className="relative w-40" src="/images/object/6.png" alt="shopping" />
//                         </div>
//                         <div className="relative px-6 pb-6 mt-6 text-white">
//                             <span className="block -mb-1 opacity-75">Outdoor</span>
//                             <div className="flex justify-between">
//                                 <span className="block text-xl font-semibold">Monstera</span>
//                                 <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-blue-500 bg-white rounded-full">
//                                     \$45.00
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="relative flex-shrink-0 max-w-xs mx-2 -mb-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg">
//                         <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
//                             <rect
//                                 x="159.52"
//                                 y="175"
//                                 width="152"
//                                 height="152"
//                                 rx="8"
//                                 transform="rotate(-45 159.52 175)"
//                                 fill="#a17cf3"
//                             />
//                             <rect
//                                 y="107.48"
//                                 width="152"
//                                 height="152"
//                                 rx="8"
//                                 transform="rotate(-45 0 107.48)"
//                                 fill="#a17cf3"
//                             />
//                         </svg>
//                         <div className="relative flex items-center justify-center px-10 pt-10">
//                             <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
//                             <img className="relative w-40" src="/images/object/7.png" alt="shopping" />
//                         </div>
//                         <div className="relative px-6 pb-6 mt-6 text-white">
//                             <span className="block -mb-1 opacity-75">Outdoor</span>
//                             <div className="flex justify-between">
//                                 <span className="block text-xl font-semibold">Oak Tree</span>
//                                 <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-purple-500 bg-white rounded-full">
//                                     \$68.50
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };
// export default MultipleShoppingCard;
// `.trim(),
//   '/components/commerce/shopping/ProductWithEval.tsx': 
//     `import React, { FC } from 'react';
// const ProductWithEval: FC = () => {
//     return (
//         <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
//             <div className="w-1/3 bg-cover bg-landscape"></div>
//             <div className="w-2/3 p-4">
//                 <h1 className="text-2xl font-bold text-gray-900">Tomorow</h1>
//                 <p className="mt-2 text-sm text-gray-600">
//                     You can't buy your future, but you can do it. Money is nothing, you'r everything.
//                 </p>
//                 <div className="flex mt-2 item-center">
//                     <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
//                         <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
//                     </svg>
//                     <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
//                         <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
//                     </svg>
//                     <svg className="w-5 h-5 text-gray-700 fill-current" viewBox="0 0 24 24">
//                         <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
//                     </svg>
//                     <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
//                         <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
//                     </svg>
//                     <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
//                         <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
//                     </svg>
//                 </div>
//                 <div className="flex justify-between mt-3 item-center">
//                     <h1 className="text-xl font-bold text-gray-700">\$220</h1>
//                     <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
//                         Add to Card
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ProductWithEval;
// `.trim(),
//   '/components/commerce/shopping/ShippedCard.tsx': 
//     `import React, { FC } from 'react';
// const ShippedCard: FC = () => {
//     return (
//         <div className="relative w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-900">
//             <div className="w-full h-full text-center">
//                 <div className="flex flex-col justify-between h-full">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="40"
//                         height="40"
//                         fill="currentColor"
//                         className="w-20 h-20 m-auto mt-4 text-gray-800 dark:text-white"
//                         viewBox="0 0 2048 1792"
//                     >
//                         <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z" />
//                     </svg>
//                     <p className="absolute text-sm italic text-gray-800 dark:text-white top-2 right-2">by express</p>
//                     <p className="mt-4 text-lg text-gray-900 dark:text-white">Package delivered</p>
//                     <p className="px-6 py-2 text-xs font-thin text-gray-700 dark:text-gray-50">
//                         Your package was delivered in 1 day and 4 hours by our postal partner
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ShippedCard;
// `.trim(),
//   '/components/commerce/shopping/ShoppingColorChoice.tsx': 
//     `import React, { FC } from 'react';
// const ShoppingColorChoice: FC = () => {
//     return (
//         <div className="flex items-center justify-center w-80">
//             <div className="w-full p-4">
//                 <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
//                     <div className="prod-title">
//                         <p className="text-2xl font-bold text-gray-900 uppercase">Puma Shoes</p>
//                         <p className="text-sm text-gray-400 uppercase">The best shoes in the marketplace</p>
//                     </div>
//                     <div className="prod-img">
//                         <img src="/images/object/4.jpg" className="object-cover object-center w-full" />
//                     </div>
//                     <div className="grid gap-10 prod-info">
//                         <div>
//                             <ul className="flex flex-row items-center justify-center">
//                                 <li className="mr-4 last:mr-0">
//                                     <span className="block p-1 transition duration-300 ease-in border-2 border-gray-500 rounded-full">
//                                         <a href="#blue" className="block w-6 h-6 bg-blue-900 rounded-full"></a>
//                                     </span>
//                                 </li>
//                                 <li className="mr-4 last:mr-0">
//                                     <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
//                                         <a href="#yellow" className="block w-6 h-6 bg-yellow-500 rounded-full"></a>
//                                     </span>
//                                 </li>
//                                 <li className="mr-4 last:mr-0">
//                                     <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
//                                         <a href="#red" className="block w-6 h-6 bg-red-500 rounded-full"></a>
//                                     </span>
//                                 </li>
//                                 <li className="mr-4 last:mr-0">
//                                     <span className="block p-1 transition duration-300 ease-in border-2 border-white rounded-full hover:border-gray-500">
//                                         <a href="#green" className="block w-6 h-6 bg-green-500 rounded-full"></a>
//                                     </span>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
//                             <p className="text-xl font-bold">65 \$</p>
//                             <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
//                                 Add to cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ShoppingColorChoice;
// `.trim(),
//   '/components/commerce/shopping/ShoppingDetailsCard.tsx': 
//     `import React, { FC } from 'react';
// const ShoppingDetailsCard: FC = () => {
//     return (
//         <div className="w-64 p-2 m-auto bg-white shadow-lg rounded-2xl">
//             <img src="/images/object/3.png" alt="adidas" className="w-32 p-4 m-auto h-36" />

//             <div className="p-4 m-3 bg-pink-200 rounded-lg">
//                 <p className="text-xl font-bold text-white ">Adidas</p>
//                 <p className="text-xs text-gray-50">Live your dream</p>
//                 <div className="flex items-center justify-between ">
//                     <p className="text-white">\$98.00</p>
//                     <button
//                         type="button"
//                         className="w-10 h-10 text-base font-medium text-white bg-pink-500 rounded-full hover:bg-pink-700"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="16"
//                             height="16"
//                             className="mx-auto"
//                             fill="white"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ShoppingDetailsCard;
// `.trim(),
//   '/components/commerce/shopping/SimpleShoppingCard.tsx': 
//     `import React, { FC } from 'react';
// const SimpleShoppingCard: FC = () => {
//     return (
//         <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
//             <img alt="moto" src="/images/object/1.png" className="absolute w-40 h-40 mb-4 -right-20 -bottom-8" />
//             <div className="w-4/6">
//                 <p className="mb-2 text-lg font-medium text-gray-800">Avg</p>
//                 <p className="text-xs text-gray-400">
//                     Detail is not an obsession, it is the very essence of perfection.
//                 </p>
//                 <p className="text-xl font-medium text-indigo-500">\$399</p>
//             </div>
//         </div>
//     );
// };
// export default SimpleShoppingCard;
// `.trim(),
//   '/components/elements/alert/BandeauAlert.tsx': 
//     `import React from 'react';

// interface Props {
//     title: string;
//     shortTitle: string;
//     link?: string;
//     linkLabel?: string;
//     closeAction?: () => void;
// }

// const BandeauAlert = (props: Props) => {
//     return (
//         <div className="bg-pink-600 dark:bg-gray-800">
//             <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
//                 <div className="flex flex-wrap items-center justify-between">
//                     <div className="flex items-center flex-1 w-0">
//                         <span className="flex p-2 bg-pink-800 rounded-lg dark:bg-black">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="w-6 h-6 text-white"
//                                 viewBox="0 0 1792 1792"
//                             >
//                                 <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
//                             </svg>
//                         </span>
//                         <p className="ml-3 font-medium text-white truncate">
//                             <span className="md:hidden">{props.shortTitle}</span>
//                             <span className="hidden md:inline">{props.title}</span>
//                         </p>
//                     </div>
//                     <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
//                         <a
//                             href={props.link}
//                             className="flex items-center justify-center px-4 py-2 text-sm font-medium text-pink-600 bg-white border border-transparent rounded-md shadow-sm dark:text-gray-800 hover:bg-pink-50"
//                         >
//                             {props.linkLabel}
//                         </a>
//                     </div>
//                     <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
//                         <button
//                             type="button"
//                             onClick={() => props.closeAction && props.closeAction()}
//                             className="flex p-2 -mr-1 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
//                         >
//                             <span className="sr-only">Dismiss</span>
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="16"
//                                 height="16"
//                                 fill="currentColor"
//                                 className="w-6 h-6 text-white"
//                                 viewBox="0 0 1792 1792"
//                             >
//                                 <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BandeauAlert;
// `.trim(),
//   '/components/elements/alert/BandeauLineAlert.tsx': 
//     `import React from 'react';

// interface Props {
//     title: string;
//     closeAction?: () => void;
// }

// const BandeauLineAlert = (props: Props) => {
//     return (
//         <div className="flex items-center px-5 py-4 mb-2 text-blue-500 border border-blue-500 rounded-md jusitfy-between">
//             <div className="flex items-center w-full">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                     className="w-6 h-6 mr-2 "
//                     viewBox="0 0 1792 1792"
//                 >
//                     <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
//                 </svg>
//                 {props.title}
//             </div>
//             <button
//                 type="button"
//                 onClick={() => props.closeAction && props.closeAction()}
//                 className="flex flex-shrink-0 p-2 -mr-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:-mr-2"
//             >
//                 <span className="sr-only">Dismiss</span>
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="w-6 h-6 text-blue-500"
//                     viewBox="0 0 1792 1792"
//                 >
//                     <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
//                 </svg>
//             </button>
//         </div>
//     );
// };

// export default BandeauLineAlert;
// `.trim(),
//   '/components/elements/alert/ClosableLongAlert.tsx': 
//     `import React from 'react';

// interface Props {
//     text: string;
// }

// const ClosableLongAlert = (props: Props) => {
//     return (
//         <div
//             className="container relative flex items-center px-4 py-3 text-sm font-bold text-white bg-blue-500"
//             role="alert"
//         >
//             <svg
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 className="w-4 h-4 mr-2"
//                 viewBox="0 0 1792 1792"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path d="M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z" />
//             </svg>

//             <p>{props.text}</p>

//             <button className="absolute top-0 bottom-0 right-0 px-4 py-3">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="w-6 h-6 text-white"
//                     viewBox="0 0 1792 1792"
//                 >
//                     <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
//                 </svg>
//             </button>
//         </div>
//     );
// };

// export default ClosableLongAlert;
// `.trim(),
//   '/components/elements/alert/ConfirmationCard.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../buttons/Button';
// const ConfirmationCard: FC = () => {
//     return (
//         <div className="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
//             <div className="w-full h-full text-center">
//                 <div className="flex flex-col justify-between h-full">
//                     <svg
//                         width="40"
//                         height="40"
//                         className="w-12 h-12 m-auto mt-4 text-indigo-500"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z" />
//                     </svg>

//                     <p className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">Remove card</p>
//                     <p className="px-6 py-2 text-xs text-gray-600 dark:text-gray-400">
//                         Are you sure you want to delete this card ?
//                     </p>
//                     <div className="flex items-center justify-between w-full gap-4 mt-8">
//                         <Button color="indigo" label="Delete" />
//                         <Button color="white" label="Cancel" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ConfirmationCard;
// `.trim(),
//   '/components/elements/alert/CookieAlert2.tsx': 
//     `import React from 'react';
// import Button from '../buttons/Button';

// const CookieAlert2 = () => {
//     return (
//         <div className="p-6 bg-white rounded-lg shadow-md w-72">
//             <div className="relative w-16 mx-auto mb-3 -mt-10">
//                 <img className="-mt-1" src="/icons/cookie.svg" alt="cookie" />
//             </div>

//             <span className="block w-full mb-3 leading-normal text-gray-800 sm:w-48 text-md">
//                 We care about your data, and we'd love to use cookies to make your experience better.
//             </span>

//             <div className="flex items-center justify-between">
//                 <a className="mr-1 text-xs text-gray-400 hover:text-gray-800" href="#">
//                     Privacy Policy
//                 </a>
//                 <div className="w-1/2">
//                     <Button label="See more" color="indigo" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CookieAlert2;
// `.trim(),
//   '/components/elements/alert/InformationCard.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../buttons/Button';
// const InformationCard: FC = () => {
//     return (
//         <div className="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
//             <div className="w-full h-full text-center">
//                 <div className="flex flex-col justify-between h-full">
//                     <svg
//                         className="w-12 h-12 m-auto mt-4 text-green-500"
//                         stroke="currentColor"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                     <p className="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
//                         User <span className="font-bold text-gray-800 dark:text-white">23722873 </span> has been deleted
//                         form database.
//                     </p>
//                     <div className="flex items-center justify-between w-full gap-4 mt-8">
//                         <Button color="indigo" label="Close" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default InformationCard;
// `.trim(),
//   '/components/elements/alert/InformationModale.tsx': 
//     `import React, { ReactNode } from 'react';

// interface Props {
//     children: ReactNode;
//     withCloseBtn?: boolean;
//     onClose: () => null;
//     withFooter?: boolean;
// }

// const InformationModale = ({ children, withCloseBtn, onClose, withFooter }: Props) => {
//     return (
//         <div className="relative">
//             <div className="inset-0 z-10 w-full h-screen overflow-y-auto">
//                 <div className="absolute inset-0 w-full h-full bg-gray-500 opacity-75"></div>

//                 <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//                     <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>

//                     <div
//                         className="relative inline-block overflow-hidden transition-all transform sm:align-middle sm:max-w-lg"
//                         role="dialog"
//                         aria-modal="true"
//                         aria-labelledby="modal-headline"
//                     >
//                         <div>
//                             <div className={\\`\${withFooter ? 'rounded-t-lg' : 'rounded-lg'} p-8 bg-white shadow\\`}>
//                                 {withCloseBtn && (
//                                     <div className="absolute right-4 top-4">
//                                         <button
//                                             onClick={() => onClose}
//                                             className="bg-transparent border border-transparent"
//                                         >
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 width="16"
//                                                 height="16"
//                                                 fill="currentColor"
//                                                 className="w-6 h-6 text-gray-700"
//                                                 viewBox="0 0 1792 1792"
//                                             >
//                                                 <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 )}
//                                 {children}
//                             </div>
//                             {withFooter && (
//                                 <div className="px-4 py-3 rounded-b-lg bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
//                                     <button
//                                         type="button"
//                                         className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
//                                     >
//                                         Deactivate
//                                     </button>
//                                     <button
//                                         type="button"
//                                         className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                                     >
//                                         Cancel
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default InformationModale;
// `.trim(),
//   '/components/elements/alert/SimpleAlert.tsx': 
//     `import React from 'react';

// interface Props {
//     type: 'alert' | 'success' | 'danger';
//     title: string;
//     text: string;
// }

// const SimpleAlert = (props: Props) => {
//     let cssClasses = 'bg-yellow-200 border-yellow-600 text-yellow-600';
//     if (props.type !== 'alert') {
//         cssClasses =
//             props.type === 'success'
//                 ? 'bg-green-200 border-green-600 text-green-600'
//                 : 'bg-red-200 border-red-600 text-red-600';
//     }

//     return (
//         <div className={\\`\${cssClasses} border-l-4 p-4\\`} role="alert">
//             <p className="font-bold">{props.title}</p>
//             <p>{props.text}</p>
//         </div>
//     );
// };

// export default SimpleAlert;
// `.trim(),
//   '/components/elements/avatars/Avatar.tsx': 
//     `import React from 'react';

// interface Props {
//     withBorder?: boolean;
//     withInfo?: boolean;
//     img?: string;
//     size?: 'small' | 'normal' | 'big' | 'monster';
//     type?: 'square' | 'rounded' | 'full';
// }
// const Avatar = ({ withBorder, size, withInfo, type, img }: Props) => {
//     let sizeClasses = 'h-16 w-16';
//     if (size && size !== 'normal') {
//         sizeClasses = size === 'small' ? 'h-10 w-10' : 'h-20 w-20';
//         if (size === 'monster') {
//             sizeClasses = 'h-40 w-40';
//         }
//     }

//     let roundedClasses = 'rounded-full';
//     if (type && type !== 'full') {
//         roundedClasses = type === 'square' ? '' : 'rounded-lg';
//     }
//     return (
//         <a href="#" className="relative block">
//             <img
//                 alt="profil"
//                 src={img || '/images/person/1.jpg'}
//                 className={\\`mx-auto object-cover \${roundedClasses} \${sizeClasses} \${
//                     withBorder ? ' border-2 border-white dark:border-gray-800' : ''
//                 }\\`}
//             />
//             {withInfo && (
//                 <span className="absolute w-3 h-3 transform -translate-x-1/2 bg-green-500 border-2 border-white rounded-full left-1/2 -bottom-2"></span>
//             )}
//         </a>
//     );
// };
// export default Avatar;
// `.trim(),
//   '/components/elements/avatars/MultipleAvatar.tsx': 
//     `import React from 'react';
// interface Props {
//     size?: 'small' | 'normal' | 'big';
//     withHoverEffect?: boolean;
// }
// const MultipleAvatar = ({ size, withHoverEffect }: Props) => {
//     let sizeClasses = 'h-16 w-16';
//     if (size && size !== 'normal') {
//         sizeClasses = size === 'small' ? 'h-10 w-10' : 'h-20 w-20';
//     }

//     const effectClasses = withHoverEffect
//         ? 'hover:scale-150 hover:z-10 transform ease-in-out transition duration-500'
//         : '';

//     return (
//         <div className="flex -space-x-2">
//             <a href="#" className={\\`\${effectClasses}\\`}>
//                 <img
//                     className={\\`inline-block \${sizeClasses} rounded-full object-cover ring-2 ring-white\\`}
//                     src="/images/person/1.jpg"
//                     alt="Guy"
//                 />
//             </a>
//             <a href="#" className={\\`\${effectClasses}\\`}>
//                 <img
//                     className={\\`inline-block \${sizeClasses} rounded-full object-cover ring-2 ring-white\\`}
//                     src="/images/person/2.jpeg"
//                     alt="Max"
//                 />
//             </a>
//             <a href="#" className={\\`\${effectClasses}\\`}>
//                 <img
//                     className={\\`inline-block \${sizeClasses} rounded-full object-cover ring-2 ring-white\\`}
//                     src="/images/person/3.jpg"
//                     alt="Charles"
//                 />
//             </a>
//             <a href="#" className={\\`\${effectClasses}\\`}>
//                 <img
//                     className={\\`inline-block \${sizeClasses} rounded-full object-cover ring-2 ring-white\\`}
//                     src="/images/person/4.jpg"
//                     alt="Jade"
//                 />
//             </a>
//         </div>
//     );
// };
// export default MultipleAvatar;
// `.trim(),
//   '/components/elements/badges/Badge.tsx': 
//     `import React from 'react';

// interface Props {
//     color?: string;
//     removeAction?: () => void;
//     textColor?: string;
//     borderColor?: string;
//     label?: string;
//     icon?: boolean;
//     rounded?:
//         | 'rounded-none'
//         | 'rounded-sm'
//         | 'rounded'
//         | 'rounded-md'
//         | 'rounded-lg'
//         | 'rounded-xl'
//         | 'rounded-2xl'
//         | 'rounded-3xl'
//         | 'rounded-full';
//     isSmall?: boolean;
//     isMediumWeight?: boolean;
// }

// const Badge = (props: Props) => {
//     return (
//         <span
//             className={\\`\${props.isSmall ? \\`px-2 py-1\\` : \\`px-4 py-2\\`} \${
//                 props.icon ? 'flex items-center' : ''
//             } text-base \${props.rounded} \${props.textColor ? props.textColor : ''} \${
//                 props.borderColor ? props.borderColor : ''
//             } \${props.color} \${props.isMediumWeight ? 'font-medium' : ''}\\`}
//         >
//             {props.icon && (
//                 <svg
//                     width="20"
//                     fill="currentColor"
//                     height="20"
//                     className="mr-2"
//                     viewBox="0 0 1792 1792"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
//                 </svg>
//             )}
//             {props.label}
//             {props.removeAction && (
//                 <button className="bg-transparent hover" onClick={props.removeAction}>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="12"
//                         height="12"
//                         fill="currentColor"
//                         className="ml-4"
//                         viewBox="0 0 1792 1792"
//                     >
//                         <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
//                     </svg>
//                 </button>
//             )}
//         </span>
//     );
// };

// export default Badge;
// `.trim(),
//   '/components/elements/badges/BadgeList.tsx': 
//     `import React, { FC } from 'react';
// import Badge from './Badge';

// const BadgeList: FC = () => {
//     return (
//         <div className="flex flex-wrap items-center gap-4">
//             <Badge rounded="rounded-full" label="refused" color="bg-red-200" textColor="text-red-600" isSmall={false} />
//             <Badge
//                 rounded="rounded-full"
//                 label="pending"
//                 color="bg-yellow-200"
//                 textColor="text-yellow-600"
//                 isSmall={false}
//             />
//             <Badge
//                 rounded="rounded-full"
//                 label="accepted"
//                 color="bg-green-200"
//                 textColor="text-green-600"
//                 isSmall={false}
//             />
//         </div>
//     );
// };

// export default BadgeList;
// `.trim(),
//   '/components/elements/badges/ClickableBadge.tsx': 
//     `import React, { FC } from 'react';
// const ClickableBadge: FC = () => {
//     return (
//         <button
//             type="button"
//             className="flex items-center w-full px-4 py-2 text-base text-red-600 bg-red-200 rounded-full hover:bg-red-300"
//         >
//             Starter
//         </button>
//     );
// };
// export default ClickableBadge;
// `.trim(),
//   '/components/elements/badges/ColoredTextAndBadge.tsx': 
//     `import React from 'react';

// interface Props {
//     textColor?: string;
//     backgroundBadgeColor: string;
//     label: string;
//     badgeLabel: string;
// }
// const ColoredTextAndBadge = (props: Props) => {
//     return (
//         <div className="inline-flex items-center bg-white leading-none \${props.textColor} rounded-full p-2 shadow text-teal text-sm">
//             <span
//                 className={\\`inline-flex \${props.backgroundBadgeColor} text-white rounded-full h-6 px-3 justify-center items-center\\`}
//             >
//                 {props.badgeLabel}
//             </span>
//             <span className={\\`inline-flex px-2 \${props.textColor}\\`}>{props.label}</span>
//         </div>
//     );
// };
// export default ColoredTextAndBadge;
// `.trim(),
//   '/components/elements/badges/NotificationBadge.tsx': 
//     `import React from 'react';

// interface Props {
//     number: number;
//     size?: 'small' | 'normal' | 'big';
// }

// const NotificationBadge = (props: Props) => {
//     let sizeClasses = 'w-8 h-8 text-base';
//     if (props.size && props.size !== 'normal') {
//         sizeClasses = props.size === 'small' ? 'w-6 h-6 text-xs' : 'w-12 h-12 text-base';
//     }
//     return (
//         <button type="button" className={\\`\${sizeClasses}  rounded-full text-white bg-red-500\\`}>
//             <span className="p-1">{props.number}</span>
//         </button>
//     );
// };
// export default NotificationBadge;
// `.trim(),
//   '/components/elements/badges/NotificationIconBadge.tsx': 
//     `import React, { FC } from 'react';
// const NotificationIconBadge: FC = () => {
//     return (
//         <button type="button" className="relative text-4xl text-white text-md">
//             <span className="absolute w-4 h-4 text-xs bg-red-500 rounded-full right-2 leading">2</span>
//             <svg
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 viewBox="0 0 1792 1792"
//                 className="w-8 h-8 text-black"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
//             </svg>
//         </button>
//     );
// };
// export default NotificationIconBadge;
// `.trim(),
//   '/components/elements/buttons/Button.tsx': 
//     `import React from 'react';

// interface Props {
//     rounded?: boolean;
//     color?: string;
//     icon?: JSX.Element;
//     disabled?: boolean;
//     submit?: boolean;
//     isFat?: boolean;
//     label?: string;
//     onClick?: () => void;
// }

// const colors = {
//     white: 'bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500',
//     gray: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200',
//     red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200',
//     yellow: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200',
//     green: 'bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200',
//     blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200',
//     indigo: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200',
//     purple: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200',
//     pink: 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200',
// };

// const Button = (props: Props) => {
//     return (
//         <button
//             onClick={props.onClick}
//             type={props.submit ? 'submit' : 'button'}
//             disabled={props.disabled}
//             className={\\`\${props.isFat ? 'py-4 px-6 ' : 'py-2 px-4 '}\${
//                 props.icon ? 'flex justify-center items-center ' : ''
//             } \${
//                 colors[props.color]
//             } text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 \${
//                 props.disabled ? ' opacity-70 cursor-not-allowed' : ''
//             }\${!props.label ? ' w-12 h-12' : ''} \${props.rounded ? 'rounded-full' : 'rounded-lg '}\\`}
//         >
//             {props.icon && props.icon}

//             {props.label && props.label}
//         </button>
//     );
// };
// export default Button;
// `.trim(),
//   '/components/elements/buttons/ButtonWithIndications.tsx': 
//     `import React from 'react';

// interface Props {
//     label: string;
//     indication: string;
//     onClick?: () => void;
//     onIndicationClick?: () => void;
// }

// const ButtonWithIndications = (props: Props) => {
//     return (
//         <div className="flex items-center">
//             <button
//                 onClick={() => props.onClick()}
//                 type="button"
//                 className="flex items-center w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-100"
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     className="w-4 h-4 mr-2"
//                     fill="currentColor"
//                     viewBox="0 0 1792 1792"
//                 >
//                     <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                 </svg>{' '}
//                 {props.label}
//             </button>

//             <button
//                 type="button"
//                 onClick={() => props.onIndicationClick()}
//                 className="w-full px-4 py-2 text-base font-medium text-black bg-white border rounded-r-md hover:bg-gray-100"
//             >
//                 {props.indication}
//             </button>
//         </div>
//     );
// };
// export default ButtonWithIndications;
// `.trim(),
//   '/components/elements/buttons/MultipleButton.tsx': 
//     `import React, { FC } from 'react';

// const MultipleButton: FC = () => {
//     return (
//         <div className="flex items-center">
//             <button
//                 type="button"
//                 className="w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-100"
//             >
//                 Left
//             </button>
//             <button
//                 type="button"
//                 className="w-full px-4 py-2 text-base font-medium text-black bg-white border hover:bg-gray-100"
//             >
//                 Center
//             </button>
//             <button
//                 type="button"
//                 className="w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-r rounded-r-md hover:bg-gray-100"
//             >
//                 Right
//             </button>
//         </div>
//     );
// };
// export default MultipleButton;
// `.trim(),
//   '/components/elements/buttons/PagerButton.tsx': 
//     `import React, { FC } from 'react';
// const PagerButton: FC = () => {
//     return (
//         <div className="flex items-center">
//             <button
//                 type="button"
//                 className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
//             >
//                 <svg
//                     width="9"
//                     fill="currentColor"
//                     height="8"
//                     className=""
//                     viewBox="0 0 1792 1792"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z" />
//                 </svg>
//             </button>
//             <button
//                 type="button"
//                 className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
//             >
//                 1
//             </button>
//             <button
//                 type="button"
//                 className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
//             >
//                 2
//             </button>
//             <button
//                 type="button"
//                 className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
//             >
//                 3
//             </button>
//             <button
//                 type="button"
//                 className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
//             >
//                 4
//             </button>
//             <button
//                 type="button"
//                 className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
//             >
//                 <svg
//                     width="9"
//                     fill="currentColor"
//                     height="8"
//                     className=""
//                     viewBox="0 0 1792 1792"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
//                 </svg>
//             </button>
//         </div>
//     );
// };
// export default PagerButton;
// `.trim(),
//   '/components/elements/buttons/RoundedButton.tsx': 
//     `import React from 'react';

// interface Props {
//     icon?: boolean;
//     label?: string;
//     onClick?: () => void;
// }

// const RoundedButton = (props: Props) => {
//     return (
//         <button
//             onClick={props.onClick}
//             className={\\`\${props.icon ? 'flex items-center' : ''}\${
//                 props.label ? ' px-6 py-2' : ' p-4'
//             }  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none\\`}
//         >
//             {props.icon && (
//                 <svg
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                     viewBox="0 0 2304 1792"
//                     className={props.label ? 'mr-4' : ''}
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z" />
//                 </svg>
//             )}
//             {props.label}
//         </button>
//     );
// };
// export default RoundedButton;
// `.trim(),
//   '/components/elements/buttons/SquareButton.tsx': 
//     `import React from 'react';

// interface Props {
//     color?: string;
//     icon?: JSX.Element;
//     isFat?: boolean;
//     label?: string;
//     onClick?: () => void;
// }

// const colors = {
//     gray: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200',
//     red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200',
//     yellow: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200',
//     green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200',
//     blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200',
//     indigo: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200',
//     purple: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200',
//     pink: 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200',
//     variant: 'bg-gradient-to-r from-green-400 to-blue-500',
// };

// const SquareButton = (props: Props) => {
//     return (
//         <button
//             onClick={props.onClick}
//             type="button"
//             className={\\`\${props.isFat ? 'py-4 px-6 ' : 'py-2 px-4 '}\${
//                 props.icon ? 'flex justify-center items-center ' : ''
//             } \${
//                 colors[props.color]
//             } text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 \${
//                 !props.label ? ' w-12 h-12' : ''
//             }\\`}
//         >
//             {props.label && props.label}
//             {props.icon && <span className={\\`p-2 ml-4\\`}>{props.icon}</span>}
//         </button>
//     );
// };
// export default SquareButton;
// `.trim(),
//   '/components/elements/buttons/StoreButton.tsx': 
//     `import React from 'react';

// const StoreButton = () => {
//     return (
//         <div className="flex justify-center">
//             <div>
//                 <button
//                     type="button"
//                     className="flex items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-xl"
//                 >
//                     <div className="mr-3">
//                         <svg viewBox="0 0 384 512" width="30">
//                             <path
//                                 fill="currentColor"
//                                 d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
//                             />
//                         </svg>
//                     </div>
//                     <div>
//                         <div className="text-xs">Download on the</div>
//                         <div className="-mt-1 font-sans text-xl font-semibold">App Store</div>
//                     </div>
//                 </button>

//                 <button
//                     type="button"
//                     className="flex items-center justify-center w-48 mt-3 text-black bg-transparent border border-black h-14 rounded-xl"
//                 >
//                     <div className="mr-3">
//                         <svg viewBox="0 0 384 512" width="30">
//                             <path
//                                 fill="currentColor"
//                                 d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
//                             />
//                         </svg>
//                     </div>
//                     <div>
//                         <div className="text-xs">Download on the</div>
//                         <div className="-mt-1 font-sans text-2xl font-semibold">App Store</div>
//                     </div>
//                 </button>

//                 <button
//                     type="button"
//                     className="flex items-center justify-center mt-3 text-white bg-black w-60 h-14 rounded-xl"
//                 >
//                     <div className="mr-3">
//                         <svg viewBox="0 0 384 512" width="30">
//                             <path
//                                 fill="currentColor"
//                                 d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
//                             />
//                         </svg>
//                     </div>
//                     <div>
//                         <div className="text-xs">Download on the</div>
//                         <div className="-mt-1 font-sans text-2xl font-semibold">Mac App Store</div>
//                     </div>
//                 </button>

//                 <button
//                     type="button"
//                     className="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14"
//                 >
//                     <div className="mr-3">
//                         <svg viewBox="30 336.7 120.9 129.2" width="30">
//                             <path
//                                 fill="#FFD400"
//                                 d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
//                             />
//                             <path
//                                 fill="#FF3333"
//                                 d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
//                             />
//                             <path
//                                 fill="#48FF48"
//                                 d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
//                             />
//                             <path
//                                 fill="#3BCCFF"
//                                 d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
//                             />
//                         </svg>
//                     </div>
//                     <div>
//                         <div className="text-xs">GET IT ON</div>
//                         <div className="-mt-1 font-sans text-xl font-semibold">Google Play</div>
//                     </div>
//                 </button>
//             </div>
//         </div>
//     );
// };
// export default StoreButton;
// `.trim(),
//   '/components/elements/data/ActivityCard.tsx': 
//     `import React from 'react';

// const ActivityCard = () => {
//     return (
//         <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-80 dark:bg-gray-800">
//             <div className="flex items-center justify-between w-full mb-8">
//                 <p className="text-xl font-normal text-gray-800 dark:text-white">Activity</p>
//                 <a
//                     href="#"
//                     className="flex items-center text-sm text-gray-300 border-0 hover:text-gray-600 dark:text-gray-50 dark:hover:text-white focus:outline-none"
//                 >
//                     VIEW ALL
//                 </a>
//             </div>
//             <div className="flex items-start justify-between mb-6 rounded">
//                 <span className="p-2 text-white bg-yellow-300 rounded-full dark:text-gray-800">
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z" />
//                     </svg>
//                 </span>

//                 <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col items-start justify-between w-full ml-2 text-sm">
//                         <p className="text-gray-700 dark:text-white">
//                             <span className="mr-1 font-bold">Andrea &nbsp;</span> uploaded 3 documents on concept deisgn
//                             home page
//                         </p>
//                         <p className="text-gray-300">Aug 10</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex items-start justify-between mb-6 rounded">
//                 <span className="p-2 text-white bg-green-400 rounded-full dark:text-gray-800">
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
//                     </svg>
//                 </span>

//                 <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col items-start justify-between w-full ml-2 text-sm">
//                         <p className="text-gray-700 dark:text-white">
//                             <span className="mr-1 font-bold">Karen &nbsp;</span> leave some comments on concept deisgn
//                             support page
//                         </p>
//                         <p className="text-gray-300">Aug 10</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex items-start justify-between mb-6 rounded">
//                 <span className="p-2 text-white bg-indigo-400 rounded-full dark:text-gray-800">
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
//                     </svg>
//                 </span>

//                 <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col items-start justify-between w-full ml-2 text-sm">
//                         <p className="text-gray-700 dark:text-white">
//                             <span className="mr-1 font-bold">Karen &nbsp;</span> change project description to
//                             "SubMarine protection project"
//                         </p>
//                         <p className="text-gray-300">Aug 09</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex items-start justify-between rounded">
//                 <span className="p-2 text-white bg-yellow-300 rounded-full dark:text-gray-800">
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z" />
//                     </svg>
//                 </span>

//                 <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col items-start justify-between w-full ml-2 text-sm">
//                         <p className="text-gray-700 dark:text-white">
//                             <span className="mr-1 font-bold">John &nbsp;</span> uploaded 17 pictures on concept deisgn
//                             galery page
//                         </p>
//                         <p className="text-gray-300">Aug 1</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ActivityCard;
// `.trim(),
//   '/components/elements/data/CalendarCard.tsx': 
//     `import React from 'react';

// const CalendarCard = () => {
//     return (
//         <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-80 dark:bg-gray-800">
//             <div className="flex items-center justify-between w-full mb-6">
//                 <p className="text-xl font-medium text-gray-800 dark:text-white">Calendar</p>
//                 <button className="flex items-center text-gray-800 border-0 hover:text-black dark:text-gray-50 dark:hover:text-white focus:outline-none">
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
//                     </svg>
//                 </button>
//             </div>
//             <div className="flex items-center justify-between p-3 mb-2 bg-green-100 rounded">
//                 <span className="p-2 bg-white rounded-lg">
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
//                     </svg>
//                 </span>
//                 <div className="flex items-center justify-between w-full ml-2">
//                     <p>Grooming with Alicia</p>
//                     <p>22.07</p>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between p-3 mb-2 bg-purple-100 rounded">
//                 <span className="p-2 bg-white rounded-lg">
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z" />
//                     </svg>
//                 </span>
//                 <div className="flex items-center justify-between w-full ml-2">
//                     <p>Launch of Itachi</p>
//                     <p>22.07</p>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between p-3 mb-2 bg-yellow-100 rounded">
//                 <span className="p-2 bg-white rounded-lg">
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M960 256q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm832 928v352q0 22-20 30-8 2-12 2-12 0-23-9l-93-93q-119 143-318.5 226.5t-429.5 83.5-429.5-83.5-318.5-226.5l-93 93q-9 9-23 9-4 0-12-2-20-8-20-30v-352q0-14 9-23t23-9h352q22 0 30 20 8 19-7 35l-100 100q67 91 189.5 153.5t271.5 82.5v-647h-192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h192v-163q-58-34-93-92.5t-35-128.5q0-106 75-181t181-75 181 75 75 181q0 70-35 128.5t-93 92.5v163h192q26 0 45 19t19 45v128q0 26-19 45t-45 19h-192v647q149-20 271.5-82.5t189.5-153.5l-100-100q-15-16-7-35 8-20 30-20h352q14 0 23 9t9 23z" />
//                     </svg>
//                 </span>
//                 <div className="flex items-center justify-between w-full ml-2">
//                     <p>Helfest tickets</p>
//                     <p>22.07</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default CalendarCard;
// `.trim(),
//   '/components/elements/data/CalendarCardMonth.tsx': 
//     `import React, { FC } from 'react';
// const CalendarCardMonth: FC = () => {
//     return (
//         <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
//             <div className="flex flex-wrap overflow-hidden">
//                 <div className="w-full rounded shadow-sm">
//                     <div className="flex items-center justify-between mb-4">
//                         <div className="text-xl font-bold text-left text-black dark:text-white">Dec 2021</div>
//                         <div className="flex space-x-4">
//                             <button className="p-2 text-white bg-blue-500 rounded-full">
//                                 <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
//                                     <path
//                                         fill="currentColor"
//                                         d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
//                                     ></path>
//                                 </svg>
//                             </button>
//                             <button className="p-2 text-white bg-blue-500 rounded-full">
//                                 <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
//                                     <path
//                                         fill="currentColor"
//                                         d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
//                                     ></path>
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>

//                     <div className="-mx-2">
//                         <table className="w-full dark:text-white">
//                             <tr>
//                                 <th className="px-2 py-3 md:px-3 ">S</th>
//                                 <th className="px-2 py-3 md:px-3 ">M</th>
//                                 <th className="px-2 py-3 md:px-3 ">T</th>
//                                 <th className="px-2 py-3 md:px-3 ">W</th>
//                                 <th className="px-2 py-3 md:px-3 ">T</th>
//                                 <th className="px-2 py-3 md:px-3 ">F</th>
//                                 <th className="px-2 py-3 md:px-3 ">S</th>
//                             </tr>
//                             <tr className="text-gray-400 dark:text-gray-500">
//                                 <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">25</td>
//                                 <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">26</td>
//                                 <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">27</td>
//                                 <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">28</td>
//                                 <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">29</td>
//                                 <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">30</td>
//                                 <td className="px-2 py-3 text-center text-gray-800 cursor-pointer md:px-3 hover:text-blue-500">
//                                     1
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">2</td>
//                                 <td className="relative px-1 py-3 text-center cursor-pointer hover:text-blue-500">
//                                     3
//                                     <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-blue-500 rounded-full left-1/2"></span>
//                                 </td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">4</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">5</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">6</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">7</td>
//                                 <td className="relative px-2 py-3 text-center cursor-pointer md:px-3 lg:px-3 hover:text-blue-500">
//                                     8
//                                     <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-yellow-500 rounded-full left-1/2"></span>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">9</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">10</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">11</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">12</td>
//                                 <td className="px-2 py-3 text-center text-white cursor-pointer md:px-3">
//                                     <span className="p-2 bg-blue-500 rounded-full">13</span>
//                                 </td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">14</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">15</td>
//                             </tr>
//                             <tr>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">16</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">17</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">18</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">19</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">20</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">21</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">22</td>
//                             </tr>
//                             <tr>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">23</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">24</td>
//                                 <td className="relative px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
//                                     25
//                                     <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-red-500 rounded-full left-1/2"></span>
//                                 </td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">26</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">27</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">28</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">29</td>
//                             </tr>
//                             <tr>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">30</td>
//                                 <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">31</td>
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default CalendarCardMonth;
// `.trim(),
//   '/components/elements/data/CovidInfo.tsx': 
//     `import React, { FC } from 'react';

// const CovidInfo: FC = () => {
//     return (
//         <div className="flex flex-col justify-between gap-12 p-6 bg-white rounded-lg shadow-xl md:p-8 dark:bg-gray-800 md:items-center md:flex-row">
//             <div>
//                 <span className="block text-gray-700 text-bold dark:text-gray-400">Total Cases</span>
//                 <span className="block mt-2 text-4xl font-black text-yellow-500 md:text-5xl">75,858,724</span>
//             </div>
//             <div className="self-end">
//                 <div className="text-left md:text-right md:block">
//                     <p className="flex items-center mb-0 text-xl md:mb-2 dark:text-gray-100 increase">
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             className="w-6 h-6 mr-2 text-red-500"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>
//                         1.2% increase
//                     </p>
//                 </div>
//                 <p className="inline-block text-lg text-left text-gray-600 md:text-right dark:text-gray-400 md:block md:mb-0">
//                     from yesterday (+906,503)
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default CovidInfo;
// `.trim(),
//   '/components/elements/data/GoogleTask.tsx': 
//     `import React, { FC } from 'react';
// import MultipleAvatar from '../avatars/MultipleAvatar';
// const GoogleTask: FC = () => {
//     return (
//         <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
//             <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                     <span className="relative p-2 bg-blue-100 rounded-xl">
//                         <svg
//                             width="25"
//                             height="25"
//                             viewBox="0 0 256 262"
//                             xmlns="http://www.w3.org/2000/svg"
//                             preserveAspectRatio="xMidYMid"
//                         >
//                             <path
//                                 d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
//                                 fill="#4285F4"
//                             />
//                             <path
//                                 d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
//                                 fill="#34A853"
//                             />
//                             <path
//                                 d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
//                                 fill="#FBBC05"
//                             />
//                             <path
//                                 d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
//                                 fill="#EB4335"
//                             />
//                         </svg>
//                     </span>
//                     <div className="flex flex-col">
//                         <span className="ml-2 font-bold text-black text-md dark:text-white">Google</span>
//                         <span className="ml-2 text-sm text-gray-500 dark:text-white">Google Inc.</span>
//                     </div>
//                 </div>
//                 <div className="flex items-center">
//                     <button className="p-1 border border-gray-200 rounded-full">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-500"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                     </button>
//                     <button className="text-gray-200">
//                         <svg
//                             width="25"
//                             height="25"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             <div className="flex items-center justify-between mb-4 space-x-12">
//                 <span className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
//                     PROGRESS
//                 </span>
//                 <span className="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
//                     HIGH PRIORITY
//                 </span>
//             </div>

//             <div className="block m-auto">
//                 <div>
//                     <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
//                         Task done : <span className="font-bold text-gray-700 dark:text-white">25 </span> /50
//                     </span>
//                 </div>
//                 <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
//                     <div className="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full"></div>
//                 </div>
//             </div>

//             <div className="flex items-center justify-start my-4 space-x-4">
//                 <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
//                     IOS APP
//                 </span>
//                 <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
//                     UI/UX
//                 </span>
//             </div>

//             <MultipleAvatar size="small" />

//             <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
//                 DUE DATE : 18 JUN
//             </span>
//         </div>
//     );
// };
// export default GoogleTask;
// `.trim(),
//   '/components/elements/data/InfoNumberCard.tsx': 
//     `import React, { FC } from 'react';
// const InfoNumberCard: FC = () => {
//     return (
//         <div className="p-4 bg-white shadow-lg rounded-2xl w-36 dark:bg-gray-800">
//             <div className="flex items-center">
//                 <span className="relative w-4 h-4 p-2 bg-green-500 rounded-full">
//                     <svg
//                         width="20"
//                         fill="currentColor"
//                         height="20"
//                         className="absolute h-2 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
//                     </svg>
//                 </span>
//                 <p className="ml-2 text-gray-700 text-md dark:text-gray-50">Sales</p>
//             </div>
//             <div className="flex flex-col justify-start">
//                 <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">36K</p>
//                 <div className="relative h-2 bg-gray-200 rounded w-28">
//                     <div className="absolute top-0 left-0 w-2/3 h-2 bg-green-500 rounded"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default InfoNumberCard;
// `.trim(),
//   '/components/elements/data/InfoNumberCard2.tsx': 
//     `import React, { FC } from 'react';

// const InfoNumberCard2: FC = () => {
//     return (
//         <div className="relative overflow-hidden bg-white rounded-lg shadow w-60 md:w-72">
//             <img
//                 src="https://img.clankapp.com/symbol/btc.svg"
//                 alt="btc logo"
//                 className="absolute w-24 h-24 rounded-full opacity-50 -top-6 -right-6 md:-right-4"
//             />
//             <div className="px-4 py-5 sm:p-6">
//                 <dl>
//                     <dt className="text-sm font-medium leading-5 text-gray-500 truncate">Valeur de la transaction</dt>
//                     <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">\$ 5,749,480</dd>
//                     <dd className="font-semibold text-gray-500">
//                         <span>
//                             500<span className="text-xs">.000</span>BTC
//                         </span>
//                     </dd>
//                 </dl>
//             </div>
//         </div>
//     );
// };

// export default InfoNumberCard2;
// `.trim(),
//   '/components/elements/data/InfoNumberCard3.tsx': 
//     `import React, { FC } from 'react';
// const InfoNumberCard3: FC = () => {
//     return (
//         <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
//             <div className="flex items-center">
//                 <span className="relative p-4 bg-purple-200 rounded-xl">
//                     <svg
//                         width="40"
//                         fill="currentColor"
//                         height="40"
//                         className="absolute h-4 text-purple-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
//                     </svg>
//                 </span>
//                 <p className="ml-2 text-black text-md dark:text-white">Finance</p>
//             </div>
//             <div className="flex flex-col justify-start">
//                 <p className="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">
//                     34,500<span className="text-sm">\$</span>
//                 </p>
//                 <div className="flex items-center text-sm text-green-500">
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
//                     </svg>

//                     <span>5.5%</span>
//                     <span className="text-gray-400"> vs last month</span>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default InfoNumberCard3;
// `.trim(),
//   '/components/elements/data/InformationIconCard.tsx': 
//     `import React, { FC } from 'react';
// const InformationIconCard: FC = () => {
//     return (
//         <div className="w-64 p-4 py-6 bg-white shadow-lg rounded-2xl">
//             <div className="flex flex-col items-center justify-center">
//                 <div className="relative w-24 h-24 bg-green-200 rounded-full">
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 2304 1792"
//                         className="absolute w-8 h-8 text-green-700 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z" />
//                     </svg>
//                 </div>

//                 <p className="mt-4 mb-4 text-xl font-medium text-gray-800">Justice</p>
//                 <p className="px-2 text-xs text-center text-gray-400">
//                     I therefore look forward to further developments in this area so that we can ease the path in
//                     bringing these reckless individuals to justice.
//                 </p>
//             </div>
//         </div>
//     );
// };
// export default InformationIconCard;
// `.trim(),
//   '/components/elements/data/JobCard.tsx': 
//     `import React from 'react';
// import Avatar from '../avatars/Avatar';
// import Badge from '../badges/Badge';
// import Button from '../buttons/Button';

// const JobCard = () => {
//     return (
//         <div className="w-full max-w-xs p-6 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
//             <div className="flex flex-col items-center justify-between md:flex-row">
//                 <div className="flex items-center justify-start flex-grow w-full">
//                     <Avatar size="small" />
//                     <div className="flex flex-col items-start ml-4">
//                         <span className="text-gray-700 dark:text-white">Charlie Rabiller</span>
//                         <span className="text-sm font-light text-gray-400 dark:text-gray-300">Updated 3 min ago</span>
//                     </div>
//                 </div>
//                 <div className="flex-none hidden md:block ">
//                     <span className="w-full px-3 py-1 text-sm text-white bg-blue-500 rounded-full">Design</span>
//                 </div>
//             </div>
//             <p className="mt-4 mb-2 text-lg text-gray-800 dark:text-white">
//                 Need a designer to form branding for my business.
//             </p>
//             <p className="text-sm font-normal text-gray-400">
//                 Looking for a talented brand designer to create all the branding materials for my new startup. This
//                 should be a long term project and my hope I hight on the person whom I would like to hire.
//             </p>
//             <div className="flex items-center justify-between p-2 my-6 bg-blue-100 rounded">
//                 <div className="flex items-start justify-between w-full">
//                     <p className="flex-grow w-full text-2xl text-gray-700">
//                         <span className="font-light text-gray-400 text-md">\$</span> 4,500
//                         <span className="text-sm font-light text-gray-400">/Month</span>
//                     </p>
//                     <span className="flex-none px-3 py-1 text-sm text-indigo-500 border border-indigo-500 rounded-full">
//                         Full time
//                     </span>
//                 </div>
//             </div>
//             <Button label="Apply for this Job" color="blue" />
//         </div>
//     );
// };
// export default JobCard;
// `.trim(),
//   '/components/elements/data/LessonsList.tsx': 
//     `import React, { FC } from 'react';

// const LessonsList: FC = () => {
//     return (
//         <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
//             <div className="flex items-center justify-between p-4">
//                 <p className="font-bold text-black text-md dark:text-white">Google</p>
//                 <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
//                     <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
//                         <g fill="none">
//                             <path
//                                 d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
//                                 fill="currentColor"
//                             ></path>
//                         </g>
//                     </svg>
//                 </button>
//             </div>

//             <div className="flex items-center justify-between px-4 py-2 text-gray-600 bg-blue-100 border-l-4 border-blue-500 dark:bg-gray-800">
//                 <p className="flex items-center text-xs dark:text-white">
//                     <svg width="20" height="20" fill="currentColor" className="mr-2 text-blue-500" viewBox="0 0 24 24">
//                         <g fill="none">
//                             <path
//                                 d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
//                                 fill="currentColor"
//                             ></path>
//                         </g>
//                     </svg>
//                     Create wireframe
//                 </p>
//                 <div className="flex items-center">
//                     <span className="ml-2 mr-2 text-xs font-bold dark:text-gray-200 md:ml-4">25 min 20s</span>
//                     <button className="p-1 mr-4 text-sm text-gray-400 bg-blue-500 border rounded">
//                         <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" className="text-white">
//                             <g fill="none">
//                                 <path
//                                     d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
//                                     fill="currentColor"
//                                 ></path>
//                             </g>
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             <div className="flex items-center justify-between p-4 border-b-2 border-gray-100">
//                 <p className="font-bold text-black text-md dark:text-white">Slack</p>
//                 <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
//                     <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
//                         <g fill="none">
//                             <path
//                                 d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
//                                 fill="currentColor"
//                             ></path>
//                         </g>
//                     </svg>
//                 </button>
//             </div>
//             <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
//                 <p className="flex items-center text-xs dark:text-white">
//                     <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
//                         <g fill="none">
//                             <path
//                                 d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
//                                 fill="currentColor"
//                             ></path>
//                         </g>
//                     </svg>
//                     International
//                 </p>
//                 <div className="flex items-center">
//                     <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">30 min</span>
//                     <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
//                         <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
//                             <g fill="none">
//                                 <path
//                                     d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
//                                     fill="currentColor"
//                                 ></path>
//                             </g>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
//                 <p className="flex items-center text-xs dark:text-white">
//                     <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
//                         <g fill="none">
//                             <path
//                                 d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
//                                 fill="currentColor"
//                             ></path>
//                         </g>
//                     </svg>
//                     Slack logo design
//                 </p>
//                 <div className="flex items-center">
//                     <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">30 min</span>
//                     <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
//                         <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
//                             <g fill="none">
//                                 <path
//                                     d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
//                                     fill="currentColor"
//                                 ></path>
//                             </g>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between px-4 py-2 text-gray-600">
//                 <p className="flex items-center text-xs dark:text-white">
//                     <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 24 24">
//                         <g fill="none">
//                             <path
//                                 d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
//                                 fill="currentColor"
//                             ></path>
//                         </g>
//                     </svg>
//                     Dahboard template
//                 </p>
//                 <div className="flex items-center">
//                     <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">30 min</span>
//                     <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
//                         <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
//                             <g fill="none">
//                                 <path
//                                     d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
//                                     fill="currentColor"
//                                 ></path>
//                             </g>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default LessonsList;
// `.trim(),
//   '/components/elements/data/MessagesList.tsx': 
//     `import React, { FC } from 'react';
// import Avatar from '../avatars/Avatar';

// const MessagesList: FC = () => {
//     return (
//         <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
//             <p className="font-bold text-black text-md dark:text-white">Messages</p>

//             <ul>
//                 <li className="flex items-center my-6 space-x-2">
//                     <Avatar size="small" />

//                     <div className="flex flex-col">
//                         <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
//                             Charlie Rabiller
//                         </span>
//                         <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
//                             Hey John ! Do you read the NextJS doc ?
//                         </span>
//                     </div>
//                 </li>

//                 <li className="flex items-center my-6 space-x-2">
//                     <Avatar size="small" img="/images/person/5.jpg" />

//                     <div className="flex flex-col">
//                         <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Marie Lou</span>
//                         <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
//                             No I think the dog is better...
//                         </span>
//                     </div>
//                 </li>
//                 <li className="flex items-center my-6 space-x-2">
//                     <Avatar size="small" img="/images/person/6.jpg" />

//                     <div className="flex flex-col">
//                         <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Ivan Buck</span>
//                         <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
//                             Seriously ? haha Bob is not a child !
//                         </span>
//                     </div>
//                 </li>
//                 <li className="flex items-center my-6 space-x-2">
//                     <Avatar size="small" img="/images/person/7.jpg" />

//                     <div className="flex flex-col">
//                         <span className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Marina Farga</span>
//                         <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">Do you need that design ?</span>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//     );
// };
// export default MessagesList;
// `.trim(),
//   '/components/elements/data/MutlipleTask.tsx': 
//     `import React, { FC } from 'react';

// const MutlipleTask: FC = () => {
//     return (
//         <div className="relative p-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl w-60 md:w-72 dark:bg-gray-800 dark:text-gray-100">
//             <a href="#" className="block w-full h-full">
//                 <div className="w-full">
//                     <p className="mb-4 text-2xl font-light text-gray-700 dark:text-white">Task Progress</p>

//                     <div className="flex items-center justify-between text-sm text-gray-400">
//                         <p>Design</p>
//                         <p>3/8</p>
//                     </div>
//                     <div className="w-full h-2 mb-4 bg-green-100 rounded-full">
//                         <div className="w-1/3 h-full text-xs text-center text-white bg-green-400 rounded-full"></div>
//                     </div>

//                     <div className="flex items-center justify-between text-sm text-gray-400">
//                         <p>Development</p>
//                         <p>6/10</p>
//                     </div>
//                     <div className="w-full h-2 mb-4 bg-indigo-100 rounded-full">
//                         <div className="w-2/3 h-full text-xs text-center text-white bg-indigo-400 rounded-full"></div>
//                     </div>

//                     <div className="flex items-center justify-between text-sm text-gray-400">
//                         <p>DevOps</p>
//                         <p>2/8</p>
//                     </div>
//                     <div className="w-full h-2 mb-4 bg-blue-100 rounded-full">
//                         <div className="w-1/4 h-full text-xs text-center text-white bg-blue-400 rounded-full"></div>
//                     </div>

//                     <div className="flex items-center justify-between text-sm text-gray-400">
//                         <p>Marketing</p>
//                         <p>8/8</p>
//                     </div>
//                     <div className="w-full h-2 bg-pink-100 rounded-full">
//                         <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full"></div>
//                     </div>
//                 </div>
//             </a>
//         </div>
//     );
// };

// export default MutlipleTask;
// `.trim(),
//   '/components/elements/data/PaymentCard.tsx': 
//     `import React from 'react';

// const PaymentCard = () => {
//     return (
//         <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-80 dark:bg-gray-800">
//             <div className="flex items-center justify-between w-full mb-8">
//                 <p className="text-xl text-gray-800 dark:text-white">Account</p>
//                 <a
//                     href="#"
//                     className="flex items-center text-sm text-gray-300 border-0 hover:text-gray-600 dark:text-gray-50 dark:hover:text-white focus:outline-none"
//                 >
//                     VIEW ALL
//                 </a>
//             </div>
//             <div className="flex items-center justify-between mb-6 rounded">
//                 <span className="rounded-lg">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="40"
//                         height="40"
//                         className="rounded"
//                         viewBox="0 0 192.756 192.756"
//                     >
//                         <g fillRule="evenodd" clipRule="evenodd">
//                             <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
//                             <path
//                                 d="M8.484 177.699h-.551c0-.275-.138-.689-.138-.828 0-.137 0-.412-.414-.412h-.828v1.24h-.414v-2.896h1.242c.552 0 .965.139.965.689 0 .414-.138.553-.275.689.138.139.275.277.275.553v.551c0 .139 0 .139.138.139v.275zm-.551-2.068c0-.414-.276-.414-.414-.414h-.966v.828h.828c.276 0 .552-.139.552-.414zm2.345.551c0-1.654-1.379-3.035-3.173-3.035-1.655 0-3.035 1.381-3.035 3.035 0 1.793 1.38 3.174 3.035 3.174 1.793-.001 3.173-1.381 3.173-3.174zm-.414 0c0 1.518-1.241 2.621-2.759 2.621s-2.621-1.104-2.621-2.621c0-1.379 1.104-2.621 2.621-2.621s2.759 1.242 2.759 2.621zM179.818 120.451c0 4.139-2.621 6.068-7.312 6.068h-8.965v-4.139h8.965c.828 0 1.518-.137 1.795-.412.275-.277.551-.691.551-1.242 0-.553-.275-1.104-.551-1.379-.277-.277-.828-.414-1.656-.414-4.275-.139-9.656.137-9.656-5.932 0-2.76 1.793-5.795 6.621-5.795h9.242v4.139h-8.553c-.826 0-1.379 0-1.793.275-.414.414-.689.828-.689 1.518s.414 1.104.965 1.381c.553.137 1.105.275 1.795.275h2.482c2.621 0 4.277.551 5.381 1.518.826.965 1.378 2.208 1.378 4.139zm-19.451-4.139c-1.104-.967-2.76-1.518-5.381-1.518h-2.482c-.689 0-1.242-.139-1.793-.275-.553-.277-.965-.691-.965-1.381s.137-1.104.689-1.518c.414-.275.965-.275 1.793-.275h8.553v-4.139h-9.242c-4.967 0-6.623 3.035-6.623 5.795 0 6.068 5.381 5.793 9.658 5.932.826 0 1.379.137 1.654.414.275.275.553.826.553 1.379 0 .551-.277.965-.553 1.242-.414.275-.965.412-1.793.412h-8.967v4.139h8.967c4.689 0 7.311-1.93 7.311-6.068 0-1.931-.551-3.174-1.379-4.139zm-17.658 6.208h-10.896v-3.863h10.621v-3.861h-10.621v-3.588h10.896v-4H127.26v19.312h15.449v-4zm-20.416-14.346c-1.518-.828-3.311-.967-5.656-.967h-10.621v19.312h4.689v-7.035h4.967c1.654 0 2.621.139 3.311.828.828.965.828 2.621.828 3.863v2.344h4.551v-3.725c0-1.793-.137-2.621-.689-3.586-.414-.553-1.24-1.242-2.344-1.656 1.24-.412 3.311-2.068 3.311-5.104-.001-2.206-.829-3.448-2.347-4.274zm-26.21-.967H81.322l-5.932 6.346-5.656-6.346H51.111v19.312h18.348l5.932-6.346 5.656 6.346h8.967v-6.482h5.794c4 0 8.002-1.104 8.002-6.484-.001-5.242-4.14-6.346-7.727-6.346zm22.485 8.002c-.689.275-1.379.275-2.207.275l-5.656.139v-4.416h5.656c.828 0 1.656 0 2.207.414.553.277.965.828.965 1.656s-.412 1.518-.965 1.932zm-22.485.965h-6.07v-4.967h6.07c1.656 0 2.759.691 2.759 2.346 0 1.656-1.104 2.621-2.759 2.621zm-17.796.689l7.173-7.586v15.588l-7.173-8.002zm-11.174 5.657h-11.45v-3.863h10.208v-3.861H55.663v-3.588h11.588l5.104 5.656-5.242 5.656zm99.875-29.246h-6.621l-8.691-14.485v14.485h-9.379l-1.795-4.277h-9.656l-1.793 4.277h-5.381c-2.207 0-5.104-.552-6.758-2.208-1.518-1.655-2.346-3.862-2.346-7.311 0-2.897.414-5.518 2.482-7.587 1.379-1.518 3.863-2.207 7.035-2.207h4.414V78.1h-4.414c-1.654 0-2.621.276-3.586 1.104-.828.828-1.242 2.345-1.242 4.414s.414 3.587 1.242 4.553c.689.689 1.932.965 3.172.965h2.07l6.621-15.174h6.898l7.725 18.209v-18.21h7.174l8.139 13.381V73.961h4.689v19.313h.001zm-54.765-19.313h-4.689v19.313h4.689V73.961zm-9.795.828c-1.518-.828-3.172-.828-5.517-.828H86.288v19.313h4.552v-7.036h4.966c1.656 0 2.76.138 3.449.828.828.966.689 2.622.689 3.725v2.483h4.689v-3.863c0-1.655-.137-2.483-.826-3.449-.414-.552-1.242-1.242-2.207-1.655 1.24-.552 3.311-2.069 3.311-5.104.001-2.207-.966-3.449-2.483-4.414zM82.977 89.274h-10.76v-3.863h10.622v-4H72.217v-3.449h10.76v-4h-15.45v19.313h15.45v-4.001zM64.078 73.961h-7.587l-5.656 13.105-6.07-13.105h-7.449V92.17l-7.863-18.209h-6.897l-8.277 19.313h4.966l1.793-4.277h9.656l1.793 4.277h9.381V78.1l6.759 15.174h4l6.76-15.174v15.174h4.69V73.961h.001zm74.77 10.898l-3.174-7.587-3.172 7.587h6.346zm-40.006-3.034c-.689.414-1.379.414-2.345.414H90.84v-4.276h5.656c.828 0 1.792 0 2.345.276.551.414.828.966.828 1.793s-.276 1.516-.827 1.793zm-76.149 3.034l3.173-7.587 3.173 7.587h-6.346zm156.022-71.458H14.14v69.527l5.656-12.829h12.001l1.656 3.173v-3.173h14.071l3.173 6.897 3.035-6.897h44.834c2.068 0 3.861.414 5.242 1.517v-1.517h12.277v1.517c2.068-1.104 4.689-1.517 7.725-1.517h17.795l1.656 3.173v-3.173h13.105l1.932 3.173v-3.173h12.828v27.038H158.16l-2.482-4.138v4.138h-16.141l-1.793-4.414h-4.002l-1.793 4.414h-8.414c-3.311 0-5.795-.828-7.449-1.655v1.655H96.083v-6.208c0-.828-.138-.966-.69-.966h-.689v7.173H56.077v-3.449l-1.379 3.449h-8.139l-1.379-3.311v3.311H29.591l-1.655-4.414h-4.001l-1.793 4.414H14.14v81.529h164.575V129.14c-1.793.828-4.277 1.242-6.76 1.242h-12.002v-1.656c-1.379 1.105-3.863 1.656-6.207 1.656h-37.799v-6.207c0-.828-.137-.828-.828-.828h-.689v7.035h-12.416v-7.311c-2.068.965-4.414.965-6.483.965h-1.38v6.346H78.977l-3.586-4.139-4 4.139H46.972v-27.037h24.831l3.587 4.137 3.863-4.137h16.692c1.93 0 5.104.275 6.483 1.654v-1.654h14.898c1.518 0 4.416.275 6.346 1.654v-1.654h22.486V105c1.242-1.104 3.588-1.654 5.656-1.654h12.553V105c1.381-.965 3.311-1.654 5.795-1.654h8.553V13.401z"
//                                 fill="#0077a6"
//                             />
//                         </g>
//                     </svg>
//                 </span>

//                 <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col items-start justify-between w-full ml-2 text-sm">
//                         <p className="dark:text-white">American Express</p>
//                         <p className="text-gray-300">Wallet deposit</p>
//                     </div>
//                     <span className="text-green-400">+\$3,124</span>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between mb-6 rounded">
//                 <span className="rounded-lg">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="40"
//                         height="40"
//                         className="rounded"
//                         viewBox="0 0 192.756 192.756"
//                     >
//                         <g fillRule="evenodd" clipRule="evenodd">
//                             <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
//                             <path
//                                 d="M189.922 50.809c0-8.986-4.67-13.444-13.729-13.444H16.562c-4.528 0-7.854 1.203-10.048 3.679-2.476 2.477-3.68 5.661-3.68 9.765v91.138c0 4.104 1.204 7.217 3.68 9.764 2.548 2.477 5.803 3.68 10.048 3.68h159.631c9.059 0 13.729-4.527 13.729-13.443V50.809zm-13.729-11.321c7.5 0 11.322 3.821 11.322 11.321v91.138c0 7.57-3.822 11.32-11.322 11.32H16.562c-3.609 0-6.368-1.061-8.42-3.184-2.123-2.053-3.184-4.883-3.184-8.137V50.809c0-7.5 3.75-11.321 11.604-11.321h159.631z"
//                                 fill="#315881"
//                             />
//                             <path
//                                 d="M17.835 44.724c-3.042 0-4.953.495-6.014 1.557-.92 1.203-1.344 3.184-1.344 6.085v19.741h171.802V52.366c0-5.165-2.549-7.642-7.643-7.642H17.835z"
//                                 fill="#315881"
//                             />
//                             <path
//                                 d="M10.477 140.107c0 5.234 2.476 7.924 7.358 7.924h156.801c5.094 0 7.643-2.689 7.643-7.924v-19.742H10.477v19.742z"
//                                 fill="#dfa43b"
//                             />
//                             <path
//                                 d="M67.367 80.528c0 .92-.142 1.627-.495 2.123l-12.383 21.582-.779-26.323H33.898l6.651 3.184c1.91 1.203 2.901 2.759 2.901 4.741l1.839 27.951h9.694l23.21-35.876H66.306c.707.637 1.061 1.627 1.061 2.618zM147.467 78.971l.777-1.062h-12.1c.424.424.566.637.566.778-.143.565-.426.92-.566 1.344l-17.619 32.124c-.424.566-.85 1.062-1.344 1.629h9.977l-.496-1.062c0-.92.496-2.617 1.557-5.023l2.123-3.963h10.26c.426 3.326.709 6.086.85 8.139l-.85 1.91h12.383l-1.84-2.689-3.678-32.125zm-7.36 19.742h-7.359l6.297-12.1 1.062 12.1zM109.539 76.07c-3.82 0-7.076 1.062-9.977 3.184-3.185 1.84-4.741 4.175-4.741 7.077 0 3.326 1.132 6.227 3.396 8.42l6.865 4.74c2.477 1.77 3.68 3.326 3.68 4.742 0 1.344-.639 2.547-1.84 3.467-1.203.92-2.549 1.344-4.246 1.344-2.477 0-6.722-1.768-12.595-5.023v6.58c4.599 2.76 9.058 4.176 13.373 4.176 4.105 0 7.572-1.133 10.545-3.68 3.184-2.336 4.74-5.094 4.74-8.137 0-2.549-1.133-4.883-3.68-7.36l-6.582-4.741c-2.191-1.769-3.395-3.326-3.395-4.528 0-2.759 1.627-4.175 4.953-4.175 2.264 0 5.59 1.274 10.047 3.963l1.346-6.864c-3.752-2.124-7.643-3.185-11.889-3.185zM83.217 113.785c-.142-1.486-.425-2.83-.567-4.246l8.987-29.011 2.123-2.618H80.811c.142.637.283 1.486.425 2.123 0 .637 0 1.416-.142 2.123l-8.986 28.728-1.84 2.902h12.949v-.001z"
//                                 fill="#315881"
//                             />
//                         </g>
//                     </svg>
//                 </span>

//                 <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col items-start justify-between w-full ml-2 text-sm">
//                         <p className="dark:text-white">Visa Premier</p>
//                         <p className="text-gray-300">Wallet deposit</p>
//                     </div>
//                     <span className="text-green-400">+\$23,240</span>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between mb-6 rounded">
//                 <span className="rounded-lg">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="40"
//                         height="40"
//                         className="rounded"
//                         viewBox="0 0 192.756 192.756"
//                     >
//                         <g fillRule="evenodd" clipRule="evenodd">
//                             <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
//                             <path
//                                 d="M96.42 133.041c8.667 7.986 20.306 12.83 32.966 12.83 27.189 0 49.195-22.176 49.195-49.451 0-27.358-22.006-49.535-49.195-49.535-12.66 0-24.299 4.843-32.966 12.83-9.941 9.091-16.229 22.176-16.229 36.705.001 14.529 6.288 27.615 16.229 36.621z"
//                                 fill="#e9b040"
//                             />
//                             <path
//                                 d="M172.041 123.949c0-.85.68-1.529 1.529-1.529.934 0 1.613.68 1.613 1.529 0 .936-.68 1.615-1.613 1.615-.849 0-1.529-.679-1.529-1.615zm1.529 1.276c.68 0 1.273-.596 1.273-1.275s-.594-1.189-1.273-1.189c-.596 0-1.189.51-1.189 1.189s.594 1.275 1.189 1.275zm-.17-.51h-.34v-1.445h.594c.086 0 .256 0 .34.086.17.084.17.17.17.34s-.084.34-.254.34l.34.68h-.426l-.17-.596h-.254v.595-.85h.34c.084 0 .084-.086.084-.17 0-.086 0-.086-.084-.17h-.34v1.19z"
//                                 fill="#e9b040"
//                             />
//                             <path
//                                 d="M112.309 91.153c-.17-1.784-.51-3.483-.85-5.268H81.381c.34-1.784.85-3.483 1.359-5.183h27.275a56.916 56.916 0 0 0-2.039-5.268H84.865a62.38 62.38 0 0 1 2.804-5.268h17.419a44.706 44.706 0 0 0-3.738-5.183h-9.942a48.87 48.87 0 0 1 5.013-5.268c-8.751-7.902-20.307-12.83-33.052-12.83-27.104 0-49.195 22.177-49.195 49.535 0 27.275 22.091 49.451 49.195 49.451 12.745 0 24.3-4.844 33.052-12.83a47.105 47.105 0 0 0 4.929-5.184h-9.942c-1.36-1.699-2.549-3.398-3.739-5.268h17.419a39.517 39.517 0 0 0 2.889-5.268H84.865c-.765-1.699-1.529-3.398-2.125-5.184h27.275c.594-1.699 1.02-3.482 1.443-5.268.34-1.699.68-3.482.85-5.268a51.61 51.61 0 0 0 .256-5.184c0-1.781-.085-3.565-.255-5.264z"
//                                 fill="#cc2131"
//                             />
//                             <path
//                                 d="M172.041 107.891c0-.934.68-1.613 1.529-1.613.934 0 1.613.68 1.613 1.613 0 .85-.68 1.615-1.613 1.615-.849 0-1.529-.766-1.529-1.615zm1.529 1.189c.68 0 1.273-.51 1.273-1.189s-.594-1.189-1.273-1.189c-.596 0-1.189.51-1.189 1.189s.594 1.189 1.189 1.189zm-.17-.51h-.34v-1.359H173.994c.17.086.17.256.17.426 0 .084-.084.254-.254.34l.34.594h-.426l-.17-.51h-.254v.509-.764h.17c.084 0 .17 0 .17-.086.084 0 .084-.084.084-.17 0 0 0-.084-.084-.084 0-.086-.086 0-.17 0h-.17v1.104z"
//                                 fill="#fff"
//                             />
//                             <path
//                                 d="M79.682 110.695c-1.614.424-2.804.68-3.993.68-2.549 0-4.079-1.615-4.079-4.504 0-.594.085-1.189.17-1.869l.34-1.953.255-1.615L74.669 87.5h5.098l-.595 3.059h3.229l-.765 5.098h-3.229l-1.359 8.326c-.085.426-.085.68-.085.85 0 1.105.51 1.529 1.784 1.529.595 0 1.104-.084 1.614-.17l-.679 4.503zM96.166 110.525c-1.869.51-3.568.764-5.438.764-5.778 0-9.092-3.059-9.092-9.09 0-7.053 3.909-12.151 9.346-12.151 4.333 0 7.137 2.889 7.137 7.391 0 1.531-.17 2.975-.594 5.014H86.904c-.085.34-.085.51-.085.68 0 2.379 1.614 3.568 4.673 3.568 1.954 0 3.653-.424 5.523-1.273l-.849 5.097zm-3.144-12.15v-1.02c0-1.699-.935-2.634-2.549-2.634-1.7 0-2.889 1.274-3.399 3.653h5.948v.001zM38.898 110.949H33.63l3.059-19.286-6.882 19.286h-3.653l-.425-19.201-3.229 19.201h-5.183l4.163-25.064h7.732l.17 15.465 5.183-15.465h8.497l-4.164 25.064zM51.729 101.859c-.51-.086-.68-.086-1.02-.086-3.059 0-4.588 1.189-4.588 3.059 0 1.275.765 2.125 1.954 2.125 2.549 0 3.568-2.125 3.654-5.098zm4.248 9.09h-4.588l.085-2.123c-1.19 1.613-2.804 2.463-5.608 2.463-2.549 0-4.758-2.293-4.758-5.607 0-.934.17-1.783.425-2.633.849-3.145 3.993-5.098 8.836-5.184.595 0 1.529 0 2.379.086.169-.68.169-.936.169-1.36 0-1.36-1.104-1.785-3.568-1.785-1.529 0-3.229.255-4.418.68l-.765.17-.34.084.765-4.588c2.464-.765 4.248-1.104 6.203-1.104 4.588 0 7.052 2.124 7.052 6.032 0 1.02.085 1.785-.255 3.994l-1.189 7.307-.17 1.275-.085 1.02-.085.68-.085.593zM121.826 90.728c1.529 0 2.889.425 4.758 1.359l.934-5.438c-.51-.255-.68-.255-1.359-.51l-2.123-.595c-.68-.17-1.529-.255-2.465-.255-2.635 0-4.164.085-5.777 1.02-.85.595-1.955 1.36-3.145 2.719l-.68-.17-5.438 3.823.256-2.124h-5.609l-3.312 20.391h5.354l1.953-10.959s.766-1.531 1.105-2.039c1.02-1.275 1.869-1.275 2.973-1.275h.426a27.428 27.428 0 0 0-.256 3.908c0 6.627 3.738 10.791 9.516 10.791 1.445 0 2.721-.17 4.674-.68l.936-5.777c-1.699.934-3.229 1.359-4.504 1.359-3.143 0-5.014-2.379-5.014-6.117-.002-5.523 2.803-9.431 6.797-9.431zM166.941 85.885l-1.188 7.137c-1.275-1.954-2.805-2.889-4.844-2.889-2.805 0-5.438 1.614-7.053 4.673v-.084l-3.398-2.04.34-2.124h-5.693l-3.229 20.391h5.268l1.785-10.959s1.359-1.531 1.699-2.039c.85-1.02 1.699-1.191 2.379-1.275-.594 1.699-.934 3.738-.934 6.033 0 5.098 2.633 8.496 6.541 8.496 1.955 0 3.484-.68 4.928-2.295l-.254 2.039h5.014l4.078-25.064h-5.439zm-6.541 20.222c-1.785 0-2.719-1.359-2.719-3.994 0-3.994 1.699-6.882 4.162-6.882 1.869 0 2.805 1.445 2.805 3.994 0 4.078-1.699 6.882-4.248 6.882zM135.846 101.859c-.51-.086-.68-.086-1.02-.086-3.061 0-4.59 1.189-4.59 3.059 0 1.275.766 2.125 1.955 2.125 2.549 0 3.569-2.125 3.655-5.098zm4.248 9.09h-4.674l.17-2.123c-1.189 1.613-2.805 2.463-5.607 2.463-2.635 0-4.928-2.209-4.928-5.607 0-4.842 3.652-7.816 9.43-7.816.596 0 1.529 0 2.295.086.17-.68.256-.936.256-1.36 0-1.36-1.105-1.785-3.654-1.785-1.445 0-3.229.255-4.418.68l-.68.17-.34.084.764-4.588c2.465-.765 4.25-1.104 6.203-1.104 4.588 0 6.967 2.124 6.967 6.032 0 1.02.17 1.785-.254 3.994l-1.105 7.307-.17 1.275-.17 1.02-.084.68v.592h-.001zM67.107 94.891c1.02 0 2.464.085 3.994.34l.765-4.758c-1.53-.17-3.569-.425-4.759-.425-5.947 0-7.901 3.229-7.901 6.967 0 2.465 1.104 4.248 3.993 5.607 2.124 1.02 2.464 1.189 2.464 2.125 0 1.273-1.104 2.039-3.144 2.039-1.614 0-3.144-.256-4.843-.85l-.595 4.672.084.086 1.02.17c.34.084.765.17 1.36.254 1.274.086 2.379.17 3.059.17 5.948 0 8.412-2.293 8.412-6.797 0-2.803-1.36-4.502-3.994-5.691-2.294-1.021-2.549-1.189-2.549-2.125 0-.934 1.02-1.784 2.634-1.784z"
//                                 fill="#1b3771"
//                             />
//                             <path
//                                 d="M128.963 85.035l-.936 5.438c-1.869-.935-3.229-1.359-4.758-1.359-3.994 0-6.797 3.908-6.797 9.431 0 3.824 1.869 6.117 5.014 6.117 1.273 0 2.803-.424 4.502-1.273l-.934 5.691c-1.955.51-3.229.766-4.674.766-5.777 0-9.346-4.164-9.346-10.875 0-8.922 4.928-15.21 11.98-15.21.934 0 1.783.085 2.463.255l2.125.51c.681.255.851.34 1.361.509zM111.799 88.774h-.51c-1.783 0-2.803.85-4.418 3.313l.51-3.144h-4.844l-3.312 20.392h5.354c1.953-12.49 2.463-14.614 5.012-14.614h.34c.51-2.464 1.189-4.249 2.039-5.863l-.171-.084zM81.042 109.08c-1.444.51-2.634.68-3.823.68-2.719 0-4.249-1.529-4.249-4.502 0-.51.085-1.189.17-1.785l.34-2.039.255-1.613 2.294-13.936h5.268l-.595 3.059h2.719l-.68 5.013h-2.719l-1.444 8.497c-.085.34-.085.596-.085.85 0 1.02.51 1.445 1.784 1.445.595 0 1.104 0 1.444-.17l-.679 4.501zM60.565 95.401c0 2.55 1.189 4.333 3.993 5.693 2.209 1.02 2.549 1.359 2.549 2.209 0 1.275-.935 1.869-3.059 1.869-1.614 0-3.059-.254-4.758-.764l-.765 4.672.255.086.935.17c.339.084.765.17 1.444.17 1.189.17 2.209.17 2.889.17 5.607 0 8.242-2.125 8.242-6.797 0-2.805-1.104-4.42-3.738-5.693-2.294-1.02-2.549-1.274-2.549-2.209 0-1.104.935-1.614 2.634-1.614 1.02 0 2.464.085 3.824.255l.764-4.673c-1.359-.255-3.483-.425-4.673-.425-5.948-.001-8.072 3.143-7.987 6.881zM169.662 109.336h-5.014l.256-1.955c-1.445 1.529-2.975 2.209-4.93 2.209-3.908 0-6.457-3.312-6.457-8.41 0-6.798 3.994-12.576 8.666-12.576 2.125 0 3.654.935 5.1 2.804l1.189-7.137h5.268l-4.078 25.065zm-7.818-4.758c2.465 0 4.164-2.889 4.164-6.883 0-2.634-.936-3.994-2.805-3.994-2.379 0-4.162 2.804-4.162 6.798 0 2.72.934 4.079 2.803 4.079zM97.355 108.91c-1.87.596-3.569.85-5.523.85-5.948 0-9.007-3.143-9.007-9.176 0-6.967 3.909-12.15 9.262-12.15 4.418 0 7.221 2.889 7.221 7.392 0 1.53-.17 2.975-.68 5.098H88.094c-.085.256-.085.426-.085.596 0 2.379 1.615 3.568 4.673 3.568 1.954 0 3.653-.34 5.523-1.275l-.85 5.097zm-2.974-12.15v-1.019c0-1.699-.935-2.634-2.549-2.634-1.699 0-2.889 1.275-3.399 3.653h5.948zM40.258 109.336H34.99l3.059-19.288-6.882 19.288h-3.654l-.425-19.118-3.228 19.118h-4.928l4.163-25.065h7.647l.255 15.549 5.097-15.549h8.327l-4.163 25.065zM53.428 100.244c-.51 0-.765-.084-1.19-.084-2.974 0-4.503 1.104-4.503 3.143 0 1.275.68 2.039 1.869 2.039 2.209 0 3.739-2.039 3.824-5.098zm3.908 9.092h-4.419l.085-2.125c-1.36 1.699-3.144 2.465-5.608 2.465-2.889 0-4.843-2.209-4.843-5.523 0-5.012 3.398-7.901 9.346-7.901.595 0 1.36.085 2.209.169.17-.679.17-.934.17-1.274 0-1.359-.935-1.869-3.399-1.869-1.529 0-3.229.17-4.418.51l-.765.255-.51.085.765-4.588c2.634-.765 4.418-1.02 6.373-1.02 4.588 0 7.052 2.039 7.052 5.947 0 1.02-.085 1.785-.425 4.079l-1.19 7.223-.17 1.273-.085 1.02-.085.766-.083.508zM137.545 100.244c-.596 0-.85-.084-1.189-.084-3.059 0-4.59 1.104-4.59 3.143 0 1.275.766 2.039 1.955 2.039 2.125 0 3.738-2.039 3.824-5.098zm3.908 9.092h-4.418l.084-2.125c-1.359 1.699-3.143 2.465-5.607 2.465-2.889 0-4.844-2.209-4.844-5.523 0-5.012 3.398-7.901 9.346-7.901.596 0 1.361.085 2.125.169.17-.679.256-.934.256-1.274 0-1.359-.936-1.869-3.398-1.869-1.531 0-3.314.17-4.504.51l-.68.255-.51.085.764-4.588c2.635-.765 4.418-1.02 6.373-1.02 4.588 0 6.967 2.039 6.967 5.947 0 1.02 0 1.785-.424 4.079l-1.105 7.223-.17 1.273-.17 1.02-.084.766v.508h-.001zM155.727 88.774h-.51c-1.783 0-2.803.85-4.418 3.313l.51-3.144h-4.844l-3.229 20.392h5.268c1.955-12.49 2.465-14.614 5.014-14.614h.34c.51-2.464 1.189-4.249 2.039-5.863l-.17-.084z"
//                                 fill="#fff"
//                             />
//                         </g>
//                     </svg>
//                 </span>

//                 <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col items-start justify-between w-full ml-2 text-sm">
//                         <p className="dark:text-white">MasterCard</p>
//                         <p className="text-gray-300">Wallet deposit</p>
//                     </div>
//                     <span className="text-red-400">-\$1,904</span>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between rounded">
//                 <span className="rounded-lg">
//                     <svg
//                         width="40"
//                         height="40"
//                         className="rounded"
//                         viewBox="-.09581478 0 123.74964463 30.22562129"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             d="m46.211 6.749h-6.839a.95.95 0 0 0 -.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zm.789 6.405c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zm19.654-.079h-3.275a.57.57 0 0 0 -.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0 -.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zm22.007-6.374h-3.291a.954.954 0 0 0 -.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0 -.912-.678h-3.234a.57.57 0 0 0 -.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0 -.468-.895z"
//                             fill="#253b80"
//                         />
//                         <path
//                             d="m94.992 6.749h-6.84a.95.95 0 0 0 -.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zm19.653-.079h-3.273a.567.567 0 0 0 -.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0 -.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zm8.426-12.219-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0 -.562-.659h-3.16a.571.571 0 0 0 -.562.482z"
//                             fill="#179bd7"
//                         />
//                         <path
//                             d="m7.266 29.154.523-3.322-1.165-.027h-5.563l3.866-24.513a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1 -1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0 -.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1 -.096.035z"
//                             fill="#253b80"
//                         />
//                         <path
//                             d="m23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545h-2.752c-.661 0-1.218.48-1.321 1.132l-1.409 8.936-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0 -1.336-1.03z"
//                             fill="#179bd7"
//                         />
//                         <path
//                             d="m21.754 7.151a9.757 9.757 0 0 0 -1.203-.267 15.284 15.284 0 0 0 -2.426-.177h-7.352a1.172 1.172 0 0 0 -1.159.992l-1.564 9.906-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0 -1.017-.429 9.045 9.045 0 0 0 -.277-.087z"
//                             fill="#222d65"
//                         />
//                         <path
//                             d="m9.614 7.699a1.169 1.169 0 0 1 1.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 0 1 1.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392-1.399-1.593-3.924-2.275-7.155-2.275h-9.38c-.66 0-1.223.48-1.325 1.133l-3.907 24.765a.806.806 0 0 0 .795.932h5.791l1.454-9.225z"
//                             fill="#253b80"
//                         />
//                     </svg>
//                 </span>

//                 <div className="flex items-center justify-between w-full">
//                     <div className="flex flex-col items-start justify-between w-full ml-2 text-sm">
//                         <p className="dark:text-white">Paypal</p>
//                         <p className="text-gray-300">Wallet deposit</p>
//                     </div>
//                     <span className="text-green-400">+\$904</span>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default PaymentCard;
// `.trim(),
//   '/components/elements/data/PopularPerson.tsx': 
//     `import React from 'react';
// import Avatar from '../avatars/Avatar';

// const PopularPerson = () => {
//     return (
//         <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-60 dark:bg-gray-800">
//             <p className="mb-6 text-xl font-light font-medium text-gray-600 dark:text-white">Popular influencor</p>

//             <div className="grid grid-cols-3 gap-4">
//                 <div className="flex flex-col items-center">
//                     <div className="relative">
//                         <Avatar size="small" />
//                         <svg
//                             width="10"
//                             height="10"
//                             fill="currentColor"
//                             className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
//                         </svg>
//                     </div>
//                     <span className="mt-2 text-xs text-gray-600 dark:text-gray-400">Charlie R</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <div className="relative">
//                         <Avatar img="/images/person/4.jpg" size="small" />
//                         <svg
//                             width="10"
//                             height="10"
//                             fill="currentColor"
//                             className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
//                         </svg>
//                     </div>
//                     <span className="mt-2 text-xs text-gray-600 dark:text-gray-400">Bilal Ouid</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <div className="relative">
//                         <Avatar img="/images/person/5.jpg" size="small" />
//                         <svg
//                             width="10"
//                             height="10"
//                             fill="currentColor"
//                             className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
//                         </svg>
//                     </div>
//                     <span className="mt-2 text-xs text-gray-600 dark:text-gray-400">Aschi Ish</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <div className="relative">
//                         <Avatar img="/images/person/6.jpg" size="small" />
//                         <svg
//                             width="10"
//                             height="10"
//                             fill="currentColor"
//                             className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
//                         </svg>
//                     </div>
//                     <span className="mt-2 text-xs text-gray-600 dark:text-gray-400">Babet Cla</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <div className="relative">
//                         <Avatar img="/images/person/7.jpg" size="small" />
//                         <svg
//                             width="10"
//                             height="10"
//                             fill="currentColor"
//                             className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
//                         </svg>
//                     </div>
//                     <span className="mt-2 text-xs text-gray-600 dark:text-gray-400">Luc Suro</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                     <div className="relative">
//                         <Avatar img="/images/person/8.jpg" size="small" />
//                         <svg
//                             width="10"
//                             height="10"
//                             fill="currentColor"
//                             className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
//                         </svg>
//                     </div>
//                     <span className="mt-2 text-xs text-gray-600 dark:text-gray-400">John Jan</span>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default PopularPerson;
// `.trim(),
//   '/components/elements/data/ProjectDataCard.tsx': 
//     `import React from 'react';

// const ProjectDataCard = () => {
//     return (
//         <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-800">
//             <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
//                 Project Reffered
//             </p>
//             <div className="flex items-end my-6 space-x-2">
//                 <p className="text-5xl font-bold text-black dark:text-white">12</p>
//                 <span className="flex items-center text-xl font-bold text-green-500">
//                     <svg
//                         width="20"
//                         fill="currentColor"
//                         height="20"
//                         className="h-3"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                     </svg>
//                     22%
//                 </span>
//             </div>
//             <div className="dark:text-white">
//                 <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                     <p>Unique refferal URL</p>
//                     <div className="flex items-end text-xs">
//                         34
//                         <span className="flex items-center">
//                             <svg
//                                 width="20"
//                                 fill="currentColor"
//                                 height="20"
//                                 className="h-3 text-green-500"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                             </svg>
//                             22%
//                         </span>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                     <p>Embedded form</p>
//                     <div className="flex items-end text-xs">
//                         13
//                         <span className="flex items-center">
//                             <svg
//                                 width="20"
//                                 fill="currentColor"
//                                 height="20"
//                                 className="h-3 text-green-500"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                             </svg>
//                             12%
//                         </span>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
//                     <p>New visitor</p>
//                     <div className="flex items-end text-xs">
//                         45
//                         <span className="flex items-center">
//                             <svg
//                                 width="20"
//                                 fill="currentColor"
//                                 height="20"
//                                 className="h-3 text-green-500"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                             </svg>
//                             41%
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ProjectDataCard;
// `.trim(),
//   '/components/elements/data/RecapCard.tsx': 
//     `import React from 'react';
// import Avatar from '../avatars/Avatar';
// import Button from '../buttons/Button';

// const RecapCard = () => {
//     return (
//         <div className="relative w-full p-6 overflow-hidden bg-white bg-blue-500 shadow-lg rounded-xl md:w-64 dark:bg-gray-800">
//             <p className="text-xl text-white">Quick recap</p>

//             <div className="flex items-center justify-between my-4 text-blue-500 rounded">
//                 <span className="p-2 bg-white rounded-lg">
//                     <svg
//                         width="25"
//                         height="25"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
//                     </svg>
//                 </span>
//                 <div className="flex flex-col items-start w-full ml-2 justify-evenly">
//                     <p className="text-lg text-white">45%</p>
//                     <p className="text-sm text-blue-200">Your growth</p>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between text-blue-500 rounded">
//                 <span className="p-2 bg-white rounded-lg">
//                     <svg
//                         width="25"
//                         height="25"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
//                     </svg>
//                 </span>
//                 <div className="flex flex-col items-start w-full ml-2 justify-evenly">
//                     <p className="text-lg text-white">70%</p>
//                     <p className="text-sm text-blue-200">Your delivery</p>
//                 </div>
//             </div>
//             <div className="mt-4">
//                 <button
//                     type="button"
//                     className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 focus:ring-blue-500 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//                 >
//                     Optimize
//                 </button>
//             </div>
//         </div>
//     );
// };
// export default RecapCard;
// `.trim(),
//   '/components/elements/data/SimpleIconDescCard.tsx': 
//     `import React, { FC } from 'react';
// const SimpleIconDescCard: FC = () => {
//     return (
//         <div className="relative w-64 p-4 m-auto bg-gray-900 shadow-lg rounded-2xl">
//             <div className="w-full h-full text-center">
//                 <div className="flex flex-col justify-between h-full">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="40"
//                         height="40"
//                         fill="currentColor"
//                         className="w-20 h-20 m-auto mt-4 text-white dark:text-white"
//                         viewBox="0 0 2048 1792"
//                     >
//                         <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z" />
//                     </svg>
//                     <p className="absolute text-sm italic text-white top-2 right-2">by express</p>
//                     <p className="mt-4 text-lg text-white">Package delivered</p>
//                     <p className="px-6 py-2 text-xs font-thin text-gray-50">
//                         Your package was delivered in 1 day and 4 hours by our postal partner
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default SimpleIconDescCard;
// `.trim(),
//   '/components/elements/data/SimpleLevelsCard.tsx': 
//     `import React, { FC } from 'react';

// const SimpleLevelsCard: FC = () => {
//     return (
//         <div className="relative w-full overflow-hidden bg-white shadow-lg dark:bg-gray-700">
//             <a href="#" className="block w-full h-full">
//                 <div className="flex items-center justify-between px-4 py-6 space-x-4">
//                     <div className="flex items-center">
//                         <span className="relative p-5 bg-yellow-100 rounded-full">
//                             <svg
//                                 width="40"
//                                 fill="currentColor"
//                                 height="40"
//                                 className="absolute h-5 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
//                             </svg>
//                         </span>
//                         <p className="ml-2 text-sm font-semibold text-gray-700 border-b border-gray-200 dark:text-white">
//                             Level 2 Ambassador
//                         </p>
//                     </div>
//                     <div className="mt-6 text-xl font-bold text-black border-b border-gray-200 md:mt-0 dark:text-white">
//                         \$44,453.39 <span className="text-xs text-gray-400">/\$100K</span>
//                     </div>
//                 </div>

//                 <div className="w-full h-3 bg-gray-100">
//                     <div className="w-2/5 h-full text-xs text-center text-white bg-green-400"></div>
//                 </div>
//             </a>
//         </div>
//     );
// };

// export default SimpleLevelsCard;
// `.trim(),
//   '/components/elements/data/SimpleNotificationCard.tsx': 
//     `import React, { FC } from 'react';
// const SimpleNotificationCard: FC = () => {
//     return (
//         <div className="flex items-center justify-between w-64 p-4 bg-white shadow-lg rounded-2xl">
//             <div className="w-2/6">
//                 <img src="/images/person/2.jpeg" alt="person" className="w-12 h-12 rounded-full" />
//             </div>
//             <div className="w-3/6">
//                 <p className="text-sm text-gray-500">
//                     You have
//                     <span className="font-bold text-indigo-500"> 2 </span>new messages
//                 </p>
//             </div>
//             <div className="w-1/6 text-right">
//                 <svg
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                     viewBox="0 0 1792 1792"
//                     className="w-6 h-6 text-indigo-500"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
//                 </svg>
//             </div>
//         </div>
//     );
// };
// export default SimpleNotificationCard;
// `.trim(),
//   '/components/elements/data/SimplePhotoDescCard.tsx': 
//     `import React, { FC } from 'react';

// const SimplePhotoDescCard: FC = () => {
//     return (
//         <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
//             <img alt="moto" src="/images/object/1.png" className="absolute w-40 h-40 mb-4 -right-16 -bottom-16" />
//             <div className="w-4/6">
//                 <p className="mb-2 text-lg font-medium text-gray-800">NextJS</p>
//                 <p className="text-xs text-gray-400">
//                     NextJs build all free components and templates for React website.
//                 </p>
//             </div>
//         </div>
//     );
// };
// export default SimplePhotoDescCard;
// `.trim(),
//   '/components/elements/data/SimpleTask.tsx': 
//     `import React, { FC } from 'react';
// import Avatar from '../avatars/Avatar';

// const SimpleTask: FC = () => {
//     return (
//         <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-72 dark:bg-gray-800">
//             <a href="#" className="block w-full h-full">
//                 <div className="flex items-center w-full">
//                     <Avatar size="small" />
//                     <div className="flex flex-col items-center ml-2">
//                         <span className="dark:text-white">Charlie Rabiller</span>
//                         <span className="text-sm text-gray-400 dark:text-gray-300">Tailwind-kit.com</span>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-between my-2">
//                     <p className="text-sm text-gray-300">4/6 task completed</p>
//                 </div>
//                 <div className="w-full h-2 bg-blue-200 rounded-full">
//                     <div className="w-2/3 h-full text-xs text-center text-white bg-blue-600 rounded-full"></div>
//                 </div>
//             </a>
//         </div>
//     );
// };

// export default SimpleTask;
// `.trim(),
//   '/components/elements/data/SlackTask.tsx': 
//     `import React, { FC } from 'react';
// import MultipleAvatar from '../avatars/MultipleAvatar';
// const SlackTask: FC = () => {
//     return (
//         <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
//             <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                     <span className="relative p-2 bg-blue-100 rounded-xl">
//                         <svg width="25" height="25" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg">
//                             <g clipRule="evenodd" fillRule="evenodd">
//                                 <path
//                                     d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
//                                     fill="#36c5f0"
//                                 />
//                                 <path
//                                     d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
//                                     fill="#2eb67d"
//                                 />
//                                 <path
//                                     d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
//                                     fill="#ecb22e"
//                                 />
//                                 <path
//                                     d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
//                                     fill="#e01e5a"
//                                 />
//                             </g>
//                         </svg>
//                     </span>
//                     <div className="flex flex-col">
//                         <span className="ml-2 font-bold text-black text-md dark:text-white">Slack</span>
//                         <span className="ml-2 text-sm text-gray-500 dark:text-white">Slack corporation</span>
//                     </div>
//                 </div>
//                 <div className="flex items-center">
//                     <button className="p-1 border border-gray-200 rounded-full">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-500"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                     </button>
//                     <button className="text-gray-200">
//                         <svg
//                             width="25"
//                             height="25"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             <div className="flex items-center justify-between mb-4 space-x-12">
//                 <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">
//                     COMPLETED
//                 </span>
//                 <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-600 bg-white border border-green-600 rounded-md">
//                     MEDIUM PRIORITY
//                 </span>
//             </div>

//             <div className="block m-auto">
//                 <div>
//                     <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
//                         Task done : <span className="font-bold text-gray-700 dark:text-white">50 </span> /50
//                     </span>
//                 </div>
//                 <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
//                     <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full"></div>
//                 </div>
//             </div>

//             <div className="flex items-center justify-start my-4 space-x-4">
//                 <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
//                     IOS APP
//                 </span>
//                 <span className="flex items-center px-2 py-1 text-xs font-semibold text-yellow-600 bg-yellow-200 rounded-md">
//                     ANDROID
//                 </span>
//             </div>

//             <MultipleAvatar size="small" />

//             <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
//                 DUE DATE : 18 JUN
//             </span>
//         </div>
//     );
// };
// export default SlackTask;
// `.trim(),
//   '/components/elements/data/TagsCard.tsx': 
//     `import React, { FC } from 'react';
// const TagsCard: FC = () => {
//     return (
//         <div className="w-64 m-auto overflow-hidden shadow-lg rounded-2xl h-90">
//             <img alt="eggs" src="/images/car/1.jpg" className="rounded-t-lg" />
//             <div className="relative w-full p-4 bg-white">
//                 <button
//                     aria-label="Go to article"
//                     type="button"
//                     className="absolute w-12 h-12 text-white bg-indigo-500 rounded-full right-8 -top-6"
//                 >
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         className="w-6 h-6 mx-auto text-white"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                     </svg>
//                 </button>
//                 <p className="mb-2 text-xl font-medium text-gray-800">Templates</p>
//                 <p className="text-xs text-gray-600">
//                     Improve UI with beautiful templates and components for Tailwind css.
//                 </p>
//                 <div className="flex flex-wrap items-center mt-6 justify-starts">
//                     <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">#css</div>
//                     <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
//                         #tailwind
//                     </div>
//                     <div className="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">#components</div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default TagsCard;
// `.trim(),
//   '/components/elements/data/TaskCard.tsx': 
//     `import React, { FC } from 'react';
// import MultipleAvatar from '../avatars/MultipleAvatar';

// const TaskCard: FC = () => {
//     return (
//         <div className="relative max-w-xs p-4 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
//             <a href="#" className="block w-full h-full">
//                 <div className="w-full">
//                     <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
//                         Improve css design of the carousel
//                     </p>
//                     <p className="mb-2 text-xs font-medium text-gray-400 dark:text-gray-300">Sunday 13 october</p>
//                     <p className="mb-4 text-sm text-gray-400 dark:text-gray-300">
//                         You’ve been coding for a while now and know your way around a CSS file. You’re certainly no
//                         master, but with enough fiddling you can get where you want to go.
//                     </p>
//                     <div className="flex items-center justify-between dark:text-gray-200">
//                         <p>Task progress</p>
//                         <p>33%</p>
//                     </div>
//                     <div className="w-full h-2 mt-3 mb-6 bg-gray-400 rounded-full">
//                         <div className={\\`w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full\\`}></div>
//                     </div>
//                     <div className="flex items-center">
//                         <MultipleAvatar size="small" />
//                         <span className="ml-2 text-gray-500 dark:text-gray-300">+ 4 more</span>
//                     </div>
//                 </div>
//             </a>
//         </div>
//     );
// };

// export default TaskCard;
// `.trim(),
//   '/components/elements/data/TasksList.tsx': 
//     `import React, { FC } from 'react';

// const TasksList: FC = () => {
//     return (
//         <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
//             <p className="p-4 font-bold text-black text-md dark:text-white">
//                 My Tasks
//                 <span className="ml-2 text-sm text-gray-500 dark:text-gray-300 dark:text-white">(05)</span>
//             </p>

//             <ul>
//                 <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
//                     <div className="flex items-center justify-start text-sm">
//                         <span className="mx-4">01</span>
//                         <span>Create wireframe</span>
//                     </div>
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         className="mx-4 text-gray-400 dark:text-gray-300"
//                         viewBox="0 0 1024 1024"
//                     >
//                         <path
//                             d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
//                             fill="currentColor"
//                         ></path>
//                         <path
//                             d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
//                             fill="currentColor"
//                         ></path>
//                     </svg>
//                 </li>
//                 <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
//                     <div className="flex items-center justify-start text-sm">
//                         <span className="mx-4">02</span>
//                         <span>Dashboard design</span>
//                         <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
//                             3
//                             <svg width="15" height="15" fill="currentColor" className="ml-1" viewBox="0 0 512 512">
//                                 <path
//                                     d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
//                                     fill="currentColor"
//                                 ></path>
//                             </svg>
//                         </span>
//                         <span className="flex items-center mx-4 text-gray-400 dark:text-gray-300">
//                             3
//                             <svg width="15" height="15" className="ml-1" fill="currentColor" viewBox="0 0 384 512">
//                                 <path
//                                     d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
//                                     fill="currentColor"
//                                 ></path>
//                             </svg>
//                         </span>
//                     </div>

//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         className="mx-4 text-gray-400 dark:text-gray-300"
//                         viewBox="0 0 1024 1024"
//                     >
//                         <path
//                             d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
//                             fill="currentColor"
//                         ></path>
//                         <path
//                             d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
//                             fill="currentColor"
//                         ></path>
//                     </svg>
//                 </li>
//                 <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
//                     <div className="flex items-center justify-start text-sm">
//                         <span className="mx-4">03</span>
//                         <span>Components card</span>
//                         <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
//                             3
//                             <svg width="15" height="15" fill="currentColor" className="ml-1" viewBox="0 0 512 512">
//                                 <path
//                                     d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
//                                     fill="currentColor"
//                                 ></path>
//                             </svg>
//                         </span>
//                     </div>

//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         className="mx-4 text-gray-400 dark:text-gray-300"
//                         viewBox="0 0 1024 1024"
//                     >
//                         <path
//                             d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
//                             fill="currentColor"
//                         ></path>
//                         <path
//                             d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
//                             fill="currentColor"
//                         ></path>
//                     </svg>
//                 </li>
//                 <li className="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
//                     <div className="flex items-center justify-start text-sm">
//                         <span className="mx-4">04</span>
//                         <span className="line-through">Google logo design</span>
//                     </div>
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1024 1024"
//                         className="mx-4 text-green-500"
//                     >
//                         <path
//                             d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
//                             fill="currentColor"
//                         ></path>
//                     </svg>
//                 </li>
//                 <li className="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
//                     <div className="flex items-center justify-start text-sm">
//                         <span className="mx-4">05</span>
//                         <span className="line-through">Header navigation</span>
//                     </div>
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 1024 1024"
//                         className="mx-4 text-green-500"
//                     >
//                         <path
//                             d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
//                             fill="currentColor"
//                         ></path>
//                     </svg>
//                 </li>
//                 <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:text-gray-200 dark:border-gray-800">
//                     <div className="flex items-center justify-start text-sm">
//                         <span className="mx-4">06</span>
//                         <span>International</span>
//                         <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
//                             3
//                             <svg width="15" height="15" fill="currentColor" className="ml-1" viewBox="0 0 512 512">
//                                 <path
//                                     d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
//                                     fill="currentColor"
//                                 ></path>
//                             </svg>
//                         </span>
//                         <span className="flex items-center mx-4 text-gray-400 dark:text-gray-300">
//                             3
//                             <svg width="15" height="15" className="ml-1" fill="currentColor" viewBox="0 0 384 512">
//                                 <path
//                                     d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
//                                     fill="currentColor"
//                                 ></path>
//                             </svg>
//                         </span>
//                     </div>

//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         className="mx-4 text-gray-400 dark:text-gray-300"
//                         viewBox="0 0 1024 1024"
//                     >
//                         <path
//                             d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
//                             fill="currentColor"
//                         ></path>
//                         <path
//                             d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
//                             fill="currentColor"
//                         ></path>
//                     </svg>
//                 </li>
//                 <li className="flex items-center justify-between py-3 text-gray-600 dark:text-gray-200">
//                     <div className="flex items-center justify-start text-sm">
//                         <span className="mx-4">07</span>
//                         <span>Production data</span>
//                     </div>
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         className="mx-4 text-gray-400 dark:text-gray-300"
//                         viewBox="0 0 1024 1024"
//                     >
//                         <path
//                             d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
//                             fill="currentColor"
//                         ></path>
//                         <path
//                             d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
//                             fill="currentColor"
//                         ></path>
//                     </svg>
//                 </li>
//             </ul>
//         </div>
//     );
// };
// export default TasksList;
// `.trim(),
//   '/components/elements/data/VideoDetailsCard.tsx': 
//     `import React, { FC } from 'react';
// import Avatar from '../avatars/Avatar';
// const VideoDetailsCard: FC = () => {
//     return (
//         <div className="flex flex-col justify-start max-w-xl gap-4 p-4 bg-white shadow-xl rounded-xl dark:bg-gray-800 md:flex-row">
//             <div className="relative">
//                 <img src="/images/landscape/1.jpg" className="w-full rounded-xl md:w-auto md:max-h-40" />
//                 <span className="absolute px-2 py-1 text-xs text-white rounded bg-gray-700/50 right-2 bottom-2">
//                     7 min
//                 </span>
//             </div>

//             <div className="flex flex-col justify-between">
//                 <div className="flex items-start justify-between my-2 text-gray-700 dark:text-white md:m-0">
//                     <p className="text-xl leading-5">How to travel arround the world without any money</p>
//                     <button className="text-red-400 hover:text-red-600">
//                         <svg
//                             width="25"
//                             height="25"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z" />
//                         </svg>
//                     </button>
//                 </div>
//                 <div className="flex items-center my-2 text-xs text-gray-500 dark:text-gray-400 md:m-0">
//                     <svg
//                         width="10"
//                         height="10"
//                         fill="currentColor"
//                         className="mr-2"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z" />
//                     </svg>
//                     123,344,893 views
//                     <svg
//                         width="10"
//                         height="10"
//                         fill="currentColor"
//                         className="ml-6 mr-2"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z" />
//                     </svg>
//                     45 876 likes
//                 </div>
//                 <div className="flex items-start my-2 md:m-0">
//                     <div className="relative">
//                         <Avatar size="small" />
//                         <svg
//                             width="10"
//                             height="10"
//                             fill="currentColor"
//                             className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-blue-600 rounded-full fill-current"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
//                         </svg>
//                     </div>
//                     <div className="flex flex-col items-start justify-center ml-2">
//                         <span className="flex items-center text-sm text-gray-600 dark:text-gray-200">
//                             Charlie Rabiller <span className="block w-2 h-2 ml-1 bg-green-500 rounded-full"></span>
//                         </span>
//                         <span className="text-xs text-gray-400">1 week ago</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default VideoDetailsCard;
// `.trim(),
//   '/components/elements/ddm/DropDownMenu.tsx': 
//     `import React, { useState } from 'react';

// interface Props {
//     //boolean to always open ddm (for presentation)
//     forceOpen?: boolean;
//     label?: string;
//     withDivider?: boolean;
//     icon?: JSX.Element;
//     items: DDMItem[];
//     withBackground?: boolean;
// }

// export interface DDMItem {
//     icon?: JSX.Element;
//     label: string;
//     desc?: string;
//     link?: string;
// }

// const DropDownMenu = (props: Props) => {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <div className="relative inline-block text-left">
//             <div>
//                 <button
//                     type="button"
//                     onClick={() => setIsOpen(!isOpen)}
//                     className={\\` \${
//                         props.withBackground ? 'border border-gray-300 bg-white dark:bg-gray-800 shadow-sm' : ''
//                     } flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500\\`}
//                     id="options-menu"
//                 >
//                     {props.label}

//                     {props.icon || (
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
//                         </svg>
//                     )}
//                 </button>
//             </div>

//             {(props.forceOpen || isOpen) && (
//                 <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
//                     <div
//                         className={\\`py-1 \${props.withDivider ? 'divide-y divide-gray-100' : ''}\\`}
//                         role="menu"
//                         aria-orientation="vertical"
//                         aria-labelledby="options-menu"
//                     >
//                         {props.items.map((item) => {
//                             return (
//                                 <a
//                                     key={item.label}
//                                     href={item.link || '#'}
//                                     className={\\`\${
//                                         item.icon ? 'flex items-center' : 'block'
//                                     } block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600\\`}
//                                     role="menuitem"
//                                 >
//                                     {item.icon}

//                                     <span className="flex flex-col">
//                                         <span>{item.label}</span>
//                                         {item.desc && <span className="text-xs text-gray-400">{item.desc}</span>}
//                                     </span>
//                                 </a>
//                             );
//                         })}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
// export default DropDownMenu;
// `.trim(),
//   '/components/elements/ddm/DropDownMenuWithForm.tsx': 
//     `import React, { useState } from 'react';
// import InputText from '../../form/inputtext/InputText';
// import Button from '../buttons/Button';

// interface Props {
//     //boolean to always open ddm (for presentation)
//     forceOpen?: boolean;
//     label?: string;
//     icon?: string;
// }

// const DropDownMenuWithForm = (props: Props) => {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <div className="relative inline-block text-left">
//             <div>
//                 <button
//                     type="button"
//                     onClick={() => setIsOpen(!isOpen)}
//                     className={\\`border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500\\`}
//                     id="options-menu"
//                 >
//                     {props.label}

//                     {props.icon || (
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
//                         </svg>
//                     )}
//                 </button>
//             </div>

//             {(props.forceOpen || isOpen) && (
//                 <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-300 rounded-md dark:bg-gray-800">
//                     <div className="p-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                         <div>
//                             <InputText placeholder="Name" />
//                         </div>
//                         <div>
//                             <div className="w-full my-3 text-center text-gray-500 text-md">Or</div>
//                             <InputText placeholder="City" />
//                         </div>
//                         <div className="flex items-center mt-3">
//                             <Button label="Search" color="indigo" />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
// export default DropDownMenuWithForm;
// `.trim(),
//   '/components/elements/ddm/LargeDropDownMenu.tsx': 
//     `import React, { useState, useRef, useCallback, useEffect } from 'react';

// interface Props {
//     forceOpen?: boolean;
//     label?: string;
//     icon?: string;
//     items: DDMItem[];
//     withBackground?: boolean;
// }
// interface DDMItem {
//     icon?: JSX.Element;
//     label: string;
//     desc?: string;
//     link?: string;
// }
// const LargeDropDownMenu = (props: Props) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const listElement = useRef<HTMLDivElement>();
//     const selectButton = useRef<HTMLButtonElement>();
//     const handleClickOutside = useCallback((event) => {
//         const myHTMLWrapper = listElement.current;
//         const btnElement = selectButton.current;
//         if (
//             myHTMLWrapper &&
//             btnElement &&
//             !myHTMLWrapper.contains(event.target) &&
//             !btnElement.contains(event.target)
//         ) {
//             setIsOpen(false);
//         }
//     }, []);

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [handleClickOutside]);
//     return (
//         <div className="relative inline-block text-left">
//             <div>
//                 <button
//                     ref={selectButton}
//                     type="button"
//                     onClick={() => setIsOpen(!isOpen)}
//                     className={\\` \${
//                         props.withBackground ? 'border border-gray-300 bg-white dark:bg-gray-800 shadow-sm' : ''
//                     } flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500\\`}
//                     id="options-menu"
//                 >
//                     {props.label}

//                     {props.icon || (
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
//                         </svg>
//                     )}
//                 </button>
//             </div>

//             {(props.forceOpen || isOpen) && (
//                 <div
//                     ref={listElement}
//                     className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
//                 >
//                     <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                         <div className="relative grid gap-6 px-5 py-6 bg-white divide-y divide-gray-100 dark:bg-gray-800 sm:gap-8 sm:p-8">
//                             {props.items.map((item) => {
//                                 return (
//                                     <a
//                                         href={item.link || '#'}
//                                         key={item.label}
//                                         className="flex items-center p-3 -m-3 hover:bg-gray-50"
//                                     >
//                                         {item.icon}

//                                         <div className="ml-4">
//                                             <p className="text-base font-medium text-gray-900 dark:text-white">
//                                                 {item.label}
//                                             </p>
//                                             {item.desc && (
//                                                 <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//                                                     {item.desc}
//                                                 </p>
//                                             )}
//                                         </div>
//                                     </a>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
// export default LargeDropDownMenu;
// `.trim(),
//   '/components/elements/index.tsx': 
//     `import React, { FC } from 'react';
// import SectionDesc from '../../../site/section/SectionDesc';

// const Elements: FC = () => {
//     const elementsSection = [
//         {
//             title: 'Buttons',
//             items: 22,
//             img: 'images/sections/button.png',
//             link: '/components/buttons',
//         },
//         {
//             title: 'Badges',
//             items: 15,
//             img: 'images/sections/badges.png',
//             link: '/components/badges',
//         },
//         {
//             title: 'Avatars',
//             items: 11,
//             img: 'images/sections/avatar.png',
//             link: '/components/avatar',
//         },
//         {
//             title: 'Menu list',
//             items: 7,
//             img: 'images/sections/ddm.png',
//             link: '/components/ddm',
//         },
//         {
//             title: 'Alerts',
//             items: 11,
//             img: 'images/sections/alerte.png',
//             link: '/components/alert',
//         },
//         {
//             title: 'Dashboards',
//             items: 26,
//             img: 'images/sections/data.png',
//             link: '/components/data',
//         },
//         {
//             title: 'Progress bars',
//             items: 5,
//             img: 'images/sections/progress.png',
//             link: '/components/progress',
//         },
//         {
//             title: 'Skeleton',
//             items: 3,
//             img: 'images/sections/skeleton.png',
//             link: '/components/skeleton',
//         },
//         {
//             title: 'Tabs',
//             isNew: true,
//             items: 3,
//             img: 'images/sections/tabs.png',
//             link: '/components/tabs',
//         },
//     ];

//     return <SectionDesc withPub id="elements" items={elementsSection} title="Elements" />;
// };

// export default Elements;
// `.trim(),
//   '/components/elements/progress/ProgressBar.tsx': 
//     `import React from 'react';

// interface Props {
//     color?: string;
//     textColor?: string;
//     isFat?: boolean;
//     label?: string;
//     withBadge?: boolean;
// }

// const ProgressBar = (props: Props) => {
//     return (
//         <div>
//             <div className="block p-4 m-auto bg-white rounded-lg shadow w-72">
//                 {props.withBadge && (
//                     <div>
//                         <span
//                             className={\\`text-xs font-light inline-block py-1 px-2 uppercase rounded-full \${props.textColor} \${props.color}\\`}
//                         >
//                             Task in progress
//                         </span>
//                     </div>
//                 )}
//                 <div className={\\`w-full \${props.isFat ? 'h-4' : 'h-2'} bg-gray-400 rounded-full mt-3\\`}>
//                     <div className={\\`w-3/4 h-full text-center text-xs text-white \${props.color} rounded-full\\`}>
//                         {props.label}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ProgressBar;
// `.trim(),
//   '/components/elements/skeleton/HorizontalSkeletonCard.tsx': 
//     `import React from 'react';

// const HorizontalSkeletonCard = () => {
//     return (
//         <div className="flex flex-col w-1/2 gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
//             <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse"></div>
//             <div className="flex flex-col flex-1 gap-5 sm:p-2">
//                 <div className="flex flex-col flex-1 gap-3">
//                     <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl"></div>
//                     <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
//                     <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
//                     <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
//                     <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
//                 </div>
//                 <div className="flex gap-3 mt-auto">
//                     <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
//                     <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
//                     <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default HorizontalSkeletonCard;
// `.trim(),
//   '/components/elements/skeleton/PictureAndTextSkeleton.tsx': 
//     `import React from 'react';

// const PictureAndTextSkeleton = () => {
//     return (
//         <div className="mx-auto bg-white rounded shadow-lg w-96 rounded-2xl">
//             <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"> </div>
//             <div className="p-3 h-">
//                 <div className="grid grid-cols-3 gap-4 mt-2">
//                     <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
//                     <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
//                     <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
//                     <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
//                     <div className="h-8 bg-gray-200 rounded  animate-pulse"></div>
//                     <div className="..."></div>
//                     <div className="col-span-2 ..."></div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default PictureAndTextSkeleton;
// `.trim(),
//   '/components/elements/skeleton/SimpleSkeleton.tsx': 
//     `import React from 'react';

// const SimpleSkeleton = () => {
//     return (
//         <div className="h-24 mx-auto border-2 rounded-md w-60">
//             <div className="flex flex-row items-center justify-center h-full space-x-5 animate-pulse">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full "></div>
//                 <div className="flex flex-col space-y-3">
//                     <div className="h-6 bg-gray-300 rounded-md w-36 "></div>
//                     <div className="w-24 h-6 bg-gray-300 rounded-md "></div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default SimpleSkeleton;
// `.trim(),
//   '/components/elements/tabs/BasicTabs.tsx': 
//     `export default function BasicTabs() {
//     return (
//         <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
//             <li className="mr-2">
//                 <a href="#" className="inline-block p-4 text-gray-800 bg-white rounded-t-lg active ">
//                     Home
//                 </a>
//             </li>
//             <li className="mr-2">
//                 <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
//                     Calendar
//                 </a>
//             </li>
//             <li className="mr-2">
//                 <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
//                     Results
//                 </a>
//             </li>
//             <li className="mr-2">
//                 <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
//                     Live
//                 </a>
//             </li>
//         </ul>
//     );
// }
// `.trim(),
//   '/components/elements/tabs/BasicTabsDisabled.tsx': 
//     `export default function BasicTabsDisabled() {
//     return (
//         <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
//             <li className="mr-2">
//                 <a href="#" className="inline-block p-4 text-gray-800 bg-white rounded-t-lg active ">
//                     Home
//                 </a>
//             </li>
//             <li className="mr-2">
//                 <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
//                     Calendar
//                 </a>
//             </li>
//             <li className="mr-2">
//                 <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
//                     Results
//                 </a>
//             </li>
//             <li className="mr-2">
//                 <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
//                     Live
//                 </a>
//             </li>
//             <li>
//                 <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
//                     Disabled
//                 </a>
//             </li>
//         </ul>
//     );
// }
// `.trim(),
//   '/components/elements/tabs/BasicTabsUnderline.tsx': 
//     `export default function BasicTabsUnderline() {
//     return (
//         <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
//             <ul className="flex flex-wrap -mb-px">
//                 <li className="mr-2">
//                     <a
//                         href="#"
//                         className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
//                     >
//                         Home
//                     </a>
//                 </li>
//                 <li className="mr-2">
//                     <a
//                         href="#"
//                         className="inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active "
//                         aria-current="page"
//                     >
//                         Calendar
//                     </a>
//                 </li>
//                 <li className="mr-2">
//                     <a
//                         href="#"
//                         className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
//                     >
//                         Results
//                     </a>
//                 </li>
//                 <li className="mr-2">
//                     <a
//                         href="#"
//                         className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
//                     >
//                         Live
//                     </a>
//                 </li>
//             </ul>
//         </div>
//     );
// }
// `.trim(),
//   '/components/form/dateTimePicker/TimePicker.tsx': 
//     `import React from 'react';

// export const TimePicker = () => {
//     return (
//         <label className="text-gray-700" htmlFor="time">
//             <input
//                 className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                 type="time"
//             />
//         </label>
//     );
// };
// `.trim(),
//   '/components/form/index.tsx': 
//     `import React, { FC } from 'react';
// import SectionDesc from '../../../site/section/SectionDesc';

// const Forms: FC = () => {
//     const formSections = [
//         {
//             title: 'Inputs',
//             items: 10,
//             img: 'images/sections/input.png',
//             link: '/components/inputtext',
//         },
//         {
//             title: 'Selects',
//             items: 4,
//             img: 'images/sections/select.png',
//             link: '/components/inputselect',
//         },
//         {
//             title: 'Toggles',
//             items: 3,
//             img: 'images/sections/toggle.png',
//             link: '/components/toggle',
//         },
//         {
//             title: 'Layouts',
//             items: 10,
//             img: 'images/sections/login.png',
//             link: '/components/form',
//         },
//     ];

//     return <SectionDesc id="forms" items={formSections} title="Forms" />;
// };

// export default Forms;
// `.trim(),
//   '/components/form/inputtext/InputArea.tsx': 
//     `import React from 'react';

// const InputArea = () => {
//     return (
//         <label className="text-gray-700" htmlFor="name">
//             <textarea
//                 className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//                 id="comment"
//                 placeholder="Enter your comment"
//                 name="comment"
//                 rows={5}
//                 cols={40}
//             />
//         </label>
//     );
// };

// export default InputArea;
// `.trim(),
//   '/components/form/inputtext/InputGroup.tsx': 
//     `import React from 'react';

// const InputGroup = () => {
//     return (
//         <div>
//             <label htmlFor="price" className="block text-sm font-medium text-gray-700">
//                 Price
//             </label>
//             <div className="relative mt-1 rounded-md shadow-sm">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     <span className="text-gray-500 sm:text-sm">\$</span>
//                 </div>
//                 <input
//                     type="text"
//                     name="price"
//                     id="price"
//                     className="block w-full px-4 py-2 pr-12 border-t border-b border-l border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
//                     placeholder="0.00"
//                 />
//                 <div className="absolute inset-y-0 right-0 flex items-center">
//                     <label htmlFor="currency" className="sr-only">
//                         Currency
//                     </label>
//                     <select
//                         id="Currency"
//                         name="currency"
//                         className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md"
//                     >
//                         <option>USD</option>
//                         <option>CAD</option>
//                         <option>EUR</option>
//                     </select>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InputGroup;
// `.trim(),
//   '/components/form/inputtext/InputText.tsx': 
//     `import React from 'react';

// interface Props {
//     type?: string;
//     label?: string;
//     required?: boolean;
//     error?: string;
//     icon?: JSX.Element;
//     helper?: string;
//     placeholder?: string;
//     name?: string;
//     disabled?: boolean;
//     square?: boolean;
//     withForceIndications?: boolean;
//     id?: string;
// }

// const InputText = (props: Props) => {
//     return (
//         <div
//             className={\\`\${props.helper || props.icon ? 'flex' : ''} relative \${
//                 props.disabled ? 'opacity-50 pointer-events-none' : ''
//             }\\`}
//         >
//             {props.label && (
//                 <label htmlFor={props.id} className="text-gray-700">
//                     {props.label} {props.required && <span className="text-red-500 required-dot">*</span>}
//                 </label>
//             )}
//             {(props.helper || props.icon) && (
//                 <span
//                     className={\\`\${
//                         props.square ? '' : 'rounded-l-md'
//                     } inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm\\`}
//                 >
//                     {props.helper || props.icon}
//                 </span>
//             )}
//             <input
//                 id={props.id}
//                 disabled={props.disabled}
//                 className={\\`\${props.error ? 'ring-red-500 ring-2' : ''}\${
//                     props.helper || props.icon
//                         ? !props.square
//                             ? ' rounded-r-lg'
//                             : ''
//                         : !props.square
//                         ? ' rounded-lg border-transparent'
//                         : ''
//                 } flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent\\`}
//                 type={props.type || 'text'}
//                 name={props.name}
//                 placeholder={props.placeholder}
//             />
//             {props.withForceIndications && (
//                 <>
//                     <div className="grid w-full h-1 grid-cols-12 gap-4 mt-3">
//                         <div className="h-full col-span-3 bg-green-500 rounded"></div>
//                         <div className="h-full col-span-3 bg-green-500 rounded"></div>
//                         <div className="h-full col-span-3 bg-green-500 rounded"></div>
//                         <div className="h-full col-span-3 bg-gray-200 rounded dark:bg-dark-1"></div>
//                     </div>
//                     <div className="mt-2 text-green-500">Valid password</div>
//                 </>
//             )}
//             {props.error && (
//                 <>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="15"
//                         height="15"
//                         fill="currentColor"
//                         className="absolute text-red-500 right-2 bottom-3"
//                         viewBox="0 0 1792 1792"
//                     >
//                         <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
//                     </svg>

//                     <p className="absolute text-sm text-red-500 -bottom-6">{props.error}</p>
//                 </>
//             )}
//         </div>
//     );
// };

// export default InputText;
// `.trim(),
//   '/components/form/layout/ContactForm.tsx': 
//     `import React from 'react';
// import InputText from '../inputtext/InputText';
// import InputArea from '../inputtext/InputArea';
// import Button from '../../elements/buttons/Button';

// const ContactForm = () => {
//     return (
//         <form className="flex w-full max-w-sm space-x-3">
//             <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
//                 <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">Contact us !</div>

//                 <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
//                     <div className="col-span-2 lg:col-span-1">
//                         <InputText placeholder="Name" id="contact-form-name" />
//                     </div>

//                     <div className="col-span-2 lg:col-span-1">
//                         <InputText placeholder="email" id="contact-form-email" />
//                     </div>

//                     <div className="col-span-2">
//                         <InputArea />
//                     </div>

//                     <div className="col-span-2 text-right">
//                         <Button submit={true} label="Send" color="indigo" />
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };
// export default ContactForm;
// `.trim(),
//   '/components/form/layout/CreateAccount.tsx': 
//     `import React from 'react';
// import Button from '../../elements/buttons/Button';
// import InputText from '../inputtext/InputText';
// import Checkbox from '../toggle/Checkbox';

// const CreateAccount = () => {
//     return (
//         <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
//             <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
//                 Create a new account
//             </div>
//             <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
//                 Already have an account ?
//                 <a href="#" target="_blank" className="text-sm text-blue-500 underline hover:text-blue-700">
//                     Sign in
//                 </a>
//             </span>

//             <div className="p-6 mt-8">
//                 <form action="#">
//                     <div className="flex flex-col mb-2">
//                         <InputText name="pseudo" type="text" placeholder="Pseudo" id="create-account-pseudo" />
//                     </div>
//                     <div className="flex gap-4 mb-2">
//                         <InputText
//                             name="First name"
//                             type="text"
//                             placeholder="First name"
//                             id="create-account-first-name"
//                         />
//                         <InputText name="Last name" type="text" placeholder="Last name" id="create-account-last-name" />
//                     </div>
//                     <div className="flex flex-col mb-2">
//                         <InputText type="text" placeholder="Email" id="create-account-email" />
//                     </div>

//                     <div className="flex w-full my-4">
//                         <Button submit={true} label="Login" color="purple" />
//                     </div>
//                 </form>
//                 <div className="flex items-center justify-center mt-6">
//                     <Checkbox label="I have read and agree term of services " />
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default CreateAccount;
// `.trim(),
//   '/components/form/layout/DesignLogin.tsx': 
//     `import Button from '../../elements/buttons/Button';
// import InputText from '../inputtext/InputText';
// import React from 'react';

// const DesignLogin = () => {
//     return (
//         <div className="flex flex-wrap w-full">
//             <div className="flex flex-col w-full md:w-1/2">
//                 <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
//                     <a href="#" className="p-4 text-xl font-bold text-white bg-black">
//                         Design.
//                     </a>
//                 </div>

//                 <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
//                     <p className="text-3xl text-center">Welcome.</p>
//                     <form className="flex flex-col pt-3 md:pt-8">
//                         <div className="flex flex-col pt-4">
//                             <InputText
//                                 square={true}
//                                 icon={
//                                     <svg
//                                         width="15"
//                                         height="15"
//                                         fill="currentColor"
//                                         viewBox="0 0 1792 1792"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
//                                     </svg>
//                                 }
//                                 placeholder="Email"
//                                 id="design-login-email"
//                             />
//                         </div>

//                         <div className="flex flex-col pt-4 mb-12">
//                             <InputText
//                                 type="password"
//                                 square={true}
//                                 icon={
//                                     <svg
//                                         width="15"
//                                         height="15"
//                                         fill="currentColor"
//                                         viewBox="0 0 1792 1792"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z" />
//                                     </svg>
//                                 }
//                                 placeholder="Password"
//                                 id="design-login-password"
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
//                         >
//                             <span className="w-full">Submit</span>
//                         </button>
//                     </form>
//                     <div className="pt-12 pb-12 text-center">
//                         <p>
//                             Don't have an account?{' '}
//                             <a href="#" className="font-semibold underline">
//                                 Register here.
//                             </a>
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div className="w-1/2 shadow-2xl">
//                 <img className="hidden object-cover w-full h-screen md:block" src="/images/object/9.jpg" />
//             </div>
//         </div>
//     );
// };
// export default DesignLogin;
// `.trim(),
//   '/components/form/layout/FormSubscribe.tsx': 
//     `import React from 'react';
// import InputText from '../inputtext/InputText';

// interface Props {
//     label: string;
//     placeholder: string;
// }

// const FormSubscribe = ({ label, placeholder }: Props) => {
//     return (
//         <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
//             <InputText placeholder={placeholder} id={\\`"form-subscribe-\${label}\\`} />
//             <button
//                 className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
//                 type="submit"
//             >
//                 {label}
//             </button>
//         </form>
//     );
// };
// export default FormSubscribe;
// `.trim(),
//   '/components/form/layout/LoginWithBackground.tsx': 
//     `import React from 'react';
// import InputText from '../inputtext/InputText';
// import Button from '../../elements/buttons/Button';

// const LoginWithBackground = () => {
//     return (
//         <div className="w-full h-screen font-sans bg-cover bg-landscape">
//             <div className="container flex items-center justify-center flex-1 h-full mx-auto">
//                 <div className="w-full max-w-lg">
//                     <div className="leading-loose">
//                         <form className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
//                             <p className="mb-8 text-2xl font-light text-center text-white">Login</p>
//                             <div className="mb-2">
//                                 <InputText placeholder="email" id="login-with-bg-email" />
//                             </div>
//                             <div className="mb-2">
//                                 <InputText placeholder="password" id="login-with-bg-password" />
//                             </div>

//                             <div className="flex items-center justify-between mt-4">
//                                 <Button submit={true} color="indigo" label="Validate" />
//                             </div>
//                             <div className="text-center">
//                                 <a className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
//                                     Create an account
//                                 </a>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default LoginWithBackground;
// `.trim(),
//   '/components/form/layout/SearchForm.tsx': 
//     `import React from 'react';
// import Button from '../../elements/buttons/Button';
// import InputText from '../../../components/form/inputtext/InputText';

// const SearchForm = () => {
//     return (
//         <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
//             <div className="px-4 py-8 sm:px-10">
//                 <div className="relative mt-6">
//                     <div className="absolute inset-0 flex items-center">
//                         <div className="w-full border-t border-gray-300"></div>
//                     </div>
//                     <div className="relative flex justify-center text-sm leading-5">
//                         <span className="px-2 text-gray-500 bg-white">Search criteria</span>
//                     </div>
//                 </div>
//                 <div className="mt-6">
//                     <div className="w-full space-y-6">
//                         <div className="w-full">
//                             <InputText placeholder="Your price" id="search-form-price" />
//                         </div>
//                         <div className="w-full">
//                             <InputText placeholder="Your location" id="search-form-location" />
//                         </div>
//                         <div className="w-full">
//                             <InputText placeholder="Your name" id="search-form-name" />
//                         </div>
//                         <div>
//                             <span className="block w-full rounded-md shadow-sm">
//                                 <Button label="Search" color="indigo" />
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
//                 <p className="text-xs leading-5 text-gray-500">This data are display for information and can change</p>
//             </div>
//         </div>
//     );
// };
// export default SearchForm;
// `.trim(),
//   '/components/form/layout/SignIn.tsx': 
//     `import React from 'react';
// import Button from '../../elements/buttons/Button';
// import InputText from '../inputtext/InputText';

// interface Props {
//     withFacebook?: boolean;
//     withGoogle?: boolean;
// }

// const SignIn = (props: Props) => {
//     return (
//         <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
//             <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
//                 Login To Your Account
//             </div>

//             {(props.withFacebook || props.withGoogle) && (
//                 <div className="flex gap-4 item-center">
//                     {props.withFacebook && (
//                         <Button
//                             label="Facebook"
//                             icon={
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     fill="currentColor"
//                                     className="mr-2"
//                                     viewBox="0 0 1792 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
//                                 </svg>
//                             }
//                             color="blue"
//                         />
//                     )}

//                     {props.withGoogle && (
//                         <Button
//                             label="Google"
//                             icon={
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     fill="currentColor"
//                                     className="mr-2"
//                                     viewBox="0 0 1792 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z" />
//                                 </svg>
//                             }
//                             color="red"
//                         />
//                     )}
//                 </div>
//             )}

//             <div className="mt-8">
//                 <form action="#" autoComplete="off">
//                     <div className="flex flex-col mb-2">
//                         <InputText
//                             icon={
//                                 <svg
//                                     width="15"
//                                     height="15"
//                                     fill="currentColor"
//                                     viewBox="0 0 1792 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z" />
//                                 </svg>
//                             }
//                             placeholder="Your email"
//                             id="sign-in-email"
//                         />
//                     </div>
//                     <div className="flex flex-col mb-6">
//                         <InputText
//                             icon={
//                                 <svg
//                                     width="15"
//                                     height="15"
//                                     fill="currentColor"
//                                     viewBox="0 0 1792 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z" />
//                                 </svg>
//                             }
//                             type="password"
//                             placeholder="Your password"
//                             id="sign-in-email"
//                         />
//                     </div>

//                     <div className="flex items-center mb-6 -mt-4">
//                         <div className="flex ml-auto">
//                             <a
//                                 href="#"
//                                 className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"
//                             >
//                                 Forgot Your Password?
//                             </a>
//                         </div>
//                     </div>

//                     <div className="flex w-full">
//                         <Button submit={true} label="Login" color="purple" />
//                     </div>
//                 </form>
//             </div>
//             <div className="flex items-center justify-center mt-6">
//                 <a
//                     href="#"
//                     target="_blank"
//                     className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
//                 >
//                     <span className="ml-2">You don't have an account?</span>
//                 </a>
//             </div>
//         </div>
//     );
// };
// export default SignIn;
// `.trim(),
//   '/components/form/layout/UserInfoForm.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';
// import InputText from '../inputtext/InputText';
// import Button from '../../elements/buttons/Button';

// const UserInfoForm = () => {
//     return (
//         <section className="h-screen bg-gray-100/50">
//             <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
//                 <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
//                     <div className="max-w-sm mx-auto md:w-full md:mx-0">
//                         <div className="inline-flex items-center space-x-4">
//                             <Avatar />
//                             <h1 className="text-gray-600">Charlie</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="space-y-6 bg-white">
//                     <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
//                         <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
//                         <div className="max-w-sm mx-auto md:w-2/3">
//                             <InputText placeholder="Email" id="user-info-email" />
//                         </div>
//                     </div>

//                     <hr />
//                     <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
//                         <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
//                         <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
//                             <div>
//                                 <InputText placeholder="Name" id="user-info-name" />
//                             </div>
//                             <div>
//                                 <InputText placeholder="Phone number" id="user-info-phone" />
//                             </div>
//                         </div>
//                     </div>

//                     <hr />
//                     <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
//                         <h2 className="max-w-sm mx-auto md:w-4/12">Change password</h2>

//                         <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
//                             <InputText placeholder="Password" id="user-info-password" />
//                         </div>

//                         <div className="text-center md:w-3/12 md:pl-6">
//                             <Button color="pink" label="Change" />
//                         </div>
//                     </div>

//                     <hr />
//                     <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
//                         <Button submit={true} color="blue" label="Save" />
//                     </div>
//                 </div>
//             </form>
//         </section>
//     );
// };
// export default UserInfoForm;
// `.trim(),
//   '/components/form/select/CustomSelect.tsx': 
//     `import React, { FC, useEffect, useRef, useState, useCallback } from 'react';

// interface Props {
//     forceOpen?: boolean;
//     hideImage?: boolean;
// }

// const CustomSelect = (props: Props) => {
//     const [showList, setShowList] = useState(false);
//     const panelResultElement = useRef<HTMLDivElement>();
//     const selectButton = useRef<HTMLButtonElement>();
//     const handleClickOutside = useCallback((event) => {
//         const myHTMLWrapper = panelResultElement.current;
//         const searchElement = selectButton.current;
//         if (
//             myHTMLWrapper &&
//             searchElement &&
//             !myHTMLWrapper.contains(event.target) &&
//             !searchElement.contains(event.target)
//         ) {
//             setShowList(false);
//         }
//     }, []);
//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [handleClickOutside]);

//     return (
//         <div className="w-64">
//             <div className="relative mt-1">
//                 <button
//                     type="button"
//                     ref={selectButton}
//                     onClick={() => setShowList(!showList)}
//                     className="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded-md shadow-lg cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 >
//                     <span className="flex items-center">
//                         {!props.hideImage && (
//                             <img
//                                 src="/images/person/2.jpeg"
//                                 alt="person"
//                                 className="flex-shrink-0 w-6 h-6 rounded-full"
//                             />
//                         )}

//                         <span className="block ml-3 truncate">John Jackson</span>
//                     </span>
//                     <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
//                         <svg
//                             className="w-5 h-5 text-gray-400"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                             aria-hidden="true"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                     </span>
//                 </button>

//                 {(showList || props.forceOpen) && (
//                     <div ref={panelResultElement} className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
//                         <ul
//                             tabIndex={-1}
//                             role="listbox"
//                             aria-labelledby="listbox-label"
//                             aria-activedescendant="listbox-item-3"
//                             className="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
//                         >
//                             <li
//                                 id="listbox-item-0"
//                                 role="option"
//                                 className="relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-indigo-500 hover:text-white pr-9"
//                             >
//                                 <div className="flex items-center">
//                                     {!props.hideImage && (
//                                         <img
//                                             src="/images/person/1.jpg"
//                                             alt="person"
//                                             className="flex-shrink-0 w-6 h-6 rounded-full"
//                                         />
//                                     )}
//                                     <span className="block ml-3 font-normal truncate">Mick Poulaz</span>
//                                 </div>

//                                 <span className="absolute inset-y-0 right-0 flex items-center pr-4">
//                                     <svg
//                                         className="w-5 h-5"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                         aria-hidden="true"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                             clipRule="evenodd"
//                                         />
//                                     </svg>
//                                 </span>
//                             </li>
//                             <li
//                                 id="listbox-item-1"
//                                 role="option"
//                                 className="relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-indigo-500 hover:text-white pr-9"
//                             >
//                                 <div className="flex items-center">
//                                     {!props.hideImage && (
//                                         <img
//                                             src="/images/person/1.jpg"
//                                             alt="person"
//                                             className="flex-shrink-0 w-6 h-6 rounded-full"
//                                         />
//                                     )}
//                                     <span className="block ml-3 font-normal truncate">Julien Schiano</span>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default CustomSelect;
// `.trim(),
//   '/components/form/select/Select.tsx': 
//     `import React, { FC, useEffect, useRef, useState, useCallback } from 'react';

// const Select = () => {
//     return (
//         <select
//             className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//             name="animals"
//         >
//             <option value="">Select an option</option>
//             <option value="dog">Dog</option>
//             <option value="cat">Cat</option>
//             <option value="hamster">Hamster</option>
//             <option value="parrot">Parrot</option>
//             <option value="spider">Spider</option>
//             <option value="goldfish">Goldfish</option>
//         </select>
//     );
// };
// export default Select;
// `.trim(),
//   '/components/form/select/SelectWithLabel.tsx': 
//     `import React from 'react';

// const SelectWithLabel = () => {
//     return (
//         <label className="text-gray-700" htmlFor="animals">
//             Animals
//             <select
//                 id="animals"
//                 className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 name="animals"
//             >
//                 <option value="">Select an option</option>
//                 <option value="dog">Dog</option>
//                 <option value="cat">Cat</option>
//                 <option value="hamster">Hamster</option>
//                 <option value="parrot">Parrot</option>
//                 <option value="spider">Spider</option>
//                 <option value="goldfish">Goldfish</option>
//             </select>
//         </label>
//     );
// };
// export default SelectWithLabel;
// `.trim(),
//   '/components/form/toggle/Checkbox.tsx': 
//     `import React from 'react';

// interface Props {
//     label?: string;
//     onChange?: (checked) => void;
// }

// const colors = [
//     {
//         color: 'checked:bg-blue-500',
//         label: 'Blue',
//     },
//     {
//         color: 'checked:bg-pink-500',
//         label: 'Pink',
//     },
//     {
//         color: 'checked:bg-green-500',
//         label: 'Green',
//     },
//     {
//         color: 'checked:bg-yellow-500',
//         label: 'Orange',
//     },
//     {
//         color: 'checked:bg-purple-500',
//         label: 'Purple',
//     },
//     {
//         color: 'checked:bg-black',
//         label: 'Black',
//     },
//     {
//         color: 'checked:bg-indigo-500',
//         label: 'Indigo',
//     },
//     {
//         color: 'checked:bg-red-500',
//         label: 'Red',
//     },
//     {
//         color: 'checked:bg-gray-500',
//         label: 'Gray',
//     },
// ];

// const Checkbox = (props: Props) => {
//     return (
//         <div>
//             {colors.map((color, index) => {
//                 return (
//                     <label key={color.label} className="flex items-center mb-3 space-x-3">
//                         <input
//                             type="checkbox"
//                             name="checked-demo"
//                             className={\\`form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md \${color.color} checked:border-transparent focus:outline-none\\`}
//                         />
//                         <span className="font-normal text-gray-700 dark:text-white">{color.label}</span>
//                     </label>
//                 );
//             })}
//         </div>
//     );
// };
// export default Checkbox;
// `.trim(),
//   '/components/form/toggle/MultipleToggle.tsx': 
//     `import React from 'react';
// import _uniqueId from 'lodash/uniqueId';

// interface Props {
//     onChange: (checked) => void;
//     check?: boolean;
//     label?: string;
// }

// const colors = [
//     {
//         color: 'checked:bg-blue-500',
//         label: 'Blue',
//     },
//     {
//         color: 'checked:bg-pink-500',
//         label: 'Pink',
//     },
//     {
//         color: 'checked:bg-green-500',
//         label: 'Green',
//     },
//     {
//         color: 'checked:bg-yellow-500',
//         label: 'Orange',
//     },
//     {
//         color: 'checked:bg-purple-500',
//         label: 'Purple',
//     },
//     {
//         color: 'checked:bg-black',
//         label: 'Black',
//     },
//     {
//         color: 'checked:bg-indigo-500',
//         label: 'Indigo',
//     },
//     {
//         color: 'checked:bg-red-500',
//         label: 'Red',
//     },
//     {
//         color: 'checked:bg-gray-500',
//         label: 'Gray',
//     },
// ];

// const MultipleToggle = (props: Props) => {
//     return (
//         <div>
//             {colors.map((color) => {
//                 return (
//                     <div key={color.label} className="mb-3">
//                         <div className="relative inline-block w-10 mr-2 align-middle select-none">
//                             <input
//                                 type="checkbox"
//                                 name="toggle"
//                                 id={color.label}
//                                 onChange={(e) => props.onChange(e.target.checked)}
//                                 className={\\`\${color.color} outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer\\`}
//                             />
//                             <label
//                                 htmlFor={color.label}
//                                 className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
//                             />
//                         </div>

//                         <span className="font-medium text-gray-400">{props.label || color.label}</span>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };
// export default MultipleToggle;
// `.trim(),
//   '/components/form/toggle/Radio.tsx': 
//     `import React from 'react';

// const Radio = () => {
//     return (
//         <div className="flex items-center gap-8">
//             <label className="inline-flex items-center">
//                 <input type="radio" name="vehicle" className="w-5 h-5 text-red-600" />
//                 <span className="ml-2 text-gray-700">Car</span>
//             </label>
//             <label className="inline-flex items-center">
//                 <input type="radio" name="vehicle" className="w-5 h-5 text-red-600" />
//                 <span className="ml-2 text-gray-700">Cycle</span>
//             </label>
//         </div>
//     );
// };
// export default Radio;
// `.trim(),
//   '/components/form/toggle/Toggle.tsx': 
//     `import React, { useState } from 'react';
// import _uniqueId from 'lodash/uniqueId';

// interface Props {
//     onChange: (checked) => void;
//     check?: boolean;
//     label?: string;
// }

// const Toggle = (props: Props) => {
//     const [id] = useState(_uniqueId('prefix-'));
//     return (
//         <div>
//             <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
//                 <input
//                     type="checkbox"
//                     name="toggle"
//                     id={id}
//                     checked={props.check}
//                     onChange={(e) => props.onChange(e.target.checked)}
//                     className="absolute block w-6 h-6 duration-200 ease-in bg-white border-4 rounded-full appearance-none cursor-pointer right-4 checked:right-0 checked:bg-blue-600"
//                 />
//                 <label htmlFor={id} className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer" />
//             </div>
//             {props.label && <span className="font-medium text-gray-400">{props.label}</span>}
//         </div>
//     );
// };
// export default Toggle;
// `.trim(),
//   '/components/list/index.tsx': 
//     `import React, { FC } from 'react';
// import SectionDesc from '../../../site/section/SectionDesc';

// const ListPage: FC = () => {
//     const tableSections = [
//         {
//             title: 'Tables',
//             items: 6,
//             img: 'images/sections/table.png',
//             link: '/components/table',
//         },
//         {
//             title: 'Lists',
//             items: 11,
//             img: 'images/sections/list.png',
//             link: '/components/list',
//         },
//     ];

//     return <SectionDesc id="list" withPub items={tableSections} title="List" />;
// };

// export default ListPage;
// `.trim(),
//   '/components/list/list/BlockList.tsx': 
//     `import Avatar from '../../elements/avatars/Avatar';
// import React from 'react';

// interface Props {
//     withDesc?: boolean;
//     withEffect?: boolean;
//     withAction?: boolean;
//     withHeader?: boolean;
// }

// const BlockList = (props: Props) => {
//     const lists = [
//         {
//             img: '/images/person/6.jpg',
//             desc: 'Developer',
//             label: 'Jean Marc',
//         },
//         {
//             img: '/images/person/10.jpg',
//             desc: 'Charlie Moi',
//             label: 'Designer',
//         },
//         {
//             img: '/images/person/3.jpg',
//             desc: 'Marine Jeanne',
//             label: 'CEO',
//         },
//         {
//             img: '/images/person/7.jpg',
//             desc: 'Boby PArk',
//             label: 'CTO',
//         },
//     ];

//     return (
//         <div className="container flex flex-col items-center justify-center w-full mx-auto">
//             {props.withHeader && (
//                 <div className="w-full px-4 py-5 mb-2 bg-white border rounded-md shadow sm:px-6 dark:bg-gray-800">
//                     <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">User database</h3>
//                     <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
//                         Details and informations about user.
//                     </p>
//                 </div>
//             )}
//             <ul className="flex flex-col">
//                 {lists.map((el) => {
//                     return (
//                         <li className="flex flex-row mb-2 border-gray-400" key={el.label}>
//                             <div
//                                 className={\\`\${
//                                     props.withEffect
//                                         ? 'transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg '
//                                         : 'shadow border '
//                                 }select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4\\`}
//                             >
//                                 <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
//                                     <Avatar size="small" img={el.img} />
//                                 </div>
//                                 <div className="flex-1 pl-1 md:mr-16">
//                                     <div className="font-medium dark:text-white">{el.label}</div>
//                                     <div className="text-sm text-gray-600 dark:text-gray-200">{el.desc}</div>
//                                 </div>
//                                 {props.withDesc && (
//                                     <div className="text-xs text-gray-600 dark:text-gray-200">6:00 AM</div>
//                                 )}
//                                 {props.withAction && (
//                                     <button className="flex justify-end w-24 text-right">
//                                         <svg
//                                             width="12"
//                                             fill="currentColor"
//                                             height="12"
//                                             className="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200"
//                                             viewBox="0 0 1792 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
//                                         </svg>
//                                     </button>
//                                 )}
//                             </div>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default BlockList;
// `.trim(),
//   '/components/list/list/DescriptionList.tsx': 
//     `import React from 'react';

// interface Props {
//     withHeader?: boolean;
// }

// const DescriptionList = (props: Props) => {
//     return (
//         <div className="max-w-2xl overflow-hidden bg-white shadow sm:rounded-lg">
//             {props.withHeader && (
//                 <div className="px-4 py-5 sm:px-6">
//                     <h3 className="text-lg font-medium leading-6 text-gray-900">User database</h3>
//                     <p className="max-w-2xl mt-1 text-sm text-gray-500">Details and informations about user.</p>
//                 </div>
//             )}

//             <div className="border-t border-gray-200">
//                 <dl>
//                     <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                         <dt className="text-sm font-medium text-gray-500">Full name</dt>
//                         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Mickael Poulaz</dd>
//                     </div>
//                     <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                         <dt className="text-sm font-medium text-gray-500">Best techno</dt>
//                         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">React JS</dd>
//                     </div>
//                     <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                         <dt className="text-sm font-medium text-gray-500">Email address</dt>
//                         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">m.poul@example.com</dd>
//                     </div>
//                     <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                         <dt className="text-sm font-medium text-gray-500">Salary</dt>
//                         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">\$10,000</dd>
//                     </div>
//                     <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                         <dt className="text-sm font-medium text-gray-500">About</dt>
//                         <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                             To get social media testimonials like these, keep your customers engaged with your social
//                             media accounts by posting regularly yourself
//                         </dd>
//                     </div>
//                 </dl>
//             </div>
//         </div>
//     );
// };

// export default DescriptionList;
// `.trim(),
//   '/components/list/list/SimpleList.tsx': 
//     `import React from 'react'
// import Avatar from '../../elements/avatars/Avatar';

// interface Props {
//     withAction?: boolean;
//     withEffect?: boolean;
//     withHeader?: boolean;
// }

// const SimpleList = (props: Props) => {
//     const lists = [
//         {
//             img: '/images/person/6.jpg',
//             desc: 'Developer',
//             label: 'Jean Marc',
//             info: 'Live in Paris with his father',
//         },
//         {
//             img: '/images/person/10.jpg',
//             desc: 'Charlie Moi',
//             label: 'Designer',
//             info: 'Love last ketchup song',
//         },
//         {
//             img: '/images/person/3.jpg',
//             desc: 'Marine Jeanne',
//             label: 'CEO',
//             info: 'Beer, beer, beer and beer',
//         },
//         {
//             img: '/images/person/7.jpg',
//             desc: 'Boby PArk',
//             label: 'CTO',
//             info: 'Nothing to declare',
//         },
//     ];

//     return (
//         <div className="container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
//             {props.withHeader && (
//                 <div className="w-full px-4 py-5 border-b sm:px-6">
//                     <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">User database</h3>
//                     <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
//                         Details and informations about user.
//                     </p>
//                 </div>
//             )}
//             <ul className="flex flex-col divide-y divide">
//                 {lists.map((el) => {
//                     return (
//                         <li className="flex flex-row" key={el.label}>
//                             <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
//                                 <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
//                                     <Avatar size="small" img={el.img} />
//                                 </div>
//                                 <div className="flex-1 pl-1 mr-16">
//                                     <div className="font-medium dark:text-white">{el.label}</div>
//                                     <div className="text-sm text-gray-600 dark:text-gray-200">{el.desc}</div>
//                                 </div>

//                                 <div className="text-xs text-gray-600 dark:text-gray-200">6:00 AM</div>
//                                 {props.withAction && (
//                                     <button className="flex justify-end w-24 text-right">
//                                         <svg
//                                             width="20"
//                                             fill="currentColor"
//                                             height="20"
//                                             className="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200"
//                                             viewBox="0 0 1792 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
//                                         </svg>
//                                     </button>
//                                 )}
//                             </div>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default SimpleList;
// `.trim(),
//   '/components/list/list/TodoList.tsx': 
//     `import React from 'react';
// import Button from '../../elements/buttons/Button';

// const TodoList = () => {
//     const list = [
//         {
//             title: 'Increase sales by 10% year over year',
//             desc: 'January 7, 2020',
//             categ: ' On-Track',
//         },
//         {
//             title: 'Increase newsletter subscribers by 500',
//             desc: 'Jun 14, 2020',
//             categ: 'To do',
//         },
//         {
//             title: 'Increase customer satisfaction rating by 10 points',
//             desc: 'December 10, 2020',
//             categ: 'Backlog',
//         },
//     ];

//     return (
//         <div className="px-4 py-5 border-b rounded-t sm:px-6">
//             <div className="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
//                 <ul className="divide-y divide-gray-200">
//                     {list.map((list) => {
//                         return (
//                             <li key={list.categ}>
//                                 <a className="block hover:bg-gray-50 dark:hover:bg-gray-900">
//                                     <div className="px-4 py-4 sm:px-6">
//                                         <div className="flex items-center justify-between">
//                                             <p className="text-gray-700 text-md dark:text-white md:truncate">
//                                                 {list.title}
//                                             </p>
//                                             <div className="flex flex-shrink-0 ml-2">
//                                                 <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
//                                                     {list.categ}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="mt-2 sm:flex sm:justify-between">
//                                             <div className="sm:flex">
//                                                 <p className="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
//                                                     {list.desc}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </a>
//                             </li>
//                         );
//                     })}
//                 </ul>
//                 <div className="w-full p-4 mx-auto md:w-1/2">
//                     <Button color="indigo" label="View all" />
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default TodoList;
// `.trim(),
//   '/components/list/table/ComplexTable.tsx': 
//     `import React, { FC } from 'react';

// import Avatar from '../../elements/avatars/Avatar';
// import FormSubscribe from '../../form/layout/FormSubscribe';
// import PagerButton from '../../elements/buttons/PagerButton';

// interface Props {
//     withHeader?: boolean;
//     withPager?: boolean;
//     withAction?: boolean;
// }

// const ComplexTable = (props: Props) => {
//     const headers = ['User', 'Role', 'Created at', 'status'];

//     const rows = [
//         {
//             user: {
//                 img: '/images/person/8.jpg',
//                 name: 'Jean marc',
//             },
//             role: 'Admin',
//             date: '12/09/2020',
//             status: 'active',
//         },
//         {
//             user: {
//                 img: '/images/person/9.jpg',
//                 name: 'Marcus coco',
//             },
//             role: 'Designer',
//             date: '01/10/2012',
//             status: 'active',
//         },
//         {
//             user: {
//                 img: '/images/person/10.jpg',
//                 name: 'Ecric marc',
//             },
//             role: 'Developer',
//             date: '02/10/2018',
//             status: 'active',
//         },
//         {
//             user: {
//                 img: '/images/person/6.jpg',
//                 name: 'Julien Huger',
//             },
//             role: 'User',
//             date: '23/09/2010',
//             status: 'active',
//         },
//     ];

//     if (props.withAction) {
//         headers.push('');
//     }
//     return (
//         <div className="container max-w-3xl px-4 mx-auto sm:px-8">
//             <div className="py-8">
//                 {props.withHeader && (
//                     <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
//                         <h2 className="text-2xl leading-tight">Users</h2>

//                         <div className="text-end">
//                             <FormSubscribe placeholder="name" label="Filter" />
//                         </div>
//                     </div>
//                 )}

//                 <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
//                     <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
//                         <table className="min-w-full leading-normal">
//                             <thead>
//                                 <tr>
//                                     {headers.map((header) => {
//                                         return (
//                                             <th
//                                                 scope="col"
//                                                 key={header}
//                                                 className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
//                                             >
//                                                 {header}
//                                             </th>
//                                         );
//                                     })}
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {rows.map((row) => {
//                                     return (
//                                         <tr key={row.user.name}>
//                                             <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
//                                                 <div className="flex items-center">
//                                                     <div className="flex-shrink-0">
//                                                         <Avatar size="small" img={row.user.img} />
//                                                     </div>
//                                                     <div className="ml-3">
//                                                         <p className="text-gray-900 whitespace-no-wrap">
//                                                             {row.user.name}
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </td>
//                                             <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
//                                                 <p className="text-gray-900 whitespace-no-wrap">{row.role}</p>
//                                             </td>
//                                             <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
//                                                 <p className="text-gray-900 whitespace-no-wrap">{row.date}</p>
//                                             </td>
//                                             <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
//                                                 <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
//                                                     <span
//                                                         aria-hidden
//                                                         className="absolute inset-0 bg-green-200 rounded-full opacity-50"
//                                                     ></span>
//                                                     <span className="relative">{row.status}</span>
//                                                 </span>
//                                             </td>
//                                             {props.withAction && (
//                                                 <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
//                                                     <a href="#" className="text-indigo-600 hover:text-indigo-900">
//                                                         Edit
//                                                     </a>
//                                                 </td>
//                                             )}
//                                         </tr>
//                                     );
//                                 })}
//                             </tbody>
//                         </table>
//                         {props.withPager && (
//                             <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
//                                 <PagerButton />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ComplexTable;
// `.trim(),
//   '/components/list/table/Table.tsx': 
//     `import React, { FC } from 'react';

// interface Props {
//     withBorder?: boolean;
// }

// const Table = (props: Props) => {
//     const headers = ['#', 'First name', 'Last name', 'Username'];
//     const rows = [
//         {
//             data: ['1', 'Jean Marc', 'Louis', 'Jl987'],
//         },
//         {
//             data: ['2', 'Eric', 'Prouve', 'prouveE'],
//         },
//         {
//             data: ['3', 'Julien', 'Clai', 'CJUL87'],
//         },
//         {
//             data: ['4', 'Igor', 'Louth', 'IGL89_9'],
//         },
//     ];

//     const borderClasses = props.withBorder ? 'border' : 'border-b-2';

//     return (
//         <table className="table p-4 bg-white rounded-lg shadow">
//             <thead>
//                 <tr>
//                     {headers.map((head) => {
//                         return (
//                             <th
//                                 key={head}
//                                 className={\\`\${borderClasses} p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900\\`}
//                             >
//                                 {head}
//                             </th>
//                         );
//                     })}
//                 </tr>
//             </thead>
//             <tbody>
//                 {rows.map((row, index) => {
//                     return (
//                         <tr className="text-gray-700" key={index}>
//                             {row.data.map((text) => {
//                                 return (
//                                     <td key={text} className={\\`\${borderClasses} p-4 dark:border-dark-5\\`}>
//                                         {text}
//                                     </td>
//                                 );
//                             })}
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table>
//     );
// };

// export default Table;
// `.trim(),
//   '/components/navigation/footer/Footer.tsx': 
//     `import React from 'react';
// import FormSubscribe from '../../form/layout/FormSubscribe';

// interface Props {
//     withCredits?: boolean;
//     withSocialLink?: boolean;
//     withSearch?: boolean;
//     links: FooterLink[];
//     showSubLinks?: boolean;
// }
// interface FooterLink {
//     label: string;
//     subLinks?: string[];
// }

// const Footer = (props: Props) => {
//     return (
//         <footer className={\\`bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8\\`}>
//             <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
//                 <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
//                     {props.links.map((link) => {
//                         return (
//                             <li key={link.label} className="w-1/2 md:w-1/3 lg:w-1/3">
//                                 <div className="text-center">
//                                     <h2 className={\\`text-gray-500 dark:text-gray-200 text-md uppercase mb-4\\`}>
//                                         {link.label}
//                                     </h2>
//                                     {link.subLinks && props.showSubLinks && (
//                                         <ul>
//                                             {link.subLinks.map((sub) => {
//                                                 return (
//                                                     <li
//                                                         className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                                         key={sub}
//                                                     >
//                                                         <a href="#">{sub}</a>
//                                                     </li>
//                                                 );
//                                             })}
//                                         </ul>
//                                     )}
//                                 </div>
//                             </li>
//                         );
//                     })}
//                 </ul>
//                 {props.withSocialLink && (
//                     <div className={\\`pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between\\`}>
//                         <a href="#">
//                             <svg
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
//                             </svg>
//                         </a>
//                         <a href="#">
//                             <svg
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
//                             </svg>
//                         </a>
//                         <a href="#">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                             >
//                                 <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
//                             </svg>
//                         </a>
//                         <a href="#">
//                             <svg
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
//                             </svg>
//                         </a>
//                         <a href="#">
//                             <svg
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z" />
//                             </svg>
//                         </a>
//                     </div>
//                 )}

//                 {props.withSearch && (
//                     <div className={\\`text-center pt-10 sm:pt-12 font-light flex items-center justify-center\\`}>
//                         <FormSubscribe label="Subscribe" placeholder="Email" />
//                     </div>
//                 )}
//                 {props.withCredits && (
//                     <div className={\\`text-center pt-10 sm:pt-12 font-light flex items-center justify-center\\`}>
//                         Created by Charlie
//                     </div>
//                 )}
//             </div>
//         </footer>
//     );
// };
// export default Footer;
// `.trim(),
//   '/components/navigation/footer/FooterLight.tsx': 
//     `import React from 'react';
// import Link from 'next/link';

// interface Props {
//     links: FooterLink[];
//     showSubLinks?: boolean;
// }
// interface FooterLink {
//     label: string;
//     link?: string;
// }

// const FooterLight = (props: Props) => {
//     return (
//         <footer className="px-3 py-8 text-gray-500 transition-colors duration-200 bg-white dark:bg-gray-800 text-2 dark:text-gray-200">
//             <div className="flex flex-col">
//                 <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
//                 <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
//                     <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
//                         {props.links.map((link) => {
//                             return (
//                                 <a
//                                     key={link.label}
//                                     aria-current="page"
//                                     href={link.link || '#'}
//                                     className="hover:text-gray-700 dark:hover:text-white"
//                                 >
//                                     {link.label}
//                                 </a>
//                             );
//                         })}
//                     </nav>
//                     <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
//                     <div className="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
//                         <a className="hover:text-primary-gray-20" href="https://github.com/Charlie85270/tail-kit">
//                             <span className="sr-only">View on GitHub</span>
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="30"
//                                 height="30"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                             >
//                                 <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
//                             </svg>
//                         </a>
//                         <Link href="/started">
//                             <a className="ml-4 hover:text-primary-gray-20" href="#">
//                                 <span className="sr-only">Settings</span>
//                                 <svg
//                                     width="30"
//                                     height="30"
//                                     fill="currentColor"
//                                     className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                     viewBox="0 0 2048 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z" />
//                                 </svg>
//                             </a>
//                         </Link>
//                     </div>
//                     <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
//                     <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
//                         <span className="">© 2021</span>
//                         <span className="mt-7 md:mt-1">
//                             Created by{' '}
//                             <a
//                                 className="underline hover:text-primary-gray-20"
//                                 href="https://www.linkedin.com/in/crabiller/"
//                             >
//                                 Charlie
//                             </a>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };
// export default FooterLight;
// `.trim(),
//   '/components/navigation/footer/SimpleFooter.tsx': 
//     `import React from 'react';
// import FormSubscribe from '../../form/layout/FormSubscribe';

// interface Props {
//     withCredits?: boolean;
//     withSocial?: boolean;
//     withSearch?: boolean;
//     links: FooterLinks[];
// }

// interface FooterLinks {
//     label: string;
//     link?: string;
// }

// const SimpleFooter = (props: Props) => {
//     return (
//         <footer className={\\`bg-white dark:bg-gray-800 w-full py-8\\`}>
//             <div className="max-w-screen-xl px-4 mx-auto">
//                 <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
//                     {props.links.map((link) => {
//                         return (
//                             <li className="my-2" key={link.label}>
//                                 <a
//                                     className={\\`text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200\\`}
//                                     href={link.link || '#'}
//                                 >
//                                     {link.label}
//                                 </a>
//                             </li>
//                         );
//                     })}
//                 </ul>

//                 {props.withSocial && (
//                     <div className={\\`pt-8 flex max-w-xs mx-auto items-center justify-between\\`}>
//                         <a
//                             href="#"
//                             className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                         >
//                             <svg
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
//                             </svg>
//                         </a>
//                         <a
//                             href="#"
//                             className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                         >
//                             <svg
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
//                             </svg>
//                         </a>
//                         <a
//                             href="#"
//                             className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                         >
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                             >
//                                 <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
//                             </svg>
//                         </a>
//                         <a
//                             href="#"
//                             className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                         >
//                             <svg
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
//                             </svg>
//                         </a>
//                         <a
//                             href="#"
//                             className="text-gray-400 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                         >
//                             <svg
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                 viewBox="0 0 1792 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z" />
//                             </svg>
//                         </a>
//                     </div>
//                 )}

//                 {props.withSearch && (
//                     <div className={\\`text-center pt-10 sm:pt-12 font-light flex items-center justify-center\\`}>
//                         <FormSubscribe label="Subscribe" placeholder="Email" />
//                     </div>
//                 )}
//                 {props.withCredits && (
//                     <div
//                         className={\\`text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center\\`}
//                     >
//                         Created by Charlie
//                     </div>
//                 )}
//             </div>
//         </footer>
//     );
// };
// export default SimpleFooter;
// `.trim(),
//   '/components/navigation/header/CenterHeader.tsx': 
//     `import React from 'react';

// const CenterHeader = () => {
//     return (
//         <nav className="flex flex-wrap items-center justify-between p-4 bg-white">
//             <div className="w-auto lg:order-2 lg:w-1/5 lg:text-center">
//                 <a className="text-xl font-semibold text-gray-800 font-heading" href="#">
//                     Charlie Rabiller
//                 </a>
//             </div>
//             <div className="block lg:hidden">
//                 <button className="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger">
//                     <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                         <title>Menu</title>
//                         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//                     </svg>
//                 </button>
//             </div>
//             <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
//                 <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
//                     Home
//                 </a>
//                 <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
//                     Team
//                 </a>
//                 <a className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
//                     Galery
//                 </a>
//             </div>
//             <div className="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
//                 <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
//                     Content
//                 </a>
//                 <a className="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
//                     FAQ
//                 </a>
//                 <a className="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600" href="#">
//                     Contact
//                 </a>
//             </div>
//         </nav>
//     );
// };
// export default CenterHeader;
// `.trim(),
//   '/components/navigation/header/Header.tsx': 
//     `import React, { useState } from 'react';
// import FormSubscribe from '../../form/layout/FormSubscribe';
// import Ddm from '../../elements/ddm/DropDownMenu';
// import Link from 'next/link';

// interface Props {
//     forceMenuOpenInMobile?: boolean;
//     forceDDMOpenInMobile?: boolean;
//     links: HeaderLink[];
//     ddmItems?: DDMItem[];
//     withShadow?: boolean;
//     hideGitHubLink?: boolean;
//     alignRight?: boolean;
//     hideHelp?: boolean;
//     withSearchBar?: boolean;
//     isFat?: boolean;
//     withRequestLink?: boolean;
// }
// interface HeaderLink {
//     label: string;
//     link?: string;
//     isSelected?: boolean;
//     desc?: string;
//     icon?: JSX.Element;
// }
// interface DDMItem {
//     icon?: JSX.Element;
//     label: string;
//     desc?: string;
//     link?: string;
// }

// const Header = (props: Props) => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <div>
//             <nav
//                 className={\\`bg-white dark:bg-gray-800 \${props.withShadow ? ' shadow' : ''}\${
//                     props.isFat ? ' py-4' : ''
//                 } \\`}
//             >
//                 <div className="px-8 mx-auto max-w-7xl">
//                     <div className="flex items-center justify-between h-16">
//                         <div className={\\`\${props.alignRight ? 'w-full justify-between' : ''} flex items-center\\`}>
//                             <a className="flex-shrink-0" href="/">
//                                 <img className="w-8 h-8" src="/icons/rocket.svg" alt="Workflow" />
//                             </a>
//                             <div className="hidden md:block">
//                                 <div className="flex items-baseline ml-10 space-x-4">
//                                     {props.links.map((link) => {
//                                         return (
//                                             <Link key={link.label} href={link.link || '#'}>
//                                                 <a
//                                                     key={link.label}
//                                                     className={\\`\${
//                                                         link.isSelected
//                                                             ? 'text-gray-800 dark:text-white'
//                                                             : 'text-gray-300'
//                                                     }  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md \${
//                                                         props.isFat ? 'text-md' : 'text-sm'
//                                                     } font-medium\\`}
//                                                 >
//                                                     {link.label}
//                                                 </a>
//                                             </Link>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="block">
//                             {props.withSearchBar && (
//                                 <div className="flex -mr-2 md:block">
//                                     <FormSubscribe label="Search" placeholder="components" />
//                                 </div>
//                             )}
//                             <div className="flex items-center ml-4 md:ml-6">
//                                 {props.withRequestLink && (
//                                     <Link href="/request">
//                                         <a className="">
//                                             <svg
//                                                 width="2048"
//                                                 height="1792"
//                                                 fill="currentColor"
//                                                 className="w-8 h-8 mr-2 text-gray-400 hover:text-gray-200"
//                                                 viewBox="0 0 1792 1792"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z" />
//                                             </svg>
//                                         </a>
//                                     </Link>
//                                 )}
//                                 {!props.hideHelp && (
//                                     <Link href="/started">
//                                         <a className="">
//                                             <svg
//                                                 width="2048"
//                                                 height="1792"
//                                                 fill="currentColor"
//                                                 className="w-8 h-8 mr-2 text-gray-400 hover:text-gray-200"
//                                                 viewBox="0 0 2048 1792"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z" />
//                                             </svg>
//                                         </a>
//                                     </Link>
//                                 )}
//                                 {!props.hideGitHubLink && (
//                                     <a
//                                         href="https://github.com/Charlie85270/tail-kit"
//                                         className="p-1 text-gray-400 rounded-full focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                                     >
//                                         <span className="sr-only">View github</span>
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="30"
//                                             height="30"
//                                             fill="currentColor"
//                                             className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                                             viewBox="0 0 1792 1792"
//                                         >
//                                             <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
//                                         </svg>
//                                     </a>
//                                 )}
//                                 {props.ddmItems && (
//                                     <div className="relative ml-3">
//                                         <Ddm
//                                             icon={
//                                                 <svg
//                                                     width="20"
//                                                     fill="currentColor"
//                                                     height="20"
//                                                     className="text-gray-800"
//                                                     viewBox="0 0 1792 1792"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" />
//                                                 </svg>
//                                             }
//                                             withBackground={false}
//                                             forceOpen={props.forceDDMOpenInMobile}
//                                             items={props.ddmItems.map((item) => {
//                                                 return { label: item.label };
//                                             })}
//                                         />
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         <div className="flex -mr-2 md:hidden">
//                             <button
//                                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                                 className={\\`text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none\\`}
//                             >
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     fill="currentColor"
//                                     className="w-8 h-8"
//                                     viewBox="0 0 1792 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {(isMenuOpen || props.forceMenuOpenInMobile) && (
//                     <div className="md:hidden">
//                         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                             {props.links.map((link) => {
//                                 return (
//                                     <Link key={link.label} href={link.link || '#'}>
//                                         <a
//                                             className={\\`\${
//                                                 link.isSelected
//                                                     ? 'text-gray-800 dark:text-white'
//                                                     : 'text-gray-300 hover:text-gray-800 dark:hover:text-white'
//                                             } block px-3 py-2 rounded-md text-base font-medium\\`}
//                                         >
//                                             {link.label}
//                                         </a>
//                                     </Link>
//                                 );
//                             })}
//                         </div>
//                         {props.withSearchBar && (
//                             <div className="flex p-2">
//                                 <FormSubscribe label="Search" placeholder="components" />
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </nav>
//         </div>
//     );
// };
// export default Header;
// `.trim(),
//   '/components/navigation/header/SearchHeader.tsx': 
//     `import React from 'react';

// const SearchHeader = () => {
//     return (
//         <div className="flex flex-row items-center justify-between w-full p-2 bg-white bg-indigo-500 shadow-xs">
//             <div className="hidden ml-8 text-lg text-white md:flex">Tail-kit</div>
//             <span className="flex w-full h-10 text-sm border border-gray-300 rounded-full cursor-pointer md:w-1/3">
//                 <input
//                     type="search"
//                     name="serch"
//                     placeholder="Search"
//                     className="flex-grow px-4 text-sm rounded-l-full rounded-r-full focus:outline-none"
//                 />
//             </span>
//             <div className="flex flex-row-reverse ml-4 mr-4 text-white md:hidden">
//                 <button>
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         className="w-8 h-8"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
//                     </svg>
//                 </button>
//             </div>
//             <div className="flex items-center hidden mr-8 md:flex">
//                 <a
//                     href="https://github.com/Charlie85270/tail-kit"
//                     className="p-1 text-white rounded-full focus:outline-none hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 >
//                     <span className="sr-only">View github</span>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="text-xl transition-colors duration-200"
//                         viewBox="0 0 1792 1792"
//                     >
//                         <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
//                     </svg>
//                 </a>
//                 <a href="#" className="">
//                     <svg
//                         width="2048"
//                         height="1792"
//                         fill="currentColor"
//                         className="w-8 h-8 mr-2 text-white hover:text-gray-100"
//                         viewBox="0 0 2048 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z" />
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     );
// };
// export default SearchHeader;
// `.trim(),
//   '/components/navigation/header/SimpleSearchHeader.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// const SimpleSearchHeader = () => {
//     return (
//         <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
//             <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
//                 <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
//                     <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
//                         <div className="relative flex items-center w-full h-full lg:w-64 group">
//                             <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
//                                 <svg
//                                     fill="none"
//                                     className="relative w-5 h-5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                                 </svg>
//                             </div>
//                             <svg
//                                 className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 20 20"
//                             >
//                                 <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
//                             </svg>
//                             <input
//                                 type="text"
//                                 className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
//                                 placeholder="Search"
//                             />

//                             <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
//                                 +
//                             </div>
//                         </div>
//                     </div>

//                     <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
//                         <Avatar size="small" />
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };
// export default SimpleSearchHeader;
// `.trim(),
//   '/components/navigation/index.tsx': 
//     `import React, { FC } from 'react';
// import SectionDesc from '../../../site/section/SectionDesc';

// const Navigation: FC = () => {
//     const formSections = [
//         {
//             title: 'Headers',
//             items: 10,
//             img: 'images/sections/header.png',
//             link: '/components/header',
//         },
//         {
//             title: 'Footers',
//             items: 9,
//             img: 'images/sections/footer.png',
//             link: '/components/footer',
//         },
//         {
//             title: 'Sidebars',
//             items: 9,
//             img: 'images/sections/sidebar.png',
//             link: '/components/sidebar',
//         },
//     ];

//     return <SectionDesc id="navigation" withPub items={formSections} title="Navigation" />;
// };

// export default Navigation;
// `.trim(),
//   '/components/navigation/sidebar/LittleSidebar.tsx': 
//     `import React from 'react';

// interface Props {
//     withHeader?: boolean;
//     links: Links[];
//     withBottomLink?: boolean;
// }
// interface Links {
//     label: string;
//     selected?: boolean;
//     icon?: JSX.Element;
// }

// const LittleSidebar = (props: Props) => {
//     return (
//         <div className="flex flex-row h-full">
//             <nav className="flex flex-col justify-between w-20 h-screen bg-white dark:bg-gray-800">
//                 <div className="mt-10 mb-10">
//                     {props.withHeader && (
//                         <a href="#">
//                             <img src="/images/person/2.jpeg" className="w-10 h-10 mx-auto mb-3 rounded-full" />
//                         </a>
//                     )}

//                     <div className="mt-10">
//                         <ul>
//                             {props.links.map((link) => {
//                                 return (
//                                     <li className="my-12 text-center" key={link.label}>
//                                         <a href="#">
//                                             <span
//                                                 className={\\`h-6 w-6 text-gray-500 dark:text-gray-300 mx-auto hover:text-gray-800 dark:hover:text-white transition-colors duration-200\\`}
//                                             >
//                                                 {link.icon}
//                                             </span>
//                                         </a>
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     </div>
//                 </div>
//                 {props.withBottomLink && (
//                     <div className="mb-4">
//                         <a href="#">
//                             <span>
//                                 <svg
//                                     className="w-5 h-5 mx-auto text-gray-300 fill-current hover:text-red-500"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
//                                         fill="currentColor"
//                                     />
//                                     <path
//                                         d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
//                                         fill="currentColor"
//                                     />
//                                 </svg>
//                             </span>
//                         </a>
//                     </div>
//                 )}
//             </nav>
//         </div>
//     );
// };
// export default LittleSidebar;
// `.trim(),
//   '/components/navigation/sidebar/Sidebar.tsx': 
//     `import React from 'react';
// import NotificationBadge from '../../elements/badges/NotificationBadge';

// interface Props {
//     headerText?: string;
//     headerImg?: string;
//     withBorder?: boolean;
//     links: Links[];
//     bottomLink?: { label: string; icon?: JSX.Element; link?: string };
//     withDivider?: boolean;
// }
// interface Links {
//     label: string;
//     selected?: boolean;
//     icon?: JSX.Element;
//     notifications?: number;
// }

// const Sidebar = (props: Props) => {
//     const withHeader = !!props.headerText || props.headerImg;

//     return (
//         <div className="relative bg-white dark:bg-gray-800">
//             <div className="flex flex-col sm:flex-row sm:justify-around">
//                 <div className="h-screen w-72">
//                     {withHeader && (
//                         <div className="flex items-center justify-start mx-6 mt-10">
//                             {props.headerImg && <img className="h-10" src="/icons/rocket.svg" />}
//                             {props.headerText && (
//                                 <span className={\\`text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold\\`}>
//                                     {props.headerText}
//                                 </span>
//                             )}
//                         </div>
//                     )}

//                     <nav className={\\`mt-10 px-6 \${props.withDivider ? 'divide-y divide-gray-200' : ''}\\`}>
//                         {props.links.map((link) => {
//                             return (
//                                 <a
//                                     key={link.label}
//                                     className={\\`hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 \${
//                                         props.withBorder && link.selected
//                                             ? 'border-r-2 border-gray-600 dark:border-gray-300'
//                                             : ''
//                                     } \${
//                                         link.selected
//                                             ? 'text-gray-800 dark:text-gray-100'
//                                             : 'text-gray-600 dark:text-gray-400'
//                                     } \${props.withBorder ? '' : 'rounded-lg'} \${
//                                         link.selected ? 'bg-gray-100 dark:bg-gray-600' : ''
//                                     }\\`}
//                                     href="#"
//                                 >
//                                     {link.icon}

//                                     <span className="mx-4 text-lg font-normal">{link.label}</span>
//                                     <span className="flex-grow text-right">
//                                         {link.notifications && (
//                                             <NotificationBadge size="small" number={link.notifications} />
//                                         )}
//                                     </span>
//                                 </a>
//                             );
//                         })}
//                     </nav>

//                     {props.bottomLink && (
//                         <div className="absolute bottom-0 my-10">
//                             <a
//                                 className={\\`text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8\\`}
//                                 href={props.bottomLink.link || '#'}
//                             >
//                                 {props.bottomLink.icon}

//                                 <span className="mx-4 font-medium">{props.bottomLink.label}</span>
//                             </a>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Sidebar;
// `.trim(),
//   '/components/navigation/sidebar/SideBar2.tsx': 
//     `const SideBar2 = () => {
//     return (
//         <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
//             <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
//                 <div className="flex items-center justify-center pt-6">
//                     <svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
//                         <defs>
//                             <linearGradient
//                                 x1="12.5189534%"
//                                 y1="85.2128611%"
//                                 x2="88.2282959%"
//                                 y2="10.0225497%"
//                                 id="linearGradient-1"
//                             >
//                                 <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%" />
//                                 <stop stopColor="#FF0057" offset="86.1354%" />
//                             </linearGradient>
//                         </defs>
//                         <g>
//                             <path
//                                 d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
//                                 fill="#001B38"
//                             />
//                             <circle
//                                 fill="url(#linearGradient-1)"
//                                 transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
//                                 cx="147.013244"
//                                 cy="147.014675"
//                                 r="78.9933938"
//                             />
//                             <circle
//                                 fill="url(#linearGradient-1)"
//                                 opacity="0.5"
//                                 transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
//                                 cx="147.013244"
//                                 cy="147.014675"
//                                 r="78.9933938"
//                             />
//                         </g>
//                     </svg>
//                 </div>

//                 <nav className="mt-6">
//                     <div>
//                         <a
//                             className="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800"
//                             href="#"
//                         >
//                             <span className="text-left">
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     fill="currentColor"
//                                     viewBox="0 0 2048 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
//                                 </svg>
//                             </span>
//                             <span className="mx-4 text-sm font-normal">Dashboard</span>
//                         </a>
//                         <a
//                             className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                             href="#"
//                         >
//                             <span className="text-left">
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     fill="currentColor"
//                                     className="m-auto"
//                                     viewBox="0 0 2048 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z" />
//                                 </svg>
//                             </span>
//                             <span className="mx-4 text-sm font-normal">Projects</span>
//                         </a>
//                         <a
//                             className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                             href="#"
//                         >
//                             <span className="text-left">
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     fill="currentColor"
//                                     className="m-auto"
//                                     viewBox="0 0 2048 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z" />
//                                 </svg>
//                             </span>
//                             <span className="mx-4 text-sm font-normal">My tasks</span>
//                         </a>
//                         <a
//                             className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                             href="#"
//                         >
//                             <span className="text-left">
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     fill="currentColor"
//                                     className="m-auto"
//                                     viewBox="0 0 2048 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z" />
//                                 </svg>
//                             </span>
//                             <span className="mx-4 text-sm font-normal">Calendar</span>
//                         </a>
//                         <a
//                             className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                             href="#"
//                         >
//                             <span className="text-left">
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     className="m-auto"
//                                     fill="currentColor"
//                                     viewBox="0 0 2048 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" />
//                                 </svg>
//                             </span>
//                             <span className="mx-4 text-sm font-normal">Time manage</span>
//                         </a>
//                         <a
//                             className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                             href="#"
//                         >
//                             <span className="text-left">
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     fill="currentColor"
//                                     className="m-auto"
//                                     viewBox="0 0 2048 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
//                                 </svg>
//                             </span>
//                             <span className="mx-4 text-sm font-normal">Reports</span>
//                         </a>
//                         <a
//                             className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                             href="#"
//                         >
//                             <span className="text-left">
//                                 <svg
//                                     width="20"
//                                     fill="currentColor"
//                                     height="20"
//                                     className="w-5 h-5"
//                                     viewBox="0 0 1792 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z" />
//                                 </svg>
//                             </span>
//                             <span className="mx-4 text-sm font-normal">Settings</span>
//                         </a>
//                     </div>
//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default SideBar2;
// `.trim(),
//   '/components/navigation/sidebar/SidebarWithCateg.tsx': 
//     `import React from 'react';

// const links = [
//     {
//         label: 'MA BOUTIQUE',
//         links: [
//             {
//                 label: 'Gérer sa boutique',
//                 icon: (
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 2048 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             fill="#5e72e4"
//                             d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
//                         />
//                     </svg>
//                 ),
//             },
//             {
//                 label: 'Voir la carte',
//                 icon: (
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         className="m-auto"
//                         viewBox="0 0 2048 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             fill="#5e72e4"
//                             d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
//                         />
//                     </svg>
//                 ),
//             },
//         ],
//     },
//     {
//         label: 'COMMUNICATION',
//         links: [
//             {
//                 label: 'Notifications',
//                 icon: (
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 2048 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             fill="#5e72e4"
//                             d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
//                         />
//                     </svg>
//                 ),
//             },
//             {
//                 label: 'Campagne emailing',
//                 icon: (
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         className="m-auto"
//                         viewBox="0 0 2048 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             fill="#5e72e4"
//                             d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"
//                         />
//                     </svg>
//                 ),
//             },
//         ],
//     },
//     {
//         label: 'STATISTIQUES',
//         links: [
//             {
//                 label: 'Nouveau client',
//                 icon: (
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         viewBox="0 0 2048 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             fill="#5e72e4"
//                             d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
//                         />
//                     </svg>
//                 ),
//             },
//             {
//                 label: 'Recette',
//                 icon: (
//                     <svg
//                         width="20"
//                         height="20"
//                         fill="currentColor"
//                         className="m-auto"
//                         viewBox="0 0 2048 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             fill="#5e72e4"
//                             d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"
//                         />
//                     </svg>
//                 ),
//             },
//         ],
//     },
// ];

// const SidebarWithCateg = () => {
//     return (
//         <div className="relative bg-white dark:bg-gray-800">
//             <div className="flex flex-col sm:flex-row sm:justify-around">
//                 <div className="h-screen w-72">
//                     <nav className="px-6 mt-10">
//                         <a
//                             className="flex items-center justify-start p-2 my-6 text-gray-600 transition-colors duration-200 hover:text-gray-800 bg-gray-50 dark:bg-gray-600 dark:text-gray-400hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
//                             href="#"
//                         >
//                             <svg
//                                 width="20"
//                                 height="20"
//                                 fill="currentColor"
//                                 viewBox="0 0 2048 1792"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     fill="#5e72e4"
//                                     d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"
//                                 />
//                             </svg>

//                             <span className="mx-4 font-normal text-md">Dashboard</span>
//                         </a>
//                         {links.map((link) => {
//                             return (
//                                 <div key={link.label}>
//                                     <p className="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md">
//                                         {link.label}
//                                     </p>
//                                     {link.links.map((entry) => {
//                                         return (
//                                             <a
//                                                 key={entry.label}
//                                                 className="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
//                                                 href="#"
//                                             >
//                                                 <span className="text-left">{entry.icon}</span>

//                                                 <span className="mx-4 font-normal text-md">{entry.label}</span>
//                                             </a>
//                                         );
//                                     })}
//                                 </div>
//                             );
//                         })}
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default SidebarWithCateg;
// `.trim(),
//   '/components/pagesection/blog/BlogCard.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// interface Props {
//     img?: string;
//     title: string;
//     desc: string;
//     tags: string[];
//     categ?: string;
//     icon?: string;
//     showTags?: boolean;
//     showAuthor?: boolean;
// }

// const BlogCard = (props: Props) => {
//     return (
//         <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
//             <a href="#" className="block w-full h-full">
//                 <img alt="blog photo" src={props.img} className="object-cover w-full max-h-40" />
//                 <div className="w-full p-4 bg-white dark:bg-gray-800">
//                     <p className="font-medium text-indigo-500 text-md">{props.categ}</p>
//                     <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">{props.title}</p>
//                     <p className="font-light text-gray-400 dark:text-gray-300 text-md">{props.desc}</p>
//                     {props.showTags && (
//                         <div className="flex flex-wrap items-center mt-4 justify-starts">
//                             {props.tags.map((tag) => {
//                                 return (
//                                     <div
//                                         key={tag}
//                                         className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl"
//                                     >
//                                         #{tag}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}
//                     {props.showAuthor && (
//                         <div className="flex items-center mt-4">
//                             <Avatar size="small" img="/images/person/6.jpg" />
//                             <div className="flex flex-col justify-between ml-4 text-sm">
//                                 <p className="text-gray-800 dark:text-white">Jean Jacques</p>
//                                 <p className="text-gray-400 dark:text-gray-300">20 mars 2029 - 6 min read</p>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </a>
//         </div>
//     );
// };

// export default BlogCard;
// `.trim(),
//   '/components/pagesection/blog/BlogList.tsx': 
//     `import React from 'react';
// import FormSubscribe from '../../form/layout/FormSubscribe';
// import BlogCard from './BlogCard';

// interface Props {
//     withSearch?: boolean;
// }

// const BlogList = (props: Props) => {
//     const blogs = [
//         {
//             tags: ['Car', 'Money'],
//             title: 'Work at home',
//             categ: 'Video',
//             img: '/images/blog/1.jpg',
//             desc: 'Work at home, remote, is the new age of the job, every person can work at home....',
//         },
//         {
//             tags: ['Car', 'Money'],
//             title: 'test',
//             categ: 'Oui',
//             img: '/images/blog/2.jpg',
//             desc: 'The new supercar is here, 543 cv and 140 000\$ !!',
//         },
//         {
//             tags: ['Car', 'Money'],
//             title: 'test',
//             categ: 'Oui',
//             img: '/images/blog/3.jpg',
//             desc: 'The new supercar is here, 543 cv and 140 000\$ !!',
//         },
//         {
//             tags: ['Car', 'Money'],
//             title: 'test',
//             img: '/images/blog/4.jpg',
//             desc: 'The new supercar is here, 543 cv and 140 000\$ !!',
//         },
//         {
//             tags: ['Car', 'Money'],
//             title: 'test',
//             img: '/images/blog/5.jpg',
//             desc: 'The new supercar is here, 543 cv and 140 000\$ !!',
//         },
//         {
//             tags: ['Car', 'Money'],
//             title: 'test',
//             categ: 'Oui',
//             img: '/images/blog/6.jpg',
//             desc: 'The new supercar is here, 543 cv and 140 000\$ !!',
//         },
//     ];

//     return (
//         <div className="w-full p-12 bg-white">
//             <div className="flex items-end justify-between mb-12 header">
//                 <div className="title">
//                     <p className="mb-4 text-4xl font-bold text-gray-800">Lastest articles</p>
//                     <p className="text-2xl font-light text-gray-400">
//                         All article are verified by 2 experts and valdiate by the CTO
//                     </p>
//                 </div>
//                 {props.withSearch && (
//                     <div className="text-end">
//                         <FormSubscribe label="Search" placeholder="Enter a title" />
//                     </div>
//                 )}
//             </div>
//             <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
//                 {blogs.map((blog) => {
//                     return (
//                         <BlogCard
//                             key={blog.title}
//                             tags={blog.tags}
//                             title={blog.title}
//                             categ={blog.categ}
//                             img={blog.img}
//                             desc={blog.desc}
//                             showAuthor={true}
//                         />
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default BlogList;
// `.trim(),
//   '/components/pagesection/cta/BandeauInfo.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../../elements/buttons/Button';
// const BandeauInfo: FC = () => {
//     return (
//         <section className="max-w-screen-xl px-4 py-12 mx-auto bg-green-500 dark:bg-gray-800 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
//             <div className="max-w-4xl mx-auto text-center">
//                 <h2 className="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
//                     Used by leading architects, home builders renovators.
//                 </h2>
//                 <p className="mt-3 text-base leading-7 text-white sm:mt-4">
//                     Feel confident in choosing the best energy assessor for your energy rating.
//                 </p>
//             </div>
//             <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
//                 <div>
//                     <p className="text-5xl font-extrabold leading-none text-white">119</p>
//                     <p className="mt-2 text-base font-medium leading-6 text-white">Energy raters</p>
//                 </div>
//                 <div className="mt-10 sm:mt-0">
//                     <p className="text-5xl font-extrabold leading-none text-white">6</p>
//                     <p className="mt-2 text-base font-medium leading-6 text-white">Quotes on average</p>
//                 </div>
//                 <div className="mt-10 sm:mt-0">
//                     <p className="text-5xl font-extrabold leading-none text-white">24 hours</p>
//                     <p className="mt-2 text-base font-medium leading-6 text-white">Average turnaround</p>
//                 </div>
//             </div>
//             <div className="flex p-4 mx-auto mt-4 w-52">
//                 <button
//                     type="button"
//                     className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in shadow-md bg-gradient-to-r from-green-400 to-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//                 >
//                     Buy the kit
//                 </button>
//             </div>
//         </section>
//     );
// };
// export default BandeauInfo;
// `.trim(),
//   '/components/pagesection/cta/BandeauNumber.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../../elements/buttons/Button';
// const BandeauNumber: FC = () => {
//     return (
//         <section className="bg-indigo-800">
//             <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
//                 <div>
//                     <h5 className="text-5xl font-bold text-white">
//                         <span className="inline text-white">2179</span>
//                         <span className="text-indigo-200">+</span>
//                     </h5>
//                     <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Cups of coffee</p>
//                 </div>
//                 <div>
//                     <h5 className="text-5xl font-bold text-white">
//                         <span className="inline text-white">13</span>
//                         <span className="text-indigo-200">+</span>
//                     </h5>
//                     <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Ongoing contracts</p>
//                 </div>
//                 <div>
//                     <h5 className="text-5xl font-bold text-white">
//                         <span className="inline text-white">31</span>
//                         <span className="text-indigo-200">+</span>
//                     </h5>
//                     <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Finished projects</p>
//                 </div>
//                 <div>
//                     <h5 className="text-5xl font-bold text-white">
//                         <span className="inline text-white">3</span>
//                         <span className="text-indigo-200">+</span>
//                     </h5>
//                     <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Years in business</p>
//                 </div>
//             </div>
//             <div className="flex p-4 mx-auto mt-4 w-52">
//                 <Button color="white" label="Join" />
//             </div>
//         </section>
//     );
// };
// export default BandeauNumber;
// `.trim(),
//   '/components/pagesection/cta/MultipleImagesCta.tsx': 
//     `import React from 'react';
// import Button from '../../elements/buttons/Button';

// interface Props {
//     title: string;
//     description?: string;
//     isLeft?: boolean;
// }

// const MultipleImagesCta = (props: Props) => {
//     return (
//         <div className={\\`bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center\\`}>
//             <div className={\\`w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20\\`}>
//                 <h2 className={\\`text-3xl font-extrabold text-black dark:text-white sm:text-4xl\\`}>
//                     <span className="block">{props.title}</span>
//                 </h2>
//                 {props.description && <p className={\\`text-md mt-4 text-gray-400\\`}>{props.description}</p>}
//                 <div className="lg:mt-0 lg:flex-shrink-0">
//                     <div className={\\`mt-12 inline-flex rounded-md shadow\\`}>
//                         <Button label="Get started" color="green"></Button>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex items-center gap-8 p-8 lg:p-24">
//                 <img src="/images/landscape/3.jpg" className="w-1/2 rounded-lg" alt="Tree" />

//                 <div>
//                     <img src="/images/landscape/2.jpg" className="mb-8 rounded-lg" alt="Tree" />
//                     <img src="/images/landscape/4.jpg" className="rounded-lg" alt="Tree" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MultipleImagesCta;
// `.trim(),
//   '/components/pagesection/cta/NextJSCta.tsx': 
//     `import React from 'react';

// const NextJSCta = () => {
//     return (
//         <div className="relative z-20 flex items-center bg-white dark:bg-gray-800">
//             <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
//                 <div className="flex flex-col">
//                     <h1 className="w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl dark:text-white">
//                         The React Framework for Production
//                     </h1>
//                     <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-gray-500 dark:text-white">
//                         Next.js gives you the best developer experience with all the features you need for production:
//                         hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and
//                         more. No config needed.
//                     </h2>
//                     <div className="flex items-center justify-center mt-4">
//                         <a
//                             href="#"
//                             className="px-4 py-2 mr-4 text-white uppercase bg-gray-800 border-2 border-transparent text-md hover:bg-gray-900"
//                         >
//                             Get started
//                         </a>
//                         <a
//                             href="#"
//                             className="px-4 py-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"
//                         >
//                             Documentation
//                         </a>
//                     </div>
//                 </div>
//                 <div className="relative block w-full mx-auto mt-6 md:mt-0">
//                     <img src="/images/object/12.svg" className="max-w-xs m-auto md:max-w-2xl" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NextJSCta;
// `.trim(),
//   '/components/pagesection/cta/NotifyMeCta.tsx': 
//     `import React from 'react';

// const NotifyMeCta = () => {
//     return (
//         <div className="px-6 py-6 bg-purple-700 rounded-lg dark:bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
//             <div className="xl:w-0 xl:flex-1">
//                 <h2 className="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
//                     Receive alert about new commit or pull request on your github
//                 </h2>
//                 <p className="max-w-3xl mt-3 text-lg leading-6 text-indigo-200">
//                     No account or email required. We use push notifications. You can choose between several modes and
//                     define your own alert threshold.
//                 </p>
//             </div>
//             <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
//                 <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
//                     <button className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-md hover:bg-purple-400 focus:outline-none focus:bg-purple-400">
//                         Notify me
//                     </button>
//                 </div>
//                 <p className="mt-3 text-sm leading-5 text-indigo-200">
//                     We care about the protection of your data. Your data is safe and never used for commercial purposes.
//                 </p>
//                 <p className="text-sm leading-5 text-indigo-200">
//                     In order to receive the notifications, you must give permission sufficient to your web browser.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default NotifyMeCta;
// `.trim(),
//   '/components/pagesection/cta/SimpleTextCta.tsx': 
//     `import React from 'react';
// import Button from '../../elements/buttons/Button';

// interface Props {
//     title: string;
//     subtitle?: string;
//     description?: string;
//     image?: string;
//     isVertical?: boolean;
//     twoButton?: boolean;
//     isLeft?: boolean;
// }

// const SimpleTextCta = (props: Props) => {
//     return (
//         <div className={\\`bg-white dark:bg-gray-800 \${props.image ? 'overflow-hidden relative' : ''}\\`}>
//             <div
//                 className={\\`\${
//                     props.isVertical
//                         ? props.isLeft
//                             ? 'text-start'
//                             : 'text-center'
//                         : 'lg:flex lg:items-center lg:justify-between'
//                 } \${props.image ? 'w-1/2' : 'w-full mx-auto'} py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20\\`}
//             >
//                 <h2 className={\\`text-3xl font-extrabold text-black dark:text-white sm:text-4xl\\`}>
//                     <span className="block">{props.title}</span>
//                     {props.subtitle && <span className="block text-indigo-500">{props.subtitle}</span>}
//                 </h2>
//                 {props.description && (
//                     <p
//                         className={\\`text-xl\${props.isVertical ? ' mt-4' : ''}\${
//                             props.image ? '' : ' max-w-md mx-auto'
//                         } text-gray-400\\`}
//                     >
//                         {props.description}
//                     </p>
//                 )}
//                 <div className="lg:mt-0 lg:flex-shrink-0">
//                     <div className={\\`\${props.isVertical ? 'mt-12' : ''} inline-flex rounded-md shadow\\`}>
//                         <Button label="Get started" isFat={true} color="indigo"></Button>
//                     </div>
//                     {props.twoButton && (
//                         <div className="inline-flex ml-3 rounded-md shadow">
//                             <Button label="Invite friend" isFat={true} color="gray" />
//                         </div>
//                     )}
//                 </div>
//             </div>
//             {props.image && (
//                 <img src={props.image} className="absolute top-0 right-0 hidden h-full max-w-1/2 lg:block" />
//             )}
//         </div>
//     );
// };

// export default SimpleTextCta;
// `.trim(),
//   '/components/pagesection/cta/SubscribeCta.tsx': 
//     `import React from 'react';
// import FormSubscribe from '../../form/layout/FormSubscribe';

// const SubscribeCta = () => {
//     return (
//         <div className="bg-white dark:bg-gray-800">
//             <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
//                 <h2 className={\\`text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl\\`}>
//                     We've got more coming...
//                 </h2>
//                 <p className={\\`mt-2 max-w-xl text-base text-gray-400\\`}>
//                     Want to hear from us when we add new components? Sign up for our newsletter and we'll email you
//                     every time we release a new batch of components.
//                 </p>
//                 <form>
//                     <div className="mt-6 sm:flex jusitfy-start">
//                         <FormSubscribe label="Subscribe" placeholder="Email" />
//                     </div>
//                 </form>

//                 <div className="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
//                     <picture>
//                         <source srcSet="/images/object/5.webp" type="image/webp" />
//                         <source srcSet="/images/object/5.png" />
//                         <img
//                             className="object-cover w-1/2 mx-auto maw-w-44"
//                             src="/images/object/5.png"
//                             alt="shopping item"
//                         />
//                     </picture>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SubscribeCta;
// `.trim(),
//   '/components/pagesection/cta/TimerEvent.tsx': 
//     `import React, { FC } from 'react';
// import Button from '../../elements/buttons/Button';
// const TimerEvent: FC = () => {
//     return (
//         <section className="py-8 bg-indigo-500 bg-gradient dark:bg-gray-800 md:py-16">
//             <div className="box-content max-w-5xl px-5 mx-auto">
//                 <div className="flex flex-col items-center -mx-5 md:flex-row">
//                     <div className="w-full px-5 mb-5 text-center md:mb-0 md:text-left">
//                         <h6 className="text-xs font-semibold text-indigo-800 uppercase md:text-base dark:text-gray-100">
//                             Opening tickets
//                         </h6>
//                         <h3 className="text-2xl font-bold text-white font-heading md:text-4xl">Saturday 17</h3>
//                         <h3 className="text-lg font-bold leading-tight text-white font-heading md:text-xl">
//                             @ 10:00 AM
//                         </h3>
//                         <div className="w-full mt-4 md:w-44">
//                             <Button label="Early bird" color="white" />
//                         </div>
//                     </div>
//                     <div className="w-full px-5 md:w-auto">
//                         <div className="flex justify-center text-center text-white">
//                             <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
//                                 <div className="text-2xl font-semibold md:text-3xl">
//                                     <span>0</span>
//                                     <span>1</span>
//                                 </div>

//                                 <div className="mt-3 text-xs uppercase opacity-75">Day</div>
//                             </div>
//                             <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
//                                 <div className="text-2xl font-semibold md:text-3xl">
//                                     <span>1</span>
//                                     <span>8</span>
//                                 </div>
//                                 <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
//                             </div>
//                             <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
//                                 <div className="text-2xl font-semibold md:text-3xl">
//                                     <span>5</span>
//                                     <span>0</span>
//                                 </div>
//                                 <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
//                             </div>
//                             <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
//                                 <div className="text-2xl font-semibold md:text-3xl">
//                                     <span>1</span>
//                                     <span>9</span>
//                                 </div>
//                                 <div className="mt-3 text-xs uppercase opacity-75 ">Second</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default TimerEvent;
// `.trim(),
//   '/components/pagesection/cta/WatchCta.tsx': 
//     `import React from 'react';

// const WatchCta = () => {
//     return (
//         <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
//             <div className="container relative flex px-6 py-16 mx-auto">
//                 <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
//                     <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
//                     <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
//                         Be on <span className="text-5xl sm:text-7xl">Time</span>
//                     </h1>
//                     <p className="text-sm text-gray-700 sm:text-base dark:text-white">
//                         Dimension of reality that makes change possible and understandable. An indefinite and
//                         homogeneous environment in which natural events and human existence take place.
//                     </p>
//                     <div className="flex mt-8">
//                         <a
//                             href="#"
//                             className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
//                         >
//                             Get started
//                         </a>
//                         <a
//                             href="#"
//                             className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
//                         >
//                             Read more
//                         </a>
//                     </div>
//                 </div>
//                 <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
//                     <img src="/images/object/10.png" className="max-w-xs m-auto md:max-w-sm" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WatchCta;
// `.trim(),
//   '/components/pagesection/faq/Faq.tsx': 
//     `import React from 'react';

// interface Props {
//     questions?: Question[];
// }

// interface Question {
//     question: string;
//     response: string;
// }

// const Faq = (props: Props) => {
//     return (
//         <div className="max-w-screen-xl p-8 mx-auto">
//             <h2 className="mb-12 text-3xl font-extrabold leading-9 text-gray-900 border-b-2 border-gray-100">FAQs</h2>

//             <ul className="flex flex-wrap items-start gap-8">
//                 {props.questions.map((quest) => {
//                     return (
//                         <li className="w-2/5" key={quest.question}>
//                             <p className="text-lg font-medium leading-6 text-gray-900">{quest.question}</p>
//                             <p className="mt-2">
//                                 <p className="text-base leading-6 text-gray-500">{quest.response}</p>
//                             </p>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };
// export default Faq;
// `.trim(),
//   '/components/pagesection/faq/FaqHori.tsx': 
//     `import React from 'react';

// const FaqHori = () => {
//     return (
//         <div className="px-4 py-20 bg-lightblue">
//             <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
//                 <h2 className="w-full mr-8 text-3xl font-extrabold leading-9 md:w-1/3">Frequently-asked questions</h2>
//                 <dl className="w-full md:w-2/3">
//                     <dt className="mb-4">
//                         <h3 className="text-xl font-semibold">
//                             We already have ongoing projects. Will Valohai easily integrate with them?
//                         </h3>
//                     </dt>
//                     <dd className="mb-16">
//                         <p>
//                             Running existing machine learning projects in Valohai is very simple! Integration only
//                             requires adding a valohai.yaml configuration file. Moving projects in and out of Valohai is
//                             easy – the integration is only the configuration file.
//                         </p>
//                     </dd>
//                     <dt className="mb-4">
//                         <h3 className="text-xl font-semibold">How do you compare to other data science platforms?</h3>
//                     </dt>
//                     <dd className="mb-16">
//                         <p>
//                             We don’t. Valohai isn’t a data science platform; it's a Machine Learning Management Platform
//                             that handles the whole ML pipeline from feature extraction, to training of your model and to
//                             deploying it into production in a reproducible manner. Data science platforms offer hosted
//                             notebooks and AutoML solutions.
//                         </p>
//                     </dd>
//                     <dt className="mb-4">
//                         <h3 className="text-xl font-semibold">Does Valohai charge for computation?</h3>
//                     </dt>
//                     <dd className="mb-16">
//                         <p>
//                             Depends. Most of our customers use their own cloud and thus pay for usage according to their
//                             own agreements. Valohai doesn't charge anything on top of the per-user license fee. If you
//                             don't have a cloud provider, you can use our AWS, GCP and Azure accounts, and we'll only
//                             charge you for what you use.
//                         </p>
//                     </dd>
//                 </dl>
//             </div>
//         </div>
//     );
// };
// export default FaqHori;
// `.trim(),
//   '/components/pagesection/feature/FeaturesAndDesc.tsx': 
//     `import React from 'react';
// import Button from '../../elements/buttons/Button';

// const FeaturesAndDesc = () => {
//     return (
//         <section>
//             <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800">
//                 <div className="flex flex-wrap -mx-8">
//                     <div className="w-full px-8 lg:w-1/2">
//                         <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
//                             <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
//                                 Sed ac magna sit amet risus tristique interdum, at vel velit in hac habitasse platea
//                                 dictumst.
//                             </h2>
//                             <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec
//                                 venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent
//                                 placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
//                             </p>
//                             <div className="w-full md:w-1/3">
//                                 <Button label="See more" color="indigo" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full px-8 lg:w-1/2">
//                         <ul className="space-y-12">
//                             <li className="flex -mx-4">
//                                 <div className="px-4">
//                                     <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
//                                         1
//                                     </span>
//                                 </div>
//                                 <div className="px-4">
//                                     <h3 className="my-4 text-xl font-semibold dark:text-white">Responsive Elements</h3>
//                                     <p className="leading-loose text-gray-500 dark:text-gray-300">
//                                         All elements are responsive and provide the best display in all screen size.
//                                         It's magic !
//                                     </p>
//                                 </div>
//                             </li>
//                             <li className="flex -mx-4">
//                                 <div className="px-4">
//                                     <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
//                                         2
//                                     </span>
//                                 </div>
//                                 <div className="px-4">
//                                     <h3 className="my-4 text-xl font-semibold dark:text-white">Flexible Team</h3>
//                                     <p className="leading-loose text-gray-500 dark:text-gray-300">
//                                         Flexibility is the key. All team is available 24/24 and joinable every day on
//                                         our hotline.
//                                     </p>
//                                 </div>
//                             </li>
//                             <li className="flex -mx-4">
//                                 <div className="px-4">
//                                     <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
//                                         3
//                                     </span>
//                                 </div>
//                                 <div className="px-4">
//                                     <h3 className="my-4 text-xl font-semibold dark:text-white">Ecologic Software</h3>
//                                     <p className="leading-loose text-gray-500 dark:text-gray-300">
//                                         Our Software are ecologic and responsable. Green is not just a color, it's a way
//                                         of life.
//                                     </p>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default FeaturesAndDesc;
// `.trim(),
//   '/components/pagesection/feature/FeaturesCards.tsx': 
//     `import React from 'react';

// const FeaturesCards = () => {
//     return (
//         <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
//             <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
//                 <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             className="w-6 h-6"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>
//                     </div>
//                 </div>

//                 <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">Website Design</h3>
//                 <p className="py-4 text-gray-500 text-md dark:text-gray-300">
//                     Encompassing today’s website design technology to integrated and build solutions relevant to your
//                     business.
//                 </p>
//             </div>
//             <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
//                 <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             className="w-6 h-6"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>
//                     </div>
//                 </div>
//                 <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">Branding</h3>
//                 <p className="py-4 text-gray-500 text-md dark:text-gray-300">
//                     Share relevant, engaging, and inspirational brand messages to create a connection with your
//                     audience.
//                 </p>
//             </div>
//             <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
//                 <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             className="w-6 h-6"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>
//                     </div>
//                 </div>

//                 <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">SEO Marketing</h3>
//                 <p className="py-4 text-gray-500 text-md dark:text-gray-300">
//                     Let us help you level up your search engine game, explore our solutions for digital marketing for
//                     your business.
//                 </p>
//             </div>
//         </div>
//     );
// };
// export default FeaturesCards;
// `.trim(),
//   '/components/pagesection/feature/FeaturesImage.tsx': 
//     `import React from 'react';

// const FeaturesImage = () => {
//     return (
//         <div className="relative p-4 bg-white dark:bg-gray-800">
//             <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
//                 <div className="lg:col-start-2 md:pl-20">
//                     <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
//                         Manage everything
//                     </h4>
//                     <ul className="mt-10">
//                         <li>
//                             <div className="flex">
//                                 <div className="flex-shrink-0">
//                                     <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             className="w-6 h-6"
//                                             viewBox="0 0 1792 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <div className="ml-4">
//                                     <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
//                                         One-look dashboard
//                                     </h5>
//                                     <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
//                                         Know everything about your business in a single glance with your new dashboard.
//                                     </p>
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="mt-10">
//                             <div className="flex">
//                                 <div className="flex-shrink-0">
//                                     <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             className="w-6 h-6"
//                                             viewBox="0 0 1792 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <div className="ml-4">
//                                     <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
//                                         Orders, managed
//                                     </h5>
//                                     <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
//                                         All your orders in one place so you can manage your delivery, collection, asap
//                                         and pre-orders in one place.
//                                     </p>
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="mt-10">
//                             <div className="flex">
//                                 <div className="flex-shrink-0">
//                                     <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             className="w-6 h-6"
//                                             viewBox="0 0 1792 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <div className="ml-4">
//                                     <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
//                                         Email &amp; SMS Notifications
//                                     </h5>
//                                     <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
//                                         Never miss a new order with notifications via your dashboard, by sound, and to
//                                         your email and phone.
//                                     </p>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
//                     <img
//                         src="/images/object/8.jpg"
//                         alt="illustration"
//                         className="relative w-auto mx-auto rounded shadow-lg"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default FeaturesImage;
// `.trim(),
//   '/components/pagesection/feature/FeaturesImage2.tsx': 
//     `import React from 'react';

// const FeaturesImage2 = () => {
//     const features = ['Live modifications', 'Data tracker', '24/24 support', 'Free tips to improve work time'];

//     return (
//         <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
//             <div className="relative">
//                 <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
//                     <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
//                         <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">Interactive</p>
//                         <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
//                             Interactivity between team members is the key of the success.
//                         </h4>
//                         <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
//                             Build a simply and powered collaborative space for all your team. Track, share, measure, you
//                             have a fully control, it's never be simply and efficient.
//                         </p>
//                         <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
//                             {features.map((feat, index) => {
//                                 return (
//                                     <li key={index} className="mt-6 lg:mt-0">
//                                         <div className="flex">
//                                             <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
//                                                 <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                                         clipRule="evenodd"
//                                                     ></path>
//                                                 </svg>
//                                             </span>
//                                             <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
//                                                 {feat}
//                                             </span>
//                                         </div>
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                     </div>

//                     <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
//                         <div className="relative space-y-4">
//                             <div className="flex items-end justify-center space-x-4 lg:justify-start">
//                                 <img
//                                     className="w-32 rounded-lg shadow-lg md:w-56"
//                                     width="200"
//                                     src="/images/object/8.jpg"
//                                     alt="1"
//                                 />
//                                 <img
//                                     className="w-40 rounded-lg shadow-lg md:w-64"
//                                     width="260"
//                                     src="/images/landscape/4.jpg"
//                                     alt="2"
//                                 />
//                             </div>
//                             <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
//                                 <img
//                                     className="w-24 rounded-lg shadow-lg md:w-40"
//                                     width="170"
//                                     src="/images/landscape/3.jpg"
//                                     alt="3"
//                                 />
//                                 <img
//                                     className="w-32 rounded-lg shadow-lg md:w-56"
//                                     width="200"
//                                     src="/images/object/9.jpg"
//                                     alt="4"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default FeaturesImage2;
// `.trim(),
//   '/components/pagesection/feature/FeaturesSquare.tsx': 
//     `import React from 'react';

// const FeaturesSquare = () => {
//     return (
//         <div className="container p-6 px-6 mx-auto bg-white dark:bg-gray-800">
//             <div className="mb-16 text-center">
//                 <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Features</h2>
//                 <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
//                     A better way to live
//                 </p>
//             </div>
//             <div className="flex flex-wrap my-12 dark:text-white">
//                 <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
//                     <div className="flex items-center mb-6">
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             className="w-6 h-6 text-indigo-500"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>
//                         <div className="ml-4 text-xl">Increase sales</div>
//                     </div>
//                     <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
//                         Receive more sales by selling across multple sales channels instead of just having a single
//                         point of entry.
//                     </p>
//                 </div>
//                 <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
//                     <div className="flex items-center mb-6">
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             className="w-6 h-6 text-indigo-500"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>
//                         <div className="ml-4 text-xl">Overlays</div>
//                     </div>
//                     <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
//                         Apply beautiful overlays to every product image distributed through our platform. A visual
//                         touch.
//                     </p>
//                 </div>
//                 <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
//                     <div className="flex items-center mb-6">
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             className="w-6 h-6 text-indigo-500"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>
//                         <div className="ml-4 text-xl">Control</div>
//                     </div>
//                     <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
//                         Apply filters and control which products to sell on each sales channel. E.g. exclude products
//                         with low margins.
//                     </p>
//                 </div>
//                 <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
//                     <div className="flex items-center mb-6">
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             className="w-6 h-6 text-indigo-500"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>
//                         <div className="ml-4 text-xl">Mapping</div>
//                     </div>
//                     <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
//                         Map product categories with each sales channels' own categories and achieve better results and
//                         lower costs.
//                     </p>
//                 </div>
//                 <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
//                     <div className="flex items-center mb-6">
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             className="w-6 h-6 text-indigo-500"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>
//                         <div className="ml-4 text-xl">Fill the missing</div>
//                     </div>
//                     <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
//                         Modify products with extra properties and achieve the maximum output for each installed sales
//                         channel.
//                     </p>
//                 </div>
//                 <div className="w-full p-8 md:w-1/2 lg:w-1/3">
//                     <div className="flex items-center mb-6">
//                         <svg
//                             width="20"
//                             height="20"
//                             fill="currentColor"
//                             className="w-6 h-6 text-indigo-500"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>

//                         <div className="ml-4 text-xl">Dynamic Texts</div>
//                     </div>
//                     <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
//                         Build unique product titles and descriptions instead of spending days manually editing each
//                         product.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default FeaturesSquare;
// `.trim(),
//   '/components/pagesection/index.tsx': 
//     `import React, { FC } from 'react';
// import SectionDesc from '../../../site/section/SectionDesc';

// const Pagesection: FC = () => {
//     const pageSections = [
//         {
//             title: 'CTAs',
//             items: 15,
//             img: 'images/sections/cta.png',
//             link: '/components/cta',
//         },
//         {
//             title: 'Testimonials',
//             items: 7,
//             img: 'images/sections/testimonial.png',
//             link: '/components/testimonial',
//         },
//         {
//             title: 'Profiles',
//             items: 8,
//             img: 'images/sections/profile.png',
//             link: '/components/profile',
//         },
//         {
//             title: 'Teams',
//             items: 6,
//             img: 'images/sections/team.png',
//             link: '/components/team',
//         },
//         {
//             title: 'FAQs',
//             items: 2,
//             img: 'images/sections/faq.png',
//             link: '/components/faq',
//         },
//         {
//             title: 'Features',
//             items: 5,
//             img: 'images/sections/feature.png',
//             link: '/components/feature',
//         },
//         {
//             title: 'Blogs',
//             items: 5,
//             img: 'images/sections/blog.png',
//             link: '/components/blog',
//         },
//     ];

//     return <SectionDesc id="pagesection" items={pageSections} title="Page sections" />;
// };

// export default Pagesection;
// `.trim(),
//   '/components/pagesection/profile/AddProfilInfo.tsx': 
//     `import React, { FC } from 'react';

// const AddProfilInfo: FC = () => {
//     return (
//         <div className="p-4 bg-white shadow-lg rounded-2xl w-80 dark:bg-gray-800">
//             <div className="flex flex-row items-start gap-4">
//                 <img src="/images/person/1.jpg" className="rounded-lg w-28 h-28" />

//                 <div className="flex flex-col justify-between w-full h-28">
//                     <div>
//                         <p className="text-xl font-medium text-gray-800 dark:text-white">John Jackson</p>
//                         <p className="text-xs text-gray-400">FullStack dev</p>
//                     </div>

//                     <div className="w-full p-2 bg-blue-100 rounded-lg dark:bg-white">
//                         <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
//                             <p className="flex flex-col">
//                                 Articles
//                                 <span className="font-bold text-black dark:text-indigo-500">34</span>
//                             </p>
//                             <p className="flex flex-col">
//                                 Followers
//                                 <span className="font-bold text-black dark:text-indigo-500">455</span>
//                             </p>
//                             <p className="flex flex-col">
//                                 Rating
//                                 <span className="font-bold text-black dark:text-indigo-500">9.3</span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex items-center justify-between gap-4 mt-6">
//                 <button
//                     type="button"
//                     className="w-1/2 px-4 py-2 text-base bg-white border rounded-lg text-grey-500 hover:bg-gray-200 "
//                 >
//                     Chat
//                 </button>
//                 <button
//                     type="button"
//                     className="w-1/2 px-4 py-2 text-base text-white bg-indigo-500 border rounded-lg hover:bg-indigo-700 "
//                 >
//                     Add friend
//                 </button>
//             </div>
//         </div>
//     );
// };
// export default AddProfilInfo;
// `.trim(),
//   '/components/pagesection/profile/CoverAndButtonsProfilCard.tsx': 
//     `import React, { FC } from 'react';
// import Avatar from '../../elements/avatars/Avatar';
// import Button from '../../elements/buttons/Button';

// const CoverAndButtonsProfilCard: FC = () => {
//     return (
//         <div className="w-64 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
//             <img alt="profil" src="/images/landscape/1.jpg" className="w-full mb-4 rounded-t-lg h-28" />
//             <div className="flex flex-col items-center justify-center p-4 -mt-16">
//                 <Avatar />

//                 <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">Charlie</p>
//                 <p className="flex items-center text-xs text-gray-400">
//                     <svg
//                         width="10"
//                         height="10"
//                         fill="currentColor"
//                         className="w-4 h-4 mr-2"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                     </svg>
//                     Nantes
//                 </p>
//                 <p className="text-xs text-gray-400">FullStack dev</p>

//                 <div className="flex items-center justify-between w-full gap-4 mt-8">
//                     <Button color="indigo" label="See profile" />
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default CoverAndButtonsProfilCard;
// `.trim(),
//   '/components/pagesection/profile/CoverAndInfoProfil.tsx': 
//     `import React, { FC } from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// const CoverAndInfoProfil: FC = () => {
//     return (
//         <div className="bg-white shadow-lg rounded-2xl w-80 dark:bg-gray-800">
//             <img alt="profil" src="/images/landscape/1.jpg" className="w-full mb-4 rounded-t-lg h-28" />
//             <div className="flex flex-col items-center justify-center p-4 -mt-16">
//                 <Avatar withBorder />

//                 <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">Charlie</p>
//                 <p className="mb-4 text-xs text-gray-400">Nantes</p>
//                 <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">Professional</p>

//                 <div className="w-full p-2 mt-4 rounded-lg">
//                     <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
//                         <p className="flex flex-col">
//                             Articles
//                             <span className="font-bold text-black dark:text-white">34</span>
//                         </p>
//                         <p className="flex flex-col">
//                             Followers <span className="font-bold text-black dark:text-white">455</span>
//                         </p>
//                         <p className="flex flex-col">
//                             Rating <span className="font-bold text-black dark:text-white">9.3</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default CoverAndInfoProfil;
// `.trim(),
//   '/components/pagesection/profile/FullPhotoCard.tsx': 
//     `import React, { FC } from 'react';
// const FullPhotoCard: FC = () => {
//     return (
//         <div className="relative w-64 m-auto mb-1 mb-6 overflow-hidden rounded-lg shadow-lg">
//             <img alt="eggs" src="/images/person/3.jpg" className="rounded-lg" />
//             <div className="absolute bottom-0 w-full p-4 bg-gradient-to-b bg-opacity-60 from-transparent to-black">
//                 <p className="text-2xl text-white nb-4">Helena Yakro</p>
//                 <div className="flex justify-between">
//                     <p className="flex items-center text-sm text-gray-300">18/12/1993</p>
//                     <p className="flex items-center text-sm text-gray-300">
//                         <svg
//                             width="10"
//                             height="10"
//                             fill="currentColor"
//                             className="w-4 h-4"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
//                         </svg>
//                         Nantes
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default FullPhotoCard;
// `.trim(),
//   '/components/pagesection/profile/HeadProfil.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';
// import Button from '../../elements/buttons/Button';

// const HeadProfil = () => {
//     return (
//         <div className="w-full max-w-xl px-5 py-4 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
//             <div className="w-full pt-1 mx-auto -mt-16 text-center">
//                 <Avatar size="big" />
//             </div>
//             <div className="w-full">
//                 <div className="mb-6 text-center">
//                     <p className="text-xl font-medium text-gray-800 dark:text-white">John Jackson</p>
//                     <p className="text-xs text-gray-400">FullStack dev</p>
//                 </div>

//                 <div className="w-full p-2 mb-4 bg-pink-100 rounded-lg dark:bg-white">
//                     <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
//                         <p className="flex flex-col">
//                             Art.
//                             <span className="font-bold text-black dark:text-indigo-500">34</span>
//                         </p>
//                         <p className="flex flex-col">
//                             Foll.
//                             <span className="font-bold text-black dark:text-indigo-500">455</span>
//                         </p>
//                         <p className="flex flex-col">
//                             Rat.
//                             <span className="font-bold text-black dark:text-indigo-500">9.3</span>
//                         </p>
//                     </div>
//                 </div>
//                 <Button label="Add" color="indigo" />
//             </div>
//         </div>
//     );
// };

// export default HeadProfil;
// `.trim(),
//   '/components/pagesection/profile/SimpleProfil.tsx': 
//     `import React, { FC } from 'react';
// import Avatar from '../../elements/avatars/Avatar';
// import Button from '../../elements/buttons/Button';

// interface Props {
//     horizontal?: boolean;
//     name?: string;
//     job?: string;
//     img?: string;
//     size?: 'small' | 'normal' | 'big' | 'monster';
//     noBackground?: boolean;
//     withAction?: boolean;
// }

// const SimpleProfile = (props: Props) => {
//     return (
//         <div className={\\`\${props.noBackground ? '' : 'shadow-lg rounded-2xl bg-white dark:bg-gray-800 '}p-4\\`}>
//             <div className={\\`\${props.horizontal ? 'flex-row gap-4' : 'flex-col '} flex justify-center items-center\\`}>
//                 <div className="flex-shrink-0">
//                     <Avatar img={props.img} size={props.size} />
//                 </div>

//                 <div className={\\`\${props.horizontal ? '' : 'mt-2 text-center'} flex flex-col\\`}>
//                     <span className="text-lg font-medium text-gray-600 dark:text-white">{props.name || 'Charlie'}</span>
//                     <span className="text-xs text-gray-400">{props.job || 'CTO'}</span>
//                 </div>

//                 {props.withAction && <Button label="Add" color="indigo" />}
//             </div>
//         </div>
//     );
// };
// export default SimpleProfile;
// `.trim(),
//   '/components/pagesection/team/AllTeam.tsx': 
//     `import React from 'react';
// import SimpleProfile from '../profile/SimpleProfil';

// interface Props {
//     size?: 'small' | 'normal' | 'big' | 'monster';
//     name: string;
//     img: string;
//     job: string;
//     desc: string;
// }

// const AllTeam = () => {
//     return (
//         <div className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
//             <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">The big team</p>
//             <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
//                 Meat the best team in wolrd
//             </p>
//             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
//                 <SimpleProfile
//                     size="big"
//                     name="Hean Hiut"
//                     img="/images/person/4.jpg"
//                     job="Designer"
//                     noBackground={true}
//                 />
//                 <SimpleProfile
//                     size="big"
//                     name="Igor Novak"
//                     img="/images/person/5.jpg"
//                     job="Designer"
//                     noBackground={true}
//                 />
//                 <SimpleProfile
//                     size="big"
//                     name="Jig sa Hiut"
//                     img="/images/person/6.jpg"
//                     job="Boucher"
//                     noBackground={true}
//                 />
//                 <SimpleProfile
//                     size="big"
//                     name="Norman Tuck"
//                     img="/images/person/7.jpg"
//                     job="Architect"
//                     noBackground={true}
//                 />
//                 <SimpleProfile size="big" name="Masrt kik" img="/images/person/8.jpg" job="Chef" noBackground={true} />
//                 <SimpleProfile size="big" name="Louis Bol" img="/images/person/9.jpg" job="Sdf" noBackground={true} />
//                 <SimpleProfile
//                     size="big"
//                     name="Izno god"
//                     img="/images/person/10.jpg"
//                     job="American"
//                     noBackground={true}
//                 />
//                 <SimpleProfile
//                     size="big"
//                     name="Serena Quille"
//                     img="/images/person/1.jpg"
//                     job="Designer"
//                     noBackground={true}
//                 />
//                 <SimpleProfile
//                     size="big"
//                     name="Edouard Sert"
//                     img="/images/person/6.jpg"
//                     job="Developer"
//                     noBackground={true}
//                 />
//                 <SimpleProfile
//                     size="big"
//                     name="Parki Son"
//                     img="/images/person/8.jpg"
//                     job="Designer"
//                     noBackground={true}
//                 />
//                 <SimpleProfile size="big" name="Marine Lo" img="/images/person/9.jpg" job="SEO" noBackground={true} />
//                 <SimpleProfile
//                     size="big"
//                     name="Mickal Poul"
//                     img="/images/person/4.jpg"
//                     job="Freelance"
//                     noBackground={true}
//                 />
//                 <SimpleProfile
//                     size="big"
//                     name="Isac Tou"
//                     img="/images/person/5.jpg"
//                     job="Freelance"
//                     noBackground={true}
//                 />
//                 <SimpleProfile
//                     size="big"
//                     name="Jean Eu"
//                     img="/images/person/6.jpg"
//                     job="Designer"
//                     noBackground={true}
//                 />
//                 <SimpleProfile size="big" name="Yves P" img="/images/person/9.jpg" job="Humor" noBackground={true} />
//                 <SimpleProfile
//                     size="big"
//                     name="Marco Tol"
//                     img="/images/person/1.jpg"
//                     job="Designer"
//                     noBackground={true}
//                 />
//                 <SimpleProfile size="big" name="Huge Ar" img="/images/person/6.jpg" job="CEA" noBackground={true} />
//                 <SimpleProfile size="big" name="Big Bro" img="/images/person/8.jpg" job="CTO" noBackground={true} />
//             </div>
//         </div>
//     );
// };
// export default AllTeam;
// `.trim(),
//   '/components/pagesection/team/DoubleTeam.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// const DoubleTeam = () => {
//     return (
//         <div className="gap-8 md:flex">
//             <div className="mb-8 text-center md:w-1/2 md:mb-0">
//                 <img className="w-48 h-48 mx-auto -mb-24 rounded-full" src="/images/person/6.jpg" alt="Avatar Jacky" />
//                 <div className="px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
//                     <h3 className="mb-3 text-xl text-gray-800 font-title">Jacky Pout</h3>
//                     <p className="font-body">FullStack Engineer</p>
//                     <p className="mb-4 text-sm font-body">He love caramel and he hate PHP </p>
//                     <a className="text-blue-500 font-body hover:text-gray-800" href="#">
//                         Jacky@poute.com
//                     </a>
//                 </div>
//             </div>

//             <div className="text-center md:w-1/2">
//                 <img
//                     className="w-48 h-48 mx-auto -mb-24 rounded-full"
//                     src="/images/person/10.jpg"
//                     alt="Avatar Damien Marley"
//                 />
//                 <div className="px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
//                     <h3 className="mb-3 text-xl text-gray-800 font-title">Damien Marley</h3>
//                     <p className="font-body">CEO</p>
//                     <p className="mb-4 text-sm font-body">He's fun and listen everyday Bob Marley</p>
//                     <a className="text-blue-500 font-body hover:text-gray-800" href="mailto:dino@siete.pm">
//                         Damien@marley.com
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default DoubleTeam;
// `.trim(),
//   '/components/pagesection/team/ShadowTeam.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// interface Props {
//     size?: 'small' | 'normal' | 'big' | 'monster';
//     name: string;
//     img: string;
//     job: string;
//     desc: string;
// }

// const ShadowTeam = (props: Props) => {
//     return (
//         <div className="relative p-4">
//             <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
//                 <Avatar withBorder={true} size={props.size} type="rounded" img={props.img} />
//             </div>
//             <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
//                 <div className="text-center">
//                     <p className="text-2xl text-gray-800 dark:text-white">{props.name}</p>
//                     <p className="text-xl font-light text-gray-500 dark:text-gray-200">{props.job}</p>
//                     <p className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
//                         {props.desc}
//                     </p>
//                 </div>
//                 <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
//                     <a href="#">
//                         <svg
//                             width="30"
//                             height="30"
//                             fill="currentColor"
//                             className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
//                         </svg>
//                     </a>
//                     <a href="#">
//                         <svg
//                             width="30"
//                             height="30"
//                             fill="currentColor"
//                             className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
//                         </svg>
//                     </a>
//                     <a href="#">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="30"
//                             height="30"
//                             fill="currentColor"
//                             className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
//                         </svg>
//                     </a>
//                     <a href="#">
//                         <svg
//                             width="30"
//                             height="30"
//                             fill="currentColor"
//                             className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
//                         </svg>
//                     </a>
//                     <a href="#">
//                         <svg
//                             width="30"
//                             height="30"
//                             fill="currentColor"
//                             className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                             viewBox="0 0 1792 1792"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z" />
//                         </svg>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ShadowTeam;
// `.trim(),
//   '/components/pagesection/team/ShadowTeams.tsx': 
//     `import React from 'react';
// import ShadowTeam from './ShadowTeam';

// const ShadowTeams = () => {
//     return (
//         <div className="p-4">
//             <p className="text-3xl font-bold text-center text-gray-800">Professional team</p>
//             <p className="mb-32 text-xl font-normal text-center text-gray-500">Meat the best team in wolrd</p>
//             <div className="flex flex-col items-center space-y-24 md:space-y-0 md:flex-row justify evenly">
//                 <ShadowTeam
//                     img="/images/person/1.jpg"
//                     name="Patrick Sebastien"
//                     job="Developpeur"
//                     desc="Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator."
//                     size="monster"
//                 />
//                 <ShadowTeam
//                     img="/images/person/2.jpeg"
//                     name="Charlie"
//                     job="Lead dev"
//                     desc="Charlie, born December 18, 1993 in Challans, is an imitator and pintor."
//                     size="monster"
//                 />
//                 <ShadowTeam
//                     img="/images/person/4.jpg"
//                     name="Thierry Halliday"
//                     job="CTO"
//                     desc="Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist."
//                     size="monster"
//                 />
//             </div>
//         </div>
//     );
// };
// export default ShadowTeams;
// `.trim(),
//   '/components/pagesection/team/SimpleTeam.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// interface Props {
//     size?: 'small' | 'normal' | 'big' | 'monster';
//     name: string;
//     img: string;
//     job: string;
//     desc: string;
// }

// const SimpleTeam = (props: Props) => {
//     return (
//         <div className="p-4">
//             <div className="mb-4 text-center opacity-90">
//                 <Avatar size={props.size} img={props.img} />
//             </div>
//             <div className="text-center">
//                 <p className="text-2xl text-gray-800 dark:text-white">{props.name}</p>
//                 <p className="text-xl font-light text-gray-500 dark:text-gray-200">{props.job}</p>
//                 <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">{props.desc}</p>
//             </div>
//             <div className="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
//                 <a href="#">
//                     <svg
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
//                     </svg>
//                 </a>
//                 <a href="#">
//                     <svg
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
//                     </svg>
//                 </a>
//                 <a href="#">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                         viewBox="0 0 1792 1792"
//                     >
//                         <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
//                     </svg>
//                 </a>
//                 <a href="#">
//                     <svg
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
//                     </svg>
//                 </a>
//                 <a href="#">
//                     <svg
//                         width="30"
//                         height="30"
//                         fill="currentColor"
//                         className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z" />
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     );
// };
// export default SimpleTeam;
// `.trim(),
//   '/components/pagesection/team/SimpleTeams.tsx': 
//     `import React from 'react';
// import SimpleTeam from './SimpleTeam';

// const SimpleTeams = () => {
//     return (
//         <div className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
//             <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">Professional team</p>
//             <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-200">
//                 Meat the best team in wolrd
//             </p>
//             <div className="flex flex-col items-center md:flex-row justify evenly">
//                 <SimpleTeam
//                     img="/images/person/1.jpg"
//                     name="Patrick Sebastien"
//                     job="Developpeur"
//                     desc="Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator."
//                     size="monster"
//                 />
//                 <SimpleTeam
//                     img="/images/person/4.jpg"
//                     name="Jean Castux"
//                     job="Founder"
//                     desc="Jean Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy."
//                     size="monster"
//                 />
//                 <SimpleTeam
//                     img="/images/person/3.jpg"
//                     name="Thierry Halliday"
//                     job="CTO"
//                     desc="Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist."
//                     size="monster"
//                 />
//             </div>
//         </div>
//     );
// };
// export default SimpleTeams;
// `.trim(),
//   '/components/pagesection/testimonial/BigTestimonial.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// const BigTestimonial = () => {
//     return (
//         <div className={\\`bg-white dark:bg-gray-800 w-full mx-auto p-8\\`}>
//             <img src="/icons/rocket.svg" className="w-10 h-10 m-auto mb-8" />

//             <p className={\\`text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl\\`}>
//                 <span className="font-bold text-indigo-500">“</span>
//                 To get social media testimonials like these, keep your customers engaged with your social media accounts
//                 by posting regularly yourself
//                 <span className="font-bold text-indigo-500">”</span>
//             </p>

//             <div className="flex items-center justify-center mt-8">
//                 <Avatar size="small" />
//                 <div className="flex items-center justify-center ml-2">
//                     <span className="mr-2 text-lg font-semibold text-indigo-500">Jean Miguel</span>
//                     <span className="text-xl font-light text-gray-400">/</span>
//                     <span className="ml-2 text-gray-400 text-md">User of Tail-Kit</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BigTestimonial;
// `.trim(),
//   '/components/pagesection/testimonial/BigTestimonialFlex.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// const BigTestimonialFlex = () => {
//     return (
//         <div className={\\`bg-white dark:bg-gray-800 w-full mx-auto p-8\\`}>
//             <div className="flex flex-col items-center justify-center md:items-start md:flex-row">
//                 <Avatar size="monster" />

//                 <div className="w-full md:w-2/3">
//                     <p className={\\`text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-left text-lg md:text-3xl\\`}>
//                         <span className="font-bold text-indigo-500">“</span>
//                         To get social media testimonials like these, keep your customers engaged with your social media
//                         accounts by posting regularly yourself
//                         <span className="font-bold text-indigo-500">”</span>
//                     </p>
//                     <div className="flex items-center justify-center mt-8">
//                         <span className="mr-2 text-lg font-semibold text-indigo-500">Jean Miguel</span>
//                         <span className="text-xl font-light text-gray-400">/</span>
//                         <span className="ml-2 text-gray-400 text-md">User of tail-kit</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BigTestimonialFlex;
// `.trim(),
//   '/components/pagesection/testimonial/FullWidthTesti.tsx': 
//     `import React from 'react';

// const FullWidthTesti = () => {
//     return <p>TODOs</p>;
// };

// export default FullWidthTesti;
// `.trim(),
//   '/components/pagesection/testimonial/HeadTestimonial.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// const HeadTestimonial = () => {
//     return (
//         <div className="flex items-center justify-center px-5 py-5">
//             <div className="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
//                 <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
//                     <Avatar size="big" />
//                 </div>
//                 <div className="w-full mb-10">
//                     <div className="h-3 text-3xl leading-tight text-left text-indigo-500">“</div>
//                     <p className="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
//                         To get social media testimonials like these, keep your customers engaged with your social media
//                         accounts by posting regularly yourself
//                     </p>
//                     <div className="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">”</div>
//                 </div>
//                 <div className="w-full">
//                     <p className="font-bold text-center text-indigo-500 text-md">Tom Hardy</p>
//                     <p className="text-xs text-center text-gray-500 dark:text-gray-300">@thom.hardy</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeadTestimonial;
// `.trim(),
//   '/components/pagesection/testimonial/MultipleTestimonial.tsx': 
//     `import React from 'react';
// import SimpleTestimonial from './SimpleTestimonial';

// const MultipleTestimonial = () => {
//     return (
//         <div className="flex flex-col items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
//             <SimpleTestimonial withShadow={true} />

//             <SimpleTestimonial withShadow={true} />

//             <SimpleTestimonial withShadow={true} />
//         </div>
//     );
// };

// export default MultipleTestimonial;
// `.trim(),
//   '/components/pagesection/testimonial/ReviewWithRate.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// const ReviewWithRate = () => {
//     return (
//         <div className="w-full p-4 mb-6 rounded-lg shadow bg-gradient-to-b from-blue-500 md:w-60 to-blue-600 sm:inline-block">
//             <div className="flex items-start text-left">
//                 <div className="flex-shrink-0">
//                     <div className="relative inline-block">
//                         <Avatar img="/images/person/4.jpg" />
//                     </div>
//                 </div>
//                 <div className="ml-6">
//                     <p className="flex items-baseline">
//                         <span className="text-white">Charlie Rabiller</span>
//                     </p>
//                     <div className="flex items-center mt-1">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-300"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-300"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-300"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-300"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-300"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-3">
//                 <p className="max-w-xs mt-1 font-light text-white">
//                     My first job of scanning photos at the Memories 2 Digital Photo Scanning was fantastic. She
//                     completed the work quickly while I was waiting. Thanks for a great service..
//                 </p>
//             </div>

//             <div className="flex items-start mt-6 text-gray-100">
//                 <button className="mr-4 hover:text-white">
//                     <svg
//                         width="25"
//                         height="25"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z" />
//                     </svg>
//                 </button>
//                 <button className="hover:text-white">
//                     <svg
//                         width="25"
//                         height="25"
//                         fill="currentColor"
//                         viewBox="0 0 1792 1792"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M1344 1024q133 0 226.5 93.5t93.5 226.5-93.5 226.5-226.5 93.5-226.5-93.5-93.5-226.5q0-12 2-34l-360-180q-92 86-218 86-133 0-226.5-93.5t-93.5-226.5 93.5-226.5 226.5-93.5q126 0 218 86l360-180q-2-22-2-34 0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5-93.5 226.5-226.5 93.5q-126 0-218-86l-360 180q2 22 2 34t-2 34l360 180q92-86 218-86z" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ReviewWithRate;
// `.trim(),
//   '/components/pagesection/testimonial/SimpleReview.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// const SimpleReview = () => {
//     return (
//         <div className="w-full p-4 mb-6 bg-white rounded-lg shadow dark:bg-gray-800 sm:inline-block">
//             <div className="flex items-start text-left">
//                 <div className="flex-shrink-0">
//                     <div className="relative inline-block">
//                         <Avatar />
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             className="absolute bottom-0 right-0 w-6 h-6 p-1 -mx-1 -my-1 text-white bg-green-600 rounded-full fill-current"
//                         >
//                             <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"></path>
//                         </svg>
//                     </div>
//                 </div>
//                 <div className="ml-6">
//                     <p className="flex items-baseline">
//                         <span className="font-bold text-gray-600 dark:text-gray-200">A Msan</span>
//                         <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">2 months ago</span>
//                     </p>
//                     <div className="flex items-center mt-1">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-500"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-500"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-500"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-500"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             className="w-4 h-4 text-yellow-500"
//                             fill="currentColor"
//                             viewBox="0 0 1792 1792"
//                         >
//                             <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
//                         </svg>
//                     </div>
//                     <div className="mt-3">
//                         <p className="max-w-xs mt-1 dark:text-white">
//                             My first job of scanning photos at the Memories 2 Digital Photo Scanning was fantastic. She
//                             completed the work quickly while I was waiting. Thanks for a great service..
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SimpleReview;
// `.trim(),
//   '/components/pagesection/testimonial/SimpleTestimonial.tsx': 
//     `import React from 'react';
// import Avatar from '../../elements/avatars/Avatar';

// interface Props {
//     withShadow?: boolean;
// }

// const SimpleTestimonial = (props: Props) => {
//     return (
//         <div className={\\`bg-white dark:bg-gray-800 w-72 \${props.withShadow ? 'shadow-lg' : ''} mx-auto rounded-xl p-4\\`}>
//             <p className={\\`text-gray-600 dark:text-white\\`}>
//                 <span className="text-lg font-bold text-indigo-500">“</span>To get social media testimonials like these,
//                 keep your customers engaged with your social media accounts by posting regularly yourself
//                 <span className="text-lg font-bold text-indigo-500">”</span>
//             </p>
//             <div className="flex items-center mt-4">
//                 <Avatar size="small" />
//                 <div className="flex flex-col justify-between ml-2">
//                     <span className="text-sm font-semibold text-indigo-500">Jean Miguel</span>
//                     <span className="flex items-center text-xs dark:text-gray-400">
//                         User of Tail-Kit
//                         <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" />
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SimpleTestimonial;
// `.trim(),
//   '/components/profile/GroupInfo.tsx': 
//     `import React, { FC } from 'react';
// import MultipleAvatar from '../elements/avatars/MultipleAvatar';

// const GroupInfo: FC = () => {
//     return (
//         <div className="p-4 bg-white shadow-lg rounded-2xl w-80">
//             <div className="flex flex-row items-start gap-4">
//                 <img src="/images/food/3.jpg" className="h-20 rounded-lg w-28" />

//                 <div className="flex flex-col justify-between w-full h-20">
//                     <div>
//                         <p className="text-xl font-medium text-gray-800">Eggs eater</p>
//                         <p className="text-xs text-gray-400">13 458 members</p>
//                     </div>

//                     <MultipleAvatar />
//                 </div>
//             </div>
//             <div className="flex items-center justify-between gap-4 mt-6">
//                 <button
//                     type="button"
//                     className="w-1/2 px-4 py-2 text-base bg-white border rounded-lg text-grey-500 hover:bg-gray-200 "
//                 >
//                     Invite friend
//                 </button>
//                 <button
//                     type="button"
//                     className="w-1/2 px-4 py-2 text-base text-white bg-indigo-500 border rounded-lg hover:bg-indigo-700 "
//                 >
//                     Join
//                 </button>
//             </div>
//         </div>
//     );
// };
// export default GroupInfo;
// `.trim(),
//   '/templates/dashboardPages/dataDashboard/KpitDashboard.tsx': 
//     `import React from 'react';
// import Avatar from '../../../components/elements/avatars/Avatar';
// import SimpleLevelsCard from '../../../components/elements/data/SimpleLevelsCard';

// const KpiProject = () => {
//     return (
//         <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
//             <div className="flex items-start justify-between">
//                 <div className="relative hidden h-screen shadow-lg lg:block w-80">
//                     <div className="h-full bg-white dark:bg-gray-700">
//                         <div className="flex items-center justify-start pt-6 ml-8">
//                             <p className="text-xl font-bold dark:text-white">Plannifer</p>
//                         </div>

//                         <nav className="mt-6">
//                             <div>
//                                 <a
//                                     className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             viewBox="0 0 1792 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" />
//                                         </svg>
//                                     </span>
//                                     <span className="mx-2 text-sm font-normal">Home</span>
//                                 </a>
//                                 <a
//                                     className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             viewBox="0 0 2048 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
//                                         </svg>
//                                     </span>
//                                     <span className="mx-2 text-sm font-normal">
//                                         Refered Projects{' '}
//                                         <span className="w-4 h-2 p-1 ml-4 text-xs text-gray-400 bg-gray-200 rounded-lg">
//                                             0
//                                         </span>
//                                     </span>
//                                 </a>
//                                 <a
//                                     className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             viewBox="0 0 1792 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z" />
//                                         </svg>
//                                     </span>
//                                     <span className="mx-4 text-sm font-normal">Resources</span>
//                                 </a>
//                                 <a
//                                     className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             viewBox="0 0 2048 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zm743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zm-236-507q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zm635 507q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zm-266-397q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zm592 561q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z" />
//                                         </svg>
//                                     </span>
//                                     <span className="mx-4 text-sm font-normal">Store feedback</span>
//                                 </a>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>

//                 <div className="flex flex-col w-full md:space-y-4">
//                     <header className="z-40 flex items-center justify-between w-full h-16">
//                         <div className="block ml-6 lg:hidden">
//                             <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     className="text-gray-400"
//                                     fill="currentColor"
//                                     viewBox="0 0 1792 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
//                             <div className="relative flex items-center justify-end w-full p-1 space-x-4">
//                                 <button className="flex items-center p-2 text-gray-400 bg-white rounded-full shadow hover:text-gray-700 text-md">
//                                     <svg
//                                         width="20"
//                                         height="20"
//                                         className=""
//                                         fill="currentColor"
//                                         viewBox="0 0 1792 1792"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" />
//                                     </svg>
//                                 </button>
//                                 <button className="flex items-center p-2 text-gray-400 bg-white rounded-full shadow hover:text-gray-700 text-md">
//                                     <svg
//                                         width="20"
//                                         height="20"
//                                         className="text-gray-400"
//                                         fill="currentColor"
//                                         viewBox="0 0 1792 1792"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z" />
//                                     </svg>
//                                 </button>
//                                 <span className="w-1 h-8 bg-gray-200 rounded-lg"></span>
//                                 <Avatar size="small" />
//                                 <button className="flex items-center text-gray-500 dark:text-white text-md">
//                                     Charlie R
//                                     <svg
//                                         width="20"
//                                         height="20"
//                                         className="ml-2 text-gray-400"
//                                         fill="currentColor"
//                                         viewBox="0 0 1792 1792"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </header>
//                     <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
//                         <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
//                             Good afternoom, Charlie
//                         </h1>
//                         <h2 className="text-gray-400 text-md">
//                             Here's what's happening with your ambassador account today.
//                         </h2>
//                         <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
//                             <div className="w-full md:w-6/12">
//                                 <SimpleLevelsCard />
//                             </div>
//                             <div className="flex items-center w-full space-x-4 md:w-1/2">
//                                 <div className="w-1/2">
//                                     <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
//                                         <p className="text-2xl font-bold text-black dark:text-white">12</p>
//                                         <p className="text-sm text-gray-400">Active projects</p>
//                                     </div>
//                                 </div>
//                                 <div className="w-1/2">
//                                     <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
//                                         <p className="text-2xl font-bold text-black dark:text-white">\$93.76</p>
//                                         <p className="text-sm text-gray-400">Commission in approval</p>
//                                         <span className="absolute p-4 bg-purple-500 rounded-full top-2 right-4">
//                                             <svg
//                                                 width="40"
//                                                 fill="currentColor"
//                                                 height="40"
//                                                 className="absolute h-4 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                                                 viewBox="0 0 1792 1792"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
//                                             </svg>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <button className="flex items-center px-4 py-2 text-gray-400 border border-gray-300 rounded-r-full rounded-tl-sm rounded-bl-full text-md">
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     fill="currentColor"
//                                     className="mr-2 text-gray-400"
//                                     viewBox="0 0 1792 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z" />
//                                 </svg>
//                                 Last month
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     className="ml-2 text-gray-400"
//                                     fill="currentColor"
//                                     viewBox="0 0 1792 1792"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
//                                 </svg>
//                             </button>
//                             <span className="text-sm text-gray-400">Compared to oct 1- otc 30, 2020</span>
//                         </div>

//                         <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
//                             <div className="w-full">
//                                 <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
//                                     <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
//                                         Project Reffered
//                                     </p>
//                                     <div className="flex items-end my-6 space-x-2">
//                                         <p className="text-5xl font-bold text-black dark:text-white">12</p>
//                                         <span className="flex items-center text-xl font-bold text-green-500">
//                                             <svg
//                                                 width="20"
//                                                 fill="currentColor"
//                                                 height="20"
//                                                 className="h-3"
//                                                 viewBox="0 0 1792 1792"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                             </svg>
//                                             22%
//                                         </span>
//                                     </div>
//                                     <div className="dark:text-white">
//                                         <div className="flex items-center justify-between pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
//                                             <p>Unique URL</p>
//                                             <div className="flex items-end text-xs">
//                                                 34
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-green-500"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     22%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>Embedded form</p>
//                                             <div className="flex items-end text-xs">
//                                                 13
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-green-500"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     12%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
//                                             <p>New visitor</p>
//                                             <div className="flex items-end text-xs">
//                                                 45
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-green-500"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     41%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full">
//                                 <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
//                                     <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
//                                         Project Paid
//                                     </p>
//                                     <div className="flex items-end my-6 space-x-2">
//                                         <p className="text-5xl font-bold text-black dark:text-white">23</p>
//                                         <span className="flex items-center text-xl font-bold text-green-500">
//                                             <svg
//                                                 width="20"
//                                                 fill="currentColor"
//                                                 height="20"
//                                                 className="h-3"
//                                                 viewBox="0 0 1792 1792"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                             </svg>
//                                             12%
//                                         </span>
//                                     </div>
//                                     <div className="dark:text-white">
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>User paid</p>
//                                             <div className="flex items-end text-xs">
//                                                 21
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-green-500"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     20%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>Income</p>
//                                             <div className="flex items-end text-xs">
//                                                 10
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-green-500"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     2%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
//                                             <p>Royal tees</p>
//                                             <div className="flex items-end text-xs">
//                                                 434
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-red-500 transform rotate-180"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     12%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full">
//                                 <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
//                                     <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
//                                         New features
//                                     </p>
//                                     <div className="flex items-end my-6 space-x-2">
//                                         <p className="text-5xl font-bold text-black dark:text-white">12</p>
//                                         <span className="flex items-center text-xl font-bold text-red-500">
//                                             <svg
//                                                 width="20"
//                                                 fill="currentColor"
//                                                 height="20"
//                                                 className="h-3 transform rotate-180"
//                                                 viewBox="0 0 1792 1792"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                             </svg>
//                                             2%
//                                         </span>
//                                     </div>
//                                     <div className="dark:text-white">
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>Down</p>
//                                             <div className="flex items-end text-xs">
//                                                 34
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-red-500 transform rotate-180"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     22%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>Up</p>
//                                             <div className="flex items-end text-xs">
//                                                 13
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-green-500"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     12%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
//                                             <p>No developed</p>
//                                             <div className="flex items-end text-xs">
//                                                 45
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-red-500 transform rotate-180"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     41%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="w-full">
//                                 <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
//                                     <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
//                                         Sign in
//                                     </p>
//                                     <div className="flex items-end my-6 space-x-2">
//                                         <p className="text-5xl font-bold text-black dark:text-white">16</p>
//                                         <span className="flex items-center text-xl font-bold text-red-500">
//                                             <svg
//                                                 width="20"
//                                                 fill="currentColor"
//                                                 height="20"
//                                                 className="h-3 transform rotate-180"
//                                                 viewBox="0 0 1792 1792"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                             </svg>
//                                             14%
//                                         </span>
//                                     </div>
//                                     <div className="dark:text-white">
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>Amercia</p>
//                                             <div className="flex items-end text-xs">
//                                                 43
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-red-500 transform rotate-180"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     12%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>Europe</p>
//                                             <div className="flex items-end text-xs">
//                                                 133
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-green-500"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     19%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
//                                             <p>Asia</p>
//                                             <div className="flex items-end text-xs">
//                                                 23
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-red-500 transform rotate-180"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     4%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full">
//                                 <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
//                                     <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
//                                         Sales
//                                     </p>
//                                     <div className="flex items-end my-6 space-x-2">
//                                         <p className="text-5xl font-bold text-black dark:text-white">9</p>
//                                         <span className="flex items-center text-xl font-bold text-green-500">
//                                             <svg
//                                                 width="20"
//                                                 fill="currentColor"
//                                                 height="20"
//                                                 className="h-3"
//                                                 viewBox="0 0 1792 1792"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                             </svg>
//                                             34%
//                                         </span>
//                                     </div>
//                                     <div className="dark:text-white">
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>Templates</p>
//                                             <div className="flex items-end text-xs">
//                                                 345
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-red-500 transform rotate-180"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     12%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>Components</p>
//                                             <div className="flex items-end text-xs">
//                                                 139
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-green-500"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     10%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
//                                             <p>Icons</p>
//                                             <div className="flex items-end text-xs">
//                                                 421
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-red-500 transform rotate-180"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     4%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full">
//                                 <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
//                                     <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
//                                         Maintenance
//                                     </p>
//                                     <div className="flex items-end my-6 space-x-2">
//                                         <p className="text-5xl font-bold text-black dark:text-white">15</p>
//                                         <span className="flex items-center text-xl font-bold text-green-500">
//                                             <svg
//                                                 width="20"
//                                                 fill="currentColor"
//                                                 height="20"
//                                                 className="h-3"
//                                                 viewBox="0 0 1792 1792"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                             </svg>
//                                             34%
//                                         </span>
//                                     </div>
//                                     <div className="dark:text-white">
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>Cloud</p>
//                                             <div className="flex items-end text-xs">
//                                                 123
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-red-500 transform rotate-180"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     22%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
//                                             <p>Infra</p>
//                                             <div className="flex items-end text-xs">
//                                                 134
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-green-500"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     9%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="flex items-center justify-between space-x-12 text-sm md:space-x-24">
//                                             <p>Office</p>
//                                             <div className="flex items-end text-xs">
//                                                 23
//                                                 <span className="flex items-center">
//                                                     <svg
//                                                         width="20"
//                                                         fill="currentColor"
//                                                         height="20"
//                                                         className="h-3 text-green-500"
//                                                         viewBox="0 0 1792 1792"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z" />
//                                                     </svg>
//                                                     41%
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };
// export default KpiProject;
// `.trim(),
//   '/templates/dashboardPages/index.tsx': 
//     `import React from 'react';
// import SectionDesc from '../../../site/section/SectionDesc';

// const DashboardPages = () => {
//     const dashboardSections = [
//         {
//             title: 'Projects',
//             items: 1,
//             img: 'images/sections/dashboard.png',
//             link: '/templates/dashboard',
//         },
//         {
//             title: 'Datas',
//             isNew: true,
//             items: 1,
//             img: 'images/sections/datadashboard.png',
//             link: '/templates/datadashboard',
//         },
//     ];

//     return (
//         <SectionDesc
//             isTemplate={true}
//             hasCommingSoon={true}
//             id="dashboard"
//             items={dashboardSections}
//             title="Dashboards"
//         />
//     );
// };

// export default DashboardPages;
// `.trim(),
//   '/templates/dashboardPages/projectDashboard/SimpleProjectDashboard.tsx': 
//     `import React from 'react';
// import Avatar from '../../../components/elements/avatars/Avatar';
// import CalendarCardMonth from '../../../components/elements/data/CalendarCardMonth';
// import GoogleTask from '../../../components/elements/data/GoogleTask';
// import LessonsList from '../../../components/elements/data/LessonsList';
// import MessagesList from '../../../components/elements/data/MessagesList';
// import SlackTask from '../../../components/elements/data/SlackTask';
// import TasksList from '../../../components/elements/data/TasksList';

// const SimpleProjectDashboard = () => {
//     return (
//         <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
//             <div className="flex items-start justify-between">
//                 <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
//                     <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
//                         <div className="flex items-center justify-center pt-6">
//                             <svg
//                                 width="35"
//                                 height="30"
//                                 viewBox="0 0 256 366"
//                                 version="1.1"
//                                 preserveAspectRatio="xMidYMid"
//                             >
//                                 <defs>
//                                     <linearGradient
//                                         x1="12.5189534%"
//                                         y1="85.2128611%"
//                                         x2="88.2282959%"
//                                         y2="10.0225497%"
//                                         id="linearGradient-1"
//                                     >
//                                         <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%" />
//                                         <stop stopColor="#FF0057" offset="86.1354%" />
//                                     </linearGradient>
//                                 </defs>
//                                 <g>
//                                     <path
//                                         d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
//                                         fill="#001B38"
//                                     />
//                                     <circle
//                                         fill="url(#linearGradient-1)"
//                                         transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
//                                         cx="147.013244"
//                                         cy="147.014675"
//                                         r="78.9933938"
//                                     />
//                                     <circle
//                                         fill="url(#linearGradient-1)"
//                                         opacity="0.5"
//                                         transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
//                                         cx="147.013244"
//                                         cy="147.014675"
//                                         r="78.9933938"
//                                     />
//                                 </g>
//                             </svg>
//                         </div>

//                         <nav className="mt-6">
//                             <div>
//                                 <a
//                                     className="flex items-center justify-start w-full p-4 my-2 font-thin text-blue-500 uppercase transition-colors duration-200 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             viewBox="0 0 2048 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
//                                         </svg>
//                                     </span>
//                                     <span className="mx-4 text-sm font-normal">Dashboard</span>
//                                 </a>
//                                 <a
//                                     className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             className="m-auto"
//                                             viewBox="0 0 2048 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z" />
//                                         </svg>
//                                     </span>
//                                     <span className="mx-4 text-sm font-normal">Projects</span>
//                                 </a>
//                                 <a
//                                     className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             className="m-auto"
//                                             viewBox="0 0 2048 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z" />
//                                         </svg>
//                                     </span>
//                                     <span className="mx-4 text-sm font-normal">My tasks</span>
//                                 </a>
//                                 <a
//                                     className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             className="m-auto"
//                                             viewBox="0 0 2048 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z" />
//                                         </svg>
//                                     </span>
//                                     <span className="mx-4 text-sm font-normal">Calendar</span>
//                                 </a>
//                                 <a
//                                     className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             className="m-auto"
//                                             fill="currentColor"
//                                             viewBox="0 0 2048 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" />
//                                         </svg>
//                                     </span>
//                                     <span className="mx-4 text-sm font-normal">Time manage</span>
//                                 </a>
//                                 <a
//                                     className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             height="20"
//                                             fill="currentColor"
//                                             className="m-auto"
//                                             viewBox="0 0 2048 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
//                                         </svg>
//                                     </span>
//                                     <span className="mx-4 text-sm font-normal">Reports</span>
//                                 </a>
//                                 <a
//                                     className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500"
//                                     href="#"
//                                 >
//                                     <span className="text-left">
//                                         <svg
//                                             width="20"
//                                             fill="currentColor"
//                                             height="20"
//                                             className="w-5 h-5"
//                                             viewBox="0 0 1792 1792"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z" />
//                                         </svg>
//                                     </span>
//                                     <span className="mx-4 text-sm font-normal">Settings</span>
//                                 </a>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>

//                 <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
//                     <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
//                         <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
//                             <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
//                                 <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
//                                     <div className="relative flex items-center w-full h-full lg:w-64 group">
//                                         <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
//                                             <svg
//                                                 fill="none"
//                                                 className="relative w-5 h-5"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 stroke="currentColor"
//                                                 viewBox="0 0 24 24"
//                                             >
//                                                 <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                                             </svg>
//                                         </div>
//                                         <svg
//                                             className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 20 20"
//                                         >
//                                             <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
//                                         </svg>
//                                         <input
//                                             type="text"
//                                             className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
//                                             placeholder="Search"
//                                         />

//                                         <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
//                                             +
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
//                                     <Avatar size="small" />
//                                 </div>
//                             </div>
//                         </div>
//                     </header>
//                     <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
//                         <div className="flex flex-col flex-wrap sm:flex-row ">
//                             <div className="w-full sm:w-1/2 xl:w-1/3">
//                                 <div className="mb-4">
//                                     <GoogleTask />
//                                 </div>
//                                 <div className="mb-4">
//                                     <SlackTask />
//                                 </div>
//                             </div>

//                             <div className="w-full sm:w-1/2 xl:w-1/3">
//                                 <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">
//                                     <TasksList />
//                                 </div>
//                                 <div className="mb-4 sm:ml-4 xl:mr-4">
//                                     <LessonsList />
//                                 </div>
//                             </div>
//                             <div className="w-full sm:w-1/2 xl:w-1/3">
//                                 <div className="mb-4">
//                                     <CalendarCardMonth />
//                                 </div>
//                                 <div className="mb-4">
//                                     <MessagesList />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };
// export default SimpleProjectDashboard;
// `.trim(),
//   '/templates/errorsPages/error404/Background404.tsx': 
//     `import React from 'react';

// const Background404 = () => {
//     return (
//         <div className="relative h-screen overflow-hidden bg-indigo-900">
//             <img src="/images/landscape/8.svg" className="absolute object-cover w-full h-full" />
//             <div className="absolute inset-0 bg-black opacity-25"></div>

//             <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
//                 <div className="relative z-10 flex flex-col items-center w-full font-mono">
//                     <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
//                         You're alone here
//                     </h1>

//                     <p className="font-extrabold text-white text-8xl my-44 animate-bounce">404</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Background404;
// `.trim(),
//   '/templates/errorsPages/error404/Pictures404.tsx': 
//     `import React from 'react';

// const Pictures404 = () => {
//     return (
//         <main className="relative h-screen overflow-hidden bg-white">
//             <header className="absolute top-0 left-0 right-0 z-20">
//                 <nav className="container px-6 py-4 mx-auto md:px-12">
//                     <div className="items-center justify-between md:flex">
//                         <div className="flex items-center justify-between">
//                             <div className="md:hidden">
//                                 <button className="text-gray-800 focus:outline-none">
//                                     <svg
//                                         className="w-12 h-12"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M4 6H20M4 12H20M4 18H20"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="hidden space-x-4 md:flex md:items-center md:justify-end">
//                             <a
//                                 href="#"
//                                 className="px-3 py-2 text-gray-400 uppercase transition duration-200 ease-in hover:text-gray-700 focus:outline-none"
//                             >
//                                 Shop
//                             </a>
//                             <a
//                                 href="#"
//                                 className="px-3 py-2 text-gray-400 uppercase transition duration-200 ease-in hover:text-gray-700 focus:outline-none"
//                             >
//                                 Contact
//                             </a>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//             <div className="container z-10 flex items-center justify-between h-screen px-6 pt-32 mx-auto md:pt-0">
//                 <div className="container relative flex flex-col-reverse items-center justify-between px-6 mx-auto lg:flex-row">
//                     <div className="w-full mb-16 text-center md:mb-8 lg:text-left">
//                         <h1 className="mt-12 font-sans text-5xl font-light text-center text-gray-700 lg:text-left lg:text-8xl md:mt-0">
//                             Sorry, this page isn't available
//                         </h1>
//                         <button className="px-2 py-2 mt-16 text-lg font-light transition duration-200 ease-in bg-yellow-300 border-2 border-gray-700 w-36 hover:bg-yellow-400 focus:outline-none">
//                             Go back home
//                         </button>
//                     </div>

//                     <div className="relative block w-full max-w-md mx-auto md:mt-0 lg:max-w-2xl">
//                         <img src="/images/illustrations/1.svg" />
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };
// export default Pictures404;
// `.trim(),
//   '/templates/errorsPages/error404/Simple404.tsx': 
//     `import React from 'react';

// const Simple404 = () => {
//     return (
//         <main className="relative h-screen overflow-hidden bg-white">
//             <header className="absolute top-0 left-0 right-0 z-20">
//                 <nav className="container px-6 py-4 mx-auto md:px-12">
//                     <div className="items-center justify-between md:flex">
//                         <div className="flex items-center justify-between">
//                             <div className="md:hidden">
//                                 <button className="text-gray-800 focus:outline-none">
//                                     <svg
//                                         className="w-12 h-12"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M4 6H20M4 12H20M4 18H20"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="hidden space-x-4 md:flex md:items-center md:justify-end">
//                             <button className="px-6 py-2 text-white uppercase transition duration-200 ease-in bg-blue-400 border border-blue-400 w-36 hover:bg-blue-500 focus:outline-none">
//                                 Login
//                             </button>
//                             <button className="px-6 py-2 uppercase transition duration-200 ease-in border border-blue-400 w-36 hover:bg-blue-400 hover:text-white focus:outline-none">
//                                 Register
//                             </button>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//             <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12">
//                 <div className="container relative flex flex-col items-center justify-between px-6 mx-auto">
//                     <div className="flex flex-col items-center justify-center w-full mb-16 space-x-12 md:flex-row md:mb-8">
//                         <h1 className="text-6xl font-thin text-center text-gray-800">GOT LOST ?</h1>
//                         <button className="w-32 px-3 py-2 text-2xl font-light uppercase transition duration-200 ease-in border-b border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none">
//                             Help Me
//                         </button>
//                     </div>

//                     <div className="relative block w-full mx-auto mt-6 md:mt-0">
//                         <svg
//                             className="max-w-2xl m-auto"
//                             viewBox="0 0 1440 1024"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <rect width="1440" height="1024" fill="white" />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M694.758 533.139C670.668 535.918 652.182 535.585 639.301 532.14C626.419 528.695 616.261 521.367 608.824 510.157C600.718 493.011 596.222 483.185 595.335 480.679C590.988 468.398 590.506 456.326 591.338 448.204C592.424 437.596 598.253 423.774 608.824 406.736C610.33 394.89 612.828 384.398 616.319 375.26C619.809 366.122 626.804 352.965 637.302 335.79L638.801 279.333C643.231 266.41 647.394 257.251 651.292 251.854C655.189 246.458 659.686 243.627 664.781 243.361C669.081 242.953 673.078 243.952 676.772 246.359C680.466 248.765 687.461 254.927 697.756 264.845C706.258 250.007 715.917 238.682 726.734 230.87C737.55 223.059 751.872 217.063 769.7 212.884L772.199 207.888L772.5 178.5L764.205 106.965H753.213L770.2 81.9844C771.716 76.48 773.215 72.483 774.697 69.9935C776.178 67.504 778.946 64.673 783 61.5004C783.074 60.5805 786.407 60.0805 793 60.0004C799.593 59.9203 809.979 60.2537 824.159 61.0004C830.212 62.3907 834.375 64.2227 836.649 66.4962C838.922 68.7697 840.921 73.5994 842.644 80.9851L867 107L851.637 107.964L850.138 155.428C848.001 163.568 846.003 169.064 844.143 171.916C842.283 174.767 839.286 176.932 835.15 178.411L810.669 179.909L807.671 208.887L809.67 212.884C822.173 216.458 830.667 219.289 835.15 221.378C845.917 226.393 855.656 233.655 863.128 246.359C868.36 255.252 873.774 267.538 881.115 280.333C887.578 291.597 899.402 311.416 916.587 339.787L933.574 354.776L942.068 371.763L962.552 387.251L972.045 356.275C952.726 326.964 943.067 308.311 943.067 300.317C943.067 296.976 945.085 293.827 947.064 291.824C949.819 289.035 953.603 287.321 960.054 287.827C964.354 288.164 968.518 290.829 972.544 295.821L1030 450.203C1024.28 468.944 1019.29 482.933 1015.01 492.171C1010.74 501.408 1004.41 510.568 996.026 519.65C983.947 526.425 973.788 530.422 965.55 531.64C957.311 532.859 943.821 531.693 925.081 528.143C918.518 525.139 914.188 522.308 912.091 519.65C904.316 509.794 901.064 497.293 897.102 490.672C891.537 481.372 888.207 472.712 887.11 464.692L861.13 380.256L748.717 376.759L738.225 462.194C732.49 485.413 726.328 502.4 719.739 513.155C713.15 523.909 704.823 530.571 694.758 533.139Z"
//                                 fill="white"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M702.5 551.544C700.465 551.177 698.965 550.996 698 551C694.295 551.016 691.271 550.825 689.5 548C687.037 544.071 687.703 539.405 691.5 534L702 530.5H707L743.5 532L755 530.5L795.5 529C799.833 531 801.333 534.833 800 540.5C798.667 546.167 795 549.667 789 551L777 551.544L696 922.955H644C652.902 864.607 660.068 820.725 665.5 791.309C670.932 761.894 683.265 681.972 702.5 551.544ZM829.5 551.544C829.421 550.364 826.254 550.183 820 551C814.667 548.333 812.5 544.167 813.5 538.5C814.5 532.833 817 529.833 821 529.5L828.5 530.5H851.5L874.5 532L900 529.5C908 530.167 912 533.833 912 540.5C912 544.289 910.723 546.257 909 548C908.128 548.883 906.461 549.883 904 551L896 551.544L916.5 923.455H862.5C855.225 856.574 850.559 809.689 848.5 782.8C846.048 750.774 832.176 591.586 829.5 551.544Z"
//                                 fill="white"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M702.5 551.044H777L696 922.454H644C652.902 864.106 660.068 820.224 665.5 790.809C670.932 761.393 683.265 681.472 702.5 551.044ZM829.5 551.044H896L916.5 922.955H862.5C855.225 856.074 850.559 809.189 848.5 782.299C846.048 750.274 832.176 591.086 829.5 551.044Z"
//                                 stroke="#263E4B"
//                                 strokeWidth="1.5"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M749 219.678L692.627 219.943C664.502 220.075 641.378 242.152 639.945 270.241L639 288.754C639.881 279.234 641.047 272.56 642.5 268.732C644.806 262.655 647.469 259.16 650.5 255.217C655.082 249.255 660.272 244.225 664.5 243.204C674.167 240.868 685 248.376 697 265.729C699.01 261.841 700.677 258.838 702 256.719C704.642 252.487 707.455 247.918 712.5 243.204C722.5 233.86 734.667 226.018 749 219.678Z"
//                                 fill="#fa9b60"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M703 529.52C708.143 531.396 717.81 532.231 732 532.023C739.727 531.91 753.636 529.603 765.5 529.019C772.116 528.694 782.116 528.694 795.5 529.019L807 498.486H818L821.5 529.019C833.201 529.751 841.534 530.252 846.5 530.521C857.179 531.1 866.062 531.522 873 531.522C884.778 531.522 893.444 530.688 899 529.019L873.5 386.362L755 390.867C753.451 412.59 747.785 436.45 738 462.446C735.915 467.986 735.581 474.989 733.5 481.967C730.328 492.601 726.835 502.885 723 509.998C719.362 516.746 712.695 523.253 703 529.52Z"
//                                 fill="#fa9b60"
//                             />
//                             <path
//                                 d="M898.21 529.352L886.761 462.573C886.691 462.164 886.965 461.776 887.373 461.706C887.782 461.636 888.169 461.91 888.239 462.319L899.632 528.769H901.25C907.601 528.769 912.75 533.923 912.75 540.282C912.75 546.64 907.601 551.795 901.25 551.795H822.354C816.724 551.795 812.16 547.225 812.16 541.588C812.16 541.117 812.192 540.645 812.257 540.178L812.856 535.88C813.396 532.012 816.39 528.986 820.182 528.362L817.32 499.236H807.519L796.528 528.419C799.594 529.129 801.766 531.994 801.517 535.231C801.495 535.51 801.456 535.788 801.399 536.062L800.484 540.436C799.101 547.054 793.271 551.795 786.517 551.795H695.048C690.833 551.795 687.416 548.374 687.416 544.154C687.416 543.356 687.541 542.562 687.787 541.803C688.454 539.739 689.286 537.073 690.283 533.805C690.404 533.409 690.823 533.186 691.219 533.307C691.615 533.428 691.838 533.848 691.717 534.244C690.718 537.519 689.884 540.192 689.214 542.265C689.016 542.875 688.916 543.513 688.916 544.154C688.916 547.545 691.661 550.293 695.048 550.293H786.517C792.561 550.293 797.778 546.051 799.016 540.128L799.931 535.754C799.975 535.543 800.005 535.33 800.021 535.116C800.232 532.38 798.192 529.991 795.463 529.77C789.259 529.648 784.869 529.586 782.298 529.583C775.337 529.575 755.707 530.715 751.6 531.265C742.277 532.514 737.34 532.694 729.276 532.422C729.014 532.413 729.014 532.413 728.751 532.404C725.87 532.307 724.492 532.273 722.654 532.273C715.984 532.273 711.002 532.105 707.695 531.769C703.815 531.373 702.058 530.82 702.257 529.414L703.743 529.626C703.758 529.517 703.728 529.435 703.708 529.399C703.813 529.48 704.029 529.58 704.347 529.68C705.083 529.911 706.256 530.112 707.847 530.275C711.092 530.605 716.031 530.771 722.654 530.771C724.514 530.771 725.905 530.805 728.802 530.904C729.064 530.913 729.064 530.913 729.326 530.921C737.312 531.191 742.168 531.014 751.401 529.777C755.579 529.217 775.275 528.073 782.3 528.081C784.812 528.084 789.04 528.143 794.985 528.258L806.298 498.221C806.408 497.928 806.688 497.735 807 497.735H818H824.5C824.914 497.735 825.25 498.071 825.25 498.486C825.25 498.9 824.914 499.236 824.5 499.236H818.828L821.697 528.445C825.009 528.992 831.626 529.27 841.5 529.27C845.212 529.27 863.352 530.284 868.57 530.775C874.516 531.334 884.405 530.861 898.21 529.352ZM899.028 530.271L899.083 530.767C884.813 532.348 874.605 532.851 868.43 532.27C863.255 531.783 845.16 530.771 841.5 530.771C830.942 530.771 824.079 530.457 820.855 529.819L820.861 529.786C817.508 530.134 814.81 532.728 814.342 536.087L813.743 540.386C813.687 540.784 813.66 541.186 813.66 541.588C813.66 546.396 817.552 550.293 822.354 550.293H901.25C906.773 550.293 911.25 545.811 911.25 540.282C911.25 534.753 906.773 530.271 901.25 530.271H899.028Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M811.713 179.884L808.802 210.648C832.503 218.712 847.657 225.715 854.324 231.718C862.968 239.502 885.127 284.488 896.483 314.012C899.912 322.929 905.228 328.577 918.128 339.03L919.213 339.909C932.168 350.407 937.463 356.075 940.705 365.084C945.711 378.993 955.727 382.335 971.185 375.169C971.56 374.995 972.006 375.158 972.18 375.535C972.354 375.911 972.191 376.357 971.815 376.531C955.601 384.048 944.617 380.383 939.294 365.593C936.176 356.929 931.015 351.405 918.27 341.076L917.185 340.197C904.085 329.582 898.638 323.796 895.083 314.552C883.826 285.287 861.713 240.391 853.32 232.834C846.802 226.965 831.594 219.96 807.759 211.879C807.43 211.768 807.22 211.444 807.253 211.097L810.206 179.884H801.5C801.086 179.884 800.75 179.547 800.75 179.133C800.75 178.718 801.086 178.382 801.5 178.382H811.021C811.027 178.382 811.032 178.382 811.038 178.382H827.694C838.014 178.382 844.001 174.181 847.126 165.692C849.638 158.87 850.25 150.985 850.25 134.129V122.648C850.25 122.49 850.25 122.361 850.25 122.069C850.258 116.487 850 113.272 848.804 108.368C848.778 108.339 848.743 108.303 848.701 108.261C848.584 108.144 848.421 107.991 848.214 107.804H776.707C776.293 107.804 775.957 107.468 775.957 107.053C775.957 106.638 776.293 106.302 776.707 106.302H848.5C848.683 106.302 848.86 106.369 848.997 106.491C849.882 107.276 850.146 107.539 850.228 107.875C851.487 112.996 851.758 116.327 851.75 122.07C851.75 122.362 851.75 122.49 851.75 122.648V134.129C851.75 151.175 851.131 159.159 848.534 166.211C845.191 175.289 838.644 179.884 827.694 179.884H811.713ZM1030.78 449.219L1032.22 449.643C1019.66 492.358 1006.31 517.257 992.03 524.385C969.545 535.605 942.05 536.468 919.669 525.479C916.712 524.027 914.39 521.998 912.033 518.881C910.353 516.659 908.696 513.985 906.05 509.344C905.358 508.13 902.72 503.454 902.331 502.768C900.674 499.845 899.243 497.356 897.716 494.763C895.626 491.211 892.659 483.368 888.785 471.183L890.214 470.727C894.053 482.804 896.995 490.579 899.009 494.001C900.54 496.602 901.975 499.097 903.636 502.027C904.026 502.716 906.663 507.389 907.353 508.6C909.968 513.188 911.599 515.819 913.229 517.975C915.452 520.915 917.597 522.789 920.33 524.131C942.276 534.907 969.281 534.059 991.361 523.041C1005.14 516.166 1018.33 491.544 1030.78 449.219Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M825 217.675L834 221.179C840.333 240.534 845.167 257.052 848.5 270.734C851.833 284.416 854 304.772 855 331.802L842.5 328.298C843.5 306.607 841.667 287.419 837 270.734C834.967 263.467 830.967 245.781 825 217.675ZM748.5 219.678L757 216.174C759 230.968 760 242.648 760 251.213C760 259.778 760 268.454 760 277.241L747 295.762C749 289.755 750 276.24 750 255.217C750 234.194 749.5 222.347 748.5 219.678Z"
//                                 fill="#fa9b60"
//                             />
//                             <path
//                                 d="M824.767 217.832L824.478 216.472L835.103 220.608L835.213 220.946C841.552 240.318 846.39 256.854 849.729 270.556C853.077 284.297 855.248 304.698 856.25 331.774L856.288 332.802L842.223 328.86L842.251 328.263C843.247 306.649 841.422 287.54 836.778 270.937C834.739 263.648 830.738 245.954 824.767 217.832ZM838.222 270.532C842.869 287.146 844.719 306.214 843.776 327.736L854.712 330.801C853.697 304.329 851.548 284.361 848.272 270.912C844.963 257.331 840.171 240.943 833.898 221.751L826.523 218.879C832.327 246.179 836.229 263.404 838.222 270.532ZM748.298 219.942L748.043 219.261L758.113 215.109L758.243 216.073C760.248 230.898 761.25 242.608 761.25 251.213V277.479L745.169 300.389L746.789 295.525C748.754 289.623 749.75 276.156 749.75 255.217C749.75 234.36 749.249 222.48 748.298 219.942ZM751.25 255.217C751.25 272.575 750.572 284.831 749.199 292.036L759.75 277.004V251.213C759.75 242.873 758.796 231.546 756.886 217.239L749.91 220.115C750.817 223.874 751.25 235.476 751.25 255.217Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M810.781 219.891L812.219 219.464L880.237 449.29C884.124 469.604 898.133 479.715 922.5 479.715C946.878 479.715 966.921 463.424 982.65 430.7L984.001 431.351C968.045 464.547 947.537 481.217 922.5 481.217C897.451 481.217 882.794 470.638 878.781 449.645L810.781 219.891ZM847.759 405.769L849.241 405.998C841.523 456.053 827.015 481.217 805.5 481.217C788.093 481.217 776.511 427.001 771.751 323.327C770.853 303.778 770.353 270.399 770.25 223.183L771.75 223.18C771.853 270.375 772.353 303.737 773.249 323.258C777.948 425.582 789.512 479.715 805.5 479.715C825.985 479.715 840.143 455.157 847.759 405.769Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M922.478 381.147L974.869 375.64L977.968 405.124L925.577 410.63L922.478 381.147ZM873.885 328.292L868.962 281.447C870.937 276.381 876.142 273.405 884.576 272.519C893.01 271.633 898.72 273.461 901.706 278.005L906.629 324.851L873.885 328.292ZM1011.41 313.838L978.667 317.279L973.743 270.434C975.719 265.368 980.923 262.392 989.358 261.506C997.792 260.62 1003.5 262.448 1006.49 266.992L1011.41 313.838Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M869.771 380.309L862.162 307.912C865.35 300.069 873.692 295.439 887.187 294.02C900.681 292.602 909.803 295.397 914.553 302.405L922.162 374.803L869.771 380.309ZM1026.94 363.79L974.552 369.296L966.943 296.899C970.132 289.056 978.473 284.426 991.968 283.007C1005.46 281.589 1014.58 284.384 1019.33 291.392L1026.94 363.79Z"
//                                 fill="white"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M869.442 380.511L861.832 308.114C865.021 300.271 873.362 295.641 886.857 294.222C900.351 292.804 909.474 295.599 914.223 302.607L921.832 375.005L869.442 380.511ZM1026.61 363.992L974.223 369.499L966.614 297.101C969.802 289.258 978.144 284.628 991.638 283.209C1005.13 281.791 1014.25 284.586 1019 291.594L1026.61 363.992Z"
//                                 fill="white"
//                                 stroke="#263E4B"
//                                 strokeWidth="1.5"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M868.156 460.551L859.353 376.796C863.907 367.633 875.462 362.076 894.017 360.125C912.572 358.175 925.03 361.208 931.39 369.225L940.193 452.979L868.156 460.551ZM1044.97 441.966L972.937 449.538L964.134 365.783C968.689 356.62 980.243 351.063 998.798 349.112C1017.35 347.162 1029.81 350.195 1036.17 358.212L1044.97 441.966Z"
//                                 fill="white"
//                             />
//                             <path
//                                 d="M868.003 461.322C867.592 461.365 867.222 461.066 867.179 460.654L858.376 376.9C858.361 376.758 858.387 376.614 858.451 376.487C863.144 367.043 874.924 361.378 893.708 359.403C912.492 357.429 925.192 360.522 931.746 368.783C931.835 368.895 931.89 369.029 931.905 369.171L940.708 452.926C940.751 453.338 940.453 453.707 940.041 453.751L868.003 461.322ZM939.138 452.336L930.436 369.548C924.228 361.902 912.058 358.985 893.865 360.897C875.672 362.809 864.374 368.193 859.891 376.962L868.592 459.75L939.138 452.336ZM1045.49 441.913C1045.53 442.325 1045.23 442.695 1044.82 442.738L972.785 450.309C972.373 450.353 972.004 450.053 971.96 449.641L963.157 365.887C963.143 365.745 963.168 365.601 963.232 365.474C967.925 356.03 979.706 350.365 998.489 348.391C1017.27 346.416 1029.97 349.509 1036.53 357.77C1036.62 357.882 1036.67 358.016 1036.69 358.158L1045.49 441.913ZM1043.92 441.323L1035.22 358.535C1029.01 350.889 1016.84 347.972 998.646 349.884C980.453 351.796 969.156 357.18 964.672 365.949L973.374 448.737L1043.92 441.323Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M905.235 469.074C885.342 471.165 868.638 467.36 867.925 460.575C867.212 453.791 882.76 446.596 902.652 444.505C922.545 442.414 939.249 446.219 939.962 453.004C940.675 459.788 925.127 466.983 905.235 469.074ZM1010.02 458.061C990.124 460.152 973.419 456.347 972.706 449.562C971.993 442.778 987.541 435.583 1007.43 433.492C1027.33 431.401 1044.03 435.206 1044.74 441.991C1045.46 448.775 1029.91 455.97 1010.02 458.061Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M850.217 394.465C856.507 393.804 861.069 388.167 860.408 381.875C859.746 375.582 854.112 371.017 847.822 371.678C841.533 372.339 836.971 377.976 837.632 384.268C838.293 390.561 843.928 395.126 850.217 394.465ZM850.06 392.972C844.595 393.546 839.699 389.579 839.124 384.112C838.549 378.644 842.514 373.746 847.979 373.172C853.445 372.597 858.341 376.564 858.916 382.031C859.49 387.499 855.526 392.397 850.06 392.972Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M610.14 406.854L620.244 403.176C620.633 403.034 621.063 403.235 621.205 403.625C621.346 404.014 621.146 404.445 620.756 404.587L611.773 407.857L620.882 413.246C621.238 413.457 621.356 413.917 621.146 414.274C620.935 414.631 620.475 414.75 620.119 414.539L609.947 408.522L609.756 408.591C609.668 408.624 609.577 408.638 609.488 408.637C591.125 433.118 586.878 457.269 596.694 481.182C606.263 504.493 610.564 512.813 617.814 519.994C626.172 528.273 637.682 532.576 657.583 534.781C695.112 538.938 717.031 526.488 726.793 498.737C732.892 481.398 736.381 469.257 737.256 462.352C737.308 461.94 737.684 461.649 738.094 461.701C738.505 461.753 738.796 462.129 738.744 462.541C737.852 469.582 734.341 481.801 728.208 499.236C718.204 527.673 695.614 540.505 657.418 536.273C637.212 534.034 625.397 529.618 616.759 521.062C609.311 513.684 604.958 505.264 595.306 481.753C585.223 457.19 589.671 432.351 608.595 407.328C610.632 381.922 619.844 358.142 636.223 336.003C652.552 313.931 669.379 297.338 686.712 286.227C698.426 255.155 715.435 234.346 737.746 223.846C748.862 218.615 757.205 215.138 762.789 213.411C766.529 212.254 769.191 211.829 770.68 212.298L773.251 165.077C773.274 164.663 773.627 164.345 774.041 164.366C774.455 164.39 774.772 164.744 774.749 165.158L772.075 214.282C772.022 215.255 770.576 215.215 770.576 214.241C770.576 213.322 768.261 213.291 763.232 214.846C757.729 216.547 749.442 220.001 738.384 225.205C716.404 235.549 699.617 256.129 688.028 286.99C687.971 287.142 687.866 287.271 687.729 287.359C670.49 298.363 653.721 314.874 637.428 336.897C621.341 358.642 612.248 381.957 610.14 406.854Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M771.5 208.165L764.475 225.953C764.07 226.981 764.573 228.142 765.601 228.548C766.005 228.708 766.451 228.731 766.87 228.615L796.873 220.291L816.729 227.364C817.77 227.734 818.913 227.191 819.284 226.151C819.506 225.529 819.406 224.837 819.017 224.303L808 209.166C805.957 210.946 801.579 211.836 794.867 211.836C788.155 211.836 780.366 210.612 771.5 208.165Z"
//                                 fill="white"
//                             />
//                             <path
//                                 d="M796.406 220.838L767.571 228.838C766.995 228.998 766.382 228.965 765.826 228.745C764.413 228.186 763.721 226.587 764.279 225.173L771.303 207.388C771.443 207.032 771.83 206.839 772.199 206.941C781.005 209.371 788.729 210.584 795.367 210.584C801.909 210.584 806.142 209.724 808.008 208.099C808.339 207.81 808.847 207.868 809.106 208.223L820.119 223.355C820.654 224.09 820.792 225.042 820.488 225.899C819.978 227.331 818.406 228.079 816.975 227.57L797.909 220.778C797.943 221.063 797.982 221.398 798.026 221.782C798.214 223.41 798.495 225.935 798.871 229.357C799.621 236.198 800.746 246.627 802.246 260.643C802.29 261.055 801.992 261.426 801.58 261.47C801.168 261.514 800.798 261.215 800.754 260.803C799.254 246.788 798.129 236.361 797.379 229.521C797.005 226.101 796.723 223.579 796.536 221.954C796.486 221.517 796.442 221.145 796.406 220.838ZM796.387 212.079C796.552 212.723 796.709 213.439 796.859 214.222C797.105 215.498 797.297 216.725 797.523 218.344L797.619 219.029C797.622 219.048 797.624 219.066 797.627 219.084L817.478 226.155C818.128 226.387 818.843 226.047 819.074 225.396C819.213 225.006 819.15 224.573 818.907 224.239L808.343 209.725C806.078 211.235 802.105 211.999 796.387 212.079ZM796.15 219.351C796.145 219.316 796.14 219.279 796.134 219.239L796.038 218.552C795.815 216.956 795.626 215.751 795.386 214.506C795.211 213.595 795.028 212.783 794.837 212.084C788.34 212.023 780.879 210.849 772.45 208.566L765.674 225.725C765.42 226.368 765.735 227.095 766.377 227.349C766.63 227.449 766.909 227.464 767.171 227.391L796.15 219.351Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M694 380.003C735.492 313.794 759.325 277.254 765.5 270.382C770.319 265.019 778.573 264.578 783.937 269.397C787.95 273.003 789.332 278.708 787.413 283.751L772.5 322.94"
//                                 fill="white"
//                             />
//                             <path
//                                 d="M694.461 380.754C735.906 314.621 759.754 278.058 765.883 271.236C770.428 266.179 778.207 265.767 783.259 270.316C787.04 273.721 788.339 279.102 786.529 283.859L771.625 323.025L773.027 323.56L787.93 284.394C789.961 279.057 788.504 273.019 784.263 269.2C778.595 264.096 769.867 264.558 764.768 270.232C758.548 277.154 734.73 313.671 693.19 379.956L694.461 380.754Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M786.682 136.615C785.515 136.27 784.279 136.085 783 136.085C775.82 136.085 770 141.912 770 149.1C770 155.207 774.202 160.331 779.869 161.734L779.281 173.844C779.124 177.073 776.437 179.598 773.204 179.552L757.774 179.336C756.784 179.322 755.801 179.174 754.851 178.898C749.019 177.198 745.668 171.093 747.367 165.26L764.325 107.053H766.333L766.341 107.042L768.693 107.053H777.5L777.502 107.096L798.419 107.196C796.004 118.304 793.835 125.727 791.912 129.465C790.54 132.134 788.796 134.517 786.682 136.615ZM857.746 107.053C859.715 115.396 856.668 119.567 848.605 119.567C840.543 119.567 828.45 115.396 812.325 107.053H857.746Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M672.687 397.476L740.579 336.982C750.462 328.176 763.283 323.387 776.52 323.557L853.826 324.552C864.386 324.688 873.017 333.016 873.53 343.565C874.016 353.548 866.316 362.035 856.332 362.521C856.105 362.532 855.878 362.539 855.651 362.541L790.201 363.257C786.197 363.301 782.986 366.583 783.03 370.587C783.03 370.589 783.03 370.592 783.03 370.595C783.079 374.649 786.32 377.94 790.373 378.051L857.931 379.903C867.136 380.155 874.482 387.665 874.53 396.874C874.578 405.948 867.26 413.344 858.186 413.392C858.157 413.392 858.128 413.392 858.099 413.392H793.701C789.741 413.392 786.53 416.603 786.53 420.564C786.53 420.592 786.53 420.621 786.53 420.65C786.582 425.005 789.36 428.86 793.474 430.288L834.71 444.604C841.846 447.081 845.622 454.874 843.145 462.009C843.035 462.326 842.913 462.639 842.78 462.947C839.479 470.591 830.877 474.437 822.978 471.802L755.943 449.432L719.676 473.637C701.076 486.05 675.935 481.035 663.522 462.436C662.354 460.686 661.325 458.849 660.443 456.94C657.284 450.103 656.299 440.307 657.487 427.553C658.567 415.966 663.998 405.218 672.687 397.476Z"
//                                 fill="white"
//                             />
//                             <path
//                                 d="M669.986 468.57L682.632 460.432C678.293 456.284 674.789 451.188 671.829 445.263C667.54 436.674 668.95 420.252 675.979 395.89L673.584 398.024C665.023 405.652 659.672 416.248 658.612 427.672C657.442 440.282 658.416 449.936 661.506 456.625C662.368 458.489 663.372 460.284 664.51 461.993C666.129 464.424 667.969 466.62 669.986 468.57ZM671.121 469.625C684.3 481.406 704.235 483.295 719.62 473.027L723.119 470.691C709.216 473.205 697.907 471.153 688.845 465.331C687.039 464.17 685.352 462.886 683.773 461.483L671.121 469.625ZM676.778 393.167C676.779 393.163 676.78 393.159 676.781 393.155C676.867 392.869 677.107 392.672 677.383 392.628L740.468 336.417C750.488 327.488 763.481 322.634 776.895 322.806L854.239 323.802C865.184 323.943 874.13 332.584 874.662 343.528C875.167 353.925 867.158 362.764 856.772 363.271C856.536 363.282 856.299 363.289 856.063 363.292L790.584 364.008C786.998 364.047 784.123 366.989 784.163 370.578L784.163 370.586C784.207 374.236 787.123 377.201 790.768 377.301L858.352 379.153C867.952 379.416 875.612 387.256 875.663 396.87C875.713 406.359 868.069 414.092 858.59 414.143L858.5 414.143H794.076C790.534 414.143 787.662 417.018 787.662 420.564C787.662 420.602 787.662 420.602 787.663 420.641C787.711 424.679 790.284 428.253 794.096 429.577L835.35 443.898C842.865 446.507 846.845 454.722 844.239 462.246C844.122 462.584 843.993 462.917 843.851 463.245C840.395 471.248 831.398 475.275 823.135 472.518L756.436 450.26L720.452 474.276C701.501 486.924 675.896 481.798 663.262 462.826C662.081 461.052 661.039 459.19 660.145 457.255C656.925 450.287 655.926 440.383 657.119 427.533C658.214 415.73 663.742 404.783 672.586 396.902L676.778 393.167ZM678.093 394.005C670.587 419.29 668.975 436.191 673.171 444.591C677.317 452.893 682.539 459.495 689.655 464.067C698.919 470.019 710.646 471.889 725.342 468.72C725.547 468.676 725.75 468.72 725.913 468.827L756.215 448.603L823.61 471.093C831.134 473.604 839.327 469.937 842.474 462.649C842.601 462.355 842.717 462.057 842.822 461.754C845.157 455.014 841.591 447.654 834.858 445.317L793.605 430.996C789.196 429.465 786.219 425.33 786.163 420.659C786.162 420.611 786.162 420.611 786.162 420.564C786.162 416.188 789.705 412.641 794.076 412.641H858.5L858.583 412.641C867.233 412.595 874.208 405.538 874.163 396.878C874.116 388.074 867.102 380.895 858.311 380.654L790.727 378.802C786.276 378.68 782.716 375.061 782.663 370.604L782.663 370.595C782.614 366.176 786.154 362.555 790.567 362.506L856.046 361.79C856.264 361.788 856.482 361.781 856.699 361.771C866.258 361.305 873.629 353.17 873.164 343.601C872.67 333.449 864.372 325.434 854.22 325.303L776.875 324.308C763.836 324.14 751.206 328.859 741.465 337.538L678.093 394.005Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M1011.08 342.03L1011.09 344.065C1011.14 354.446 1019.56 362.836 1029.95 362.836H1044.17C1032.42 363.74 1024.75 367.578 1021.17 374.349C1015.54 385.013 1019.62 398.224 1030.29 403.857C1033.43 405.517 1036.93 406.384 1040.48 406.384H1046.67L1044.98 407.214C1033.09 413.053 1028.17 427.43 1034.01 439.327C1034.36 440.045 1034.75 440.744 1035.17 441.423C1040.86 449.341 1051.89 451.151 1059.8 445.466C1060.33 445.087 1060.84 444.678 1061.32 444.242L1072.36 434.297C1078.46 428.805 1081.32 420.58 1079.96 412.489C1079.87 411.9 1079.77 411.367 1079.67 410.889C1079.1 407.971 1077.1 403.633 1073.67 397.875C1076.01 393.203 1076.67 387.53 1075.67 380.856C1074.67 374.182 1071.84 368.342 1067.17 363.337C1069.45 357.51 1069.78 351.003 1068.17 343.815C1067.54 340.969 1066.66 338.543 1065.53 336.538C1063.47 332.86 1059.75 330.413 1055.55 329.973L1027.64 327.042C1019.4 326.177 1012.02 332.155 1011.16 340.394C1011.1 340.937 1011.08 341.483 1011.08 342.03Z"
//                                 fill="white"
//                             />
//                             <path
//                                 d="M1046.88 405.132L1073.47 396.754C1075.61 392.285 1076.22 386.861 1075.26 380.466C1074.28 373.961 1071.53 368.274 1066.99 363.388L1066.99 363.586L1043.94 363.134C1032.77 364.104 1025.54 367.807 1022.16 374.199C1016.73 384.491 1020.65 397.246 1030.94 402.688C1033.97 404.293 1037.35 405.132 1040.78 405.132H1046.88ZM1047.28 406.582L1045.62 407.394C1034.12 413.041 1029.36 426.958 1035 438.478C1035.35 439.179 1035.72 439.862 1036.11 440.484C1041.56 448.073 1052.12 449.804 1059.7 444.349C1060.2 443.988 1060.68 443.599 1061.14 443.186L1072.17 433.25C1078.09 427.921 1080.87 419.933 1079.54 412.077C1079.45 411.509 1079.35 410.994 1079.26 410.534C1078.73 407.806 1076.86 403.704 1073.66 398.269L1047.28 406.582ZM1044.5 361.643L1066.98 362.084C1069.03 356.526 1069.3 350.329 1067.77 343.478C1067.15 340.703 1066.29 338.348 1065.21 336.412C1063.26 332.943 1059.76 330.634 1055.8 330.219L1027.89 327.288C1020.06 326.466 1013.05 332.152 1012.23 339.988C1012.18 340.504 1012.15 341.023 1012.15 341.542L1012.16 343.561C1012.21 353.529 1020.29 361.584 1030.25 361.584H1044.5L1044.5 361.643ZM1020.84 373.497C1023.51 368.442 1028.34 364.978 1035.3 363.086H1030.25C1019.47 363.086 1010.71 354.362 1010.66 343.568L1010.65 341.549C1010.65 340.975 1010.68 340.402 1010.74 339.831C1011.65 331.17 1019.4 324.886 1028.05 325.794L1055.96 328.725C1060.4 329.191 1064.33 331.783 1066.52 335.677C1067.68 337.748 1068.58 340.24 1069.23 343.15C1070.83 350.299 1070.54 356.81 1068.37 362.669C1072.95 367.708 1075.74 373.572 1076.74 380.244C1077.74 386.888 1077.11 392.591 1074.85 397.339C1078.19 402.992 1080.15 407.28 1080.74 410.243C1080.83 410.718 1080.93 411.246 1081.02 411.827C1082.43 420.19 1079.47 428.693 1073.17 434.366L1062.15 444.302C1061.65 444.752 1061.12 445.175 1060.58 445.568C1052.32 451.507 1040.82 449.623 1034.86 441.319C1034.42 440.613 1034.02 439.885 1033.66 439.139C1027.84 427.257 1032.41 412.98 1043.84 406.634H1040.78C1037.1 406.634 1033.48 405.735 1030.23 404.015C1019.22 398.186 1015.01 384.522 1020.84 373.497ZM1030.23 331.285C1030.64 331.279 1030.98 331.611 1030.99 332.025C1030.99 332.44 1030.66 332.781 1030.25 332.787C1024.72 332.865 1022.27 336.172 1022.74 343.099C1023.22 350.056 1025.68 353.178 1030.19 352.863C1030.61 352.834 1030.96 353.146 1030.99 353.56C1031.02 353.973 1030.71 354.332 1030.3 354.361C1024.81 354.745 1021.77 350.892 1021.25 343.201C1020.72 335.479 1023.76 331.377 1030.23 331.285ZM1037.4 374.102C1037.81 374.067 1038.17 374.374 1038.21 374.787C1038.24 375.2 1037.94 375.563 1037.52 375.598C1032.01 376.062 1029.8 379.532 1030.75 386.408C1031.71 393.315 1034.39 396.258 1038.87 395.629C1039.28 395.572 1039.66 395.858 1039.71 396.268C1039.77 396.679 1039.48 397.059 1039.07 397.116C1033.63 397.882 1030.33 394.25 1029.27 386.615C1028.2 378.948 1030.95 374.644 1037.4 374.102ZM1047.91 417.887C1048.32 417.802 1048.71 418.062 1048.8 418.468C1048.88 418.874 1048.62 419.272 1048.22 419.357C1042.81 420.488 1041.03 424.203 1042.82 430.911C1044.61 437.65 1047.62 440.245 1051.99 439.075C1052.39 438.968 1052.8 439.206 1052.91 439.606C1053.02 440.007 1052.78 440.418 1052.38 440.525C1047.07 441.949 1043.35 438.747 1041.37 431.298C1039.37 423.818 1041.58 419.211 1047.91 417.887Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M398.221 552.239L422.5 805.797H435L423.095 549.797C422.783 543.079 417.084 537.887 410.366 538.199C410.16 538.209 409.955 538.223 409.75 538.243C402.705 538.93 397.546 545.192 398.221 552.239Z"
//                                 fill="white"
//                             />
//                             <path
//                                 d="M397.474 551.838L421.818 806.075H435.786L423.844 549.29C423.513 542.158 417.463 536.646 410.331 536.978C410.113 536.988 409.895 537.003 409.677 537.025C402.22 537.752 396.76 544.38 397.474 551.838ZM423.182 804.575L398.968 551.695C398.332 545.06 403.189 539.164 409.823 538.518C410.015 538.499 410.208 538.485 410.401 538.476C416.705 538.183 422.053 543.055 422.346 549.359L434.214 804.575H423.182Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M416.373 813.117C416.216 813.5 415.778 813.684 415.395 813.527C415.011 813.37 414.828 812.933 414.985 812.549C424.88 788.355 430.64 771.45 432.261 761.875C432.33 761.467 432.717 761.191 433.125 761.261C433.534 761.33 433.809 761.717 433.74 762.125C432.095 771.842 426.308 788.825 416.373 813.117ZM431.711 728.464C431.843 728.857 431.631 729.282 431.239 729.414C430.846 729.545 430.421 729.334 430.289 728.941C425.885 715.808 416.988 704.604 403.573 695.319C403.233 695.083 403.148 694.616 403.383 694.276C403.619 693.935 404.086 693.85 404.427 694.086C418.097 703.548 427.2 715.01 431.711 728.464ZM420.951 781.645C420.78 782.022 420.336 782.189 419.959 782.018C419.581 781.847 419.414 781.403 419.585 781.026C420.923 778.073 421.819 775.669 422.272 773.821C428.497 748.44 424.638 729.892 413.617 716.708C413.351 716.391 413.393 715.918 413.711 715.652C414.029 715.386 414.502 715.428 414.768 715.746C426.103 729.306 430.064 748.345 423.728 774.179C423.25 776.13 422.324 778.615 420.951 781.645ZM403.272 539.843C403.22 539.432 403.51 539.056 403.921 539.004C404.332 538.952 404.708 539.242 404.76 539.653C411.259 590.601 435.649 617.544 478.035 620.707C478.448 620.738 478.758 621.098 478.727 621.511C478.696 621.924 478.336 622.234 477.923 622.203C434.775 618.983 409.856 591.456 403.272 539.843ZM414.253 539.071C414.214 538.659 414.517 538.293 414.929 538.253C415.342 538.214 415.708 538.517 415.747 538.929C420.007 583.791 440.287 607.18 476.723 609.861C477.136 609.891 477.446 610.251 477.416 610.664C477.386 611.077 477.026 611.387 476.613 611.357C439.391 608.618 418.578 584.615 414.253 539.071Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M813.5 141.091C811.567 141.091 810 139.298 810 137.086C810 134.875 811.567 133.082 813.5 133.082C815.433 133.082 817 134.875 817 137.086C817 139.298 815.433 141.091 813.5 141.091ZM844.5 141.091C842.567 141.091 841 139.298 841 137.086C841 134.875 842.567 133.082 844.5 133.082C846.433 133.082 848 134.875 848 137.086C848 139.298 846.433 141.091 844.5 141.091ZM806.572 133.567C806.305 133.884 805.831 133.923 805.515 133.655C805.199 133.387 805.16 132.913 805.428 132.597C805.547 132.456 805.762 132.221 806.061 131.923C806.556 131.431 807.114 130.94 807.725 130.48C809.504 129.139 811.364 128.327 813.241 128.327C815.957 128.327 817.444 128.976 818.945 130.625C819.182 130.885 819.422 131.17 819.737 131.559C819.83 131.673 820.402 132.387 820.582 132.608C820.843 132.929 820.795 133.402 820.474 133.664C820.153 133.926 819.68 133.878 819.419 133.556C819.235 133.331 818.661 132.615 818.572 132.505C818.273 132.136 818.05 131.872 817.836 131.636C816.621 130.302 815.537 129.828 813.241 129.828C811.747 129.828 810.169 130.517 808.627 131.68C808.074 132.096 807.567 132.543 807.118 132.989C806.851 133.255 806.665 133.458 806.572 133.567ZM838.59 133.546C838.334 133.872 837.862 133.928 837.536 133.672C837.211 133.416 837.154 132.944 837.41 132.618C837.521 132.477 837.721 132.241 838 131.943C838.461 131.45 838.98 130.958 839.548 130.496C841.211 129.147 842.955 128.327 844.724 128.327C847.273 128.327 848.675 128.987 850.078 130.646C850.298 130.906 850.521 131.191 850.814 131.58C850.9 131.695 851.432 132.409 851.598 132.629C851.848 132.96 851.783 133.431 851.452 133.681C851.122 133.931 850.652 133.866 850.402 133.535C850.232 133.309 849.699 132.594 849.616 132.484C849.339 132.115 849.131 131.851 848.933 131.616C847.814 130.292 846.829 129.828 844.724 129.828C843.363 129.828 841.914 130.51 840.492 131.663C839.981 132.078 839.512 132.524 839.095 132.969C838.848 133.234 838.675 133.437 838.59 133.546ZM833.326 147.348H839.229L832.627 130.351C832.476 129.964 832.668 129.529 833.054 129.379C833.44 129.229 833.874 129.42 834.025 129.806L841.025 147.826C841.216 148.319 840.853 148.849 840.326 148.849H833.326C832.911 148.849 832.576 148.513 832.576 148.099C832.576 147.684 832.911 147.348 833.326 147.348ZM829.68 157.77C829.315 157.966 828.86 157.829 828.665 157.463C828.469 157.097 828.606 156.642 828.971 156.447C831.688 154.99 834.305 154.99 836.717 156.468C837.071 156.685 837.182 157.147 836.965 157.501C836.749 157.854 836.287 157.965 835.934 157.749C833.991 156.558 831.941 156.558 829.68 157.77Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M278 597.553L318 721.189L515.5 694.66V550L320.391 589.065L318 606.062L305.204 592.106L278 597.553Z"
//                                 fill="white"
//                             />
//                             <path
//                                 d="M305.757 591.141C305.58 590.948 305.314 590.861 305.057 590.912L277.853 596.359C277.413 596.447 277.148 596.899 277.286 597.326L317.286 720.962C317.398 721.307 317.741 721.523 318.1 721.475L515.6 694.945C515.972 694.895 516.25 694.578 516.25 694.202V549.542C516.25 549.069 515.817 548.714 515.353 548.807L320.244 587.872C319.931 587.934 319.692 588.187 319.648 588.503L317.479 603.926L305.757 591.141ZM304.937 592.466L317.447 606.111C317.876 606.578 318.654 606.336 318.743 605.709L321.059 589.238L514.75 550.457V693.546L318.521 719.905L278.973 597.665L304.937 592.466Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M234 941.714H300.5C326.694 873.466 350.743 830.856 372.648 813.883C373.942 812.881 366.226 801.765 349.5 780.536C360.342 789.118 367.842 794.624 372 797.054C373.958 798.198 374.125 781.847 372.5 748L390.404 802.257C397.221 798.831 402.419 796.429 406 795.052C456.333 775.697 497.667 824.585 530 941.714H1206"
//                                 fill="white"
//                             />
//                             <path
//                                 d="M371.622 797.463C372.335 797.88 372.979 797.493 373.33 796.742C373.558 796.255 373.733 795.516 373.876 794.497C374.147 792.557 374.302 789.535 374.344 785.418C374.418 778.132 374.138 767.392 373.503 753.194L389.692 802.254C389.836 802.688 390.332 802.894 390.741 802.689C397.537 799.272 402.716 796.88 406.269 795.513C456.011 776.386 497.048 824.924 529.277 941.675C529.367 942 529.663 942.225 530 942.225H1206C1206.41 942.225 1206.75 941.889 1206.75 941.475C1206.75 941.061 1206.41 940.725 1206 940.725H530.571C498.155 823.614 456.577 774.561 405.731 794.113C402.26 795.448 397.301 797.729 390.844 800.959L373.212 747.526C372.939 746.697 371.709 746.925 371.751 747.797C372.563 764.707 372.927 777.244 372.844 785.402C372.802 789.461 372.65 792.428 372.39 794.289C372.283 795.053 372.159 795.617 372.031 795.962C367.846 793.457 360.482 788.034 349.965 779.709C349.268 779.157 348.36 780.063 348.911 780.761C357.265 791.365 363.368 799.441 367.215 804.983C369.128 807.74 370.48 809.865 371.266 811.348C371.644 812.06 371.884 812.613 371.987 812.991C372.007 813.065 372.02 813.127 372.028 813.176C350.076 830.301 326.09 872.801 299.985 940.725H234C233.586 940.725 233.25 941.061 233.25 941.475C233.25 941.889 233.586 942.225 234 942.225H300.5C300.811 942.225 301.089 942.034 301.2 941.744C327.347 873.619 351.344 831.1 373.107 814.237C374.337 813.285 372.831 810.443 368.447 804.128C365.195 799.443 360.353 792.975 353.92 784.72C362.189 791.151 368.084 795.396 371.622 797.463Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M821.226 59.2505H792.821C780.06 59.2505 769.699 69.5437 769.572 82.2896L752.709 106.625C752.364 107.123 752.72 107.804 753.325 107.804H867.325C867.987 107.804 868.325 107.009 867.865 106.532L843.474 81.2199C843.311 69.0586 833.413 59.2505 821.226 59.2505ZM770.938 82.9542C771.025 82.8285 771.071 82.6792 771.071 82.5262C771.071 70.5007 780.809 60.7521 792.821 60.7521H821.226C832.686 60.7521 841.976 70.0525 841.976 81.5251C841.976 81.7196 842.052 81.9064 842.187 82.0464L865.56 106.302H754.759L770.938 82.9542Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M842.419 82.0259L770 83.027L765 90.5353H850.5L842.419 82.0259Z"
//                                 fill="#fa9b60"
//                             />
//                             <path
//                                 d="M842.909 80.7745L770.49 81.7757C770.243 81.7791 770.013 81.9041 769.876 82.1099L764.876 89.6182C764.544 90.1172 764.901 90.7855 765.5 90.7855H851C851.659 90.7855 851.998 89.9956 851.544 89.5174L843.463 81.008C843.319 80.8563 843.118 80.7717 842.909 80.7745ZM849.252 89.2839H766.902L770.905 83.2717L842.602 82.2806L849.252 89.2839Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M639.5 921.954L631 962.999H664H792C784.618 947.405 775.952 936.56 766 930.463C756.048 924.367 737.882 921.53 711.5 921.954L725 851.876L644 852.377L643 904.935L639.5 921.954Z"
//                                 fill="white"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M857 915.947V963.5L877 962.999H1005C997.618 947.405 988.952 936.56 979 930.463C969.048 924.367 950.882 921.53 924.5 921.954L937 853L849.5 852.377L856 904.935L857 915.947Z"
//                                 fill="white"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M643 905.436C650.656 906.675 656.656 911.514 661 919.952C665.344 928.389 667.678 939.735 668 953.989L633 953.489"
//                                 fill="#fa9b60"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M857 905.436C870.656 908.678 879.656 914.517 884 922.955C888.344 931.392 890.344 941.737 890 953.989L857 953.489V905.436Z"
//                                 fill="#fa9b60"
//                             />
//                             <path
//                                 d="M667.872 851.98L673.44 813.583H661.5V812.083H673.657L676.633 791.559H666V790.059H724V791.559H712.374L708.571 812.083H719.5V813.583H708.293L701.217 851.774L725.909 851.621L714.849 909.034L718.669 898.56C718.829 898.12 719.029 897.695 719.266 897.291C721.435 893.596 726.188 892.359 729.883 894.527C730.505 894.892 731.066 895.353 731.544 895.893C734.052 898.726 733.79 903.055 730.958 905.563L713.181 921.306C716.527 920.474 724.742 918.362 736.811 915.221C737.212 915.117 737.622 915.357 737.726 915.758C737.83 916.159 737.59 916.568 737.189 916.673C728.397 918.961 722.057 920.601 717.872 921.666C740.958 921.771 757.119 924.643 766.392 930.324C776.483 936.506 785.239 947.463 792.678 963.179L793.185 964.249H630.079L638.765 922.303L642.252 905.352L643.264 852.132L667.872 851.98ZM669.389 851.97L683.894 851.881L689.756 813.583H674.956L669.389 851.97ZM685.413 851.871L699.69 851.783L706.768 813.583H691.273L685.413 851.871ZM712.136 923.195C712.071 923.207 712.005 923.211 711.938 923.206L695.022 923.704C694.608 923.716 694.263 923.391 694.25 922.977C694.238 922.563 694.564 922.217 694.978 922.205L710.085 921.76L691.796 905.563C688.964 903.055 688.701 898.726 691.209 895.893C691.688 895.353 692.248 894.892 692.87 894.527C696.565 892.359 701.319 893.596 703.487 897.291C703.724 897.695 703.924 898.12 704.085 898.56L711.377 918.556L711.611 917.914L724.091 853.132L644.736 853.623L643.761 904.873C659.331 909.501 668.256 925.523 668.739 952.738H785.371C779.466 943.098 772.876 936.055 765.608 931.603C755.888 925.648 738.048 922.827 712.136 923.195ZM713.061 918.315L712.807 919.633L729.963 904.44C732.175 902.481 732.38 899.1 730.421 896.888C730.048 896.466 729.61 896.106 729.124 895.821C726.143 894.072 722.309 895.07 720.56 898.05C720.369 898.376 720.208 898.719 720.078 899.074L713.061 918.315ZM786.272 954.238H633.684L631.921 962.749H790.81C789.346 959.726 787.834 956.889 786.272 954.238ZM633.994 952.738H667.239C666.764 926.266 658.233 910.881 643.571 906.383L640.234 922.606L633.994 952.738ZM702.676 899.074C702.546 898.719 702.385 898.376 702.194 898.05C700.444 895.07 696.61 894.072 693.63 895.821C693.144 896.106 692.706 896.466 692.332 896.888C690.373 899.1 690.578 902.481 692.791 904.44L710.281 919.93L702.676 899.074ZM710.848 791.559H694.644L691.503 812.083H707.046L710.848 791.559ZM693.127 791.559H678.149L675.173 812.083H689.985L693.127 791.559Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                                 d="M636.5 317.786H620L638 289.255"
//                                 fill="#fa9b60"
//                             />
//                             <path
//                                 d="M867.076 851.727L861.545 813.583H852V812.083H861.327L858.351 791.559H849V790.059H909.5V791.559H896.579L898.646 812.083H910V813.583H898.797L902.659 851.931L937.89 852.132L926.484 918.261L933.669 898.56C933.829 898.12 934.029 897.695 934.266 897.291C936.435 893.596 941.188 892.359 944.883 894.527C945.505 894.892 946.066 895.353 946.544 895.893C949.053 898.726 948.79 903.055 945.958 905.563L928.977 920.601C933.207 919.526 940.317 917.692 949.811 915.221C950.212 915.117 950.622 915.357 950.726 915.758C950.83 916.159 950.59 916.568 950.189 916.673C941.402 918.96 935.064 920.599 930.879 921.664C954.228 921.731 970.553 924.603 979.892 930.324C989.983 936.506 998.739 947.463 1006.18 963.179L1006.68 964.249H856.257L856.25 963.506L855.757 905.533L848.644 851.622L867.076 851.727ZM868.592 851.736L883.654 851.822L880.265 813.583H863.06L868.592 851.736ZM885.16 851.831L901.15 851.922L897.29 813.583H881.771L885.16 851.831ZM857.154 904.701C878.876 909.078 890.088 925.167 890.735 952.738H998.871C992.966 943.098 986.376 936.055 979.108 931.603C969.423 925.669 951.678 922.848 925.917 923.191C925.817 923.213 925.716 923.214 925.619 923.195C925.441 923.197 925.263 923.2 925.084 923.203C925.036 923.209 924.987 923.21 924.938 923.206L908.022 923.704C907.608 923.716 907.263 923.391 907.25 922.977C907.238 922.563 907.564 922.217 907.978 922.205L923.085 921.76L904.796 905.563C901.964 903.055 901.701 898.726 904.209 895.893C904.688 895.353 905.248 894.892 905.871 894.527C909.566 892.359 914.319 893.596 916.487 897.291C916.724 897.695 916.924 898.12 917.085 898.56L924.74 919.551L936.111 853.622L850.356 853.132L857.154 904.701ZM857.257 906.254L857.657 952.738H889.235C888.6 926.013 877.958 910.593 857.257 906.254ZM999.772 954.238H857.67L857.744 962.749H1004.31C1002.85 959.726 1001.33 956.889 999.772 954.238ZM915.676 899.074C915.546 898.719 915.385 898.376 915.194 898.05C913.444 895.07 909.61 894.072 906.63 895.821C906.144 896.106 905.706 896.466 905.332 896.888C903.373 899.1 903.578 902.481 905.791 904.44L923.281 919.93L915.676 899.074ZM935.078 899.074L927.472 919.93L944.963 904.44C947.175 902.481 947.38 899.1 945.421 896.888C945.048 896.466 944.61 896.106 944.124 895.821C941.143 894.072 937.309 895.07 935.56 898.05C935.369 898.376 935.208 898.719 935.078 899.074ZM895.072 791.559H879.82L881.638 812.083H897.139L895.072 791.559ZM878.314 791.559H859.867L862.843 812.083H880.132L878.314 791.559Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M379.158 651.096L380.634 660.414L372.06 661.772L373.167 668.761L362.145 670.506L361.038 663.518L330.787 668.309L329.311 658.991L355.348 627.593L366.371 625.847L370.585 652.454L379.158 651.096ZM341.191 657.109L359.562 654.199L357.096 638.628L341.191 657.109ZM409.823 663.583C392.799 666.28 383.473 659.713 381.211 645.429C378.958 631.206 385.808 622.14 402.832 619.444C419.794 616.758 429.182 623.315 431.425 637.476C433.677 651.699 426.785 660.897 409.823 663.583ZM408.357 654.326C418.032 652.794 421.674 647.253 420.402 639.222C419.14 631.252 413.973 627.169 404.298 628.701C394.623 630.234 390.961 635.652 392.233 643.683C393.515 651.775 398.681 655.859 408.357 654.326ZM485.71 634.22L487.185 643.538L478.612 644.896L479.719 651.884L468.697 653.63L467.59 646.642L437.339 651.433L435.863 642.115L461.9 610.717L472.922 608.971L477.136 635.577L485.71 634.22ZM447.743 640.233L466.114 637.323L463.648 621.752L447.743 640.233Z"
//                                 fill="#60a5fa"
//                             />
//                             <path
//                                 d="M380.26 649.745L381.971 660.545L373.398 661.903L374.505 668.892L362.001 670.872L360.894 663.883L330.643 668.675L328.996 658.281L355.43 626.405L367.473 624.497L371.687 651.103L380.26 649.745ZM370.44 652.819L366.226 626.213L356.224 627.798L330.584 658.716L331.89 666.959L362.141 662.167L363.247 669.156L372.788 667.645L371.682 660.656L380.255 659.298L379.013 651.462L370.44 652.819ZM339.768 657.677L358.062 636.42L360.899 654.331L339.768 657.677ZM359.183 653.084L357.087 639.852L343.572 655.556L359.183 653.084ZM410.419 663.832C393.305 666.543 383.322 660.038 380.949 645.054C378.587 630.139 386.072 620.923 403.194 618.211C420.251 615.509 430.292 622.01 432.645 636.866C435.008 651.791 427.47 661.131 410.419 663.832ZM410.185 662.35C426.449 659.774 433.392 651.172 431.163 637.101C428.946 623.1 419.701 617.115 403.428 619.693C387.092 622.28 380.204 630.76 382.431 644.819C384.668 658.949 393.856 664.936 410.185 662.35ZM408.953 654.575C399.176 656.123 393.365 652.104 391.972 643.308C390.589 634.581 394.878 629.017 404.66 627.468C414.418 625.922 420.246 629.923 421.622 638.612C423.009 647.369 418.708 653.03 408.953 654.575ZM408.718 653.093C417.669 651.676 421.395 646.771 420.14 638.847C418.897 630.995 413.852 627.531 404.894 628.95C395.913 630.372 392.204 635.184 393.453 643.074C394.714 651.035 399.745 654.515 408.718 653.093ZM486.812 632.869L488.523 643.669L479.95 645.027L481.056 652.016L468.552 653.996L467.445 647.007L437.195 651.799L435.548 641.405L461.982 609.528L474.025 607.621L478.239 634.227L486.812 632.869ZM476.992 635.943L472.778 609.337L462.776 610.921L437.136 641.84L438.441 650.082L468.692 645.291L469.799 652.28L479.34 650.769L478.233 643.78L486.807 642.422L485.565 634.585L476.992 635.943ZM446.32 640.801L464.614 619.543L467.451 637.454L446.32 640.801ZM465.735 636.208L463.639 622.976L450.124 638.68L465.735 636.208Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M637.805 288.449C637.896 288.108 637.973 287.791 638.037 287.498L638.857 270.188C640.216 241.493 663.851 218.927 692.547 218.927H749V220.428H692.547C664.652 220.428 641.676 242.365 640.355 270.259L640.117 275.292C642.768 265.113 647.88 256.007 655.462 248.187C666.89 236.399 681.042 242.274 697.608 265.29C697.851 265.626 697.775 266.095 697.438 266.338C697.102 266.58 696.634 266.504 696.392 266.167C680.291 243.799 667.11 238.328 656.538 249.233C646.588 259.495 641.003 272.011 639.747 286.317C639.712 286.715 639.64 287.173 639.53 287.693L637.249 335.841L635.751 335.77L636.591 318.036H620.5C619.909 318.036 619.55 317.384 619.866 316.885L637.805 288.449ZM636.662 316.535L637.863 291.169L621.861 316.535H636.662Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M859.16 355.654C858.746 355.638 858.423 355.289 858.439 354.875C858.455 354.461 858.803 354.138 859.217 354.153C864.742 354.365 867.365 351.19 867.254 344.249C867.141 337.276 864.846 334.029 860.326 334.108C859.912 334.115 859.57 333.785 859.563 333.37C859.555 332.956 859.885 332.614 860.299 332.606C865.797 332.51 868.629 336.516 868.754 344.225C868.878 351.964 865.624 355.901 859.16 355.654ZM857.56 408.47C857.147 408.432 856.843 408.067 856.881 407.654C856.918 407.241 857.283 406.937 857.695 406.974C863.202 407.474 865.988 404.442 866.24 397.504C866.492 390.534 864.37 387.172 859.852 387.014C859.438 386.999 859.114 386.652 859.128 386.237C859.143 385.823 859.49 385.499 859.904 385.513C865.4 385.705 868.018 389.854 867.739 397.558C867.458 405.293 864.003 409.055 857.56 408.47ZM824.775 466.912C824.396 466.746 824.223 466.303 824.39 465.923C824.556 465.544 824.999 465.371 825.378 465.537C830.475 467.771 833.872 466.306 835.93 460.972C838.001 455.603 836.914 452.29 832.659 450.657C832.272 450.509 832.079 450.074 832.228 449.687C832.377 449.3 832.811 449.107 833.197 449.255C838.297 451.213 839.678 455.424 837.329 461.512C834.967 467.636 830.663 469.493 824.775 466.912ZM770.775 267.037L772.225 267.424C769.489 277.696 763.78 283.757 755.147 285.486L754.853 284.013C762.887 282.405 768.178 276.787 770.775 267.037Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M686.776 286.945L688.776 294.454C688.882 294.854 689.293 295.093 689.693 294.986C690.094 294.879 690.332 294.467 690.225 294.067L688.225 286.559C688.118 286.158 687.707 285.92 687.307 286.027C686.907 286.133 686.669 286.545 686.776 286.945Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M687.332 287.484L693.832 288.985C694.235 289.078 694.638 288.827 694.731 288.422C694.824 288.018 694.572 287.615 694.169 287.522L687.669 286.02C687.265 285.927 686.863 286.179 686.769 286.583C686.676 286.987 686.928 287.39 687.332 287.484Z"
//                                 fill="#263E4B"
//                             />
//                             <path
//                                 d="M969.573 292.237C964.517 286.131 955.726 285.486 948.478 290.259C945.655 292.119 943.596 294.767 942.628 297.794C940.19 305.42 949.769 324.909 971.38 356.751C971.612 357.094 972.079 357.183 972.421 356.95C972.764 356.717 972.853 356.25 972.62 355.907C951.361 324.583 941.835 305.201 944.057 298.251C944.918 295.558 946.761 293.188 949.303 291.514C955.948 287.137 963.884 287.72 968.418 293.195C968.683 293.514 969.156 293.558 969.474 293.294C969.793 293.029 969.837 292.556 969.573 292.237Z"
//                                 fill="#263E4B"
//                             />
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };
// export default Simple404;
// `.trim(),
//   '/templates/errorsPages/index.tsx': 
//     `import React from 'react';
// import SectionDesc from '../../../site/section/SectionDesc';

// const ErrorPages = () => {
//     const homeSection = [
//         {
//             title: '404 Not found',
//             items: 3,
//             img: 'images/sections/404.png',
//             link: '/templates/errors404',
//         },
//     ];

//     return (
//         <SectionDesc
//             isTemplate={true}
//             withPub
//             hasCommingSoon={true}
//             id="home"
//             items={homeSection}
//             title="Errors pages"
//         />
//     );
// };

// export default ErrorPages;
// `.trim(),
//   '/templates/homePages/folio/SimpleFolioHome.tsx': 
//     `import React from 'react';

// const SimpleFolioHome = () => {
//     return (
//         <main className="relative h-screen overflow-hidden font-mono bg-white dark:bg-gray-800">
//             <div className="absolute hidden md:block -bottom-32 -left-32 w-96 h-96">
//                 <div className="absolute z-20 text-xl text-extrabold right-12 text-start top-1/4">
//                     <span className="text-7xl">🎨</span>
//                     <p>Got a project ?</p>
//                     <a href="#" className="underline">
//                         Let's talk
//                     </a>
//                 </div>

//                 <svg viewBox="0 0 200 200" className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                         fill="#FFDBB9"
//                         d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z"
//                         transform="translate(100 100)"
//                     />
//                 </svg>
//             </div>
//             <header className="z-30 flex items-center w-full h-24 sm:h-32">
//                 <div className="container flex items-center justify-between px-6 mx-auto">
//                     <div className="flex items-center text-3xl font-black text-gray-800 uppercase dark:text-white">
//                         <svg
//                             width="25"
//                             height="25"
//                             viewBox="0 0 1792 1792"
//                             fill="currentColor"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z" />
//                         </svg>
//                         <span className="mt-1 ml-3 text-xs">CHARLIE-PRO@DESIGN.COM</span>
//                     </div>
//                     <div className="flex items-center">
//                         <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
//                             <a href="#" className="flex px-6 py-2 hover:text-black">
//                                 Works
//                             </a>
//                             <a href="#" className="flex px-6 py-2 hover:text-black">
//                                 Resume
//                             </a>
//                             <a href="#" className="flex px-6 py-2 hover:text-black">
//                                 Services
//                             </a>
//                             <a href="#" className="flex px-6 py-2 hover:text-black">
//                                 Contact
//                             </a>
//                         </nav>
//                         <button className="flex flex-col ml-4 lg:hidden">
//                             <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
//                             <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
//                             <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
//                         </button>
//                     </div>
//                 </div>
//             </header>
//             <div className="relative z-20 flex items-center">
//                 <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
//                     <div className="flex flex-col">
//                         <img src="/images/person/11.webp" className="mx-auto rounded-full w-28" />
//                         <p className="my-6 text-3xl text-center dark:text-white">Hi, I'm Charlie 🤘</p>
//                         <h2 className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl dark:text-white">
//                             Building digital products, brands, and experiences.
//                         </h2>
//                         <div className="flex items-center justify-center mt-4">
//                             <a
//                                 href="#"
//                                 className="px-4 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 dark:text-white hover:bg-gray-800 hover:text-white text-md"
//                             >
//                                 CONNECT WITH ME
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };
// export default SimpleFolioHome;
// `.trim(),
//   '/templates/homePages/index.tsx': 
//     `import React from 'react';
// import SectionDesc from '../../../site/section/SectionDesc';

// const HomePage = () => {
//     const homeSection = [
//         {
//             title: 'Products',
//             items: 3,
//             img: 'images/sections/homePage2.png',
//             link: '/templates/simpleHome',
//         },
//         {
//             title: 'Get Started',
//             items: 3,
//             img: 'images/sections/homePage.png',
//             link: '/templates/getStarted',
//         },
//         {
//             title: 'Portfolio',
//             items: 1,
//             img: 'images/sections/folio.png',
//             link: '/templates/folio',
//         },
//     ];

//     return (
//         <SectionDesc isTemplate={true} hasCommingSoon={true} id="errors" items={homeSection} title="Landing pages" />
//     );
// };

// export default HomePage;
// `.trim(),
//   '/templates/homePages/simplePage/Natural2Home.tsx': 
//     `import React from 'react';

// const Natural2Home = () => {
//     return (
//         <div className="relative h-screen overflow-hidden bg-indigo-900">
//             <img src="/images/landscape/6.svg" className="absolute object-cover w-full h-full" />
//             <div className="absolute inset-0 bg-black opacity-25"></div>
//             <header className="absolute top-0 left-0 right-0 z-20">
//                 <nav className="container px-6 py-4 mx-auto md:px-12">
//                     <div className="items-center justify-center md:flex">
//                         <div className="flex items-center justify-between">
//                             <div className="md:hidden">
//                                 <button className="text-white focus:outline-none">
//                                     <svg
//                                         className="w-12 h-12"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M4 6H20M4 12H20M4 18H20"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="items-center hidden md:flex">
//                             <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
//                                 Ticket
//                             </a>
//                             <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">Info</a>
//                             <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>
//                 </nav>
//             </header>

//             <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
//                 <div className="relative z-10 flex flex-col items-center w-full">
//                     <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
//                         Life-changing
//                     </h1>

//                     <a
//                         href="#"
//                         className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900"
//                     >
//                         Start Now
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Natural2Home;
// `.trim(),
//   '/templates/homePages/simplePage/Natural3Home.tsx': 
//     `import React from 'react';

// const Natural3Home = () => {
//     return (
//         <div className="relative h-screen overflow-hidden bg-indigo-900">
//             <img src="/images/landscape/7.svg" className="absolute object-cover w-full h-full" />
//             <div className="absolute inset-0 bg-black opacity-25"></div>
//             <header className="absolute top-0 left-0 right-0 z-20">
//                 <nav className="container px-6 py-4 mx-auto md:px-12">
//                     <div className="items-center justify-center md:flex">
//                         <div className="flex items-center justify-between">
//                             <div className="md:hidden">
//                                 <button className="text-white focus:outline-none">
//                                     <svg
//                                         className="w-12 h-12"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M4 6H20M4 12H20M4 18H20"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="items-center hidden md:flex">
//                             <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
//                                 Ticket
//                             </a>
//                             <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">Info</a>
//                             <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>
//                 </nav>
//             </header>

//             <div className="container relative z-10 flex items-center w-4/5 py-16 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
//                 <div className="relative z-10 flex flex-col items-center justify-between w-full">
//                     <p className="flex flex-col items-center text-6xl font-extrabold text-center text-white md:text-8xl">
//                         Planet need you
//                     </p>
//                     <p className="flex flex-col items-center max-w-lg mt-6 text-lg font-extrabold text-center text-white">
//                         The first European to set eyes on the great river was a Spanish explorer, called De Soto, who
//                         came across the mouth of the river in 1541; yet it was not until over a century later that the
//                         Mississippi river began to take a significant place in the history of North America.
//                     </p>

//                     <a
//                         href="#"
//                         className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900"
//                     >
//                         Plant a tree
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Natural3Home;
// `.trim(),
//   '/templates/homePages/simplePage/NaturalHome.tsx': 
//     `import React from 'react';

// const NaturalHome = () => {
//     return (
//         <div className="relative h-screen overflow-hidden bg-indigo-900">
//             <img src="/images/landscape/5.svg" className="absolute object-cover w-full h-full" />
//             <div className="absolute inset-0 bg-black opacity-25"></div>
//             <header className="absolute top-0 left-0 right-0 z-20">
//                 <nav className="container px-6 py-4 mx-auto md:px-12">
//                     <div className="items-center justify-between md:flex">
//                         <div className="flex items-center justify-between">
//                             <a href="#" className="text-white">
//                                 <svg
//                                     className="w-8 mr-2 fill-current"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     data-name="Capa 1"
//                                     viewBox="0 0 16.16 12.57"
//                                 >
//                                     <defs />
//                                     <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z" />
//                                     <path d="M16.16 5.82H0L8.08 0l8.08 5.82z" />
//                                 </svg>
//                             </a>

//                             <div className="md:hidden">
//                                 <button className="text-white focus:outline-none">
//                                     <svg
//                                         className="w-12 h-12"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M4 6H20M4 12H20M4 18H20"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="items-center hidden md:flex">
//                             <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
//                                 About us
//                             </a>
//                             <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
//                                 Calendar
//                             </a>
//                             <a className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
//                                 Contact us
//                             </a>
//                         </div>
//                     </div>
//                 </nav>
//             </header>

//             <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
//                 <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
//                     <span className="font-bold text-yellow-400 uppercase">Himalaya</span>

//                     <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
//                         Let yourself be carried <br /> by nature
//                     </h1>

//                     <a
//                         href="#"
//                         className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100"
//                     >
//                         Discover
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default NaturalHome;
// `.trim(),
//   '/templates/homePages/simplePage/NextJSHome.tsx': 
//     `import React from 'react';
// import NextJSCta from '../../../components/pagesection/cta/NextJSCta';

// const NextJs = () => {
//     return (
//         <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
//             <header className="z-30 flex items-center w-full h-24 sm:h-32">
//                 <div className="container flex items-center justify-between px-6 mx-auto">
//                     <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
//                         <svg aria-hidden="true" focusable="false" width="100" height="100" viewBox="0 0 512 309">
//                             <path
//                                 d="M120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675H120.81V80.561zm105.22 0h10.26l45.467 63.423L328.23 80.56L391.441 0l-103.85 150.65l53.515 74.127h-10.663l-48.686-67.462l-48.888 67.462h-10.461l53.917-74.128l-50.296-70.088zm118.898 7.676V80.56h110.048v7.676h-50.699v136.54h-8.852V88.237h-50.497zM0 80.56h11.065l152.58 228.323l-63.053-84.107L9.254 91.468l-.402 133.31H0V80.56zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212c0-1.81 1.356-3.212 3.165-3.212c1.83 0 3.165 1.401 3.165 3.212c0 1.811-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29c3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853c-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828c3.875 0 6.717-2.005 6.717-4.764c0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602c0-5.54 4.521-9.227 11.303-9.227c6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657c-3.81 0-6.35 1.833-6.35 4.635c0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753c0 5.95-4.607 9.68-11.97 9.68c-6.89 0-11.52-3.558-11.864-9.12z"
//                                 fill="#000"
//                             ></path>
//                         </svg>
//                     </div>
//                     <div className="flex items-center">
//                         <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
//                             <a href="#" className="flex px-6 py-2 text-indigo-500 border-b-2 border-indigo-500">
//                                 Home
//                             </a>
//                             <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
//                                 Watch
//                             </a>
//                             <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
//                                 Product
//                             </a>
//                             <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
//                                 Contact
//                             </a>
//                             <a href="#" className="flex px-6 py-2 hover:text-indigo-500">
//                                 Carrer
//                             </a>
//                         </nav>
//                         <button className="flex flex-col ml-4 lg:hidden">
//                             <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
//                             <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
//                             <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
//                         </button>
//                     </div>
//                 </div>
//             </header>
//             <NextJSCta />
//         </main>
//     );
// };
// export default NextJs;
// `.trim(),
//   '/templates/homePages/simplePage/TailkitHome.tsx': 
//     `import React from 'react';

// const TailkitHome = () => {
//     return (
//         <div className="relative h-screen overflow-hidden bg-white">
//             <div className="h-full mx-auto max-w-7xl">
//                 <div className="relative z-10 h-full pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
//                     <div className="relative z-40 bg-white">
//                         <div className="px-4 mx-auto max-w-7xl sm:px-6">
//                             <div className="flex items-center justify-between py-6 border-gray-100 md:space-x-10">
//                                 <div className="flex items-center justify-start gap-12">
//                                     <a className="flex items-center" href="/">
//                                         <img className="w-auto h-12 sm:h-12" src="/icons/rocket.svg" alt="site" />
//                                         <span className="ml-2 text-2xl font-bold text-indigo-600">Tail-Kit</span>
//                                     </a>
//                                     <nav className="hidden space-x-10 md:flex">
//                                         <div className="relative">
//                                             <button
//                                                 type="button"
//                                                 className="inline-flex items-center text-base text-xl font-normal text-gray-800 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                                             >
//                                                 <span>Components</span>
//                                                 <svg
//                                                     className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     viewBox="0 0 20 20"
//                                                     fill="currentColor"
//                                                     aria-hidden="true"
//                                                 >
//                                                     <path
//                                                         fillRule="evenodd"
//                                                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                                                         clipRule="evenodd"
//                                                     ></path>
//                                                 </svg>
//                                             </button>
//                                         </div>
//                                     </nav>
//                                 </div>
//                                 <div className="-my-2 -mr-2 md:hidden">
//                                     <button
//                                         type="button"
//                                         className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//                                     >
//                                         <span className="sr-only">Open menu</span>
//                                         <svg
//                                             className="w-6 h-6"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M4 6h16M4 12h16M4 18h16"
//                                             ></path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <main className="h-full px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//                         <div className="flex flex-col items-start justify-between w-full h-full md:flex-row md:justify-start md:h-1/2">
//                             <div className="z-20 flex flex-col items-center justify-start w-full h-full text-left md:z-30 md:w-1/2 md:items-start md:justify-center">
//                                 <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 titleHome ">
//                                     <span className="flex w-full m-auto text-indigo-600"> Tail-kit</span>
//                                     <span className="block font-bold xl:inline">
//                                         <span className="absolute">Components</span> <br />
//                                         for Tailwind CSS 3.0
//                                     </span>
//                                 </h1>
//                                 <h2 className="mt-3 text-lg text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                                     Tail-kit gives you access to over
//                                     <span className="font-bold text-gray-700">200</span>
//                                     fully coded and responsive components and templates, based on Tailwind CSS 3.0.
//                                     It&#x27;s all free and open-source.
//                                 </h2>
//                                 <div className="w-full mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//                                     <div className="rounded-md shadow">
//                                         <a
//                                             className="flex items-center justify-center w-full px-4 px-8 py-2 py-3 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
//                                             href="/started"
//                                         >
//                                             Get started
//                                         </a>
//                                     </div>
//                                     <div className="mt-3 sm:mt-0 sm:ml-3">
//                                         <a
//                                             target="_blank"
//                                             rel="noreferrer"
//                                             href="https://github.com/Charlie85270/tail-kit"
//                                             className="flex items-center justify-center w-full px-4 px-8 py-2 py-3 text-base font-medium text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200"
//                                         >
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 width="20"
//                                                 height="20"
//                                                 fill="currentColor"
//                                                 className="ml-2"
//                                                 viewBox="0 0 1792 1792"
//                                             >
//                                                 <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
//                                             </svg>
//                                             <span className="ml-2">Github</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div className="mt-4">
//                                     Need specific or new component ?
//                                     <span className="underline cursor-pointer">Make a request</span>
//                                 </div>
//                             </div>
//                             <div className="absolute z-10 w-full transform opacity-10 md:z-50 md:opacity-70 sm:text-center lg:text-left -right-10 -top-72 md:w-1/2">
//                                 <div className="flex gap-4 gap-y-1">
//                                     <div className="col-1">
//                                         <div className="mb-4">
//                                             <div className="w-64 m-auto overflow-hidden shadow-lg rounded-2xl h-90">
//                                                 <img alt="eggs" src="/images/car/1.jpg" className="rounded-t-lg" />
//                                                 <div className="relative w-full p-4 bg-white">
//                                                     <button
//                                                         aria-label="Go to article"
//                                                         type="button"
//                                                         className="absolute w-12 h-12 text-white bg-indigo-500 rounded-full right-8 -top-6"
//                                                     >
//                                                         <svg
//                                                             width="20"
//                                                             height="20"
//                                                             fill="currentColor"
//                                                             className="w-6 h-6 mx-auto text-white"
//                                                             viewBox="0 0 1792 1792"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                         >
//                                                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
//                                                         </svg>
//                                                     </button>
//                                                     <p className="mb-2 text-xl font-medium text-gray-800">Natural</p>
//                                                     <p className="text-xs text-gray-600">
//                                                         Dare to take the lead and never let yourself be overtaken by
//                                                         events.
//                                                     </p>
//                                                     <div className="flex flex-wrap items-center mt-6 justify-starts">
//                                                         <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
//                                                             #car
//                                                         </div>
//                                                         <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
//                                                             #auto
//                                                         </div>
//                                                         <div className="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
//                                                             #sport
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
//                                                 <img
//                                                     alt="moto"
//                                                     src="/images/object/1.png"
//                                                     className="absolute w-40 h-40 mb-4 -right-16 -bottom-16"
//                                                 />
//                                                 <div className="w-4/6">
//                                                     <p className="mb-2 text-lg font-medium text-gray-800">Avg</p>
//                                                     <p className="text-xs text-gray-400">
//                                                         Detail is not an obsession, it is the very essence of
//                                                         perfection.
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
//                                                 <div className="w-full h-full text-center">
//                                                     <div className="flex flex-col justify-between h-full">
//                                                         <svg
//                                                             width="40"
//                                                             height="40"
//                                                             className="w-12 h-12 m-auto mt-4 text-indigo-500"
//                                                             fill="currentColor"
//                                                             viewBox="0 0 1792 1792"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                         >
//                                                             <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
//                                                         </svg>
//                                                         <p className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">
//                                                             Remove card
//                                                         </p>
//                                                         <p className="px-6 py-2 text-xs text-gray-600 dark:text-gray-400">
//                                                             Are you sure you want to delete this card ?
//                                                         </p>
//                                                         <div className="flex items-center justify-between w-full gap-4 mt-8">
//                                                             <button
//                                                                 type="button"
//                                                                 className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//                                                             >
//                                                                 cancel
//                                                             </button>
//                                                             <button
//                                                                 type="button"
//                                                                 className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//                                                             >
//                                                                 Delete
//                                                             </button>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="flex flex-wrap items-center justify-center">
//                                                 <div className="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-yellow-500 rounded-lg shadow-lg">
//                                                     <svg
//                                                         className="absolute bottom-0 left-0 mb-8"
//                                                         viewBox="0 0 375 283"
//                                                         fill="none"
//                                                     >
//                                                         <rect
//                                                             x="159.52"
//                                                             y="175"
//                                                             width="152"
//                                                             height="152"
//                                                             rx="8"
//                                                             transform="rotate(-45 159.52 175)"
//                                                             fill="#f3c06b"
//                                                         ></rect>
//                                                         <rect
//                                                             y="107.48"
//                                                             width="152"
//                                                             height="152"
//                                                             rx="8"
//                                                             transform="rotate(-45 0 107.48)"
//                                                             fill="#f3c06b"
//                                                         ></rect>
//                                                     </svg>
//                                                     <div className="relative flex items-center justify-center px-10 pt-10">
//                                                         <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
//                                                         <img
//                                                             className="relative w-40"
//                                                             src="/images/object/5.png"
//                                                             alt="shopping"
//                                                         />
//                                                     </div>
//                                                     <div className="relative px-6 pb-6 mt-6 text-white">
//                                                         <span className="block -mb-1 opacity-75">Indoor</span>
//                                                         <div className="flex justify-between">
//                                                             <span className="block text-xl font-semibold">
//                                                                 Peace Lily
//                                                             </span>
//                                                             <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-yellow-500 bg-white rounded-full">
//                                                                 \$36.00
//                                                             </span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
//                                                 <p className="text-3xl font-bold text-black dark:text-white">
//                                                     Essential
//                                                 </p>
//                                                 <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
//                                                     For the basics
//                                                 </p>
//                                                 <p className="text-3xl font-bold text-black dark:text-white">\$99</p>
//                                                 <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
//                                                     Per agent per month
//                                                 </p>
//                                                 <button
//                                                     type="button"
//                                                     className="w-56 px-3 py-3 m-auto text-sm text-black bg-white border border-black rounded-lg shadow hover:bg-black hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 "
//                                                 >
//                                                     Request demo
//                                                 </button>
//                                                 <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
//                                                     <li className="flex items-center mb-3">
//                                                         <svg
//                                                             className="mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="16"
//                                                             height="16"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         All illimited link
//                                                     </li>
//                                                     <li className="flex items-center mb-3">
//                                                         <svg
//                                                             className="mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="16"
//                                                             height="16"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Own analitycs plateform link
//                                                     </li>
//                                                     <li className="flex items-center mb-3">
//                                                         <svg
//                                                             className="mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="16"
//                                                             height="16"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         24/24 support link
//                                                     </li>
//                                                 </ul>
//                                                 <span className="block w-56 h-1 my-2 bg-gray-100 rounded-lg"></span>
//                                                 <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
//                                                     <li className="flex items-center mb-3 space-x-2">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="16"
//                                                             height="16"
//                                                             fill="#10b981"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
//                                                         </svg>
//                                                         <div>
//                                                             All illimited link
//                                                             <a href="#" className="font-semibold text-red-500">
//                                                                 free plan
//                                                             </a>
//                                                         </div>
//                                                     </li>
//                                                     <li className="flex items-center mb-3 space-x-2">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="16"
//                                                             height="16"
//                                                             fill="#10b981"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
//                                                         </svg>
//                                                         <div>Best ranking</div>
//                                                     </li>
//                                                     <li className="flex items-center mb-3 space-x-2">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="16"
//                                                             height="16"
//                                                             fill="#10b981"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
//                                                         </svg>
//                                                         <div>Chocolate and meel</div>
//                                                     </li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-1">
//                                         <div className="flex gap-4 mb-4">
//                                             <button
//                                                 type="button"
//                                                 className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//                                             >
//                                                 Annuler
//                                             </button>
//                                             <button
//                                                 type="button"
//                                                 className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-500 rounded-lg shadow-md hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//                                             >
//                                                 Confirmer
//                                             </button>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="w-64 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
//                                                 <img
//                                                     alt="profil"
//                                                     src="/images/landscape/1.jpg"
//                                                     className="w-full mb-4 rounded-t-lg h-28"
//                                                 />
//                                                 <div className="flex flex-col items-center justify-center p-4 -mt-16">
//                                                     <a href="#" className="relative block">
//                                                         <img
//                                                             alt="profil"
//                                                             src="/images/person/1.jpg"
//                                                             className="w-16 h-16 mx-auto rounded-full "
//                                                         />
//                                                     </a>
//                                                     <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">
//                                                         Charlie
//                                                     </p>
//                                                     <p className="flex items-center text-xs text-gray-400">
//                                                         <svg
//                                                             width="10"
//                                                             height="10"
//                                                             fill="currentColor"
//                                                             className="w-4 h-4 mr-2"
//                                                             viewBox="0 0 1792 1792"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                         >
//                                                             <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
//                                                         </svg>
//                                                         Nantes
//                                                     </p>
//                                                     <p className="text-xs text-gray-400">FullStack dev</p>
//                                                     <div className="flex items-center justify-between w-full gap-4 mt-8">
//                                                         <button
//                                                             type="button"
//                                                             className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//                                                         >
//                                                             See profile
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="flex items-center justify-between w-64 p-4 bg-white shadow-lg rounded-2xl">
//                                                 <div className="w-2/6">
//                                                     <img
//                                                         src="/images/person/2.jpeg"
//                                                         alt="person"
//                                                         className="w-12 h-12 rounded-full"
//                                                     />
//                                                 </div>
//                                                 <div className="w-3/6">
//                                                     <p className="text-sm text-gray-500">
//                                                         You have
//                                                         <span className="font-bold text-indigo-500">2</span>
//                                                         new messages
//                                                     </p>
//                                                 </div>
//                                                 <div className="w-1/6 text-right">
//                                                     <svg
//                                                         width="20"
//                                                         height="20"
//                                                         fill="currentColor"
//                                                         viewBox="0 0 1792 1792"
//                                                         className="w-6 h-6 text-indigo-500"
//                                                         xmlns="http://www.w3.org/2000/svg"
//                                                     >
//                                                         <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="relative w-64 p-4 m-auto bg-gray-900 shadow-lg rounded-2xl">
//                                                 <div className="w-full h-full text-center">
//                                                     <div className="flex flex-col justify-between h-full">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="40"
//                                                             height="40"
//                                                             fill="currentColor"
//                                                             className="w-20 h-20 m-auto mt-4 text-white dark:text-white"
//                                                             viewBox="0 0 2048 1792"
//                                                         >
//                                                             <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z"></path>
//                                                         </svg>
//                                                         <p className="absolute text-sm italic text-white top-2 right-2">
//                                                             by express
//                                                         </p>
//                                                         <p className="mt-4 text-lg text-white">Package delivered</p>
//                                                         <p className="px-6 py-2 text-xs font-thin text-gray-50">
//                                                             Your package was delivered in 1 day and 4 hours by our
//                                                             postal partner
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="w-64">
//                                                 <div className="relative mt-1">
//                                                     <button
//                                                         type="button"
//                                                         className="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded-md shadow-lg cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                                     >
//                                                         <span className="flex items-center">
//                                                             <img
//                                                                 src="/images/person/2.jpeg"
//                                                                 alt="person"
//                                                                 className="flex-shrink-0 w-6 h-6 rounded-full"
//                                                             />
//                                                             <span className="block ml-3 truncate">John Jackson</span>
//                                                         </span>
//                                                         <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
//                                                             <svg
//                                                                 className="w-5 h-5 text-gray-400"
//                                                                 xmlns="http://www.w3.org/2000/svg"
//                                                                 viewBox="0 0 20 20"
//                                                                 fill="currentColor"
//                                                                 aria-hidden="true"
//                                                             >
//                                                                 <path
//                                                                     fillRule="evenodd"
//                                                                     d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//                                                                     clipRule="evenodd"
//                                                                 ></path>
//                                                             </svg>
//                                                         </span>
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
//                                                 <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
//                                                     Entreprise
//                                                 </p>
//                                                 <p className="text-3xl font-bold text-gray-900 dark:text-white">
//                                                     \$199
//                                                     <span className="text-sm text-gray-300">/ month</span>
//                                                 </p>
//                                                 <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
//                                                     For most businesses that want to optimize web queries.
//                                                 </p>
//                                                 <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="#10b981"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         All illimited link
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="#10b981"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Own analitycs plateform link
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="#10b981"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         24/24 support link
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="#10b981"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Unlimited user
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="#10b981"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Best ranking
//                                                     </li>
//                                                     <li className="flex items-center mb-3 opacity-50">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             className="w-6 h-6 mr-2"
//                                                             fill="red"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Prenium svg
//                                                     </li>
//                                                     <li className="flex items-center mb-3 opacity-50">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             className="w-6 h-6 mr-2"
//                                                             fill="red"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         My wife
//                                                     </li>
//                                                 </ul>
//                                                 <button
//                                                     type="button"
//                                                     className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//                                                 >
//                                                     Choose plan
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-1">
//                                         <div className="mb-4">
//                                             <div className="w-64 p-4 bg-indigo-500 shadow-lg rounded-2xl dark:bg-gray-800">
//                                                 <div className="flex items-center justify-between text-white">
//                                                     <p className="mb-4 text-4xl font-medium">Pro</p>
//                                                     <p className="flex flex-col text-3xl font-bold">
//                                                         \$99
//                                                         <span className="text-sm font-thin text-right">month</span>
//                                                     </p>
//                                                 </div>
//                                                 <p className="mt-4 text-white text-md">Plan include :</p>
//                                                 <ul className="w-full mt-6 mb-6 text-sm text-white">
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         All illimited link
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Own analitycs plateform link
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         24/24 support link
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Unlimited user
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Best ranking
//                                                     </li>
//                                                     <li className="flex items-center mb-3 opacity-50">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             className="w-6 h-6 mr-2"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Prenium svg
//                                                     </li>
//                                                     <li className="flex items-center mb-3 opacity-50">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             className="w-6 h-6 mr-2"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         My wife
//                                                     </li>
//                                                 </ul>
//                                                 <button
//                                                     type="button"
//                                                     className="w-full px-3 py-3 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
//                                                 >
//                                                     Choose plan
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="p-4 bg-white shadow-lg rounded-2xl w-36 dark:bg-gray-800">
//                                                 <div className="flex items-center">
//                                                     <span className="relative w-4 h-4 p-2 bg-green-500 rounded-full">
//                                                         <svg
//                                                             width="20"
//                                                             fill="currentColor"
//                                                             height="20"
//                                                             className="absolute h-2 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                                                             viewBox="0 0 1792 1792"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                         >
//                                                             <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
//                                                         </svg>
//                                                     </span>
//                                                     <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
//                                                         Sales
//                                                     </p>
//                                                 </div>
//                                                 <div className="flex flex-col justify-start">
//                                                     <p className="my-4 text-4xl font-bold text-left text-gray-800 dark:text-white">
//                                                         36K
//                                                     </p>
//                                                     <div className="relative h-2 bg-gray-200 rounded w-28">
//                                                         <div className="absolute top-0 left-0 w-2/3 h-2 bg-green-500 rounded"></div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="w-full max-w-xl px-5 py-4 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
//                                                 <div className="w-full pt-1 mx-auto -mt-16 text-center">
//                                                     <a href="#" className="relative block">
//                                                         <img
//                                                             alt="profil"
//                                                             src="/images/person/1.jpg"
//                                                             className="w-20 h-20 mx-auto rounded-full "
//                                                         />
//                                                     </a>
//                                                 </div>
//                                                 <div className="w-full">
//                                                     <div className="mb-6 text-center">
//                                                         <p className="text-xl font-medium text-gray-800 dark:text-white">
//                                                             John Jackson
//                                                         </p>
//                                                         <p className="text-xs text-gray-400">FullStack dev</p>
//                                                     </div>
//                                                     <div className="w-full p-2 mb-4 bg-pink-100 rounded-lg dark:bg-white">
//                                                         <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
//                                                             <p className="flex flex-col">
//                                                                 Art.
//                                                                 <span className="font-bold text-black dark:text-indigo-500">
//                                                                     34
//                                                                 </span>
//                                                             </p>
//                                                             <p className="flex flex-col">
//                                                                 Foll.
//                                                                 <span className="font-bold text-black dark:text-indigo-500">
//                                                                     455
//                                                                 </span>
//                                                             </p>
//                                                             <p className="flex flex-col">
//                                                                 Rat.
//                                                                 <span className="font-bold text-black dark:text-indigo-500">
//                                                                     9.3
//                                                                 </span>
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                     <button
//                                                         type="button"
//                                                         className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//                                                     >
//                                                         Add
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="p-6 bg-white rounded-lg shadow-md w-72">
//                                                 <div className="relative w-16 mx-auto mb-3 -mt-10">
//                                                     <img className="-mt-1" src="/icons/cookie.svg" alt="cookie" />
//                                                 </div>
//                                                 <span className="block w-full mb-3 leading-normal text-gray-800 sm:w-48 text-md">
//                                                     We care about your data, and we&#x27;d love to use cookies to make
//                                                     your experience better.
//                                                 </span>
//                                                 <div className="flex items-center justify-between">
//                                                     <a
//                                                         className="mr-1 text-xs text-gray-400 hover:text-gray-800"
//                                                         href="#"
//                                                     >
//                                                         Privacy Policy
//                                                     </a>
//                                                     <div className="w-1/2">
//                                                         <button
//                                                             type="button"
//                                                             className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
//                                                         >
//                                                             See more
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <div className="w-64 p-4 bg-indigo-500 shadow-lg rounded-2xl dark:bg-gray-800">
//                                                 <div className="flex items-center justify-between text-white">
//                                                     <p className="mb-4 text-4xl font-medium">Pro</p>
//                                                     <p className="flex flex-col text-3xl font-bold">
//                                                         \$99
//                                                         <span className="text-sm font-thin text-right">month</span>
//                                                     </p>
//                                                 </div>
//                                                 <p className="mt-4 text-white text-md">Plan include :</p>
//                                                 <ul className="w-full mt-6 mb-6 text-sm text-white">
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         All illimited link
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Own analitycs plateform link
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         24/24 support link
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Unlimited user
//                                                     </li>
//                                                     <li className="flex items-center mb-3 ">
//                                                         <svg
//                                                             className="w-6 h-6 mr-2"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             stroke="currentColor"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Best ranking
//                                                     </li>
//                                                     <li className="flex items-center mb-3 opacity-50">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             className="w-6 h-6 mr-2"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         Prenium svg
//                                                     </li>
//                                                     <li className="flex items-center mb-3 opacity-50">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             width="6"
//                                                             height="6"
//                                                             className="w-6 h-6 mr-2"
//                                                             fill="white"
//                                                             viewBox="0 0 1792 1792"
//                                                         >
//                                                             <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
//                                                         </svg>
//                                                         My wife
//                                                     </li>
//                                                 </ul>
//                                                 <button
//                                                     type="button"
//                                                     className="w-full px-3 py-3 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
//                                                 >
//                                                     Choose plan
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </main>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default TailkitHome;
// `.trim(),
//   '/templates/homePages/simplePage/Watch.tsx': 
//     `import React from 'react';
// import WatchCta from '../../../components/pagesection/cta/WatchCta';

// const WatchLandingPage = () => {
//     return (
//         <main className="relative h-screen overflow-hidden bg-white dark:bg-gray-800">
//             <header className="z-30 flex items-center w-full h-24 sm:h-32">
//                 <div className="container flex items-center justify-between px-6 mx-auto">
//                     <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">Watch.ME</div>
//                     <div className="flex items-center">
//                         <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
//                             <a href="#" className="flex px-6 py-2">
//                                 Home
//                             </a>
//                             <a href="#" className="flex px-6 py-2">
//                                 Watch
//                             </a>
//                             <a href="#" className="flex px-6 py-2">
//                                 Product
//                             </a>
//                             <a href="#" className="flex px-6 py-2">
//                                 Contact
//                             </a>
//                             <a href="#" className="flex px-6 py-2">
//                                 Carrer
//                             </a>
//                         </nav>
//                         <button className="flex flex-col ml-4 lg:hidden">
//                             <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
//                             <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
//                             <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
//                         </button>
//                     </div>
//                 </div>
//             </header>
//             <WatchCta />
//         </main>
//     );
// };
// export default WatchLandingPage;
// `.trim(),
// };
