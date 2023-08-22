public class Hambriento implements Estado {
    private Mascota mascota;

    public Hambriento(Mascota nuevaMascota) {
        mascota = nuevaMascota;
        mascota.setLabelEstado("Hambrienta");
    }

    public void alimentar() {
        Runnable acciones = () -> {
            mascota.setMensaje("");
            mascota.setLabelEstado("Comiendo");
            mascota.animarComer();
            mascota.setEstado(new Cansado(mascota));
        };
        Thread comiendo = new Thread(acciones);
        comiendo.start();
    }

    public void jugar() {
        mascota.setMensaje("No quiere jugar");
    }

    @Override
    public void dormir() {
        mascota.setMensaje("No quiere dormir");
    }

    public void estado() {
        mascota.setMensaje("Parece hambrienta");
    }
}
