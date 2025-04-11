import Comment from './Comment';


const Comments = () => {
    return (
        <div className="flex flex-col gap-8 lg:w-3/5">
            <h1 className="text-xl text-gray-500 underline">Comments</h1>
            <div className="flex items-center justify-between gap-8 w-full">
                <textarea placeholder="Write a Comment..." className="w-full p-4 rounded-lg" />
                <button className="py-3 px-4 rounded-md font-medium bg-blue-800 text-white hover:bg-blue-900 transition">Send</button>
            </div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

export default Comments