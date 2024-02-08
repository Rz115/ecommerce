'use client';
const SearchBar = () => {
    return ( 
    <div className="flex items-center"> 
    <input 
    autoComplete="off"
    type="text" 
    placeholder="Explorar E-PawiShop" 
    className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px] focus:boder-slate-500 w-80"/>
    <button className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md"> Buscar </button>
    </div> );
}
 
export default SearchBar;