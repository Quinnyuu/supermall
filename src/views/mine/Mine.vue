<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroller class="scroll-height">
      <login />
      <money />
      <div class="line"></div>
      <profile-list />
    </scroller>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Login from "./childComponents/Login";
import Money from "./childComponents/Money";
import ProfileList from "./childComponents/profileList";
import Scroller from "components/common/scroller/Scroller";

export default {
  name: "Profile",
  components: { Scroller, ProfileList, Money, Login, NavBar }
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
}

.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #eeeeee;
}

.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
}
</style>
