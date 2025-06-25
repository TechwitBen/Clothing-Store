import "./Search.css"
import { IoPerson } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

function Search(){

return(<>
<div className="overal-search-div">
    {/* CONTAINS THE TEXT AND INPUT */}
<div className="search-Div">
    {/* CONTAINS THE TEXT AND ICON DIV */}
    <div className="search-textIcon-Div">
        <IoPerson  className="backArrow"/>
<h2>
    I'm searching .....
</h2>
</div>
<div className="searchInput-Div">
    <IoIosSearch className="Search-icon"/>
<input  type="text" className="search-Input" placeholder="Search" />
</div>
</div>

<div className="recent-search-div">
<h2>My Recent Searches</h2>

</div>

</div>

</>)

}



export default Search