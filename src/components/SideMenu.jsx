import Search from './Search';
import { Link } from 'react-router-dom';


const SideMenu = () => {
    return (
        <div className="px-4 h-max sticky top-8">
            <h1 className="mb-4 text-sm font-medium">Search</h1>
            <Search />
            <h1 className="mt-8 mb-4 text-sm font-medium">Filters</h1>
            <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input type="radio" name="sort" id="" value="newest"  className='appearance-none w-4 h-4 border-[1.5px] rounded-sm bg-white border-blue-800 cursor-pointer checked:bg-blue-800'/>
                    Newest
                </label>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input type="radio" name="sort" id="" value="popular"  className='appearance-none w-4 h-4 border-[1.5px] rounded-sm bg-white border-blue-800 cursor-pointer checked:bg-blue-800'/>
                    Most Popular
                </label>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input type="radio" name="sort" id="" value="trending"  className='appearance-none w-4 h-4 border-[1.5px] rounded-sm bg-white border-blue-800 cursor-pointer checked:bg-blue-800'/>
                    Trending
                </label>
                <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                    <input type="radio" name="sort" id="" value="oldest"  className='appearance-none w-4 h-4 border-[1.5px] rounded-sm bg-white border-blue-800 cursor-pointer checked:bg-blue-800'/>
                    Oldest
                </label>
            </div>
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
                <Link className='underline' to="/posts">All</Link>
                <Link className='underline' to="/posts?cat=web-design">Web Design</Link>
                <Link className='underline' to="/posts?cat=development">Development</Link>
                <Link className='underline' to="/posts?cat=databases">Databases</Link>
                <Link className='underline' to="/posts?cat=seo">Search Engines</Link>
                <Link className='underline' to="/posts?cat=micro-services">Micro Services</Link>
            </div>

        </div>
    )
}

export default SideMenu