import styled from "styled-components";

// Base components for Space Mono font family
const BaseSpaceMono = styled.div`
  font-family: "Space Mono", monospace;
  letter-spacing: 0;
  font-weight: bold;
`;

// Base components for Work Sans font family
const BaseWorkSans = styled.div`
  font-family: "Work Sans", sans-serif;
`;

export const H1SpaceMono = styled(BaseSpaceMono).attrs({ as: "h1" })`
  font-size: 67px;
  line-height: 110%;
`;

export const H2SpaceMono = styled(BaseSpaceMono).attrs({ as: "h2" })`
  font-size: 51px;
  line-height: 110%;
`;

export const H3SpaceMono = styled(BaseSpaceMono).attrs({ as: "h3" })`
  font-size: 38px;
  line-height: 120%;
`;

export const H4SpaceMono = styled(BaseSpaceMono).attrs({ as: "h4" })`
  font-size: 28px;
  line-height: 140%;
`;

export const H5SpaceMono = styled(BaseSpaceMono).attrs({ as: "h5" })`
  font-size: 22px;
  line-height: 160%;
`;

export const BodySpaceMono = styled(BaseSpaceMono).attrs({ as: "p" })`
  font-size: 16px;
  line-height: 140%;
`;

export const CaptionSpaceMono = styled(BaseSpaceMono).attrs({ as: "span" })`
  font-size: 12px;
  line-height: 110%;
`;

// Work Sans styles using the same method
export const H1WorkSans = styled(BaseWorkSans).attrs({ as: "h1" })`
  font-size: 67px;
  line-height: 110%;
`;

export const H2WorkSans = styled(BaseWorkSans).attrs({ as: "h2" })`
  font-size: 51px;
  line-height: 120%;
`;

export const H3WorkSans = styled(BaseWorkSans).attrs({ as: "h3" })`
  font-size: 38px;
  line-height: 120%;
`;

export const H4WorkSans = styled(BaseWorkSans).attrs({ as: "h4" })`
  font-size: 28px;
  line-height: 140%;
`;

export const H5WorkSans = styled(BaseWorkSans).attrs({ as: "h5" })`
  font-size: 22px;
  line-height: 140%;
`;

export const BodyWorkSans = styled(BaseWorkSans).attrs({ as: "p" })`
  font-size: 16px;
  line-height: 140%;
`;

export const CaptionWorkSans = styled(BaseWorkSans).attrs({ as: "span" })`
  font-size: 12px;
  line-height: 110%;
`;
