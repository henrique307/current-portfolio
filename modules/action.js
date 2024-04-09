export function action() {
    const actionSection = document.querySelector("section.call-to-action");
    const callToAction = actionSection.querySelector("div.action-container");
    const contactFormContainer = actionSection.querySelector("div.contact-container");
    const contactForm = actionSection.querySelector("div.contact-container form");
    const back_arrow = contactFormContainer.querySelector("span.back");
    const actionButton = callToAction.querySelector("a.action-button");
    const sendButton = contactFormContainer.querySelector("button.send")
    const agradecimento = contactFormContainer.querySelector("div.agradecimento")


    actionButton.addEventListener("click", (e) => {
        actionSection.classList.remove("call");
        actionSection.classList.add("action");
    })

    back_arrow.addEventListener("click", (e) => {
        actionSection.classList.add("call");
        actionSection.classList.remove("action");
    })

    sendButton.addEventListener("click", (e) => {
        const [nome, telefone, email, mensagem] = [
            contactFormContainer.querySelector("#nome").value,
            contactFormContainer.querySelector("#telefone").value,
            contactFormContainer.querySelector("#email").value,
            contactFormContainer.querySelector("#mensagem").value,
        ]

        e.preventDefault()

        fetch("https://portfolioapi-production.up.railway.app/telegram", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nome, telefone, email, mensagem})
        }).then((res) => {
            if(!res.ok) {
                contactFormContainer.querySelector(".error").classList.remove("invisivel") 
                return
            }

            contactForm.classList.add("invisivel") 
            actionSection.style = "height: 200px"
            agradecimento.classList.remove("invisivel")
        }).catch(e => {
            contactFormContainer.querySelector(".error").classList.remove("invisivel")
        })
    })

}
