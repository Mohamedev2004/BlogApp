import { Link } from 'react-router-dom';


const MainCategories = () => {
    return (
        <div className="hidden md:flex bg-white rounded-xl p-4 shadow-md items-center justify-center gap-8">
            {/* LINKS */}
            <div className="flex-1 flex items-center justify-between flex-wrap">
                <Link to="/posts" className='bg-blue-800 text-white rounded-md px-4 py-2'>All Posts</Link>
                <Link to="/posts?cat=web-design" className='hover:bg-blue-50  rounded-md px-4 py-2'>Web Design</Link>
                <Link to="/posts?cat=development" className='hover:bg-blue-50  rounded-md px-4 py-2'>Development</Link>
                <Link to="/posts?cat=databases" className='hover:bg-blue-50  rounded-md px-4 py-2'>DataBase</Link>
                <Link to="/posts?cat=seo" className='hover:bg-blue-50  rounded-md px-4 py-2'>Search Engines</Link>
                <Link to="/posts?cat=micro-servises" className='hover:bg-blue-50  rounded-md px-4 py-2'>Micro Services</Link>
            </div>
            <span className='text-xl font-medium'>|</span>
            {/* SEARCH */}
            <div className="bg-[#dbe3fe] p-2 rounded-md flex items-center gap-2 ">
                <svg
                    xmlns='https://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width="20"
                    height="20"
                    fill='none'
                    stroke='#1E40AF'
                    strokeWidth='2'
                >
                    <circle cx="10.5" cy="10.5" r="7.5" />
                    <line x1="16.5" y1="16.5"  x2="22" y2="22" />
                </svg>
                <input type="text" placeholder='Search a Post...' className='bg-transparent placeholder-blue-800 placeholder:font-medium'/>
            </div>
        </div>
    )
}

export default MainCategories