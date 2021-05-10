import mapData from './mocked-data/map-data';
import * as S from './HomeMap.styles';

const HomeMap = () => {
  return (
    <S.Container>
      <S.MapSection>
        <S.Title>O impacto de sonhar junto</S.Title>

        <S.Button>Sonhar</S.Button>

        <S.MapImage
          src="/img/map.svg"
          alt="Um mapa com várias conexões entre diferentes continentes"
        />
      </S.MapSection>

      <S.DataContainer>
        <img src="/img/tape-map.svg" />
        <S.DataContainer>
          <S.DataWrapper>
            <S.DataNumber>{mapData.dreamsDreamed.number}</S.DataNumber>
            <S.DataDescription>
              {mapData.dreamsDreamed.description}
            </S.DataDescription>
          </S.DataWrapper>
          <S.DataWrapper>
            <S.DataNumber>{mapData.impactedPeople.number}</S.DataNumber>
            <S.DataDescription>
              {mapData.impactedPeople.description}
            </S.DataDescription>
          </S.DataWrapper>
          <S.DataWrapper>
            <S.DataNumber>{mapData.ongs.number}</S.DataNumber>
            <S.DataDescription>{mapData.ongs.description}</S.DataDescription>
          </S.DataWrapper>
        </S.DataContainer>
      </S.DataContainer>
    </S.Container>
  );
};

export default HomeMap;