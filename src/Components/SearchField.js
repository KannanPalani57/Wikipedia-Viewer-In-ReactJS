import React, {useState} from 'react';
import axios from 'axios';
import DetailsView from "./DetailsView"
import SummaryView from "./SummaryComponent/SummaryView"
import "./SearchField.css"

//The input field data state goes here.
function SearchField(){
  const [searchItem, setSearchItem] = useState("");
  const [linkData, setLinkData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
   //make request and get data here

    async function makeRequestAndShow(e){
        e.preventDefault();   //preventing to the same screen 
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchItem}&format=json&origin=*`;
      const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${searchItem}`;
          try {
            const response = await axios.get(url);
            const summaryResponse = await axios.get(summaryUrl);
            setLinkData(response.data)
            setSummaryData(summaryResponse.data)
            console.log(linkData)
          } catch (error) {
            console.error(error);
          }
         
    
      // setImportantData(data)
      // console.log(importantData)
        // console.log(json.thumbnail.source)
        // console.log(json.extract)
        //set the field to empty after search
        //setSearchItem("");
      }

   



  return (
    <div className = "nav-wrapper">
            <div className = "title" >
                 <h3>Wikipedia Viewer</h3>
            </div>
            <form>
            <div className = "field">
                <input type = "text" placeholder = "Search a name of person" value = {searchItem} onChange = {e => setSearchItem(e.target.value)}/>
            </div>
            <div className = "buttonArea">
                <button onClick = {makeRequestAndShow}>Search</button>
            </div>
            </form>
            <div>
                {/* {linkData[1].map(item => {
                    return <p>{item}</p>
                })} */}
            </div>
        <SummaryView summary = {summaryData}/>
        <DetailsView details = {linkData} />
   </div>
  )
}

export default SearchField;