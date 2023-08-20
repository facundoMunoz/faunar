public class Cansado implements Estado {
    private Mascota mascota;

    public Cansado(Mascota nuevaMascota) {
        mascota = nuevaMascota;
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
            mascota.setEstado(new Aburrido(mascota));
            mascota.animarDormir();
        };
        Thread durmiendo = new Thread(acciones);
        durmiendo.start();
    }

    public void estado() {
        mascota.setMensaje("Parece cansada");
    }
}