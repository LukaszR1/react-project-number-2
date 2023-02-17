export default function Loader({ isLoading }) {
  return isLoading ? (
    <div id="loader" className="loader"></div>
  ) : (
    <div className="empty-loader"></div>
  );
}
