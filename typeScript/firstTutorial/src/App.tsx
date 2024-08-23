import style from "./App.module.css";
import Button from "./Button";
const App = (): JSX.Element => {
  return (
    <div className={style.container}>
      <h1 className={style.sarlavha}>bu yangi style berish turi hisoblanadi</h1>
      <p className={`${style.sarlavha} ${style.sarlavha_2} sm:text-red-400`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quia
        fugit. Ea, doloremque nostrum, laborum quam harum vero ipsa et dolorem
        voluptatum maiores modi porro veritatis. Ad autem consequatur
        consequuntur?
        <span>
          <br />
          <br />
          lorem span
        </span>
      </p>
      <div className={style.btnBox}>
        <Button className={style.success} id={style.btnId}>
          click
        </Button>
      </div>
      <div className="w-28 h-28 bg-red-400 rounded-full" />
    </div>
  );
};

export default App;
