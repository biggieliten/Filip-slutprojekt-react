import { useParams } from "react-router-dom";

export const ReviewForm = () => {
  const { key } = useParams();
  return (
    <>
      <form action="">
        <textarea
          placeholder={key}
          value={""}
          onChange={() => {}}
          name=""
          id=""
        ></textarea>
      </form>
    </>
  );
};
