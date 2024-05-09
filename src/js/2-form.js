let formData = {
    email: "",
    message: "",
}

document.addEventListener("DOMContentLoaded", function () {
    const saveData = localStorage.getItem("feedback-form-state")
    if (saveData) {
        formData = JSON.parse(saveData)
        populateForm(formData)
    }
})

function populateForm(formData) {
    const emailInput = document.querySelector('input[name="email"]')
    const messageInput = document.querySelector('textarea[name="message"]')
    emailInput.value = formData.email
    messageInput.value = formData.message
}

document.querySelector(".feedback-form").addEventListener("input", function (event) {
    const inputName = event.target.name
    const inputValue = event.target.value.trim()

    formData[inputName] = inputValue
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})


document.querySelector(".feedback-form").addEventListener("submit", function (event) {
    event.preventDefault()

    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields")
    } else {
        console.log(formData)

        localStorage.removeItem("feedback-form-state")
        formData = {email: "", message: ""}
    }
        
})