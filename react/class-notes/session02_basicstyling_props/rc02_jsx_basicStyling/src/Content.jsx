//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

//? dahili bir resim eklemek için import yapmak greklidir
import img2 from "./img/spring2.jpg";
//? harici bir stilllendirme için
import "./Content.css";
const Content = () => {
  const imgStyle = {
    display: "block",
    width: "300px",
    margin: "1rem auto",
  };
  return (
    <div className="content">
      {/* inline styling */}
      <h2 style={{ color: "red" }}>React JS</h2>
      <p style={{ backgroundColor: "lightgreen" }}>
        React,kullanıcı arabirimi tasarlamak için kullanılan bir js
        kütüphanesidir.
      </p>
      <img
        style={imgStyle}
        src="https://wattention.com/wp-content/uploads/2020/07/springs-007.jpg"
        alt="img1"
      />
      <img style={imgStyle} src={img2} alt="img2" />
      <p className="par-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ut
        autem dolore distinctio eaque impedit voluptas, deserunt eveniet
        asperiores eos aliquid maxime rem accusamus odit odio debitis amet
        quibusdam est qui necessitatibus atque eum rerum! Mollitia veniam
        numquam enim aliquam!
      </p>
    </div>
  );
};

export default Content;
