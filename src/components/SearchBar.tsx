'use client';
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const keyword = formData.get('keyword') as string;
    if (keyword) {
      router.push(`/lists?keyword=${keyword}`);
    }
    return null;
  }
  return (
    <form
      className="flex items-center justify-between bg-slate-200 p-2 rounded-md gap-4 flex-1"
      onSubmit={handleSubmit}
    >
      <input type='text' name="keyword" placeholder='Search' className="flex-1 bg-transparent outline-none" />
      <button className='cursor-pointer'>
        <CiSearch className='h-4 w-4' />
      </button>
    </form>
  )
}

export default SearchBar