import Image from './Image';
import { Link } from 'react-router-dom';

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            {/* IMAGE */}
            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="postImg.jpeg"  className="rounded-xl object-cover" w="735"/>
            </div>
            {/* DETAILS */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link  to="/test" className='text-4xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, voluptatum rerum.</Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className='text-[#172554] font-medium'>Written by </span>
                    <Link className='text-blue-800 font-semibold'>Baya Mohamed</Link>
                    <span className='text-[#172554] font-medium'>On </span>
                    <Link className='text-blue-800 font-semibold'>Web Design</Link>
                    <span className='text-[#172554] font-medium'>2 days ago</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem delectus et, 
                    officiis quam, sed quia, reiciendis est aperiam tempora maxime vel ea voluptate eius expedita 
                    voluptatibus ex iste ad!
                </p>
                <Link to="/test" className='bg-blue-800 text-white text-center text-lg px-4 py-1 rounded-md hover:bg-blue-900 transition inline-block self-start'>Read More</Link>
            </div>
        </div>
    )
}

export default PostListItem