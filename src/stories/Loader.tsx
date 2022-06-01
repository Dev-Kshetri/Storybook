import { LoaderContainer, SpinnerSize } from "./Loader.styles";


export type LoaderProps = {
  fullScreen?: boolean;
  size?: SpinnerSize;
};

export const Loader = ({ fullScreen = false, size }: LoaderProps) => (
  <LoaderContainer $fullScreen={fullScreen} $size={size}>
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  </LoaderContainer>
);
