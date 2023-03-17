import React from "react";
import * as S from "./style";

type OptionsType = (number | string)[];

interface SelectProps {
  options: OptionsType;
  id: string;
  defaultValue?: string | number;
}

function Select({ options, id, defaultValue }: SelectProps): JSX.Element {
  return (
    <S.SelectBox>
      <select id={id} defaultValue={defaultValue}>
        {options.map((item) => (
          <option key={`${id}-${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
      <label htmlFor={id}>
        {id === "select-hours" && "시"}
        {id === "select-minutes" && "분"}
      </label>
    </S.SelectBox>
  );
}

const hoursProps = {
  options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  id: "select-hours",
  defaultValue: 6,
};

const minutesProps = {
  options: ["00", 10, 20, 30, 40, 50],
  id: "select-minutes",
  defaultValue: "00",
};

export const SelectHours = Select(hoursProps);
export const SelectMinutes = Select(minutesProps);
