"use client"
import { boardList } from "@/app/data/data";
import { boardType } from "@/app/type/boardType";
import Link from "next/link";
import { useState } from "react"

export default function BoardList(){

    // data.ts에서 sample data 가져와서 출력
    // 각 게시글 마다 Link 달기

    const [board, setBoard] = useState<boardType[] | []>(boardList);

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-5xl flex-col py-15 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl text-bold">게시글 보기</h1>
                <table className="table-auto border border-gray-300 m-5">
                    <thead className="">
                        <tr className="border border-gray-300 bg-gray-200 text-xl text-center h-10">
                            <th>ID</th>
                            <th>title</th>
                            <th>writer</th>
                            <th>reg_date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            board.map(b => (
                                <tr key={b.id} 
                                    className="border border-gray-300 text-xl text-center h-10">
                                    <td className="w-20 text-base">{b.id}</td>
                                    <td className="w-200 text-base">
                                        <Link href={"/"} className="hover:underline">{b.title}</Link>
                                    </td>
                                    <td className="w-50 text-base">{b.writer}</td>
                                    <td className="w-100 text-sm">{b.reg_date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="text-center m-auto">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700">
                        <Link href={"/"}>home</Link>
                    </button>
                    <button className="bg-amber-500 text-white px-4 py-2 rounded m-2 hover:bg-amber-700">
                        <Link href={"/board/write"}>add</Link>
                    </button>

                </div>
            </main>
        </div>
    )
}