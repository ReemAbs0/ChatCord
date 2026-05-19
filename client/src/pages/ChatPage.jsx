import ServerSidebar from "../components/ServerSidebar";
import ChannelSidebar from "../components/ChannelSidebar";
import ChatArea from "../components/ChatArea";
import MemberList from "../components/MemberList";

export default function ChatPage() {
  return (
    <div className="d-flex vh-100 bg-dark text-white overflow-hidden">
      <ServerSidebar />
      <ChannelSidebar />
      <ChatArea />
      <MemberList />
    </div>
  );
}