"use client";

import { useEffect, useState } from "react";

interface Notification {
  id: number;
  title: string;
  message: string;
  type: "deployment" | "agent" | "system";
  read: boolean;
  time: string;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<
    Notification[]
  >([]);

  useEffect(() => {
    const savedNotifications =
      localStorage.getItem(
        "atlas-notifications"
      );

    if (savedNotifications) {
      setNotifications(
        JSON.parse(savedNotifications)
      );
    } else {
      const defaultNotifications: Notification[] =
        [
          {
            id: 1,
            title:
              "Deployment Successful",
            message:
              "Atlas UI deployed successfully to Production.",
            type: "deployment",
            read: false,
            time: new Date().toLocaleString(),
          },

          {
            id: 2,
            title:
              "Architect Agent Finished",
            message:
              "Project architecture generated successfully.",
            type: "agent",
            read: false,
            time: new Date().toLocaleString(),
          },

          {
            id: 3,
            title: "System Healthy",
            message:
              "All Atlas OS services are operational.",
            type: "system",
            read: true,
            time: new Date().toLocaleString(),
          },
        ];

      setNotifications(
        defaultNotifications
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "atlas-notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  const markAsRead = (
    id: number
  ) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const getIcon = (
    type: Notification["type"]
  ) => {
    switch (type) {
      case "deployment":
        return "🚀";

      case "agent":
        return "🤖";

      case "system":
        return "🖥️";

      default:
        return "🔔";
    }
  };

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Notifications
          </h1>

          <p className="mt-2 text-gray-400">
            Track Atlas OS events and alerts here.
          </p>
        </div>

        <button
          onClick={clearNotifications}
          className="rounded-lg bg-red-600 px-4 py-2 transition hover:bg-red-500"
        >
          Clear All
        </button>
      </div>

      {/* Empty State */}
      {notifications.length === 0 ? (
        <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-8 text-center text-gray-500">
          No notifications available.
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map(
            (notification) => (
              <div
                key={
                  notification.id
                }
                className={`rounded-xl border p-6 transition ${
                  notification.read
                    ? "border-gray-800 bg-[#0B0F19]"
                    : "border-blue-700 bg-blue-950/20"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-2xl">
                        {getIcon(
                          notification.type
                        )}
                      </span>

                      <h2 className="text-xl font-semibold">
                        {
                          notification.title
                        }
                      </h2>

                      {!notification.read && (
                        <span className="rounded-full bg-blue-600 px-2 py-1 text-xs">
                          NEW
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400">
                      {
                        notification.message
                      }
                    </p>

                    <p className="mt-3 text-xs text-gray-500">
                      {
                        notification.time
                      }
                    </p>
                  </div>

                  {!notification.read && (
                    <button
                      onClick={() =>
                        markAsRead(
                          notification.id
                        )
                      }
                      className="rounded-lg bg-blue-600 px-4 py-2 transition hover:bg-blue-500"
                    >
                      Mark Read
                    </button>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </main>
  );
}