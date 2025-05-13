import React from "react";
import { SideBarData } from "./SideBarData";

function FilteringSideBar(){
    return (
    <div id="side-bar">
    <ul>
    {SideBarData.map((val, key)=> {
        return (
            <>
            <li key={key}><div>{val.title}</div></li>
            </>
        );
    })}
    </ul>
    </div>
    );
}
export default FilteringSideBar;
