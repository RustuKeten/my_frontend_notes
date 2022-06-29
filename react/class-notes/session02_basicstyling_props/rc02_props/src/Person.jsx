
import Msg from "./Msg"
const Person = ({name ,img, tel}) => {
    // const {name, img, tel} = props;
   

  return (
    <div>
        {/* <h1>Merhaba {name}</h1> */}
        <Msg fofeyn={name}/>
        <img src={img} alt="" />
        <p>{tel}</p>
        
        </div>
  )
}

export default Person