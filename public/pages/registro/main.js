export default() => {
    const container = document.createElement("div");

    const template = `
        <h1 class="text-profile">Preencha os campos abaixo:</h1>
        <form class="form-profile">
            <input id="name-register" type="text" placeholder="Nome *" required>
            <input id="last-name-register" type="text" placeholder="Sobrenome *" required>
            <input id="date-of-birth-register" type="date" placeholder="Data de nascimento *" required>
            <input id="email" type="email" placeholder="Email *" required>
            <input id="password" type="password" placeholder="Senha *" required>
            <input id="city-register" type="text" placeholder="Cidade *" required>
            <div class="btn-display">
                <input id="back-btn" type="button" value="Voltar">
                <input id="btn-register" type="submit">
            </div>
        </form>
    `
    container.innerHTML = template;
    return container
}


