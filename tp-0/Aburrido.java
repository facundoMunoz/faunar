public class Aburrido implements Estado {

    private Mascota mascota;

    public Aburrido(Mascota nuevaMascota) {
        mascota = nuevaMascota;
    }

    @Override
    public void alimentar() {
        mascota.setMensaje("No quiere comer");
    }

    @Override
    public void jugar() {
        Runnable acciones = () -> {
            mascota.setMensaje("");
            mascota.setEstado(new Hambriento(mascota));
            mascota.animarJugar();
        };
        Thread jugando = new Thread(acciones);
        jugando.start();
    }

    @Override
    public void dormir() {
        mascota.setMensaje("No quiere dormir");
    }

    @Override
    public void estado() {
        mascota.setMensaje("Parece aburrida");
    }

}
