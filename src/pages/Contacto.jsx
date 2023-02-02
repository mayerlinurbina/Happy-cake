const Contacto = () => {
    return (
        <div className="form-container">
            <h1 className="title-form">Cuentanos ¿en que te podemos ayudar?</h1>
            <form>
                <div className="form-group">

                    <label>Correo</label>
                    <input className="input-form" type="text" placeholder="ingresa tu correo" />
                </div>
                <div className="form-group">

                    <label>Descripcion</label>
                    <input className="input-form" type="text" placeholder="ingresa una descripcion" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Contacto