import { useState } from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import {
  LocationInput,
  LocationSearchResult,
  LocationClickResult,
  LocationSubmit,
} from "components/User/RegisterLocation";
import { TSelectItem, LocationResult } from "util/types/user";
interface location {
  state: TSelectItem[];

  [key: string]: string | TSelectItem[];
}

const RegisterLocationPage = (props: any) => {
  //! 카카오 로그인 정보 없다면 잘못된 접근 알림 후(로그인해주세요) 메인페이지 리다이렉팅
  //props타입질문드립니다. console.log(props);
  const interests = props.location.state;
  const [locationResult, setLocationResult] = useState<LocationResult[]>([]);
  const [_searchLogs, _setSearchLogs] = useState<LocationResult[]>([]);
  const [isSameDong, setSameDong] = useState<boolean>(false);

  return (
    <RegisterLocationLayout>
      <LocationRow>
        <LocationBox>
          <NoticeParagraph>ㅇㅇ님의 관심있는 동네를 알려주세요</NoticeParagraph>
          <NoticeParagraph>2 지역의 스터디 정보를 볼 수 있어요</NoticeParagraph>
        </LocationBox>

        <LocationInput setLocationResult={setLocationResult} />
        <LocationSearchResult
          {...{
            _searchLogs,
            _setSearchLogs,
            locationResult,
            setLocationResult,
            setSameDong,
          }}
        />
        <LocationClickResult {...{ isSameDong, _searchLogs, _setSearchLogs }} />
        <LocationSubmit searchLogs={_searchLogs} interests={interests} />
      </LocationRow>
    </RegisterLocationLayout>
  );
};

export default RegisterLocationPage;

const RegisterLocationLayout = styled(Container)`
  padding-top: 64px;
  position: relative;
  height: calc(90vh - 64px);
  display: grid;
  grid-template-rows: 40%;
`;

const LocationRow = styled.div`
  position: relative;
  height: fit-content;
  top: 25%;
  margin: 0 auto;
  display: grid;
  row-gap: 20px;
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NoticeParagraph = styled.p`
  padding: 8px 0;
`;
