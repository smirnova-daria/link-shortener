import banner from "../../assets/banner.jpg";
import { Container } from "../Container/Container";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header_wrapper}>
          <h1 className={s.title}>Это сокращатель ссылок</h1>
          <img src={banner} alt="banner" className={s.banner} />
        </div>
      </Container>
    </header>
  );
};
