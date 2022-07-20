import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const [tutorials, setTutorials] = useState();
  //! GET(read)
  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  //! sadece component mount olduğunda istek yapar
  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials); //?ilk render yapıldığında return geliyor,

  //!POST (create)
  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
      console.log("add");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
// tutorials = { tutorials }key:value format === {...tutorials}spread method
