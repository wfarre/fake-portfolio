import React, { useEffect, useState } from "react";
import style from "./assets/Input.module.css";

type Props = {
  id: string;
  type: "email" | "text" | "textarea";
  placeholder: string;
};

export const Input = (props: Props) => {
  const [isError, setIsError] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (props.id === "email") {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setIsError(!input.toLowerCase().match(emailRegex) && input.length !== 0);
    }
    if (props.id === "name") {
      const textRegex = /^[a-zA-Z0-9]+$/;
      setIsError(!input.toLowerCase().match(textRegex) && input.length !== 0);
    }
  }, [input, props.id]);

  return (
    <label
      htmlFor={props.id}
      className={`${style["input-wrapper"]} ${isError && style.error}`}
    >
      {props.type === "textarea" ? (
        <textarea
          id={props.id}
          name={props.id}
          placeholder={props.placeholder.toUpperCase()}
        />
      ) : (
        <input
          type={props.type}
          id={props.id}
          name={props.id}
          placeholder={props.placeholder.toUpperCase()}
          onChange={(e) => setInput(e.target.value.trimStart())}
          value={input}
        />
      )}
      <span className={style["font-error"]}>Sorry, invalid format here.</span>
    </label>
  );
};
