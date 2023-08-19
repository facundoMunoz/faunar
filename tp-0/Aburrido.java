public class Aburrido implements Estado {

    private Mascota mascota;

    public Aburrido(Mascota nuevaMascota) {
        mascota = nuevaMascota;
    }

    @Override
    public void alimentar() {
        mascota.setMensaje("No parece tener hambre");
    }

    @Override
    public void jugar() {
        mascota.setMensaje("Jugando");
    }

    @Override
    public void dormir() {
        mascota.setMensaje("No parece tener sueño");
    }

    @Override
    public void estado() {
        mascota.setMensaje("Quiere jugar");
    }

    @Override
    public String getEstado() {
        return "aburrido";
    }

}
