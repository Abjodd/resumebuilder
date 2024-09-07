// src/Chatbot.js
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with rizzME",
        botConversationDescription: "Your Resume Companion",
        botId: "fcd8b540-e1e2-42b5-ae74-5fc48989bf41",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "fcd8b540-e1e2-42b5-ae74-5fc48989bf41",
        webhookId: "ddf95670-252d-4611-aa67-c2cc80982240",
        lazySocket: true,
        themeName: "prism",
        botName: "rizzME",
        avatarUrl: "https://cdn3.emoji.gg/emojis/3176-yousuredog.png",
        frontendVersion: "v1",
        useSessionStorage: true,
        enableConversationDeletion: true,
        showPoweredBy: true,
        theme: "prism",
        themeColor: "#2563eb",
        allowedOrigins: []
      });
    };
    document.body.appendChild(script);
  }, []);

  return null;
};

export default Chatbot;
