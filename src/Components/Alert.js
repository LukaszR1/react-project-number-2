export default function AlertMessage({ alert }) {
  return (
    <div className="container-error">
      <p className="error-message" id="error-message">
        {alert}
      </p>
    </div>
  );
}
