import { useUser } from "@clerk/clerk-react";
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";

const Write = () => {
    const {isLoaded,isSignedIn} = useUser()

    if(!isLoaded){
        return <div className="">Loading...</div>
    }
    if(isLoaded && !isSignedIn){
        return <div className="">You should login</div>
    }
    return (
        <div className="md:h-[calc(100vh-80px)] h-[calc(100vh-64px)] flex flex-col gap-6">
            <h1 className="text-xl font-medium">Create a New Post</h1>
            <form className="flex flex-col gap-6 flex-1 mb-6" action="">
                <button className="p-2 rounded-md text-sm text-white bg-blue-800 w-40 hover:bg-blue-900">Add a cover image</button>
                <input className="text-4xl font-semibold bg-transparent outline-none" type="text" name="" id="" placeholder="My Awesome Story..." />
                <div className="flex items-center gap-4">
                    <label htmlFor="" className="text-md">Choose a Category:</label>
                    <select name="cat" id="" className="p-2 rounded-lg bg-blue-800 text-white">
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="Databases">Databases</option>
                        <option value="seo">Search Engines</option>
                        <option value="micro-services">Micro Services</option>
                    </select>
                </div>
                <textarea name="desc" id="" placeholder="A Short Description..." className="p-2 rounded-lg bg-white"/>
                <ReactQuill theme="snow" className="flex-1 rounded-lg bg-white "/>
                <button className="bg-blue-800 text-white font-medium rounded-md mt-4 p-2 w-36">Publish</button>
            </form>
        </div>
    )
}

export default Write