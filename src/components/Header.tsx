import '../css/Header.css'

type HeaderProps = {
  title: string;
     onFilterClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, onFilterClick }) => {
   
  return (
    <>
     <header className="header">
      <h1 className="title">{title}</h1>
      <div className="filter" onClick={onFilterClick}>
        filter
      </div>
    </header>
     
 </>
  );
};

export default Header;
