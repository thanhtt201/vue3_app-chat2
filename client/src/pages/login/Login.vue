<template>
  <form action="" @submit.prevent="connectSocket">
    <input type="text" placeholder="Tên đăng nhập" v-model="username" />
    <button type="submit">Đăng nhập</button>
  </form>
</template>

<script setup>
import { onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import socket from "../../plugins/socket";

const router = useRouter();

const username = ref("");
const connectSocket = () => {
  socket.connect();

  socket.emit("loginUser", username.value);
  router.push("/room-chat");
};

onUnmounted(() => {
  socket.off("loginUser");
});
</script>
