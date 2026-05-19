export default function ChatHeader() {
  return (
    <div className="chat-header d-flex justify-content-between align-items-center px-4">

      {/* Left */}
      <div className="d-flex align-items-center">
        <i className="bi bi-hash text-secondary me-2"></i>

        <h5 className="mb-0 text-white fw-semibold">
          general-chat
        </h5>

        <div className="header-divider mx-3"></div>

        <small className="text-secondary d-none d-lg-block">
          The main hub for design talk and inspiration
        </small>
      </div>

      {/* Right */}
      <div className="d-flex align-items-center gap-3">

        <i className="bi bi-bell text-secondary header-icon"></i>

        <i className="bi bi-pin-angle text-secondary header-icon"></i>

        <i className="bi bi-people text-secondary header-icon"></i>

        <div className="search-box position-relative">
          <input
            type="text"
            placeholder="Search"
            className="form-control chat-search"
          />

          <i className="bi bi-search search-icon"></i>
        </div>

        <i className="bi bi-question-circle text-secondary header-icon"></i>
      </div>
    </div>
  );
}