export default function Write(){
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-5xl flex-col py-15 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl text-bold mb-10">글쓰기 페이지</h1>
                <form 
                    className="flex flex-col space-y-4 mx-auto w-200 border 
                                border-gray-300 p-5 rounded">
                    <input className="p-2 border rounded"
                        type="text" 
                        name="title" 
                        placeholder="title..."
                    />
                    <input className="p-2 border rounded"
                        type="text" 
                        name="writer" 
                        placeholder="writer..."
                    />
                    <textarea className="p-2 border rounded"
                        name="contents" 
                        cols={30} 
                        rows={10}
                        placeholder="contents..."
                    ></textarea>
                    <div className="flex">
                        <button 
                            className="bg-blue-500 text-white px-4 py-2 rounded m-2 hover:bg-blue-700"
                            type="reset" 
                        >reset
                        </button>
                        <button 
                            className="bg-amber-500 text-white px-4 py-2 rounded m-2 hover:bg-amber-700"
                            type="button" 
                        >create</button>
                    </div>
                </form>
            </main>
        </div>
    )
}