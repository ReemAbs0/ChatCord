export default function MessageInput() {
  return (
    <div className="message-input-wrapper p-4">

      <div className="message-input d-flex align-items-center">

        <button className="input-btn">
          <i className="bi bi-plus-circle-fill"></i>
        </button>

        <input
          type="text"
          className="form-control border-0 bg-transparent text-light"
          placeholder="Message #general-chat"
        />

        <div className="d-flex gap-3 text-secondary">

          <i className="bi bi-gift input-icon"></i>

          <i className="bi bi-file-earmark-play input-icon"></i>

          <i className="bi bi-emoji-smile input-icon"></i>

        </div>
      </div>
    </div>
  );
}