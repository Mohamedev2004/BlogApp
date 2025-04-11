import Comments from '../components/Comments';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Image from './../components/Image';
import { Link } from 'react-router-dom';

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* DETAILS */}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates ducimus.</h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className='text-[#172554] font-medium'>Written by </span>
                        <Link className='text-blue-800 font-semibold'>Baya Mohamed</Link>
                        <span className='text-[#172554] font-medium'>On </span>
                        <Link className='text-blue-800 font-semibold'>Web Design</Link>
                        <span className='text-[#172554] font-medium'>2 days ago</span>
                    </div>
                    <p className='text-gray-500 font-medium'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci eum magni culpa, 
                        itaque, labore nostrum officia repellendus nihil aspernatur ducimus porro ea, odit saepe 
                        cupiditate debitis libero optio aperiam?
                    </p>
                </div>
                <div className="hidden lg:block w-2/5">
                    <Image src="postImg.jpeg" w="600" className="rounded-xl"/>
                </div>
            </div>
            {/* CONTENT */}
            <div className="flex flex-col md:flex-row gap-12">
                {/* TEXT */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, 
                        magnam ut, eius ullam eligendi totam cumque ipsam praesentium hic eaque facere voluptates eum?Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, magnam ut, eius ullam eligendi 
                        totam cumque ipsam praesentium hic eaque facere voluptates eum?  
                    </p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, 
                        magnam ut, eius ullam eligendi totam cumque ipsam praesentium hic eaque facere voluptates eum?Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, magnam ut, eius ullam eligendi 
                        totam cumque ipsam praesentium hic eaque facere voluptates eum?  
                    </p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, 
                        magnam ut, eius ullam eligendi totam cumque ipsam praesentium hic eaque facere voluptates eum?Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, magnam ut, eius ullam eligendi 
                        totam cumque ipsam praesentium hic eaque facere voluptates eum?  
                    </p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, 
                        magnam ut, eius ullam eligendi totam cumque ipsam praesentium hic eaque facere voluptates eum?Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, magnam ut, eius ullam eligendi 
                        totam cumque ipsam praesentium hic eaque facere voluptates eum?  
                    </p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, 
                        magnam ut, eius ullam eligendi totam cumque ipsam praesentium hic eaque facere voluptates eum?Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, magnam ut, eius ullam eligendi 
                        totam cumque ipsam praesentium hic eaque facere voluptates eum?  
                    </p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, 
                        magnam ut, eius ullam eligendi totam cumque ipsam praesentium hic eaque facere voluptates eum?Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, magnam ut, eius ullam eligendi 
                        totam cumque ipsam praesentium hic eaque facere voluptates eum?  
                    </p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, 
                        magnam ut, eius ullam eligendi totam cumque ipsam praesentium hic eaque facere voluptates eum?Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, magnam ut, eius ullam eligendi 
                        totam cumque ipsam praesentium hic eaque facere voluptates eum?  
                    </p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, 
                        magnam ut, eius ullam eligendi totam cumque ipsam praesentium hic eaque facere voluptates eum?Lorem ipsum dolor, sit amet 
                        consectetur adipisicing elit. At commodi incidunt aliquid, inventore quisquam doloribus nobis, magnam ut, eius ullam eligendi 
                        totam cumque ipsam praesentium hic eaque facere voluptates eum?  
                    </p>
                </div>
                {/* MENU */}
                <div className="px-4 h-max sticky top-8">
                    <h1 className='mb-4 text-sm font-medium'>Author</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                            <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48" />
                            <Link>BAYA Mohamed</Link>
                        </div>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="flex gap-2">
                            <Link>
                                <Image src="facebook.svg"/>
                            </Link>
                            <Link>
                                <Image src="instagram.svg"/>
                            </Link>
                        </div>
                    </div>
                    <PostMenuActions />
                    <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className='underline'>All</Link>
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className='underline'>Web Design</Link>
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className='underline'>Development</Link>
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className='underline'>Databases</Link>
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className='underline'>Search Engines</Link>
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className='underline'>Micro Services</Link>
                    </div>
                    <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
                    <Search />
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default SinglePostPage