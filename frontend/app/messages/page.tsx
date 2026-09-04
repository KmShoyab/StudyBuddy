"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Message = {
  id: number;
  sender: "me" | "buddy";
  text: string;
  time: string;
};

type Conversation = {
  id: number;
  name: string;
  initials: string;
  lastMessage: string;
  time: string;
  unread: number;
  messages: Message[];
};

const initialConversations: Conversation[] = [
  {
    id: 1,
    name: "Abid Abdullah",
    initials: "AA",
    lastMessage: "Are you free for a study session?",
    time: "10:42 AM",
    unread: 2,
    messages: [
      {
        id: 1,
        sender: "buddy",
        text: "Hey! How is your preparation going?",
        time: "10:35 AM",
      },
      {
        id: 2,
        sender: "me",
        text: "Pretty good. I am reviewing the last chapter now.",
        time: "10:38 AM",
      },
      {
        id: 3,
        sender: "buddy",
        text: "Nice! Are you free for a study session?",
        time: "10:42 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Imzamamul haque",
    initials: "IH",
    lastMessage: "Let's study at 8 PM.",
    time: "Yesterday",
    unread: 0,
    messages: [
      {
        id: 4,
        sender: "me",
        text: "When would you like to study?",
        time: "Yesterday",
      },
      {
        id: 5,
        sender: "buddy",
        text: "Let's study at 8 PM.",
        time: "Yesterday",
      },
    ],
  },
];

export default function MessagesPage() {
  const [conversations, setConversations] = useState(
    initialConversations
  );

  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const [messageText, setMessageText] = useState("");

  const selectedConversation = useMemo(
    () =>
      conversations.find(
        (conversation) => conversation.id === selectedConversationId
      ),
    [conversations, selectedConversationId]
  );

  const selectConversation = (id: number) => {
    setSelectedConversationId(id);

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === id
          ? { ...conversation, unread: 0 }
          : conversation
      )
    );
  };

  const sendMessage = () => {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage || !selectedConversation) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      sender: "me",
      text: trimmedMessage,
      time: "Just now",
    };

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === selectedConversation.id
          ? {
              ...conversation,
              lastMessage: trimmedMessage,
              time: "Just now",
              messages: [...conversation.messages, newMessage],
            }
          : conversation
      )
    );

    setMessageText("");
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] theme-transition">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="mb-3 inline-flex items-center text-sm text-[var(--text-muted)] transition hover:text-violet-400"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Messages
          </h1>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Chat with your StudyBuddy connections.
          </p>
        </div>

        {/* Messaging Layout */}
        <div className="grid min-h-[650px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl md:grid-cols-[300px_1fr]">
          {/* Conversations */}
          <aside className="border-b border-[var(--border)] md:border-b-0 md:border-r">
            <div className="border-b border-[var(--border)] p-4">
              <h2 className="font-semibold">Conversations</h2>
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Your recent study chats
              </p>
            </div>

            <div className="p-2">
              {conversations.map((conversation) => {
                const active =
                  conversation.id === selectedConversationId;

                return (
                  <button
                    key={conversation.id}
                    type="button"
                    onClick={() =>
                      selectConversation(conversation.id)
                    }
                    className={`mb-1 flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
                      active
                        ? "bg-violet-500/10"
                        : "hover:bg-[var(--surface-soft)]"
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-sm font-bold text-violet-400">
                      {conversation.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-semibold">
                          {conversation.name}
                        </p>

                        <span className="shrink-0 text-[10px] text-[var(--text-muted)]">
                          {conversation.time}
                        </span>
                      </div>

                      <div className="mt-1 flex items-center justify-between gap-2">
                        <p className="truncate text-xs text-[var(--text-muted)]">
                          {conversation.lastMessage}
                        </p>

                        {conversation.unread > 0 && (
                          <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-violet-500 px-1 text-[10px] font-bold text-white">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Chat */}
          <section className="flex min-h-[600px] flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="flex items-center gap-3 border-b border-[var(--border)] p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500/15 text-sm font-bold text-violet-400">
                    {selectedConversation.initials}
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold">
                      {selectedConversation.name}
                    </h2>
                    <p className="mt-0.5 text-xs text-emerald-400">
                      Connected StudyBuddy
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
                  {selectedConversation.messages.map((message) => {
                    const isMine = message.sender === "me";

                    return (
                      <div
                        key={message.id}
                        className={`flex ${
                          isMine ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                            isMine
                              ? "rounded-br-md bg-violet-500 text-white"
                              : "rounded-bl-md bg-[var(--surface-soft)] text-[var(--text-primary)]"
                          }`}
                        >
                          <p>{message.text}</p>

                          <p
                            className={`mt-1 text-[10px] ${
                              isMine
                                ? "text-white/70"
                                : "text-[var(--text-muted)]"
                            }`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Message Input */}
                <div className="border-t border-[var(--border)] p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={messageText}
                      onChange={(event) =>
                        setMessageText(event.target.value)
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          sendMessage();
                        }
                      }}
                      placeholder="Write a message..."
                      className="min-w-0 flex-1 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--text-muted)] focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10"
                    />

                    <button
                      type="button"
                      onClick={sendMessage}
                      disabled={!messageText.trim()}
                      className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Send
                    </button>
                  </div>

                  <p className="mt-2 text-[10px] text-[var(--text-muted)]">
                    Press Enter to send your message.
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-1 items-center justify-center p-6 text-center">
                <div>
                  <div className="mb-3 text-4xl">💬</div>
                  <h2 className="font-semibold">
                    Select a conversation
                  </h2>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    Choose a StudyBuddy to start chatting.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}