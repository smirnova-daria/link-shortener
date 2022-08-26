import { Container } from "../Container/Container";
import s from "./Footer.module.scss";
export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer_wrapper}>
          <a href="http://www.freepik.com">
            Illustration designed by vectorjuice / Freepik
          </a>
        </div>
      </Container>
    </footer>
  );
};
