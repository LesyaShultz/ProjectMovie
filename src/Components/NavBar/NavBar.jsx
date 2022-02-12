import "./NavBar.css";
import React, { useEffect, useState } from "react";
import { fetchGenre } from "../../Service/service";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Button from "react-bootstrap/Button";

function NavBar() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setGenres(await fetchGenre());
    };

    fetchApi();
  }, []);

  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <Button className="item-name" variant="outline-secondary" type="button">
          {item.name}
        </Button>
      </li>
    );
  });
  return (
    <div>
      <ul>{genreList}</ul>
    </div>
  );
}
export default NavBar;
