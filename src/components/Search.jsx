const Search = () => {
    return (
        <div className="bg-gray-100 p-2 rounded-xl flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="#1e40af"
                strokeWidth={2}
            >
                <circle cx="10.5" cy="10.5" r="7.5" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
            <input type="text" name="" id="" placeholder="Search a Post..." className="bg-transparent placeholder:text-blue-800"/>
        </div>
    )
}

export default Search