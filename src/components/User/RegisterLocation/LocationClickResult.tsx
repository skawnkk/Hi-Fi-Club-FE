import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { getLocationName } from "util/funcs";
import { RoundButton, TargetButton } from "components/Common/Buttons";
import { LocationResult } from "./types";
interface LocationClickResultProps {
  isSameDong: boolean;
  _searchLogs: LocationResult[];
  _setSearchLogs: Dispatch<SetStateAction<LocationResult[]>>;
}
export default function LocationClickResult({ isSameDong, _searchLogs, _setSearchLogs }: LocationClickResultProps) {
  const handleDeleteTarget = (log: LocationResult) => () => {
    _setSearchLogs((prev) => prev.filter((target) => target !== log));
  };

  return (
    <LocationBox>
      <ButtonBox>
        {_searchLogs.map((log, idx) => {
          const location = log.address_name;
          const { cityName, dongName } = getLocationName(location);
          return !isSameDong ? (
            <TargetButton key={idx} displayName={dongName} onDeleteItemClick={handleDeleteTarget(log)} />
          ) : (
            <TargetButton
              key={idx}
              displayName={cityName + " " + dongName}
              onDeleteItemClick={handleDeleteTarget(log)}
            />
          );
        })}
      </ButtonBox>
    </LocationBox>
  );
}
const LocationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 50px;
`;

const NextButton = styled(RoundButton)`
  border-radius: 12px;
  margin: 8px 0;
`;
