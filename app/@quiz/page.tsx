import { LucideHeading } from "lucide-react";

function Quiz() {
    return(
        <section className="flex flex-col justify-center items-center mt-10">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Question No
                <span className="text-blue-600 dark:text-blue-500">#1</span></h1>
                <p className="text-2xl">Score : 0</p>
        <section className="shadow-2xl my-10 p-10 w-[90%] rounded-lg flex flex-col justify-center items-center shadow-blue-200">
            <h4 className="mb-4 text-2xl font-bold leading-none tracking-tight text-blue-900 md:text-5xl lg:text-6xl dark:text-white">What is the Channel Name ?
            </h4>
        <div className="flex justify-evenly items-center my-20 flex-wrap w-[90%]">
            <button type="button" className=" w-[33%] my-4 py-3.5 px-5 me-2 mb-2 text-lg shadow-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg  hover:bg-blue-600 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
            <button type="button" className=" w-[33%] my-4 py-3.5 px-5 me-2 mb-2 text-lg shadow-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg  hover:bg-blue-600 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
            <button type="button" className="w-[33%] my-4 py-3.5 px-5 me-2 mb-2 text-lg shadow-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg    hover:bg-blue-600 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
            <button type="button" className="w-[33%] my-4 py-3.5 px-5 me-2 mb-2 text-lg shadow-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg    hover:bg-blue-600 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
        </div>
        <button type="button" className=" w-[33%] my-4 py-3.5 px-5 me-2 mb-2 text-lg shadow-2xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg  hover:bg-blue-900 hover:text-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Next</button>
        </section>

        </section>
    )
    
}
export default Quiz;