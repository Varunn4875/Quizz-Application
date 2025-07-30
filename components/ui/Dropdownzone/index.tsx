"use client"  //not needed in this page though
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useQuiz from "@/app/store";
import {Check,ChevronDown,Circle} from 'lucide-react'
type CategoryType={
  id:number,
  name:string
}
const Typee=['boolean','multiple']
const level=['easy','medium','hard']

// Add configType definition with 'type' property
type configType = {
  category?: CategoryType;
  level?: string;
  type?: string;
};

export default function DropOptions(){
    const[categories,setcategories]=useState<CategoryType[]>([])
    const addCategory=useQuiz(state=>state.addCategory)
    const config: configType = useQuiz(state=>state.config)
    const addLevel=useQuiz(state=>state.addLevel)
    const addType=useQuiz(state=>state.addType)

    useEffect(()=>{
      async function fetchCategory(){
        const {trivia_categories}=await(await fetch('https://opentdb.com/api_category.php')).json()
        setcategories([...trivia_categories])
      }
      fetchCategory()
    })

    return(
        <section className="flex justify-evenly items-center py-5">
<div className="px-7 py-4 mx-4">
<DropdownMenu>
  <DropdownMenuTrigger  className=" flex outline-none justify-between w-full shadow-md px-10 py-3 rounded-lg hover:bg-blue-600 hover:text-gray-100">{config.category? config.category.name : "CATEGORY"}CATEGORY<ChevronDown/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select Category</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {
      categories.map(category=>  <DropdownMenuItem key={category.name} onClick={()=>addCategory(category.id,category.name)}>{category.name}</DropdownMenuItem>

      )
    }
  </DropdownMenuContent>
</DropdownMenu>

</div>
<div className="px-7 py-4 mx-4">
<DropdownMenu>
 <DropdownMenuTrigger  className=" flex outline-none justify-between w-full shadow-md px-10 py-3 rounded-lg hover:bg-blue-600 hover:text-gray-100">{config.level? config.level :"LEVEL"} <ChevronDown/> </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select Level</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {
      level.map(e =>  <DropdownMenuItem key={e} onClick={()=>addLevel(e)}>{e}</DropdownMenuItem>)
    }
  </DropdownMenuContent>
</DropdownMenu>

</div>
<div className="px-7 py-4 mx-4">
<DropdownMenu>
  <DropdownMenuTrigger className=" flex outline-none justify-between w-full shadow-md px-10 py-3 rounded-lg hover:bg-blue-600 hover:text-gray-100">{config.type ? config.type:"TYPE"}<ChevronDown/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Select Type</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {
      Typee.map(e =>  <DropdownMenuItem key={e} onClick={()=>addType(e)}>{e}</DropdownMenuItem>)
    }
   
  </DropdownMenuContent>
</DropdownMenu>

</div>
</section>
    )
}