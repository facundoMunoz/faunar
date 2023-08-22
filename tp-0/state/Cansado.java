public class Cansado implements Estado {
    private Mascota mascota;

    public Cansado(Mascota nuevaMascota) {
        mascota = nuevaMascota;
        mascota.setLabelEstado("Cansada");
    }

    public void alimentar() {
        mascota.setMensaje("No quiere comer");
    }

    public void jugar() {
        mascota.setMensaje("No quiere jugar");
    }

    public void dormir() {
        Runnable acciones = () -> {
            mascota.setMensaje("");
            mascota.setLabelEstado("Durmiendo");
            mascota.animarDormir();
            mascota.setEstado(new Aburrido(mascota));
        };
        Thread durmiendo = new Thread(acciones);
        durmiendo.start();
    }

    public void estado() {
        mascota.setMensaje("Parece cansada");
    }
}