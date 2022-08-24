import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    //reset,
  } = useForm({ mode: "onSubmit" });
  const onSubmit = (data) => {
    console.log(data);
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
      />
      <button type="submit">Go!</button>
      {errors.Url && <div>{errors.Url.message}</div>}
    </form>
  );
};
