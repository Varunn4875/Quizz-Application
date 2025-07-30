"use client"
import Button from "@/components/ui/Buttons";
import DropOptions from "@/components/ui/Dropdownzone";
import React from "react";
import useQuiz from "./store";
export default function Home() {
  const quizconfig=useQuiz(state=>state.config)
  console.log(quizconfig,"heere")
  const addNumberOfQuestion=useQuiz(state=>state.addNumberOfQuestion)

  return (
    <>
      <section className="flex flex-col justify-center items-center my-10">
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Welcome to quiz
        </h1>
      </section>

      <section className=" rounded-lg p-10 my-10 shadow-xl W-[75%]">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="number"
            id="first_name"
            defaultValue={10}
            min={0}
            max={50}
            required
            onChange={(e)=>addNumberOfQuestion(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                       dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <div className=" flex flex-col justify-center items-center">
        <DropOptions></DropOptions>
        <Button></Button>
        </div>
        
      </section>
    </>
  );
}