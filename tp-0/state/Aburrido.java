public class Aburrido implements Estado {

    private Mascota mascota;

    public Aburrido(Mascota nuevaMascota) {
        mascota = nuevaMascota;
        mascota.setLabelEstado("Aburrida");
    }

    @Override
    public void alimentar() {
        mascota.setMensaje("No quiere comer");
    }

    @Override
    public void jugar() {
        Runnable acciones = () -> {
            mascota.setMensaje("");
            mascota.setLabelEstado("Jugando");
            mascota.animarJugar();
            mascota.setEstado(new Hambriento(mascota));
        };
        Thread jugando = new Thread(acciones);
        jugando.start();
    }

    @Override
    public void dormir() {
        mascota.setMensaje("No quiere dormir");
    }

}
