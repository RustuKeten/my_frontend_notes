import headerStyle from '../scss/header.module.scss';
//* scss içerinde headera stil verdiğimiz dosyayı import ediyoruz.

const Header = () => {
  return (
    <header>
      <h1 className={headerStyle['title']}>COMMENTS</h1>  
    </header>
  );
};

export default Header;

//*classname modül veriyoruz. className = {}
