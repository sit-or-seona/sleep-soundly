import React from "react";
import * as S from "./style";
import { SelectHours, SelectMinutes } from "components/common/Select";
import ToggleSwitch from "components/common/ToggleSwitch";

export default function Calculator() {
  return (
    <S.Container>
      <h2 className="sr-only">취침 시간 계산기</h2>
      <S.Title>
        오늘 밤 잠들기 좋은 시간을 알려드릴게요
        <br />
        내일 일어날 시간을 선택해주세요.
      </S.Title>
      <S.SelectForm>
        {SelectHours}
        {SelectMinutes}
        <ToggleSwitch />
      </S.SelectForm>
      <button>계산하기</button>
    </S.Container>
  );
}
