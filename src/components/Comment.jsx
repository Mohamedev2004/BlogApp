import Image from './Image';

const Comment = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-md mb-8">
            <div className="flex items-center gap-4">
                <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
                <span className='font-medium'>BAYA Mohamed</span>
                <span className='text-sm text-gray-500 '>2 Days Ago</span>
            </div>
            <div className="mt-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda, sequi natus tempore eveniet ab inventore dolorum nemo id totam doloribus temporibus, cupiditate perferendis sed itaque? Adipisci, obcaecati delectus. At.</p>
            </div>
        </div>
    )
}

export default Comment