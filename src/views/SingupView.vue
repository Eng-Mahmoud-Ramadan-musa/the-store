<template>
  <div class="con">
    <form>
      <input type="text" v-model="textName" placeholder="user name" />
      <input type="email" v-model="textEmail" placeholder="user email" />
      <input type="password" v-model="textPass" placeholder="user password" />
      <div class="d-flex justify-content-center align-items-center w-75">
        <input
          type="file"
          id="image"
          @change="handleFileSelect"
          accept="image/*"
          required
          class="border-0"
        />
        <i class="fa-solid fa-image border p-1 border-dark rounded-3"></i>
      </div>
      <button
        type="submit"
        @click="saveDataUser(textName, textEmail, textPass, this.image)"
      >
        Create User
      </button>
      <div>
        <p>password forget ?</p>
        <router-link to="/login">login</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
    };
  },
  methods: {
    saveDataUser(name, email, password, image) {
      this.$store.dispatch("saveDataUser", { name, email, password, image });
    },
    handleFileSelect(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
          const imageLocation = file.name;
          console.log("Image location:", imageLocation);
        };
        image.onerror = () => {
          console.error("Failed to load image.");
        };
        image.src = event.target.result;
        this.image = image.src;
      };

      reader.onerror = () => {
        console.error("Failed to read file.");
      };

      reader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="scss" scoped></style>
