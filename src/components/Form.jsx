import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createShortLink, selectLoading } from "../store/slice/linkSlice";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
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
          outlineColor: errors.Url ? "red" : "black",
          outlineWidth: errors.Url ? "2px" : "1px",
        }}
        disabled={loading === "loading"}
      />

      <button type="submit" disabled={loading === "loading"}>
        Go!
      </button>
      {errors.Url && <div>{errors.Url.message}</div>}
    </form>
  );
};
