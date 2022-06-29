
import cardStyle from "../scss/card.module.scss";
const Card = ({data}) => {
  return (
    <div className={cardStyle["container"]}>
    {data.map((item)=>{                     //*datayı açmak için map func
      const {id,name,job,comment,img}= item //*destructuring
      return (
        <div className={cardStyle["card"]} key={id}>
          <h1>{name}</h1>
          <h2>{job}</h2>
          <p>{comment}</p>
          <img src={img} alt="img" />
          <div className={cardStyle["btn-container"]}>
            <button className={cardStyle["btn-container--small"]}>Small</button>
            <button className={cardStyle["btn-container--large"]}>Large</button>
          </div>
        </div>
      );
    })}
    </div>
  );
}

export default Card
//*modul ile className verdik cardStyle isminde bir isim verdik
//* bu ismi her className de {içine yazdık sonra da [içine esas classı yazdık]}