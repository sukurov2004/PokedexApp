function Battle() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "24px 0",
  };

  const vsStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(135deg, #ef4444, #f97316)",
    padding: "12px 24px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    letterSpacing: "2px",
  };

  return (
    <div style={containerStyle}>
      <div style={vsStyle}>
        ⚔️ VS ⚔️
      </div>
    </div>
  );
}

export default Battle;