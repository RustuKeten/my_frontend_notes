//* Componentler fonksiyonlarda olduğu gibi 3 farklı yöntemle yazılabilir.
//* jsx içerisinde değişkenler {} içerisinde gösterilir.
//* Footer component;
const Footer = () => {
  return <footer>Copyright by Rustu,{new Date().getFullYear()}</footer>;
};

export default Footer;
