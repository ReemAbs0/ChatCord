import ServerSidebar from "../components/ServerSidebar";
import ChannelSidebar from "../components/ChannelSidebar";
import ChatArea from "../components/ChatArea";
import MemberList from "../components/MemberList";
import UserFooter from "../components/UserFooter";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ChatPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(
    localStorage.getItem("selectedChannel") || null,
  );
  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/channels");

        setChannels(res.data);

        const savedChannel = localStorage.getItem("selectedChannel");

        if (
          savedChannel &&
          res.data.some((channel) => channel._id === savedChannel)
        ) {
          setSelectedChannel(savedChannel);
        } else if (res.data.length > 0) {
          setSelectedChannel(res.data[0]._id);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchChannels();
  }, []);
  useEffect(() => {
    if (selectedChannel) {
      localStorage.setItem("selectedChannel", selectedChannel);
    }
  }, [selectedChannel]);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="app-layout">
      {/* Left Side */}
      <div className="sidebar-layout">
        <div className="sidebars">
          <ServerSidebar />
          <ChannelSidebar
            channels={channels}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
          />
        </div>

        <UserFooter className="user-footer" />
      </div>

      {/* Middle */}
      <ChatArea selectedChannel={selectedChannel} channels={channels} />

      {/* Right */}
      <MemberList />
    </div>
  );
}
