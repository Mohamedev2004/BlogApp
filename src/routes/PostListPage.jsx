import { useState } from "react"
import PostList from "../components/PostList"
import SideMenu from "../components/SideMenu"

const PostListPage = () => {

    const [open,setOpen] = useState(false)


    return (
        <div className="">
            <h1 className="mb-8 text-4xl font-semibold text-blue-900">● Development Blog</h1>
            <button className="md:hidden bg-blue-800 text-small text-white px-4 py-2 rounded-md mb-4" onClick={()=>setOpen((prev) => !prev)}>{open ? "Close" : "Filter or Search"}</button>
            <div className="flex flex-col-reverse gap-8 md:flex-row">
                <div className="">
                    <PostList />
                </div>
                <div className={`${open ? "block" : "hidden"} md:block`}><SideMenu /></div>
            </div>
        </div>
    )
}

export default PostListPage