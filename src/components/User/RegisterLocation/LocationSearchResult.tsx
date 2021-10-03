import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { getLocationName } from "../RegisterLocation";
import { LocationResult } from "./types";
interface locationResultProps {
  _searchLogs: LocationResult[];
  locationResult: LocationResult[];
  _setSearchLogs: Dispatch<SetStateAction<LocationResult[]>>;
  setLocationResult: Dispatch<SetStateAction<LocationResult[]>>;

  setSameDong: Dispatch<SetStateAction<boolean>>;
}

function LocationSearchResult({
  _searchLogs,
  _setSearchLogs,
  locationResult,
  setLocationResult,

  setSameDong,
}: locationResultProps) {
  const [countGuide, setCountGuide] = useState(false);
  const isAlreadyClicked = (location: LocationResult) => {
    return !!_searchLogs.includes(location);
  };

  const isFullClicked = () => {
    return _searchLogs.length > 1;
  };

  const isSameDongName = (region: string) => {
    return _searchLogs.filter((log) => new RegExp(getLocationName(region).dongName).test(log.address_name)).length > 0;
  };

  const handleTargetLocation = (location: LocationResult) => {
    const region = location.address_name;
    if (isAlreadyClicked(location)) return;

    if (isFullClicked()) {
      setCountGuide(true);
      setLocationResult([]);
      return;
    }

    setSameDong(isSameDongName(region));
    setCountGuide(false);
    _setSearchLogs((prev) => prev.concat([location]));
  };

  return (
    <LocationHelpBox>
      {countGuide && <div>새 지역을 추가하시려면 기존 정보를 취소하고 진행해주세요.</div>}
      {locationResult.length > 0 && (
        <>
          <span>찾으시는 동네가 어디신가요?</span>
          <ul>
            {locationResult.map((location, idx) => (
              <li key={idx} onClick={() => handleTargetLocation(location)}>{`•  ${location?.address_name}`}</li>
            ))}
          </ul>
        </>
      )}
    </LocationHelpBox>
  );
}

export default LocationSearchResult;
const LocationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LocationHelpBox = styled(LocationBox)`
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.basicBlue};
  font-size: 16px;
  li {
    cursor: pointer;
    font-size: 14px;
  }
`;
