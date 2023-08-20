public class Hambriento implements Estado {
    private Mascota mascota;

    public Hambriento(Mascota nuevaMascota) {
        mascota = nuevaMascota;

    }

    public void alimentar() {
        Runnable acciones = () -> {
            mascota.setMensaje("");
            mascota.animarComer();
            ;
        };
        Thread comiendo = new Thread(acciones);
        comiendo.start();
    }

    public void jugar() {
        mascota.setMensaje("No quiero jugar ahora");
    }

    @Override
    public void dormir() {
        mascota.setMensaje("No puedo dormir, tengo hambre");
    }

    public void estado() {
        mascota.setMensaje("Tengo hambre");
    }
}
