<template>
  <!-- <h1>ROOM CHAT</h1>
  <div class="container room-chat">
    <div class="wrap">
      <h3>Users</h3>
      <div v-for="user in users" :key="user._id">{{ user?.username }}</div>
    </div>
    <div class="wrap">
      <h3>Messages</h3>
      <div class="wrap-mes">
        <ul>
          <li
            v-for="message in messages"
            :key="message._id"
            :class="{ 'my-message': message.userId === user._id }"
          >
            {{ message?.message }}
          </li>
        </ul>
      </div>
      <form action="" @submit.prevent="sendMessage">
        <input type="text" v-model="textMessage" />
        <button type="submit">Gửi</button>
      </form>
    </div>
  </div> -->
  <div class="container mx-auto">
    <div class="min-w-full border rounded lg:grid lg:grid-cols-3">
      <div class="border-r border-gray-300 lg:col-span-1">
        <div class="mx-3 my-3">
          <div class="relative text-gray-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6 text-gray-300"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input
              type="search"
              class="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
              name="search"
              placeholder="Search"
              required
            />
          </div>
        </div>

        <ul class="overflow-auto h-[32rem]">
          <h2 class="my-2 mb-2 ml-2 text-lg text-gray-600">Room Chat</h2>
          <li>
            <a
              class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
              v-for="user in users"
              :key="user._id"
            >
              <img
                class="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                alt="username"
              />
              <div class="w-full pb-2">
                <div class="flex justify-between">
                  <span class="block ml-2 font-semibold text-gray-600">{{
                    user.username
                  }}</span>
                  <span class="block ml-2 text-sm text-gray-600"
                    >25 minutes</span
                  >
                </div>
                <span class="block ml-2 text-sm text-gray-600">bye</span>
              </div>
            </a>
            <a
              class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none"
            >
              <img
                class="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
                alt="username"
              />
              <div class="w-full pb-2">
                <div class="flex justify-between">
                  <span class="block ml-2 font-semibold text-gray-600"
                    >Same</span
                  >
                  <span class="block ml-2 text-sm text-gray-600"
                    >50 minutes</span
                  >
                </div>
                <span class="block ml-2 text-sm text-gray-600">Good night</span>
              </div>
            </a>
            <a
              class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none"
            >
              <img
                class="object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                alt="username"
              />
              <div class="w-full pb-2">
                <div class="flex justify-between">
                  <span class="block ml-2 font-semibold text-gray-600"
                    >Emma</span
                  >
                  <span class="block ml-2 text-sm text-gray-600">6 hour</span>
                </div>
                <span class="block ml-2 text-sm text-gray-600"
                  >Good Morning</span
                >
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="hidden lg:col-span-2 lg:block">
        <div class="w-full">
          <div class="relative flex items-center p-3 border-b border-gray-300">
            <img
              class="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
              alt="username"
            />
            <span class="block ml-2 font-bold text-gray-600">Emma</span>
            <span
              class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"
            >
            </span>
          </div>
          <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
            <ul class="space-y-2">
              <li
                v-for="message in messages"
                :key="message._id"
                :class="[
                  'flex',
                  message.userId !== user._id ? 'justify-start' : 'justify-end',
                ]"
              >
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow"
                  :class="[message.userId === user._id ? 'bg-gray-100' : '']"
                >
                  <span class="block">{{ message?.message }}</span>
                </div>
              </li>
            </ul>
          </div>

          <div
            class="flex items-center justify-between w-full p-3 border-t border-gray-300"
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>

            <input
              type="text"
              placeholder="Message"
              class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
              name="message"
              required
              v-model="textMessage"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
            <button type="submit" @click.prevent="sendMessage">
              <svg
                class="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import socket from "@/plugins/socket";

const users = ref([]);
const messages = ref([]);
const textMessage = ref("");
const user = ref("");

const getUsers = () => {
  socket.on("listUsers", (listUsers) => {
    users.value = listUsers;
    console.log("usersList", users.value);
  });
};

const userJustConnect = () => {
  socket.on("userJustConnected", (userJust) => {
    users.value.push(userJust);
  });
};

const getMessagesRoom = () => {
  socket.on("listMessages", (listMessages) => {
    console.log("listmessae", listMessages);
    messages.value = listMessages;
  });
};

const getNewMessage = () => {
  socket.on("newMessage", (newMessage) => {
    messages.value.push(newMessage);
  });
};

const getUserSelf = () => {
  socket.on("userSelf", (self) => {
    user.value = self;
  });
};

const sendMessage = () => {
  socket.emit("sendMessage", {
    user: user.value,
    message: textMessage.value,
  });
  textMessage.value = "";
};

onMounted(() => {
  getUsers();
  userJustConnect();
  getUserSelf();
  getMessagesRoom();
  getNewMessage();
});
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
.room-chat {
  display: grid;
  grid-template-columns: 300px 900px;
}

.wrap {
  border: 1px solid #ddd;
}

.wrap-mes {
  width: 800px;
  border: 1px solid #ddd;
  margin: 10px auto;
}

.my-message {
  color: red;
}
</style>
