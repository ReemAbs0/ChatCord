import "../styles/ServerSidebar.css";


export default function ServerSidebar() {
  return (
    <div
      className="d-flex flex-column align-items-center py-3 position-relative"
      style={{
        width: "72px",
        backgroundColor: "#0c0e13",
        height: "100vh",
      }}
    >
      {/* Home */}
      <div className="server-wrapper active-server mb-2">
        <div className="server-pill"></div>

        <div className="server-icon home-icon">
          <i className="bi bi-house-fill"></i>
        </div>
      </div>

      <div
        style={{
          width: "32px",
          height: "2px",
          backgroundColor: "#33353a",
          borderRadius: "20px",
          marginBottom: "12px",
        }}
      ></div>

      {/* Server 1 */}
      <div className="server-wrapper active-server">
        <div className="server-pill"></div>

        <div className="server-icon active">
          DS
        </div>
      </div>

      {/* Server 2 */}
      <div className="server-wrapper">
        <div className="server-pill"></div>

        <div className="server-icon">
          WD
        </div>
      </div>

      {/* Server 3 */}
      <div className="server-wrapper">
        <div className="server-pill"></div>

        <div className="server-icon">
          <i className="bi bi-palette-fill"></i>
        </div>
      </div>

      {/* Add server */}
      <div className="mt-auto server-wrapper">
        <div className="server-icon add-server">
          <i className="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  );
}