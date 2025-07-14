const Loading = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <div style={{
      width: '48px',
      height: '48px',
      border: '5px solid #ccc',
      borderTop: '5px solid #333',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

export default Loading;
