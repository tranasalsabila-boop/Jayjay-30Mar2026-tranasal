document.getElementById("formComment").addEventListener("submit", function(e) {
 e.preventDefault ();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;

    document.getElementById("outputMessage").innerHTML = `
            <h3>Thank You for Your Message</h3>
            <p><strong>Name:</strong>${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Comment:</strong> ${comment}</p>
    `;

    const box = document.getElementById("outputMessage");
    box.style.display = "block";
});