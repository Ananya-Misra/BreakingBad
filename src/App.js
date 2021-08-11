import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/Series.css";
import "./components/Popup";
import Series from "./components/Series";
import Pagination from "./components/Pagination";
import Popup from "./components/Popup";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const character_API = "https://www.breakingbadapi.com/api/characters";
  const quotes_API = "https://www.breakingbadapi.com/api/quote?author=";
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  // for popup
  const [popData, setPopData] = useState([]);
  const [name, setName] = useState([]);
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    setLoading(true);
    fetch(character_API)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      });
  }, []);
  // function call on clicking the card view
  const openPopUp = (names) => {
    fetch(character_API + "?name=" + names)
      .then((response) => response.json())
      .then((data) => {
        setPopData(data);
      });
    fetch(quotes_API + names)
      .then((response) => response.json())
      .then((data) => {
        setName(data);
      });
  };
  // function call for closing the Popup
  const closePopUp = () => {
    setPopData([]);
    setName([]);
  };
  // slicing exact 10 elements from character array
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = characters.slice(firstPostIndex, lastPostIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // conditional rendering
  if (loading) {
    return (
      <h2 data-aos="fade-right" className="mt-5 text-center">
        Loading, Please Wait...
      </h2>
    );
  }
  return (
    <div className="pb-3 App">
      <h1 data-aos="fade-right" className="text-primary m-3 mainhead">
        Breaking Bad
      </h1>
      <h2 data-aos="fade-left" className="mb-4 text-center subhead">
        Cast & Quotes
      </h2>

      <div className="wrapper">
        <div className="row list">
          {currentPosts.map((result) => {
            return (
              <Series key={result.char_id} {...result} openPopup={openPopUp} />
            );
          })}
        </div>
      </div>
      {popData.length !== 0 ? (
        <Popup popData={popData} name={name} closePopup={closePopUp} />
      ) : (
        false
      )}
      <Pagination
        postPerPage={postPerPage}
        totalPosts={characters.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
