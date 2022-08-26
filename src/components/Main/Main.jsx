import { Container } from "../Container/Container";
import { Form } from "../Form/Form";
import { ShortLinks } from "../ShortLinks/ShortLinks";
import s from "./Main.module.scss";
export const Main = () => {
  return (
    <main className={s.main}>
      <Container>
        <div className={s.main_wrapper}>
          <Form />
          <ShortLinks />
        </div>
      </Container>
    </main>
  );
};
