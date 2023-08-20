public class Cansado implements Estado {
    private Mascota mascota;

    public Cansado(Mascota nuevaMascota) {
        mascota = nuevaMascota;
    }

    public void alimentar() {
        mascota.setMensaje("No tengo hambre en este momento");
    }

    public void jugar() {
        mascota.setMensaje("Estoy demasiado cansado para jugar");
    }

    public void dormir() {
        Runnable acciones = () -> {
            mascota.setMensaje("");
            mascota.animarDormir();
        };
        Thread durmiendo = new Thread(acciones);
        durmiendo.start();
    }

    public void estado() {
        mascota.setMensaje("Estoy cansado");
    }
}