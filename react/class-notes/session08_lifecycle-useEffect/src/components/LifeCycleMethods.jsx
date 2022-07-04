//?==================================================================
//?                         LIFECYCLE METOTLARI
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React mototlaridir.
//* Ornegin bir component olsuturuldugunda, DOM'a basilsiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

// constructor() kurucu, yapıcı metot / binding with this  / state başlangıç değeri verirsek / ilk çalışır
// static getDerivedStateFromProps() çok kullanılmıyor(istisna)
// render() constructor dan sonra çalışır / DOM tree ye render yapar
// componentDidMount() ilk render dan sonra bişey çalıştıracaksak kullanırız / her refresh den sonra API den veri çekmek gibi..
// static getDerivedStateFromProps() X
// shouldComponentUpdate() X
// render()  ikinci ve sonraki render lar / state ler değişince algıla DOM a bas
// getSnapshotBeforeUpdate() ilki hariç her render dan sonra başka iş yaptırmak için
// componentDidUpdate() ilk render da çalışmaz / comp. in prevState ve prevProps a erişimi var

import React from "react";

class LifeCycleMethods extends React.Component {
  //!1- bir component oluşturulması ile çağrılır.
  constructor(props) {
    console.log("Constructor Running");
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1, //otomatik bind yapıyor
    });
  };
  componentDidMount() {
    console.log("Mounted");
    //! 3-) Bir component DOM agacina eklendiginde calistirilir.
    //! (İlk render sonrasi).
    //! Her yasam dongusu icin bir kere calisir.
  }

  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Unmounted");
  }
  //! 4-) Bu metot ilk render haric dige tüm render'lardan sonra cagrilir.
  //!  prevState ve prevProps degerlerini parametre olarak alabilir.

  render() {
    console.log("Rendered");
    //! 2-) Her bir render'da cagrilir
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
