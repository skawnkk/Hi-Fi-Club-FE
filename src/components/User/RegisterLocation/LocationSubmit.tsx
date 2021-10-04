import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { RoundButton } from "components/Common/Buttons";
import { submitProps } from "util/types/user";
import { ROUTE, TARGET_COUNT } from "util/constants";
import { postUserInfo } from "util/dataFetching/userInfo";

function LocationSubmit({ searchLogs, interests }: submitProps) {
  const history = useHistory();
  const handleNextPage = async () => {
    if (searchLogs.length !== TARGET_COUNT) return;
    const response = await postUserInfo({ searchLogs, interests });
    if (response === 200) history.push(ROUTE.MAIN); //200이 아닌경우에 대한 에러처리
  };
  return (
    <NextButton onClick={handleNextPage} variant="outlined">
      다음 ({searchLogs.length}/2)
    </NextButton>
  );
}

export default LocationSubmit;
const NextButton = styled(RoundButton)`
  border-radius: 12px;
  margin: 8px 0;
`;
