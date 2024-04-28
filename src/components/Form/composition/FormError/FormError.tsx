export const FormError = ({ errorMessage }: { errorMessage: string }) => {
  return <span style={{ color: "red" }}>{errorMessage}</span>;
};
