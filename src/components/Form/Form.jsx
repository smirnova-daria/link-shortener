import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createShortLink, selectLoading } from "../../store/slice/linkSlice";
import s from "./Form.module.scss";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onSubmit" });

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const onSubmit = ({ Url }) => {
    dispatch(createShortLink(Url));
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={s.input}
        type="url"
        placeholder="Введите ссылку"
        {...register("Url", {
          required: "Пожалуйста, введите ссылку",
          pattern: {
            value:
              /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
            message: "Пожалуйста, введите валидный URL",
          },
        })}
        style={{
          outlineColor: errors.Url ? "#d33232" : "#6e45ff",
        }}
        disabled={loading === "loading"}
      />

      <button
        className={s.submit_btn}
        type="submit"
        disabled={loading === "loading"}
      >
        Сократить!
      </button>
      {errors.Url && <div>{errors.Url.message}</div>}
    </form>
  );
};
