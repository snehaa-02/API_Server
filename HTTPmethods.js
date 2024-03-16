"use strict";

/*function getMethod() {
  async function getJSON() {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  getJSON();
}

export { getMethod };*/

/*function postMethod() {
  async function postJSON(data) {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const data = { name: "Snehaa S", age: 20 };
  postJSON(data);
}

export { postMethod };*/

/*function putMethodForForm() {
  async function upload(formData) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PUT",
          body: formData,
        }
      );
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');
  fileField.addEventListener("change", () => {
    console.log(
      "https://jsonplaceholder.typicode.com/posts/1",
      fileField.files
    );
    console.log(formData);
    formData.username = "abc123";
    formData.avatar = fileField.files[0];
    console.log(formData);
    upload(formData);
  });
}

export {putMethodForForm };*/

/*function putMethod() {
  async function putJSON(data) {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "PUT",
        headers: {
          "Content-Type": "text/plain",
        },
        body: data,
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const data = "Snehaa S";
  putJSON(data);
}

export { putMethod };*/

/*function patchMethod() {
  async function patchJSON(data) {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "PATCH",
        headers: {
          "Content-Type": "text/plain",
        },
        body: data,
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const data = "Snehaa S";
  patchJSON(data);
}

export { patchMethod };*/

/*function deleteMethod() {
  async function deleteJSON(data) {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "DELETE",
        headers: {
          "Content-Type": "text/plain",
        },
        body: data,
      });

      const availableUsers = await response.json();
      console.log("Success:", availableUsers);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const user = "Snehaa";
  deleteJSON(user);
}

export { deleteMethod };*/
